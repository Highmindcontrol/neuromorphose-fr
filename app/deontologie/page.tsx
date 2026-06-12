export const metadata = {
  title: "Déontologie",
  description:
    "Trois engagements publics, une instance disciplinaire indépendante. La déontologie est le cœur de la profession de praticien Neuromorphose®.",
};

export default function DeontologiePage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">Déontologie</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Trois engagements publics,
            <br />
            une instance indépendante.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-texte md:text-xl">
            <strong className="text-encre">La déontologie est le cœur
            de la profession de praticien Neuromorphose®.</strong> Plus
            que toute autre dimension, elle est ce qui distingue une
            pratique sérieuse d&apos;une dérive. La FFPN inscrit cette
            déontologie dans trois documents publics, opposables,
            téléchargeables, qui constituent ensemble le cadre éthique
            de la profession.
          </p>
        </div>
      </section>

      {/* === Triple posture === */}
      <section className="border-b border-gris-trait bg-encre">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24">
          <p className="meta text-blanc-casse/60">La triple posture du praticien</p>
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
            praticien certifié. Elle est signée à l&apos;issue du Module 0
            du cursus, et elle est opposable à tout praticien certifié
            qui s&apos;en écarterait. Elle est l&apos;analogue, pour la
            profession de praticien Neuromorphose®, de ce que le serment
            d&apos;Hippocrate représente pour la médecine.
          </p>
        </div>
      </section>

      {/* === Trois documents publics === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Les trois documents publics</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Le cadre éthique de la profession
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <DocPublic
              titre="Le Pacte de Véracité"
              destine="Le praticien certifié"
              texte="Texte fondateur signé par chaque praticien certifié. Il engage le praticien à respecter le cadre éthique, juridique et doctrinal de la méthode. Sa signature est horodatée et gravée dans le journal du praticien — elle a valeur juridique en cas de dérive avérée."
            />
            <DocPublic
              titre="Le Code de déontologie FFPN"
              destine="Le praticien dans son exercice"
              texte="Document complet qui détaille les obligations du praticien dans son exercice quotidien — formation continue, supervision, tenue du carnet de partenaires médicaux, hygiène des données patient, confidentialité, gestion des situations à risque, articulation avec les autres professions de santé."
            />
            <DocPublic
              titre="La Charte du patient FFPN"
              destine="La personne qui consulte"
              texte="Document destiné à la personne qui consulte. Il liste ce qu'elle peut attendre d'un praticien certifié, et ce qu'elle ne doit jamais accepter. Affiché dans chaque cabinet de praticien certifié, accessible publiquement sur ce site."
            />
          </div>
        </div>
      </section>

      {/* === Instance disciplinaire === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Instance disciplinaire indépendante</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Signaler un manquement
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-gris-texte md:text-lg">
            <p>
              Toute personne — patient, confrère, professionnel de santé
              partenaire, autorité publique — peut signaler à la FFPN un
              manquement présumé d&apos;un praticien certifié. Le
              signalement est confidentiel. Il est instruit par
              l&apos;instance disciplinaire indépendante selon une
              procédure contradictoire qui respecte les droits de la
              défense.
            </p>
            <p>
              <strong className="text-encre">Sanctions possibles</strong>{" "}
              — graduées selon la gravité du manquement et son éventuelle
              récurrence :
            </p>
            <ul className="space-y-2 pl-6">
              <li>· Avertissement simple inscrit au dossier</li>
              <li>· Blâme</li>
              <li>
                · Suspension temporaire du Tableau (retrait immédiat de
                l&apos;annuaire public et interdiction d&apos;exercice)
              </li>
              <li>
                · Radiation définitive (perte irrévocable du droit
                d&apos;usage de la marque « Praticien Neuromorphose® »)
              </li>
            </ul>
          </div>
          <a
            href="mailto:signalement@neuromorphose.fr"
            className="mt-10 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
          >
            Saisir l&apos;instance disciplinaire
          </a>
        </div>
      </section>

      {/* === Transparence === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Transparence institutionnelle</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Statistiques publiques annuelles
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            La FFPN publie annuellement, à partir de sa deuxième année
            d&apos;existence, des statistiques publiques sur
            l&apos;activité de son instance disciplinaire — nombre de
            signalements reçus, nombre instruits, nombre de sanctions
            prononcées, type de sanctions. Cette transparence est
            l&apos;une des marques de sérieux institutionnel de la
            profession.
          </p>
        </div>
      </section>
    </article>
  );
}

function DocPublic({
  titre,
  destine,
  texte,
}: {
  titre: string;
  destine: string;
  texte: string;
}) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <p className="meta text-bleu-federation">{destine}</p>
      <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{texte}</p>
      <p className="mt-4 text-[10px] uppercase tracking-wider text-gris-texte">
        PDF — à publier sept. 2026
      </p>
    </div>
  );
}
