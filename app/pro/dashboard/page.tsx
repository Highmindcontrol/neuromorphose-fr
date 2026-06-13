import Link from "next/link";

export const metadata = {
  title: "Tableau de bord",
};

const OUTILS = [
  {
    href: "/pro/dashboard/prospects",
    titre: "Tableau de bord prospects",
    description:
      "Liste des praticiens et écoles à approcher dans votre zone, statut de chaque contact (à appeler, en cours, conclu, à relancer), priorisation hebdomadaire.",
  },
  {
    href: "/pro/dashboard/agenda",
    titre: "Agenda & rendez-vous",
    description:
      "Vos rendez-vous physiques et en visio, synchronisés avec votre Google Calendar. Préparation automatique de fiche briefing avant chaque rendez-vous.",
  },
  {
    href: "/pro/dashboard/comptes-rendus",
    titre: "Compte rendu de rendez-vous",
    description:
      "Saisie rapide post-rendez-vous : décisions, actions, prochaine étape. Tout est archivé et remonté à la direction pour suivi du pipeline.",
  },
  {
    href: "/pro/dashboard/visio",
    titre: "Visio directe avec la direction",
    description:
      "Bouton « Visio » direct vers François pour un débrief rapide, une validation ou une question stratégique — sans passer par un calendrier.",
  },
  {
    href: "/pro/dashboard/bibliotheque",
    titre: "Bibliothèque commerciale",
    description:
      "Présentations, argumentaires, FAQ, témoignages, à jour en permanence. Versions selon le profil cible : école de formation, praticien individuel, institution.",
  },
  {
    href: "/pro/dashboard/commissions",
    titre: "Suivi de commission",
    description:
      "Visualisation en temps réel de vos adhésions générées, commissions acquises et à venir. Téléchargement de votre relevé mensuel.",
  },
];

export default function DashboardPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <p className="meta text-bleu-federation">Tableau de bord</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-encre md:text-5xl">
        Votre poste de travail.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-gris-texte md:text-lg">
        Tous les outils du représentant régional FFPN, centralisés.
        Prospection, agenda, comptes rendus, bibliothèque commerciale,
        suivi de commission — tout part d&apos;ici.
      </p>

      {/* Indicateurs de pilotage rapide */}
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        <Indicateur valeur="—" libelle="Prospects actifs" />
        <Indicateur valeur="—" libelle="RDV cette semaine" />
        <Indicateur valeur="—" libelle="Adhésions générées" />
        <Indicateur valeur="—" libelle="Commission en cours" />
      </div>

      {/* Grille d'outils */}
      <h2 className="mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-gris-texte">
        Vos outils
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {OUTILS.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className="group rounded-xl border border-gris-trait bg-blanc-casse p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-bleu-federation/40 hover:shadow-[0_10px_30px_-10px_rgba(29,78,216,0.15)]"
          >
            <h3 className="text-lg font-semibold text-encre group-hover:text-bleu-federation">
              {o.titre}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gris-texte">
              {o.description}
            </p>
            <p className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-bleu-federation">
              Ouvrir <span aria-hidden>→</span>
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}

function Indicateur({
  valeur,
  libelle,
}: {
  valeur: string;
  libelle: string;
}) {
  return (
    <div className="rounded-xl border border-gris-trait bg-blanc-casse p-5">
      <p className="text-[10px] uppercase tracking-[0.16em] text-gris-texte">
        {libelle}
      </p>
      <p className="mt-2 text-3xl font-semibold tabular-nums tracking-[-0.02em] text-encre">
        {valeur}
      </p>
    </div>
  );
}
