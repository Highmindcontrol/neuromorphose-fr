export const metadata = {
  title: "Trouver un praticien",
  description:
    "L'annuaire public de la FFPN rassemble tous les praticiens Neuromorphose® certifiés en exercice. Recherche par zone, langue, mode clinique.",
};

export default function AnnuairePage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">Trouver un praticien certifié</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Près de chez vous,
            <br />
            dans votre langue,
            <br />
            pour votre besoin.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-texte md:text-xl">
            L&apos;annuaire public de la FFPN rassemble tous les
            praticiens Neuromorphose® certifiés en exercice. Chaque fiche
            présente le praticien, son cabinet, ses langues d&apos;exercice,
            ses modes cliniques pratiqués, et ses éventuelles supervisions
            de niveau spécialisé.
          </p>
          <p className="mt-6 text-base leading-relaxed text-gris-texte">
            <strong className="text-encre">
              Tous les praticiens listés ici sont actuellement à jour de
              leur inscription au Tableau de la FFPN.
            </strong>{" "}
            Tout praticien sanctionné ou radié est immédiatement retiré
            de l&apos;annuaire public. Vous pouvez donc consulter cette
            liste avec la confiance d&apos;avoir affaire à un praticien
            actuellement habilité à exercer.
          </p>
        </div>
      </section>

      {/* === Placeholder annuaire === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <div className="rounded-sm border border-dashed border-gris-trait bg-blanc-casse p-10 text-center">
            <p className="meta text-bleu-federation">Ouverture septembre 2026</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-encre md:text-3xl">
              L&apos;annuaire ouvrira avec la première vague d&apos;adhésions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-gris-texte">
              L&apos;annuaire des praticiens certifiés sera publié dès
              l&apos;ouverture officielle, alimenté en temps réel par les
              inscriptions des praticiens via la plateforme Neuroactif
              Pro Santé. À l&apos;ouverture, vous pourrez rechercher par
              zone géographique, langue d&apos;exercice, mode clinique,
              supervisions de niveau spécialisé et modalité de
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* === Critères de recherche à venir === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Critères de recherche à l&apos;ouverture</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Cinq filtres pour trouver le praticien adapté
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Critere titre="Zone géographique" texte="Code postal + rayon, ou recherche par ville." />
            <Critere titre="Langue d'exercice" texte="Français, anglais, espagnol, italien, etc." />
            <Critere titre="Mode clinique" texte="Résolution, exploration, futurisation." />
            <Critere titre="Supervisions spécialisées" texte="Borderline, trauma complexe, troubles du comportement alimentaire, addictions, formes archaïques." />
            <Critere titre="Modalité" texte="Cabinet présentiel, téléconsultation acceptée, mixte." />
          </div>
        </div>
      </section>

      {/* === Charte du patient === */}
      <section className="border-b border-gris-trait bg-encre">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-blanc-casse/60">Charte du patient FFPN</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-blanc-casse md:text-4xl">
            Avant de consulter,{" "}
            <span className="text-bleu-clair">lisez la charte du patient</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-blanc-casse/80 md:text-lg">
            Elle dit ce que vous pouvez attendre d&apos;un praticien
            certifié, et ce que vous ne devez{" "}
            <strong className="text-blanc-casse">jamais</strong> accepter.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <p className="meta text-blanc-casse/60">Ce que vous pouvez attendre</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-blanc-casse/90">
                <li>· Une anamnèse soignée</li>
                <li>· Le respect du protocole canonique en 7 temps</li>
                <li>· Une triple posture éthique strictement tenue</li>
                <li>· Une fiche-mémoire à la fin de chaque séance</li>
                <li>· Le respect absolu de la confidentialité</li>
                <li>· La transmission d&apos;information à votre médecin uniquement avec votre consentement écrit</li>
              </ul>
            </div>
            <div>
              <p className="meta text-blanc-casse/60">Ce que vous ne devez jamais accepter</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-blanc-casse/90">
                <li>· Un diagnostic psychiatrique posé par le praticien</li>
                <li>· Une prescription médicamenteuse</li>
                <li>· Une promesse de guérison de pathologies médicalement reconnues</li>
                <li>· Un contact physique non sollicité</li>
                <li>· Une intrusion dans votre vie privée sans rapport avec le travail clinique</li>
                <li>· Une dépendance entretenue à votre praticien</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="/ressources"
              className="rounded-full border border-blanc-casse bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-transparent hover:text-blanc-casse"
            >
              Télécharger la charte (PDF septembre 2026)
            </a>
            <a
              href="mailto:signalement@neuromorphose.fr"
              className="rounded-full border border-blanc-casse/40 bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
            >
              Signaler un manquement
            </a>
          </div>
        </div>
      </section>

      {/* === CTA praticiens === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Vous êtes praticien ?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Rejoindre l&apos;annuaire FFPN
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Pour figurer dans l&apos;annuaire FFPN, complétez le cursus
            de formation certifiante sur Neuroactif Pro Santé et adhérez
            à la fédération. Votre fiche praticien remonte automatiquement
            dans l&apos;annuaire dès certification validée.
          </p>
          <a
            href="https://neuroactif.com/pro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full border border-bleu-federation bg-bleu-federation px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
          >
            S&apos;inscrire au cursus de formation
          </a>
        </div>
      </section>
    </article>
  );
}

function Critere({ titre, texte }: { titre: string; texte: string }) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-5">
      <p className="font-medium text-encre">{titre}</p>
      <p className="mt-2 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}
