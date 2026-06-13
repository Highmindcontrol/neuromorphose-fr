export const metadata = { title: "Comptes rendus" };

const COMPTES_RENDUS_DEMO = [
  {
    date: "12 juin",
    contact: "Dr Aline Marceau",
    decision: "Intéressée par la formation, demande à recevoir le dossier complet par email",
    prochaineEtape: "Envoyer dossier + rappel dans 7 jours",
  },
  {
    date: "10 juin",
    contact: "Cabinet ostéopathie Saint-Marc",
    decision: "Quatre praticiens du cabinet souhaitent suivre la formation en groupe — discuter d'un tarif cabinet",
    prochaineEtape: "Préparer offre cabinet 4 praticiens, RDV visio mardi prochain",
  },
  {
    date: "8 juin",
    contact: "École sophrologie Caycédienne Rhône-Alpes",
    decision: "École prête à intégrer la formation FFPN comme module optionnel — réunion avec la direction prévue",
    prochaineEtape: "Confirmer date réunion direction école, préparer dossier institutionnel",
  },
];

export default function ComptesRendusPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <p className="meta text-bleu-federation">Outil 03</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-encre md:text-5xl">
        Comptes rendus de rendez-vous.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gris-texte md:text-lg">
        Saisie rapide post-rendez-vous : décisions prises, actions à
        mener, prochaine étape. Chaque compte rendu est archivé et
        remonté automatiquement à la direction pour suivi du pipeline.
      </p>

      <div className="mt-12">
        <button
          type="button"
          className="rounded-md border border-encre bg-encre px-4 py-2 text-sm font-semibold text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair"
        >
          + Nouveau compte rendu
        </button>
      </div>

      <div className="mt-10 space-y-5">
        {COMPTES_RENDUS_DEMO.map((cr, i) => (
          <article key={i} className="rounded-xl border border-gris-trait bg-blanc-casse p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-gris-trait pb-4">
              <p className="text-base font-semibold text-encre">{cr.contact}</p>
              <p className="text-xs uppercase tracking-wider text-gris-texte">{cr.date}</p>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-gris-texte">Décision / point clé</p>
                <p className="mt-1 text-sm leading-relaxed text-encre">{cr.decision}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-gris-texte">Prochaine étape</p>
                <p className="mt-1 text-sm leading-relaxed text-bleu-federation">{cr.prochaineEtape}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs italic text-gris-texte">
        Données d&apos;exemple — la base sera branchée à Supabase pour
        un archivage durable et remonté direction en temps réel.
      </p>
    </article>
  );
}
