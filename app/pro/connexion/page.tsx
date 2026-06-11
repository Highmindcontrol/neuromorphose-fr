export const metadata = {
  title: "Connexion espace pro",
};

/** Page de connexion — squelette. À brancher sur Supabase auth
 *  partagé avec neuroactif-platform et ataraxis-platform (même
 *  projet Supabase, même table auth.users). Les représentants
 *  FFPN sont identifiés par leur rôle (admin_profils.role =
 *  'representant_ffpn' à créer si distinct de 'collaborateur'). */
export default function ConnexionProPage() {
  return (
    <article className="mx-auto max-w-md px-6 py-16 md:py-24">
      <p className="meta text-bleu-federation">Espace pro · Connexion</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-encre">
        Bienvenue, représentant FFPN
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-gris-texte">
        Connectez-vous avec vos identifiants pour accéder à votre poste de
        travail.
      </p>

      <form className="mt-10 space-y-5">
        <div>
          <label htmlFor="email" className="meta block text-gris-texte">
            Email professionnel
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled
            placeholder="prenom@neuromorphose.fr"
            className="mt-2 w-full border-b border-gris-trait bg-transparent px-1 py-2 text-base text-encre outline-none focus:border-bleu-federation disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="password" className="meta block text-gris-texte">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            disabled
            className="mt-2 w-full border-b border-gris-trait bg-transparent px-1 py-2 text-base text-encre outline-none focus:border-bleu-federation disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled
          className="w-full rounded-full border border-bleu-federation bg-bleu-federation px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair disabled:cursor-not-allowed disabled:opacity-60"
        >
          Se connecter
        </button>
      </form>

      <p className="mt-8 text-center text-xs text-gris-texte">
        Module d&apos;authentification à activer · branchement Supabase auth
        partagé prévu en chantier dédié.
      </p>
    </article>
  );
}
