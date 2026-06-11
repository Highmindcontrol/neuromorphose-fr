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
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gris-texte md:text-xl">
            La FFPN réunit les professionnels de l&apos;accompagnement
            formés à la Neuromorphose®. Elle porte la recherche scientifique
            sur le son, la musique et les ressentis émotionnels dans le
            développement cérébral, et structure le déploiement
            international de la méthode.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/adherer"
              className="rounded-full border border-bleu-federation bg-bleu-federation px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
            >
              Adhérer à la fédération
            </Link>
            <Link
              href="/mission"
              className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
            >
              Découvrir la mission
            </Link>
          </div>
        </div>
      </section>

      {/* === Chiffres clés === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <p className="meta mb-6 text-gris-texte">Ambition 5 ans</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Chiffre nombre="20" unite="pays" libelle="Déploiement international visé d'ici 2031" />
            <Chiffre nombre="13 000" unite="praticiens" libelle="Objectif d'adhésions à 5 ans sur les 20 pays" />
            <Chiffre nombre="5" unite="axes de recherche" libelle="Son, musique, émotion, mémoire, posture" />
            <Chiffre nombre="Sept. 2026" unite="" libelle="Ouverture officielle des adhésions" />
          </div>
        </div>
      </section>

      {/* === Trois piliers === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta mb-3 text-gris-texte">Nos trois piliers</p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Une fédération à la croisée de l&apos;exercice professionnel,
            de la recherche scientifique et du déploiement international.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Pilier
              numero="01"
              titre="Encadrement professionnel"
              texte="Charte déontologique, certification continue des membres, annuaire public des praticiens reconnus. Garantir au grand public un niveau de qualité homogène, partout dans le monde."
            />
            <Pilier
              numero="02"
              titre="Recherche scientifique"
              texte="Études internationales sur le son, la musique et les ressentis émotionnels dans le développement cérébral. Les membres-praticiens deviennent capteurs structurés d'une recherche mondiale unique."
            />
            <Pilier
              numero="03"
              titre="Déploiement international"
              texte="Vingt pays visés sur cinq ans. Un réseau organique de représentants régionaux qui forment, accompagnent et structurent la communauté Neuromorphose® localement."
            />
          </div>
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
              accès à la première vague de représentants régionaux —
              membres fondateurs avec voix consultative à l&apos;assemblée
              générale et accès prioritaire aux programmes de recherche.
            </p>
            <Link
              href="/adherer"
              className="mt-8 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
            >
              Demander à adhérer
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

function Pilier({
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
      <p className="mt-2 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}
