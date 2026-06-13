export const metadata = { title: "Bibliothèque commerciale" };

const RESSOURCES = [
  {
    titre: "Présentation FFPN — version courte (10 slides)",
    type: "PDF · 4,2 Mo",
    cible: "Pour tous profils",
    badge: "Essentiel",
  },
  {
    titre: "Présentation FFPN — version longue (45 slides)",
    type: "PDF · 18 Mo",
    cible: "Pour écoles et institutions",
    badge: "Essentiel",
  },
  {
    titre: "Argumentaire — praticien libéral individuel",
    type: "PDF · 2,1 Mo",
    cible: "Médecins, kinés, ostéos, psy, sophro",
  },
  {
    titre: "Argumentaire — école de formation",
    type: "PDF · 2,8 Mo",
    cible: "Écoles sophro, hypno, EMDR, ACT",
  },
  {
    titre: "Argumentaire — institution (CMP, EHPAD, hôpital)",
    type: "PDF · 3,5 Mo",
    cible: "Services hospitaliers et médico-sociaux",
    badge: "Nouveau",
  },
  {
    titre: "FAQ commerciale — 30 questions / 30 réponses",
    type: "PDF · 1,3 Mo",
    cible: "Référence à garder ouverte",
  },
  {
    titre: "Témoignages praticiens fondateurs (vidéo)",
    type: "MP4 · 120 Mo",
    cible: "À diffuser en RDV présentiel",
  },
  {
    titre: "Grille tarifaire formation FFPN — Membre Fondateur",
    type: "PDF · 0,5 Mo",
    cible: "Confidentiel — usage interne FFPN",
    badge: "Confidentiel",
  },
];

export default function BibliothequePage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <p className="meta text-bleu-federation">Outil 05</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-encre md:text-5xl">
        Bibliothèque commerciale.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gris-texte md:text-lg">
        Présentations, argumentaires, FAQ, témoignages — tout est à jour
        en permanence et organisé selon le profil cible. Téléchargez
        avant un rendez-vous, partagez par email après.
      </p>

      <div className="mt-12 flex flex-wrap gap-2">
        <button type="button" className="rounded-full border border-encre bg-encre px-4 py-1.5 text-xs font-semibold text-blanc-casse">
          Tous les profils
        </button>
        <button type="button" className="rounded-full border border-gris-trait bg-blanc-casse px-4 py-1.5 text-xs text-encre hover:border-bleu-federation hover:text-bleu-federation">
          Praticien libéral
        </button>
        <button type="button" className="rounded-full border border-gris-trait bg-blanc-casse px-4 py-1.5 text-xs text-encre hover:border-bleu-federation hover:text-bleu-federation">
          École de formation
        </button>
        <button type="button" className="rounded-full border border-gris-trait bg-blanc-casse px-4 py-1.5 text-xs text-encre hover:border-bleu-federation hover:text-bleu-federation">
          Institution
        </button>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {RESSOURCES.map((r, i) => (
          <article key={i} className="rounded-xl border border-gris-trait bg-blanc-casse p-5 transition-colors hover:border-bleu-federation/40">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-encre">{r.titre}</p>
              {r.badge && (
                <span className={`inline-flex flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  r.badge === "Confidentiel"
                    ? "bg-red-100 text-red-700"
                    : r.badge === "Nouveau"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                }`}>
                  {r.badge}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-gris-texte">{r.type}</p>
            <p className="mt-1 text-xs italic text-gris-texte">{r.cible}</p>
            <div className="mt-4 flex gap-2 border-t border-gris-trait pt-3">
              <button type="button" className="text-xs font-medium text-bleu-federation hover:text-bleu-clair">
                ↓ Télécharger
              </button>
              <span className="text-xs text-gris-trait">·</span>
              <button type="button" className="text-xs font-medium text-bleu-federation hover:text-bleu-clair">
                Partager par email
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs italic text-gris-texte">
        Données d&apos;exemple — les documents seront stockés sur l&apos;espace
        Supabase Storage de la fédération.
      </p>
    </article>
  );
}
