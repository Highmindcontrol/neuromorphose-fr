export const metadata = {
  title: "Adhérer",
};

export default function AdhererPage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Adhésion · ouverture septembre 2026</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Rejoindre la première vague de praticiens fondateurs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gris-texte md:text-xl">
            L&apos;adhésion à la FFPN est ouverte à tout professionnel
            de l&apos;accompagnement formé à la Neuromorphose® via le
            cursus officiel de Neuroactif Pro Santé. Les premiers membres
            obtiennent le statut de <strong className="text-encre">
            membre fondateur</strong> — avec voix consultative à
            l&apos;assemblée générale et accès prioritaire aux programmes
            de recherche.
          </p>
        </div>
      </section>

      {/* === Parcours d'adhésion === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre md:text-3xl">
            Comment adhérer
          </h2>
          <ol className="mt-10 space-y-8">
            <Etape
              numero="01"
              titre="Compléter la formation Neuromorphose®"
              texte="L'adhésion FFPN est conditionnée à la validation du cursus de formation officielle, dispensé par Neuroactif Pro Santé. Si vous n'êtes pas encore formé, démarrez votre cursus sur neuroactif.com/pro."
            />
            <Etape
              numero="02"
              titre="Valider votre profil"
              texte="Une fois la formation validée, votre profil professionnel est créé sur Neuroactif Pro Santé. Pas besoin de double saisie : votre fiche praticien remonte automatiquement vers l'annuaire FFPN dès votre adhésion confirmée."
            />
            <Etape
              numero="03"
              titre="Souscrire l'adhésion annuelle"
              texte="Cotisation annuelle de 240 € (offerte la première année pour les 500 premiers membres fondateurs, dans le cadre du super-lancement). Adhésion en ligne sécurisée via Neuroactif Pro Santé."
            />
            <Etape
              numero="04"
              titre="Signer la charte déontologique"
              texte="Engagement écrit à respecter le cadre éthique de la fédération : aucun diagnostic, aucune prescription, aucune promesse de guérison ; respect de la souveraineté du patient ; participation aux protocoles de recherche selon vos choix."
            />
          </ol>
        </div>
      </section>

      {/* === Tarifs === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre md:text-3xl">
            Tarifs d&apos;adhésion
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <CarteTarif
              titre="Membre fondateur"
              prix="0 €"
              periode="la première année · 240 € ensuite"
              avantages={[
                "Offerte avec la formation Neuroactif Pro pour les 500 premiers",
                "Voix consultative à l'AG",
                "Accès prioritaire aux programmes de recherche",
                "Annuaire FFPN dès l'ouverture officielle (septembre 2026)",
              ]}
              actif
            />
            <CarteTarif
              titre="Membre actif"
              prix="240 €"
              periode="par an"
              avantages={[
                "Tarif standard à partir de la 2e année (ou pour les nouveaux membres après les 500 fondateurs)",
                "Annuaire FFPN public",
                "Outils EndoFormia® et EndoTonia® inclus",
                "Participation à la recherche scientifique",
              ]}
            />
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Devenez membre fondateur en septembre 2026
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gris-texte">
            Vous pouvez d&apos;ores et déjà démarrer la formation
            Neuromorphose® sur Neuroactif Pro Santé pour être prêt
            à l&apos;ouverture des adhésions.
          </p>
          <a
            href="https://neuroactif.com/pro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
          >
            Démarrer la formation Neuroactif Pro
          </a>
        </div>
      </section>
    </article>
  );
}

function Etape({ numero, titre, texte }: { numero: string; titre: string; texte: string }) {
  return (
    <li className="flex gap-6">
      <p className="flex-shrink-0 text-3xl font-light text-bleu-federation">
        {numero}
      </p>
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">
          {titre}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gris-texte">{texte}</p>
      </div>
    </li>
  );
}

function CarteTarif({
  titre,
  prix,
  periode,
  avantages,
  actif,
}: {
  titre: string;
  prix: string;
  periode: string;
  avantages: string[];
  actif?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border p-8 ${
        actif
          ? "border-bleu-federation bg-bleu-federation/5"
          : "border-gris-trait bg-blanc-casse"
      }`}
    >
      {actif && (
        <p className="mb-3 text-xs uppercase tracking-wider text-bleu-federation">
          Offre fondateur
        </p>
      )}
      <h3 className="text-xl font-semibold text-encre">{titre}</h3>
      <p className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-encre">
        {prix}
      </p>
      <p className="mt-1 text-xs text-gris-texte">{periode}</p>
      <ul className="mt-6 space-y-2">
        {avantages.map((a) => (
          <li key={a} className="flex gap-2 text-sm text-gris-texte">
            <span className="text-bleu-federation">✓</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
