import Link from "next/link";

export const metadata = {
  title: "Ressources",
  description:
    "Documents publics téléchargeables, communiqués officiels, calendrier institutionnel, accès à l'espace praticiens connectés.",
};

export default function RessourcesPage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">Ressources</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Documents publics et espace
            <br />
            praticiens connectés.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-texte md:text-xl">
            Tous les documents officiels de la FFPN, le calendrier
            institutionnel et l&apos;accès à l&apos;espace réservé aux
            praticiens certifiés.
          </p>
        </div>
      </section>

      {/* === Documents téléchargeables === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Documents publics téléchargeables</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            La doctrine FFPN en accès libre
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Doc titre="Pacte de Véracité du praticien Neuromorphose®" />
            <Doc titre="Code de déontologie FFPN" />
            <Doc titre="Charte du patient FFPN" />
            <Doc titre="Présentation institutionnelle de la FFPN" sous="PDF 2 pages — pour partenariats institutionnels" />
            <Doc titre="Fiche cursus de formation" sous="PDF 2 pages — présentation synthétique" />
            <Doc titre="Engagement déontologique FFPN" sous="Version courte pour candidats à la certification" />
          </div>
          <p className="mt-8 text-xs text-gris-texte">
            Les documents seront publiés au format PDF à
            l&apos;ouverture officielle en septembre 2026.
          </p>
        </div>
      </section>

      {/* === Communiqués === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Communiqués officiels</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Le journal de la fédération
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Cette section sera enrichie au fil des publications de la
            fédération à partir de septembre 2026 — annonces officielles,
            partenariats académiques, prises de position institutionnelles,
            rapports d&apos;activité.
          </p>
        </div>
      </section>

      {/* === Calendrier === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Calendrier institutionnel</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Les rendez-vous de la profession
          </h2>
          <ul className="mt-10 space-y-6">
            <Evenement
              titre="Supervisions trimestrielles"
              texte="Visioconférence, 2 heures par session, ouvertes aux praticiens certifiés. Deux participations minimum par an attendues. Dates publiées au fil de l'année."
            />
            <Evenement
              titre="Congrès annuel FFPN"
              texte="Rendez-vous principal de la profession — communications scientifiques, ateliers cliniques, assemblée générale, soirée de promotion. Date et lieu de la première édition à confirmer (envisagé pour 2027)."
            />
            <Evenement
              titre="Journées d'étude thématiques"
              texte="Calendrier annuel à confirmer. Journées de formation continue sur des thématiques cliniques spécifiques (trauma complexe, troubles du comportement alimentaire, addictions, formes archaïques…)."
            />
          </ul>
        </div>
      </section>

      {/* === Espace praticiens === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Accès réservé</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Espace praticiens connectés
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Les praticiens certifiés accèdent depuis cette page à leur
            espace personnel sur la plateforme Neuroactif® — gestion de
            leur fiche annuaire, supervisions à venir, jurisprudence
            partagée, ressources internes, journal de pratique, formation
            continue.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://neuroactif.com/pro"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-bleu-federation bg-bleu-federation px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
            >
              Connexion espace praticien →
            </a>
            <Link
              href="/pro"
              className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
            >
              Espace représentants FFPN
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Doc({ titre, sous }: { titre: string; sous?: string }) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-5">
      <p className="font-medium text-encre">{titre}</p>
      {sous && <p className="mt-1 text-xs text-gris-texte">{sous}</p>}
      <p className="mt-3 text-[10px] uppercase tracking-wider text-bleu-federation">
        PDF — à publier septembre 2026
      </p>
    </div>
  );
}

function Evenement({ titre, texte }: { titre: string; texte: string }) {
  return (
    <li className="border-l-2 border-bleu-federation pl-6">
      <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
    </li>
  );
}
