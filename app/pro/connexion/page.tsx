import { connecterPro } from "./actions";
import { safeNextPath } from "@/lib/pro-lock";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Connexion espace pro",
};

type Props = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function ConnexionProPage({ searchParams }: Props) {
  const params = await searchParams;
  const next = safeNextPath(params.next);
  const hasError = params.error === "1";

  return (
    <>
      <Header />
      <main className="bg-blanc-casse">
        <article className="mx-auto max-w-md px-6 py-20 md:py-24">
          <p className="meta text-bleu-federation">
            Espace pro · Représentants FFPN
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Connectez-vous à votre poste de travail.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-gris-texte">
            Espace réservé aux représentants régionaux de la FFPN. Si
            vous avez perdu votre mot de passe, contactez la direction
            à{" "}
            <a
              href="mailto:representants@neuromorphose.fr"
              className="text-bleu-federation underline hover:text-bleu-clair"
            >
              representants@neuromorphose.fr
            </a>
            .
          </p>

          <form action={connecterPro} className="mt-10 space-y-5">
            <input type="hidden" name="next" value={next} />

            <div>
              <label
                htmlFor="password"
                className="meta block text-gris-texte"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoFocus
                required
                autoComplete="current-password"
                className="mt-3 w-full border-b border-gris-trait bg-transparent px-1 py-3 text-base text-encre outline-none transition-colors focus:border-bleu-federation"
              />
            </div>

            {hasError && (
              <p className="text-sm text-red-600">
                Mot de passe incorrect. Réessayez.
              </p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-encre bg-encre px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
            >
              Se connecter
            </button>
          </form>

          <p className="mt-10 text-center text-xs text-gris-texte">
            Pas encore représentant&nbsp;?{" "}
            <a
              href="mailto:representants@neuromorphose.fr?subject=Candidature%20représentant%20FFPN"
              className="text-bleu-federation underline hover:text-bleu-clair"
            >
              Candidater
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
