export const metadata = {
  title: "Devenir praticien",
  description:
    "Cursus de formation certifiante au métier de praticien Neuromorphose® en 14 modules. Pour les professionnels expérimentés de l'accompagnement humain.",
};

export default function DevenirPraticienPage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">Devenir praticien Neuromorphose®</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Un cursus exigeant,
            <br />
            une transmission incarnée.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-texte md:text-xl">
            Le cursus de formation certifiante au métier de praticien
            Neuromorphose® se compose de <strong className="text-encre">
            14 modules</strong> à traverser à votre rythme, plus un quiz
            final en visioconférence avec un administrateur de la FFPN.
            Il est conçu pour des professionnels déjà expérimentés de
            l&apos;accompagnement humain.
          </p>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            À l&apos;issue du cursus, le praticien certifié est inscrit
            au Tableau de la FFPN, dispose d&apos;un accès complet à la
            plateforme professionnelle Neuroactif®, peut exercer dans son
            cabinet en utilisant l&apos;ensemble des outils propriétaires
            <em> (EndoFormia®, EndoTonia®)</em>, et appartient pleinement
            à la communauté professionnelle des praticiens.
          </p>
        </div>
      </section>

      {/* === Pour qui ? === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Pour qui ?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Le cursus s&apos;adresse en priorité aux professionnels
            déjà installés dans leur exercice principal
          </h2>
          <ul className="mt-10 space-y-5 text-base leading-relaxed text-gris-texte md:text-lg">
            <li>
              <strong className="text-encre">Médecins généralistes et psychiatres</strong>{" "}
              qui veulent enrichir leur pratique d&apos;une approche
              non-médicamenteuse rigoureuse.
            </li>
            <li>
              <strong className="text-encre">Psychologues cliniciens et psychanalystes</strong>{" "}
              qui cherchent à compléter leur cadre théorique d&apos;une
              méthode opérante sur les zones où la parole bloque.
            </li>
            <li>
              <strong className="text-encre">Hypnothérapeutes</strong>{" "}
              (Erickson, Bandler-Grinder, ICV, EMDR) qui veulent franchir
              un cap par l&apos;instrumentation visuelle rigoureuse de la
              matérialisation de la forme.
            </li>
            <li>
              <strong className="text-encre">Sophrologues, coachs professionnels diplômés, praticiens en thérapie brève</strong>{" "}
              qui souhaitent inscrire leur pratique dans un cadre
              déontologique et institutionnel structuré.
            </li>
            <li>
              <strong className="text-encre">Profils en reconversion sérieuse</strong>{" "}
              (infirmiers, sages-femmes, professionnels paramédicaux en
              bilan de carrière) avec une formation initiale solide et
              une vocation manifeste pour l&apos;accompagnement humain.
            </li>
          </ul>
        </div>
      </section>

      {/* === Les 14 modules === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Le cursus en 14 modules</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Du seuil à la certification, du compagnonnage à la vie professionnelle.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Le cursus se déploie en 14 modules <em>(Module 0 « Le seuil »
            → Module 12 « Évaluation finale » + Module ★ « Compagnonnage
            continu »)</em>. Chaque module est étudié dans une « salle
            de classe » dédiée sur la plateforme Neuroactif®, en
            alternance avec des séances d&apos;entraînement sur{" "}
            <strong className="text-encre">Praximea®</strong> — la méthode
            universelle de transfert du savoir par simulation IA.
          </p>

          <div className="mt-12 space-y-12">
            <GroupeModules
              titre="Modules fondateurs (0 à 3)"
              texte="Le seuil, le socle théorique, la doctrine fondatrice, les sept temps du protocole canonique."
            />
            <GroupeModules
              titre="Modules opérationnels (4 à 7)"
              texte="L'hypnose conversationnelle ericksonienne, la maîtrise d'EndoFormia®, l'Encyclopédie interactive des formes neuroactives, la console intérieure EndoTonia®."
            />
            <GroupeModules
              titre="Modules cliniques (8 à 11)"
              texte="Posture clinique et présence thérapeutique, sémiologie psychopathologique, pratique supervisée par IA, l'écosystème Neuroactif®."
            />
            <GroupeModules
              titre="Module 12 — Évaluation finale et certification"
              texte="Le quiz final se déroule en visioconférence avec un administrateur de la FFPN. C'est le seul moment de présence humaine de tout le cursus de certification — dialogue collégial exigeant qui scelle l'engagement déontologique du praticien et son inscription au Tableau."
              accent
            />
            <GroupeModules
              titre="Module ★ — Compagnonnage continu"
              texte="Ouverture après la certification. La maison ouverte des praticiens certifiés — supervisions trimestrielles, compagnonnage entre pairs, jurisprudence partagée, entraînement libre sur Praximea®."
              accent
            />
          </div>
        </div>
      </section>

      {/* === Modalités === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Modalités</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Distanciel principalement, supervision continue.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-gris-texte md:text-lg">
            <div>
              <p className="font-semibold text-encre">Distanciel principalement</p>
              <p className="mt-2">
                Le cursus se déploie sur la plateforme Neuroactif® avec
                vidéos, sections-onglets, quiz d&apos;entraînement et de
                validation, simulations Praximea®. Vous progressez à
                votre rythme depuis votre lieu de travail ou votre
                domicile.
              </p>
            </div>
            <div>
              <p className="font-semibold text-encre">Visioconférence unique</p>
              <p className="mt-2">
                Le quiz final du Module 12 est la seule visioconférence
                du cursus avec un administrateur humain de la FFPN.
              </p>
            </div>
            <div>
              <p className="font-semibold text-encre">Supervision continue post-certification</p>
              <p className="mt-2">
                Une fois certifié, vous rejoignez les supervisions
                trimestrielles de la FFPN (en visioconférence, 2 h par
                session, 2 participations minimum par an attendues), et
                vous êtes associé pendant six mois à un compagnon
                expérimenté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Durée et tarifs === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Durée et tarifs</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Six à dix-huit mois selon votre rythme.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-gris-texte md:text-lg">
            <p>
              <strong className="text-encre">Durée</strong> — le cursus
              se traverse en six à dix-huit mois selon votre
              disponibilité, votre rythme, et la profondeur de votre
              travail personnel. Aucun délai imposé.
            </p>
            <p>
              <strong className="text-encre">Tarifs</strong> — barème
              indicatif disponible sur le portail d&apos;inscription.
              Plusieurs formules : tarif Membre Fondateur (places
              limitées dans chaque pays, conditions d&apos;engagement
              spécifiques), tarif Praticien Normal (barème standard à
              partir de septembre 2026). Éligibilité au financement
              professionnel (CPF, OPCO) à confirmer selon les statuts
              définitifs de la FFPN.
            </p>
          </div>
          <a
            href="https://neuroactif.com/formation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
          >
            Accéder au portail d&apos;inscription →
          </a>
        </div>
      </section>
    </article>
  );
}

function GroupeModules({ titre, texte, accent }: { titre: string; texte: string; accent?: boolean }) {
  return (
    <div className={`border-l-2 pl-6 ${accent ? "border-encre" : "border-bleu-federation"}`}>
      <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}
