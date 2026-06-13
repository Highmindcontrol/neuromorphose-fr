import { definirNouveauMotDePasse } from "@/app/pro/connexion/actions";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Nouveau mot de passe",
};

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function NouveauMotDePassePage({ searchParams }: Props) {
  const params = await searchParams;
  const erreur =
    params.error === "taille"
      ? "Le mot de passe doit faire au moins 8 caractères."
      : params.error === "match"
        ? "Les deux mots de passe ne correspondent pas."
        : params.error === "auth"
          ? "Lien expiré ou invalide. Demandez un nouveau lien de réinitialisation."
          : null;

  return (
    <>
      <Header />
      <main className="bg-blanc-casse">
        <article className="mx-auto max-w-md px-6 py-20 md:py-24">
          <p className="meta text-bleu-federation">Espace pro · Délégués FFPN</p>
          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Choisissez votre nouveau mot de passe.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-gris-texte">
            Minimum 8 caractères. Choisissez un mot de passe solide —
            l&apos;espace pro contient des données de prospection
            confidentielles.
          </p>

          <form action={definirNouveauMotDePasse} className="mt-10 space-y-5">
            <div>
              <label htmlFor="password" className="meta block text-gris-texte">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoFocus
                required
                minLength={8}
                autoComplete="new-password"
                className="mt-3 w-full border-b border-gris-trait bg-transparent px-1 py-3 text-base text-encre outline-none transition-colors focus:border-bleu-federation"
              />
            </div>

            <div>
              <label htmlFor="password_confirm" className="meta block text-gris-texte">
                Confirmation
              </label>
              <input
                type="password"
                id="password_confirm"
                name="password_confirm"
                required
                minLength={8}
                autoComplete="new-password"
                className="mt-3 w-full border-b border-gris-trait bg-transparent px-1 py-3 text-base text-encre outline-none transition-colors focus:border-bleu-federation"
              />
            </div>

            {erreur && <p className="text-sm text-red-600">{erreur}</p>}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-encre bg-encre px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
            >
              Définir le mot de passe
            </button>
          </form>
        </article>
      </main>
      <Footer />
    </>
  );
}
