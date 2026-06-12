import Link from "next/link";

export default function AccueilPage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">
            Fédération naissante · Ouverture septembre 2026
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-6xl">
            Fédérer et accompagner les praticiens de la Neuromorphose®.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gris-texte md:text-xl">
            La FFPN réunit, accompagne et sert les professionnels de
            l&apos;accompagnement formés à la Neuromorphose®. Elle porte
            la recherche scientifique sur l&apos;interaction des formes
            géométriques avec le cerveau, ainsi que l&apos;incidence des
            sons sur les perceptions et ressentis émotionnels. Elle a
            pour vocation de promouvoir et développer la pratique en
            France et d&apos;orienter et de protéger patients et
            praticiens.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/annuaire"
              className="rounded-full border border-bleu-federation bg-bleu-federation px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
            >
              Trouver un praticien certifié
            </Link>
            <Link
              href="/devenir-praticien"
              className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
            >
              Adhérer à la fédération
            </Link>
          </div>
        </div>
      </section>

      {/* === Ambition 5 ans (remonté tout en haut sous le hero) === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <p className="meta mb-6 text-bleu-federation">Ambition 5 ans</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Chiffre nombre="20" unite="pays" libelle="Déploiement international visé d'ici 2031 via les fédérations sœurs" />
            <Chiffre nombre="15 000" unite="praticiens" libelle="Objectif d'adhésions à 5 ans sur les 20 pays" />
            <Chiffre nombre="5" unite="axes de recherche" libelle="Géométrie & neurosciences, ancrage et futurisation, perception et émotion, mémoire, procrastination" />
            <Chiffre nombre="Sept. 2026" unite="" libelle="Ouverture officielle des adhésions" />
          </div>
        </div>
      </section>

      {/* === Trois portes d'entrée === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-gris-texte">Trois portes d&apos;entrée</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Porte
              titre="Trouver un praticien certifié"
              texte="Près de chez vous, dans votre langue, pour votre besoin. Accès à l'annuaire public de la FFPN — tous les praticiens listés sont à jour de leur inscription au Tableau."
              href="/annuaire"
              cta="Annuaire des praticiens"
            />
            <Porte
              titre="Devenir praticien Neuromorphose®"
              texte="Présentation du cursus de formation certifiante en 14 modules, pour les professionnels expérimentés de l'accompagnement humain."
              href="/devenir-praticien"
              cta="Découvrir le cursus"
            />
            <Porte
              titre="Comprendre la méthode"
              texte="Présentation accessible de la Neuromorphose®, ses lignées scientifiques, son protocole en 7 temps, ses garanties éthiques."
              href="/methode"
              cta="Lire la méthode"
            />
          </div>
        </div>
      </section>

      {/* === Triple posture (signature) === */}
      <section className="border-b border-gris-trait bg-encre">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24">
          <p className="meta text-blanc-casse/60">Triple posture du praticien</p>
          <div className="mt-8 space-y-4 text-2xl leading-snug tracking-[-0.015em] text-blanc-casse md:text-3xl">
            <p>
              <span className="text-bleu-clair">Je prends soin,</span> mais je ne soigne pas.
            </p>
            <p>
              <span className="text-bleu-clair">J&apos;éclaire,</span> mais je ne diagnostique pas.
            </p>
            <p>
              <span className="text-bleu-clair">J&apos;accompagne,</span> mais je ne prescris pas.
            </p>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-blanc-casse/70">
            Cette triple posture est l&apos;engagement public de tout
            praticien certifié par la FFPN qui n&apos;est pas
            professionnel de santé. En effet, certains praticiens ne
            détiennent pas le titre de professionnel de santé, c&apos;est
            pour cette raison qu&apos;ils n&apos;ont ni le droit de
            diagnostiquer ni le droit de prescrire. En revanche,
            l&apos;utilisation des outils de la Neuromorphose® est tout
            à fait adaptée à leur pratique. Elle protège la personne
            accompagnée. Elle distingue la méthode des dérives qu&apos;on
            rencontre parfois dans le champ des thérapies non
            conventionnelles.
          </p>
        </div>
      </section>

      {/* === Appel adhésion === */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="rounded-sm border border-gris-trait bg-gris-fond p-10 md:p-14">
            <p className="meta text-bleu-federation">
              Ouverture des adhésions · septembre 2026
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
              Devenir membre fondateur de la FFPN
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gris-texte md:text-lg">
              Les premières adhésions ouvrent en septembre 2026 et donnent
              accès au statut de <strong className="text-encre">membre
              fondateur</strong> — places limitées dans chaque pays,
              conditions d&apos;engagement spécifiques. Les praticiens
              fondateurs accompagneront la rédaction définitive des
              statuts, du Pacte de Véracité et du Code de déontologie.
            </p>
            <Link
              href="/devenir-praticien"
              className="mt-8 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
            >
              Découvrir le cursus de formation
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Chiffre({
  nombre,
  unite,
  libelle,
}: {
  nombre: string;
  unite: string;
  libelle: string;
}) {
  return (
    <div>
      <p className="text-4xl font-semibold tracking-[-0.02em] text-encre md:text-5xl">
        {nombre}
      </p>
      {unite && (
        <p className="mt-1 text-sm uppercase tracking-wider text-bleu-federation">
          {unite}
        </p>
      )}
      <p className="mt-2 text-xs leading-relaxed text-gris-texte">{libelle}</p>
    </div>
  );
}

function Porte({
  titre,
  texte,
  href,
  cta,
}: {
  titre: string;
  texte: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-sm border border-gris-trait bg-blanc-casse p-8 transition-all hover:-translate-y-0.5 hover:border-bleu-federation"
    >
      <h3 className="text-xl font-semibold tracking-[-0.01em] text-encre">
        {titre}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gris-texte">
        {texte}
      </p>
      <span className="mt-6 text-sm font-medium text-bleu-federation group-hover:underline">
        {cta} →
      </span>
    </Link>
  );
}
