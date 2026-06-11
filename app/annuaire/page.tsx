export const metadata = {
  title: "Annuaire des praticiens",
};

export default function AnnuairePage() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <p className="meta text-bleu-federation">Annuaire public</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
        Trouver un praticien Neuromorphose® près de chez vous
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gris-texte md:text-xl">
        Tous les praticiens listés ici sont membres certifiés de la FFPN.
        Ils se sont engagés à respecter la charte déontologique de la
        fédération et leur formation est validée par notre comité
        scientifique.
      </p>

      <div className="mt-12 rounded-sm border border-dashed border-gris-trait bg-gris-fond p-10 text-center">
        <p className="meta text-bleu-federation">Ouverture septembre 2026</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-encre">
          L&apos;annuaire ouvrira avec la première vague d&apos;adhésions
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed text-gris-texte">
          La FFPN ouvre officiellement ses adhésions en septembre 2026.
          L&apos;annuaire des praticiens certifiés sera publié dès cette
          date, alimenté en temps réel par les inscriptions des praticiens
          via la plateforme Neuroactif Pro Santé.
        </p>
        <a
          href="https://neuroactif.com/pro"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full border border-bleu-federation bg-bleu-federation px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
        >
          Je suis praticien — m&apos;inscrire à Neuroactif Pro
        </a>
      </div>

      {/* Placeholder pour la future grille de praticiens.
          À brancher sur Supabase partagé avec neuroactif.com en
          lecture seule (table admin_employes filtrée sur les praticiens
          certifiés + leur localisation). */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-[-0.02em] text-encre">
          Aperçu de la future expérience
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gris-texte">
          À l&apos;ouverture, vous pourrez rechercher par ville, région,
          spécialité (anxiété, mémoire, performance, sommeil…) et type de
          praticien (psychologue, sophrologue, hypnopraticien,
          naturopathe, coach…). Chaque fiche présentera la formation,
          les langues parlées, les horaires et un lien de prise de rendez-vous
          direct.
        </p>
      </section>
    </article>
  );
}
