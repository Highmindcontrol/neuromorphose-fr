-- ========================================================================
-- FFPN — Schéma de l'espace pro délégués (à appliquer sur le projet
-- Supabase de Neuroactif, partagé avec la FFPN au sein du groupe).
--
-- Objectif :
--   1. Une table `ffpn_delegues` reliée à auth.users pour chaque délégué
--      régional de la FFPN.
--   2. Une table `ffpn_prospects` pour la base de prospection portée par
--      chaque délégué (avec RLS : un délégué ne voit que ses prospects).
--   3. Une table `ffpn_rendezvous` pour son agenda.
--   4. Une table `ffpn_comptes_rendus` pour ses comptes rendus de RDV.
--   5. Une table `ffpn_adhesions` pour traçabilité des conversions.
--   6. RLS partout : chaque délégué ne voit que ses propres données.
--      La direction (rôle admin du projet) voit tout via la Forteresse.
-- ========================================================================

-- ─── Table principale : un délégué = un compte auth.users
create table if not exists public.ffpn_delegues (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  prenom text,
  nom text,
  zone text,                       -- zone géographique d'intervention (texte libre)
  telephone text,
  actif boolean not null default true,
  cree_at timestamptz not null default now(),
  maj_at timestamptz not null default now()
);

-- ─── Table prospects
create table if not exists public.ffpn_prospects (
  id uuid primary key default gen_random_uuid(),
  delegue_id uuid not null references public.ffpn_delegues(id) on delete cascade,
  nom_contact text not null,
  role text,                       -- "Psychiatre", "Cabinet de 4", "École de formation"
  ville text,
  email text,
  telephone text,
  statut text not null default 'a-appeler' check (statut in ('a-appeler', 'en-cours', 'a-relancer', 'conclu', 'perdu')),
  priorite text default 'moyenne' check (priorite in ('haute', 'moyenne', 'basse')),
  notes text,
  cree_at timestamptz not null default now(),
  maj_at timestamptz not null default now()
);

create index if not exists idx_prospects_delegue on public.ffpn_prospects(delegue_id);
create index if not exists idx_prospects_statut on public.ffpn_prospects(statut);

-- ─── Table rendez-vous
create table if not exists public.ffpn_rendezvous (
  id uuid primary key default gen_random_uuid(),
  delegue_id uuid not null references public.ffpn_delegues(id) on delete cascade,
  prospect_id uuid references public.ffpn_prospects(id) on delete set null,
  titre text not null,
  debut_at timestamptz not null,
  duree_min int not null default 60,
  mode text not null default 'visio' check (mode in ('visio', 'telephone', 'presentiel')),
  lieu text,                       -- si présentiel
  briefing text,                   -- préparation automatique avant le RDV
  cree_at timestamptz not null default now()
);

create index if not exists idx_rdv_delegue on public.ffpn_rendezvous(delegue_id);
create index if not exists idx_rdv_debut on public.ffpn_rendezvous(debut_at);

-- ─── Table comptes rendus
create table if not exists public.ffpn_comptes_rendus (
  id uuid primary key default gen_random_uuid(),
  delegue_id uuid not null references public.ffpn_delegues(id) on delete cascade,
  prospect_id uuid references public.ffpn_prospects(id) on delete set null,
  rendezvous_id uuid references public.ffpn_rendezvous(id) on delete set null,
  date_at date not null default current_date,
  decision text not null,          -- ce qui a été décidé / point clé
  prochaine_etape text,            -- action concrète à mener
  cree_at timestamptz not null default now()
);

create index if not exists idx_cr_delegue on public.ffpn_comptes_rendus(delegue_id);

-- ─── Table adhésions générées (traçabilité conversions)
create table if not exists public.ffpn_adhesions (
  id uuid primary key default gen_random_uuid(),
  delegue_id uuid references public.ffpn_delegues(id) on delete set null,
  prospect_id uuid references public.ffpn_prospects(id) on delete set null,
  contact_nom text not null,       -- copie nom au moment de l'adhésion (immutabilité)
  date_at date not null default current_date,
  montant_eur numeric(10,2),
  commission_eur numeric(10,2) default 0,
  statut text not null default 'a-venir' check (statut in ('a-venir', 'en-cours', 'acquise', 'annulee')),
  cree_at timestamptz not null default now()
);

create index if not exists idx_adhesions_delegue on public.ffpn_adhesions(delegue_id);
create index if not exists idx_adhesions_date on public.ffpn_adhesions(date_at);

-- ========================================================================
-- Row Level Security (RLS) — chaque délégué ne voit que ses propres données.
-- ========================================================================

alter table public.ffpn_delegues enable row level security;
alter table public.ffpn_prospects enable row level security;
alter table public.ffpn_rendezvous enable row level security;
alter table public.ffpn_comptes_rendus enable row level security;
alter table public.ffpn_adhesions enable row level security;

-- ─── ffpn_delegues : un délégué peut lire/MAJ son propre profil
create policy "delegue lit son profil"
  on public.ffpn_delegues for select
  using (auth.uid() = id);

create policy "delegue maj son profil"
  on public.ffpn_delegues for update
  using (auth.uid() = id);

-- ─── ffpn_prospects : isolation par délégué
create policy "delegue lit ses prospects"
  on public.ffpn_prospects for select
  using (auth.uid() = delegue_id);

create policy "delegue crud ses prospects"
  on public.ffpn_prospects for all
  using (auth.uid() = delegue_id)
  with check (auth.uid() = delegue_id);

-- ─── ffpn_rendezvous : isolation par délégué
create policy "delegue crud ses rdv"
  on public.ffpn_rendezvous for all
  using (auth.uid() = delegue_id)
  with check (auth.uid() = delegue_id);

-- ─── ffpn_comptes_rendus : isolation par délégué
create policy "delegue crud ses comptes rendus"
  on public.ffpn_comptes_rendus for all
  using (auth.uid() = delegue_id)
  with check (auth.uid() = delegue_id);

-- ─── ffpn_adhesions : isolation par délégué (lecture seule pour le délégué,
--      écriture réservée au service_role / direction qui valide les conversions)
create policy "delegue lit ses adhesions"
  on public.ffpn_adhesions for select
  using (auth.uid() = delegue_id);

-- ========================================================================
-- Note pour la Forteresse Ataraxis :
--
-- La direction du groupe accédera aux données de TOUS les délégués via le
-- service_role key (qui bypasse RLS) côté serveur admin. Ne JAMAIS exposer
-- cette clé côté client. Toutes les requêtes "vue agrégée" de la Forteresse
-- doivent passer par un Server Component ou une route API protégée par
-- l'auth admin.
-- ========================================================================
