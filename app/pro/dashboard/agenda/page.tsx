export const metadata = { title: "Agenda" };

const RDV_DEMO = [
  { jour: "Lun. 16 juin", heure: "10h00", titre: "Appel découverte — Dr Aline Marceau", mode: "Téléphone" },
  { jour: "Lun. 16 juin", heure: "14h30", titre: "Visio — Cabinet ostéopathie Saint-Marc", mode: "Visio" },
  { jour: "Mar. 17 juin", heure: "09h00", titre: "RDV cabinet — École sophrologie RA", mode: "Présentiel · Grenoble" },
  { jour: "Mer. 18 juin", heure: "11h00", titre: "Suivi — Thomas Brodin (signature)", mode: "Visio" },
  { jour: "Jeu. 19 juin", heure: "16h00", titre: "Première rencontre — CMP Vauban", mode: "Visio" },
];

export default function AgendaPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <p className="meta text-bleu-federation">Outil 02</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-encre md:text-5xl">
        Agenda &amp; rendez-vous.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gris-texte md:text-lg">
        Vos rendez-vous physiques et en visio, synchronisés avec votre
        Google Calendar. Une fiche briefing est préparée automatiquement
        avant chaque rendez-vous à partir des données du prospect.
      </p>

      <div className="mt-12 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-md border border-encre bg-encre px-4 py-2 text-sm font-semibold text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair"
        >
          + Nouveau rendez-vous
        </button>
        <button
          type="button"
          className="rounded-md border border-gris-trait bg-blanc-casse px-4 py-2 text-sm text-encre transition-colors hover:border-bleu-federation hover:text-bleu-federation"
        >
          Connecter Google Calendar
        </button>
      </div>

      <div className="mt-10 space-y-4">
        {RDV_DEMO.map((r, i) => (
          <article key={i} className="flex items-center gap-6 rounded-xl border border-gris-trait bg-blanc-casse p-5 transition-colors hover:border-bleu-federation/40">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs uppercase tracking-wider text-gris-texte">{r.jour}</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-encre">{r.heure}</p>
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-encre">{r.titre}</p>
              <p className="mt-1 text-xs text-gris-texte">{r.mode}</p>
            </div>
            <button type="button" className="text-xs font-medium uppercase tracking-wider text-bleu-federation hover:text-bleu-clair">
              Briefing →
            </button>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs italic text-gris-texte">
        Données d&apos;exemple — la synchronisation Google Calendar sera
        branchée au moment de l&apos;ouverture du réseau de représentants.
      </p>
    </article>
  );
}
