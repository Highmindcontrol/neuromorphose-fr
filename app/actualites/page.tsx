export const metadata = {
  title: "Actualités & événements",
};

export default function ActualitesPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <p className="meta text-bleu-federation">Actualités & événements</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
        Le journal de bord de la fédération
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gris-texte md:text-xl">
        Annonces officielles, signatures de partenariats académiques,
        publications scientifiques, événements organisés par la FFPN
        ou ses représentants régionaux.
      </p>

      <section className="mt-12 space-y-8">
        <Actualite
          date="À venir · Septembre 2026"
          titre="Ouverture officielle des adhésions"
          texte="La FFPN ouvre ses premières adhésions. Les 500 premiers membres bénéficient de la cotisation offerte la première année et du statut de membre fondateur avec voix consultative à l'assemblée générale."
        />
        <Actualite
          date="À venir · Octobre 2026"
          titre="Première assemblée générale constitutive"
          texte="Validation officielle des statuts, élection du premier Conseil d'Administration, constitution du Comité scientifique consultatif. Annonce des trois premiers partenariats académiques."
        />
        <Actualite
          date="À venir · 2026-2027"
          titre="Déploiement des représentants régionaux dans 5 premiers pays"
          texte="Recrutement et formation des premiers représentants régionaux FFPN dans cinq pays pilotes : France, Belgique, Suisse, Canada (Québec), Maroc. Objectif 20 pays en 2031."
        />
      </section>

      <div className="mt-16 rounded-sm border border-dashed border-gris-trait bg-gris-fond p-6 text-center">
        <p className="text-sm text-gris-texte">
          Plus d&apos;actualités publiées au fil des avancées. Pour rester
          informé, inscrivez-vous à la newsletter de la fédération via
          le{" "}
          <a href="/contact" className="text-bleu-federation underline hover:text-bleu-clair">
            formulaire de contact
          </a>
          .
        </p>
      </div>
    </article>
  );
}

function Actualite({ date, titre, texte }: { date: string; titre: string; texte: string }) {
  return (
    <div className="border-l-2 border-bleu-federation pl-6">
      <p className="meta text-bleu-federation">{date}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-encre">
        {titre}
      </h2>
      <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}
