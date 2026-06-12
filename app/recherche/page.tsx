import Link from "next/link";

export const metadata = {
  title: "Recherche",
  description:
    "La FFPN porte un programme de recherche scientifique sur l'interaction des formes géométriques avec le cerveau, l'incidence des sons sur les perceptions, et les mécanismes de la Neuromorphose®.",
};

export default function RecherchePage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">Recherche scientifique</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-6xl">
            Une fédération<br />au service de la recherche.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gris-texte md:text-xl">
            La FFPN porte un programme de recherche scientifique sur
            l&apos;interaction des formes géométriques avec le cerveau,
            l&apos;incidence des sons sur les perceptions et les
            ressentis émotionnels, et les mécanismes cliniques de la
            Neuromorphose®. Elle conduit ses propres études, soutient
            les travaux de ses praticiens-chercheurs, et publie en open
            access dans des revues à comité de lecture.
          </p>
        </div>
      </section>

      {/* === Cinq axes de recherche === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Cinq axes de recherche</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Cinq territoires d&apos;investigation prioritaires.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Axe
              numero="01"
              titre="Géométrie & neurosciences"
              texte="Étude des bases neurobiologiques de la convocation des formes intérieures. Imagerie fonctionnelle, marqueurs autonomiques, cohérence cardiaque associée à la manipulation des formes en séance."
            />
            <Axe
              numero="02"
              titre="Ancrage et futurisation"
              texte="Mesure des effets cliniques différentiels des modes Résolution, Exploration et Futurisation. Validation des protocoles d'ancrage corporel et de projection orientée d'un pôle d'attraction."
            />
            <Axe
              numero="03"
              titre="Perception et émotion"
              texte="Incidence des sons, des couleurs et des formes sur les ressentis émotionnels du patient. Études psycho-acoustiques appliquées à la console intérieure EndoTonia®."
            />
            <Axe
              numero="04"
              titre="Mémoire"
              texte="Travail de la forme intérieure comme accès aux mémoires implicites, somatiques et préverbales. Articulation avec la mémoire de travail, la consolidation et la transformation des contenus."
            />
            <Axe
              numero="05"
              titre="Procrastination"
              texte="Compréhension des mécanismes de la procrastination chronique à partir de la cartographie des formes de blocage. Évaluation de l'efficacité du mode Futurisation sur les patterns d'évitement."
            />
          </div>
        </div>
      </section>

      {/* === Études cliniques en cours === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Études cliniques en cours</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Le programme d&apos;études pivots de la fédération.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gris-texte">
            La FFPN conduit, en partenariat avec ses praticiens-chercheurs
            et son comité scientifique indépendant, un premier programme
            de trois études cliniques pivots autour de la console
            intérieure EndoTonia® et de l&apos;évaluation par induction
            sonore non-cognitive.
          </p>
          <div className="mt-12 space-y-6">
            <Etude
              lettre="A"
              titre="Concordance entre évaluation classique et évaluation par induction sonore"
              objet="Vérifier, sur 200 sujets adultes, que la note obtenue par jauge classique et celle obtenue par induction sonore sont concordantes à un seuil cliniquement acceptable. Première validation du mode à la note dans la littérature scientifique."
            />
            <Etude
              lettre="B"
              titre="Sensibilité différentielle du mode à la note dans la mesure pré/post séance"
              objet="Démontrer, sur 100 sujets suivis pendant trois mois, que le mode à la note détecte des évolutions pré/post séance que le mode classique ne capte pas — parce qu'il neutralise le biais d'auto-évaluation cognitive."
            />
            <Etude
              lettre="C"
              titre="Faisabilité chez les patientèles non-communicantes"
              objet="Évaluer, sur 60 sujets (aphasiques post-AVC, enfants pré-verbaux, démences légères), la capacité du mode à la note à recueillir un ressenti intérieur chez des patients à qui aucune échelle introspective standard ne sait s'adresser aujourd'hui."
            />
          </div>
        </div>
      </section>

      {/* === Gouvernance scientifique === */}
      <section className="border-b border-gris-trait bg-encre">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-blanc-casse/60">Gouvernance scientifique</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-blanc-casse md:text-4xl">
            Quatre garde-fous pour que la recherche fasse autorité.
          </h2>
          <div className="mt-12 grid gap-8 text-sm leading-relaxed text-blanc-casse/80 md:grid-cols-2">
            <div>
              <p className="font-semibold text-bleu-clair">
                Comité scientifique indépendant
              </p>
              <p className="mt-2">
                Un psychiatre universitaire, un psychologue clinicien
                chercheur, un statisticien — constitués dès le démarrage
                et indépendants de la fédération comme de l&apos;éditeur.
              </p>
            </div>
            <div>
              <p className="font-semibold text-bleu-clair">
                Pré-enregistrement des protocoles
              </p>
              <p className="mt-2">
                Sur ClinicalTrials.gov et Open Science Framework. Gage
                de rigueur méthodologique et de transparence avant la
                collecte des données.
              </p>
            </div>
            <div>
              <p className="font-semibold text-bleu-clair">
                Comité d&apos;éthique CPP
              </p>
              <p className="mt-2">
                Saisine systématique d&apos;un comité de protection des
                personnes pour les études interventionnelles. Déclaration
                CNIL conforme HDS pour toutes les données collectées.
              </p>
            </div>
            <div>
              <p className="font-semibold text-bleu-clair">
                Publication open access
              </p>
              <p className="mt-2">
                Dans des revues à comité de lecture (L&apos;Encéphale,
                Journal of Clinical Psychology et équivalents). Aucune
                rétention des résultats. La connaissance produite est
                partagée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Appel à praticiens-chercheurs === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24 text-center">
          <p className="meta text-bleu-federation">
            Vous êtes chercheur ou clinicien-chercheur&nbsp;?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Rejoindre le réseau<br />des praticiens-chercheurs FFPN.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-texte md:text-lg">
            La FFPN ouvre un réseau de praticiens-chercheurs et de
            chercheurs académiques associés à son programme scientifique.
            Co-conception de protocoles, accès aux données anonymisées,
            co-signature des publications.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
          >
            Manifester son intérêt
          </Link>
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
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <p className="text-sm font-semibold text-bleu-federation">{numero}</p>
      <p className="mt-2 text-lg font-semibold text-encre">{titre}</p>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}

function Etude({
  lettre,
  titre,
  objet,
}: {
  lettre: string;
  titre: string;
  objet: string;
}) {
  return (
    <article className="rounded-sm border border-gris-trait bg-blanc-casse p-6 md:p-8">
      <div className="flex items-start gap-5">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-bleu-federation text-base font-semibold text-blanc-casse">
          {lettre}
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-encre md:text-xl">
            {titre}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gris-texte md:text-base">
            {objet}
          </p>
        </div>
      </div>
    </article>
  );
}
