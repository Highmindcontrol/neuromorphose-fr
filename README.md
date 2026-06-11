# neuromorphose.fr — Site officiel de la FFPN

Site institutionnel de la **Fédération Française des Praticiens de la Neuromorphose®** (FFPN), association loi 1901 née en 2026 et déployée sur 20 pays à 5 ans.

## Stack

- **Next.js 16** (App Router) + **TypeScript** strict
- **Tailwind CSS 4** (tokens @theme)
- **Supabase** (auth + read-only sur annuaire praticiens, partagé avec `neuroactif-platform`)
- Hébergement **Vercel** (production sur `neuromorphose.fr`)

## Structure des pages

| Route | Description |
|---|---|
| `/` | Accueil — hero, chiffres clés, 3 piliers, CTA adhésion |
| `/mission` | Mission & valeurs de la fédération |
| `/recherche` | Recherche scientifique — 5 axes (son/musique/cerveau, ressentis, futurisation, mémoire, posture) |
| `/annuaire` | Annuaire public des praticiens certifiés (à ouvrir en septembre 2026) |
| `/adherer` | Parcours d'adhésion + tarifs (offre fondateur 500 premiers) |
| `/statuts` | Statuts & gouvernance, indépendance financière vs sociétés commerciales |
| `/actualites` | Actualités & événements |
| `/contact` | Contacts par sujet (adhésion, recherche, presse, représentants) |
| `/pro` | Landing de l'espace pro représentants |
| `/pro/connexion` | Page de connexion (auth Supabase à brancher) |

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur `http://localhost:3000`.

## Mise en production sur Vercel

1. Créer un nouveau projet Vercel pointant sur ce repo GitHub
2. Branche : `main`
3. Variables d'env à configurer (quand le module auth sera branché) :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Domaine `neuromorphose.fr` à pointer sur Vercel (CNAME `cname.vercel-dns.com`)

## À faire ensuite

- [ ] Brancher Supabase pour annuaire praticiens (lecture seule sur la table existante)
- [ ] Implémenter module auth Supabase pour `/pro/connexion`
- [ ] Construire le dashboard représentants : prospects, agenda, comptes rendus, visio directe, bibliothèque commerciale, suivi commission
- [ ] Rédiger les statuts officiels et les publier sur `/statuts`
- [ ] Brancher le formulaire de contact sur un service d'envoi email (Resend, Loops)
- [ ] Système de newsletter (à choisir : Loops, Beehiiv, EmailOctopus)

## Source de vérité

La FFPN est une **association loi 1901 distincte**, dont les comptes ne sont **JAMAIS consolidés** avec ceux des sociétés commerciales du groupe Ataraxis (cf. `~/.claude/projects/.../memory/project_ffpn_non_consolidee.md`).
