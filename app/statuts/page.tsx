export const metadata = {
  title: "Statuts & gouvernance",
};

export default function StatutsPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <p className="meta text-bleu-federation">Statuts & gouvernance</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
        Une association loi 1901 transparente
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gris-texte md:text-xl">
        La FFPN est une association à but non lucratif régie par la loi
        du 1er juillet 1901. Ses statuts, son règlement intérieur, sa
        composition et ses comptes sont publics et consultables par tout
        membre comme par tout citoyen.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre">
          Documents officiels
        </h2>
        <ul className="mt-6 space-y-3">
          <li className="rounded-sm border border-gris-trait bg-blanc-casse p-4">
            <p className="font-medium text-encre">Statuts de l&apos;association</p>
            <p className="mt-1 text-xs text-gris-texte">
              Document à publier dès le dépôt officiel en préfecture
              (septembre 2026)
            </p>
          </li>
          <li className="rounded-sm border border-gris-trait bg-blanc-casse p-4">
            <p className="font-medium text-encre">Règlement intérieur</p>
            <p className="mt-1 text-xs text-gris-texte">
              Document à publier dès la première assemblée générale
              constitutive
            </p>
          </li>
          <li className="rounded-sm border border-gris-trait bg-blanc-casse p-4">
            <p className="font-medium text-encre">Charte déontologique</p>
            <p className="mt-1 text-xs text-gris-texte">
              Engagement éthique des praticiens — document à publier
              en septembre 2026
            </p>
          </li>
          <li className="rounded-sm border border-gris-trait bg-blanc-casse p-4">
            <p className="font-medium text-encre">Procès-verbaux des AG</p>
            <p className="mt-1 text-xs text-gris-texte">
              Publiés après chaque assemblée générale, à partir de
              la constitutive de septembre 2026
            </p>
          </li>
          <li className="rounded-sm border border-gris-trait bg-blanc-casse p-4">
            <p className="font-medium text-encre">Comptes annuels</p>
            <p className="mt-1 text-xs text-gris-texte">
              Publiés annuellement après approbation en AG
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre">
          Gouvernance
        </h2>
        <p className="mt-6 text-base leading-relaxed text-gris-texte">
          La fédération est administrée par un Conseil d&apos;Administration
          composé de membres élus par l&apos;Assemblée Générale. Le bureau
          (président, trésorier, secrétaire) est élu par le Conseil.
          Un Comité scientifique consultatif, composé de chercheurs et
          de praticiens expérimentés, oriente les programmes de recherche.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gris-texte">
          La composition du premier Conseil et du Comité scientifique
          sera annoncée lors de l&apos;assemblée constitutive de
          septembre 2026.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre">
          Indépendance financière
        </h2>
        <p className="mt-6 text-base leading-relaxed text-gris-texte">
          Les comptes de la FFPN sont strictement séparés de ceux des
          sociétés commerciales du groupe Ataraxis (Neuroactif Édition,
          Ataraxis Studio, Ataraxis IA). Les flux entre la FFPN et ces
          sociétés sont encadrés par des conventions écrites et publiées.
          Cette séparation garantit l&apos;indépendance institutionnelle
          de la fédération.
        </p>
      </section>
    </article>
  );
}
