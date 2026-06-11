export const metadata = {
  title: "Mission & valeurs",
};

export default function MissionPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <p className="meta text-bleu-federation">Mission & valeurs</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
        Pourquoi nous existons
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gris-texte md:text-xl">
        La Neuromorphose® est une méthode jeune mais à fort potentiel
        scientifique et thérapeutique. Pour qu&apos;elle se déploie au service
        du plus grand nombre — sans dilution ni caricature — il fallait
        une instance qui garantisse l&apos;excellence des praticiens et porte
        la voix collective auprès des institutions, du grand public et de
        la communauté scientifique. C&apos;est la mission de la FFPN.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre">
          Trois engagements fondateurs
        </h2>

        <div className="mt-8 space-y-10">
          <Engagement
            titre="Garantir la qualité par la certification continue"
            texte="Tout membre de la FFPN s'engage dans un parcours de formation initiale puis de mise à jour continue de ses compétences. La fédération établit le référentiel de compétences, vérifie son acquisition et la maintient à jour. Le public peut consulter publiquement l'annuaire des praticiens certifiés."
          />
          <Engagement
            titre="Faire avancer la connaissance par la recherche"
            texte="La FFPN coordonne des études internationales sur les mécanismes neurocognitifs activés par la Neuromorphose®, en particulier sur le rôle du son, de la musique et des ressentis émotionnels dans la plasticité cérébrale. Les membres-praticiens, formés à des protocoles standardisés, sont des contributeurs actifs de cette recherche."
          />
          <Engagement
            titre="Porter la méthode à l'international"
            texte="Vingt pays visés en cinq ans. La fédération structure un réseau de représentants régionaux qui forment localement, accompagnent les nouveaux praticiens et adaptent les protocoles aux contextes culturels — sans jamais transiger sur l'éthique et la rigueur méthodologique."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre">
          Nos valeurs
        </h2>
        <ul className="mt-8 space-y-4 text-base leading-relaxed text-gris-texte">
          <li>
            <strong className="text-encre">Rigueur scientifique.</strong>{" "}
            Toute communication publique de la fédération s&apos;appuie sur
            des données vérifiables et reconnaît honnêtement ses zones
            d&apos;incertitude.
          </li>
          <li>
            <strong className="text-encre">Souveraineté du patient.</strong>{" "}
            La Neuromorphose® accompagne, elle ne se substitue jamais aux
            soins médicaux ni à la décision du patient. Aucune promesse de
            guérison, aucun diagnostic, aucune prescription.
          </li>
          <li>
            <strong className="text-encre">Transparence institutionnelle.</strong>{" "}
            Statuts, gouvernance, comptes, programmes de recherche — tout
            est publié et consultable par les membres comme par le public.
          </li>
          <li>
            <strong className="text-encre">Diversité des praticiens.</strong>{" "}
            La FFPN accueille les professionnels de santé mentale réglementés
            (psychologues, psychiatres, psychothérapeutes) et les
            accompagnants formés à la Neuromorphose® (hypnopraticiens,
            sophrologues, naturopathes, coachs, thérapeutes énergétiques) —
            sans hiérarchie de valeur entre les statuts.
          </li>
        </ul>
      </section>
    </article>
  );
}

function Engagement({ titre, texte }: { titre: string; texte: string }) {
  return (
    <div className="border-l-2 border-bleu-federation pl-6">
      <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">
        {titre}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}
