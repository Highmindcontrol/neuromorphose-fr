export const metadata = {
  title: "Recherche scientifique",
};

export default function RecherchePage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Recherche scientifique</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Une recherche mondiale rendue possible par un réseau structuré.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gris-texte md:text-xl">
            La FFPN porte un programme de recherche international original :
            ses membres-praticiens, formés à des protocoles d&apos;observation
            standardisés et équipés d&apos;outils numériques structurants,
            contribuent à constituer la première base mondiale de données
            sur les effets de la Neuromorphose® dans le développement
            cérébral et émotionnel.
          </p>
        </div>
      </section>

      {/* === Axes de recherche === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="max-w-3xl text-2xl font-semibold tracking-[-0.02em] text-encre md:text-3xl">
            Nos cinq axes prioritaires
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Axe
              numero="01"
              titre="Le son et la musique dans le développement cérébral"
              texte="Étude des effets des fréquences sonores et des structures musicales sur la plasticité neuronale, la concentration, l'apaisement émotionnel et les processus mnésiques. Comment certaines configurations sonores activent-elles des circuits spécifiques ? Quels protocoles fonctionnent chez l'adulte vs l'enfant ? Quelles fréquences pour quels états ?"
            />
            <Axe
              numero="02"
              titre="Les ressentis émotionnels mesurables"
              texte="Cartographie systématique des ressentis émotionnels avant, pendant et après une séance de Neuromorphose®. Les outils EndoFormia® et EndoTonia® permettent de capturer ces ressentis sous forme structurée (jauges multi-critères, échelles validées). Première fois qu'un tel volume de données qualifiées est constitué."
            />
            <Axe
              numero="03"
              titre="La futurisation comme dispositif d'ancrage"
              texte="Évolution de la visualisation classique : la futurisation projette le sujet dans un état souhaité encodé en forme géométrique. Effets sur la motivation, la confiance, la cohérence des décisions à 6 et 12 mois. Études de cas longitudinales avec consentement des participants."
            />
            <Axe
              numero="04"
              titre="La mémoire et le passé revisité"
              texte="Comment les protocoles de Neuromorphose® aident-ils à reconfigurer la mémoire émotionnelle d'événements passés ? Distinction entre reconsolidation thérapeutique (validée) et faux souvenirs (à éviter à tout prix). Cadre éthique strict, supervision croisée."
            />
            <Axe
              numero="05"
              titre="La posture du praticien et l'effet relationnel"
              texte="Une part importante de l'effet thérapeutique vient de la qualité de la relation. Comment former à une posture optimale ? Quels marqueurs (verbaux, non-verbaux, contextuels) distinguent les séances à fort effet de celles sans effet ? Analyse de cohortes de praticiens."
            />
          </div>
        </div>
      </section>

      {/* === Méthodologie === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre md:text-3xl">
            Notre méthodologie
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-gris-texte">
            <p>
              Chaque membre-praticien, en accord avec ses patients/clients
              et après obtention d&apos;un consentement éclairé, peut
              renseigner dans les outils EndoFormia® et EndoTonia® les
              données structurées de ses séances : profil anonymisé,
              objectifs de séance, protocole appliqué, ressentis avant/après
              mesurés par jauges, observations cliniques.
            </p>
            <p>
              Ces données, agrégées et anonymisées au niveau mondial,
              constituent un corpus inédit pour la recherche. Elles sont
              accessibles aux chercheurs partenaires de la FFPN selon un
              protocole de gouvernance des données strict (consentement,
              minimisation, droit à l&apos;oubli, hébergement HDS pour la
              France).
            </p>
            <p>
              <strong className="text-encre">
                C&apos;est ce dispositif qui transforme la FFPN
                d&apos;association professionnelle classique en
                infrastructure de recherche mondiale.
              </strong>{" "}
              Aucune autre organisation, à notre connaissance, n&apos;a
              encore structuré une telle remontée de données qualifiées
              sur les pratiques d&apos;accompagnement.
            </p>
          </div>
        </div>
      </section>

      {/* === Partenaires académiques === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre md:text-3xl">
            Partenaires académiques
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte">
            La FFPN ouvrira en septembre 2026 ses appels à partenariats
            avec des laboratoires universitaires (neurosciences, psychologie
            clinique, sciences cognitives, musicologie) en France et à
            l&apos;international. Les premiers partenariats annoncés seront
            publiés sur cette page au fil des conventions signées.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gris-texte">
            Chercheur ou institution intéressée par un partenariat ?{" "}
            <a
              href="mailto:recherche@neuromorphose.fr"
              className="text-bleu-federation underline hover:text-bleu-clair"
            >
              recherche@neuromorphose.fr
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}

function Axe({
  numero,
  titre,
  texte,
}: {
  numero: string;
  titre: string;
  texte: string;
}) {
  return (
    <div>
      <p className="text-3xl font-light text-bleu-federation">{numero}</p>
      <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-encre">
        {titre}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}
