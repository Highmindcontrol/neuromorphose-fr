export const metadata = { title: "Prospects" };

const PROSPECTS_DEMO = [
  { nom: "Dr Aline Marceau", role: "Psychiatre", ville: "Lyon (69)", statut: "À appeler", priorite: "haute" },
  { nom: "Cabinet ostéopathie Saint-Marc", role: "Cabinet de 4", ville: "Bordeaux (33)", statut: "En cours", priorite: "moyenne" },
  { nom: "École de sophrologie Caycédienne Rhône-Alpes", role: "École de formation", ville: "Grenoble (38)", statut: "À relancer", priorite: "haute" },
  { nom: "Thomas Brodin", role: "Hypnothérapeute", ville: "Nantes (44)", statut: "Conclu", priorite: "—" },
  { nom: "Centre médico-psychologique Vauban", role: "Institution", ville: "Lille (59)", statut: "À appeler", priorite: "haute" },
];

const COULEURS_STATUT: Record<string, string> = {
  "À appeler": "bg-orange-100 text-orange-800",
  "En cours": "bg-yellow-100 text-yellow-800",
  "À relancer": "bg-blue-100 text-blue-800",
  Conclu: "bg-green-100 text-green-800",
};

export default function ProspectsPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <p className="meta text-bleu-federation">Outil 01</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-encre md:text-5xl">
        Tableau de bord prospects.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gris-texte md:text-lg">
        Liste des praticiens et écoles à approcher dans votre zone,
        statut de chaque contact et priorisation hebdomadaire. Les
        contacts sont remontés automatiquement depuis la base FFPN, à
        compléter manuellement après chaque échange.
      </p>

      <div className="mt-12 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-md border border-encre bg-encre px-4 py-2 text-sm font-semibold text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair"
        >
          + Ajouter un prospect
        </button>
        <button
          type="button"
          className="rounded-md border border-gris-trait bg-blanc-casse px-4 py-2 text-sm text-encre transition-colors hover:border-bleu-federation hover:text-bleu-federation"
        >
          Importer un CSV
        </button>
        <button
          type="button"
          className="rounded-md border border-gris-trait bg-blanc-casse px-4 py-2 text-sm text-encre transition-colors hover:border-bleu-federation hover:text-bleu-federation"
        >
          Exporter
        </button>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-gris-trait bg-blanc-casse">
        <table className="w-full text-left text-sm">
          <thead className="bg-gris-fond text-[10px] uppercase tracking-[0.14em] text-gris-texte">
            <tr>
              <th className="px-4 py-3 font-semibold">Contact</th>
              <th className="px-4 py-3 font-semibold">Rôle</th>
              <th className="px-4 py-3 font-semibold">Ville</th>
              <th className="px-4 py-3 font-semibold">Statut</th>
              <th className="px-4 py-3 font-semibold">Priorité</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {PROSPECTS_DEMO.map((p, i) => (
              <tr key={i} className="border-t border-gris-trait transition-colors hover:bg-gris-fond/50">
                <td className="px-4 py-4 font-medium text-encre">{p.nom}</td>
                <td className="px-4 py-4 text-gris-texte">{p.role}</td>
                <td className="px-4 py-4 text-gris-texte">{p.ville}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${COULEURS_STATUT[p.statut] ?? "bg-gris-fond text-gris-texte"}`}>
                    {p.statut}
                  </span>
                </td>
                <td className="px-4 py-4 text-gris-texte capitalize">{p.priorite}</td>
                <td className="px-4 py-4 text-right">
                  <button type="button" className="text-xs text-bleu-federation hover:text-bleu-clair">
                    Ouvrir →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs italic text-gris-texte">
        Données d&apos;exemple — la base prospects sera connectée à Supabase
        au branchement de l&apos;auth multi-délégués.
      </p>
    </article>
  );
}
