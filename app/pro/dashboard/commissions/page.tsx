export const metadata = { title: "Suivi de commission" };

const ADHESIONS = [
  { date: "8 juin", contact: "Thomas Brodin", montant: "1 200 €", commission: "180 €", statut: "Acquise" },
  { date: "2 juin", contact: "Cabinet Yvelines (3 prat.)", montant: "3 600 €", commission: "540 €", statut: "Acquise" },
  { date: "28 mai", contact: "Sophie Levrieux", montant: "1 200 €", commission: "180 €", statut: "En cours" },
  { date: "22 mai", contact: "École hypnose Lyon", montant: "—", commission: "—", statut: "À venir" },
];

export default function CommissionsPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <p className="meta text-bleu-federation">Outil 06</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-encre md:text-5xl">
        Suivi de commission.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gris-texte md:text-lg">
        Visualisation en temps réel de vos adhésions générées,
        commissions acquises et à venir. Téléchargement de votre relevé
        mensuel en un clic.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gris-trait bg-blanc-casse p-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gris-texte">
            Commissions acquises (mois)
          </p>
          <p className="mt-2 text-3xl font-semibold tabular-nums tracking-[-0.02em] text-encre">
            720 €
          </p>
          <p className="mt-1 text-xs text-gris-texte">Sur 2 adhésions confirmées</p>
        </div>
        <div className="rounded-xl border border-gris-trait bg-blanc-casse p-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gris-texte">
            Pipeline (en cours)
          </p>
          <p className="mt-2 text-3xl font-semibold tabular-nums tracking-[-0.02em] text-bleu-federation">
            ~ 1 800 €
          </p>
          <p className="mt-1 text-xs text-gris-texte">Sur 4 dossiers actifs</p>
        </div>
        <div className="rounded-xl border border-gris-trait bg-blanc-casse p-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gris-texte">
            Cumul depuis le début
          </p>
          <p className="mt-2 text-3xl font-semibold tabular-nums tracking-[-0.02em] text-encre">
            4 320 €
          </p>
          <p className="mt-1 text-xs text-gris-texte">12 adhésions générées</p>
        </div>
      </div>

      <div className="mt-12">
        <button
          type="button"
          className="rounded-md border border-encre bg-encre px-4 py-2 text-sm font-semibold text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair"
        >
          ↓ Télécharger mon relevé mensuel
        </button>
      </div>

      <h2 className="mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-gris-texte">
        Détail des adhésions récentes
      </h2>
      <div className="mt-6 overflow-hidden rounded-xl border border-gris-trait bg-blanc-casse">
        <table className="w-full text-left text-sm">
          <thead className="bg-gris-fond text-[10px] uppercase tracking-[0.14em] text-gris-texte">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Contact</th>
              <th className="px-4 py-3 font-semibold">Montant adhésion</th>
              <th className="px-4 py-3 font-semibold">Commission</th>
              <th className="px-4 py-3 font-semibold">Statut</th>
            </tr>
          </thead>
          <tbody>
            {ADHESIONS.map((a, i) => (
              <tr key={i} className="border-t border-gris-trait">
                <td className="px-4 py-4 text-gris-texte">{a.date}</td>
                <td className="px-4 py-4 font-medium text-encre">{a.contact}</td>
                <td className="px-4 py-4 tabular-nums text-gris-texte">{a.montant}</td>
                <td className="px-4 py-4 tabular-nums font-semibold text-encre">{a.commission}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    a.statut === "Acquise"
                      ? "bg-green-100 text-green-800"
                      : a.statut === "En cours"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                  }`}>
                    {a.statut}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs italic text-gris-texte">
        Données d&apos;exemple — le suivi sera connecté au Stripe FFPN dès
        l&apos;ouverture des paiements adhésion.
      </p>
    </article>
  );
}
