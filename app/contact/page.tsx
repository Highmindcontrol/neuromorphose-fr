export const metadata = {
  title: "Contact",
  description:
    "Quatre portes d'entrée pour la FFPN : patients & grand public, candidats à la certification, presse & médias, partenariats institutionnels.",
};

export default function ContactPage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Quatre portes d&apos;entrée,
            <br />
            plusieurs adresses.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-texte md:text-xl">
            <strong className="text-encre">
              La FFPN répond aux sollicitations qualifiées avec attention
              et dans des délais raisonnables.
            </strong>{" "}
            Pour faciliter la circulation des demandes, nous distinguons
            quatre portes d&apos;entrée.
          </p>
        </div>
      </section>

      {/* === 4 portes === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <Porte
              titre="Patients et grand public"
              email="patients@neuromorphose.fr"
              texte="Demandes d'information sur la méthode, sur la recherche d'un praticien, sur la procédure de signalement d'un manquement, sur les ressources publiques."
            />
            <Porte
              titre="Candidats à la certification"
              email="formation@neuromorphose.fr"
              texte="Demandes d'information sur le cursus de formation, modalités d'inscription, tarifs, prérequis, financements possibles. Pour l'inscription effective au cursus, vous serez redirigé vers le portail Neuroactif Édition."
              ctaHref="https://neuroactif.com/formation"
              ctaLabel="Portail d'inscription au cursus"
            />
            <Porte
              titre="Presse et médias"
              email="presse@neuromorphose.fr"
              texte="Demandes d'interview, demandes documentaires, sollicitations de la presse économique, scientifique, culturelle, généraliste."
            />
            <Porte
              titre="Partenariats institutionnels"
              email="institutions@neuromorphose.fr"
              texte="Pouvoirs publics, ministères, ordres professionnels, fédérations professionnelles partenaires, fédérations sœurs internationales en construction, institutions universitaires et hospitalières."
            />
          </div>
        </div>
      </section>

      {/* === Signalement === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Signaler un manquement</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Adresse dédiée pour l&apos;instance disciplinaire
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Si un praticien manque à la déontologie de la FFPN, vous
            pouvez saisir l&apos;instance disciplinaire indépendante.
            Votre saisine est confidentielle. Elle est instruite avec
            rigueur et dans le respect du contradictoire.
          </p>
          <a
            href="mailto:signalement@neuromorphose.fr"
            className="mt-8 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
          >
            signalement@neuromorphose.fr
          </a>
        </div>
      </section>

      {/* === Siège social === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Siège social</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Fédération Française des Praticiens de la Neuromorphose®
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Association loi 1901 à vocation ordinale. Adresse complète
            communiquée après dépôt officiel des statuts en préfecture,
            prévu en septembre 2026.
          </p>
        </div>
      </section>
    </article>
  );
}

function Porte({
  titre,
  email,
  texte,
  ctaHref,
  ctaLabel,
}: {
  titre: string;
  email: string;
  texte: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <a
        href={`mailto:${email}`}
        className="mt-2 inline-block text-sm text-bleu-federation hover:text-bleu-clair"
      >
        {email}
      </a>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{texte}</p>
      {ctaHref && ctaLabel && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-encre hover:text-bleu-federation"
        >
          {ctaLabel} →
        </a>
      )}
    </div>
  );
}
