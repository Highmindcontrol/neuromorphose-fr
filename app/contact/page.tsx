export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <p className="meta text-bleu-federation">Contact</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
        Nous contacter
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gris-texte md:text-xl">
        Toute question, demande de partenariat ou candidature peut nous
        être adressée par email aux contacts ci-dessous. Le formulaire
        de contact sera activé à l&apos;ouverture officielle en septembre
        2026.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <CarteContact
          titre="Adhésion & informations générales"
          email="contact@neuromorphose.fr"
          description="Pour toute question sur l'adhésion, la formation, le fonctionnement de la fédération."
        />
        <CarteContact
          titre="Recherche & partenariats académiques"
          email="recherche@neuromorphose.fr"
          description="Chercheurs, universités, laboratoires intéressés par un partenariat scientifique."
        />
        <CarteContact
          titre="Représentants régionaux"
          email="representants@neuromorphose.fr"
          description="Candidatures spontanées pour devenir représentant régional de la FFPN dans votre pays."
        />
        <CarteContact
          titre="Presse & média"
          email="presse@neuromorphose.fr"
          description="Journalistes, demandes d'interviews, dossier de presse."
        />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-encre">
          Siège social
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gris-texte">
          Fédération Française des Praticiens de la Neuromorphose®
          <br />
          Adresse complète communiquée après dépôt officiel en préfecture
          (septembre 2026).
        </p>
      </section>
    </article>
  );
}

function CarteContact({
  titre,
  email,
  description,
}: {
  titre: string;
  email: string;
  description: string;
}) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <h3 className="text-base font-semibold text-encre">{titre}</h3>
      <a
        href={`mailto:${email}`}
        className="mt-2 inline-block text-sm text-bleu-federation hover:text-bleu-clair"
      >
        {email}
      </a>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{description}</p>
    </div>
  );
}
