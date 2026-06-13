import Link from "next/link";
import { connecterPro } from "./actions";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Connexion espace pro",
};

function safeNext(input: string | undefined): string {
  if (!input) return "/pro/dashboard";
  if (!input.startsWith("/")) return "/pro/dashboard";
  if (input.startsWith("//")) return "/pro/dashboard";
  return input;
}

type Props = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function ConnexionProPage({ searchParams }: Props) {
  const params = await searchParams;
  const next = safeNext(params.next);

  const messageErreur =
    params.error === "auth"
      ? "Email ou mot de passe incorrect. Réessayez."
      : params.error === "champs"
        ? "Merci de renseigner votre email et votre mot de passe."
        : null;

  return (
    <>
      <Header />
      <main className="bg-blanc-casse">
        <article className="mx-auto max-w-md px-6 py-20 md:py-24">
          <p className="meta text-bleu-federation">
            Espace pro · Délégués FFPN
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Connectez-vous à votre poste de travail.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-gris-texte">
            Espace réservé aux délégués régionaux de la FFPN. Pas encore
            de compte&nbsp;? Contactez la direction à{" "}
            <a
              href="mailto:delegues@neuromorphose.fr"
              className="text-bleu-federation underline hover:text-bleu-clair"
            >
              delegues@neuromorphose.fr
            </a>
            .
          </p>

          <form action={connecterPro} className="mt-10 space-y-5">
            <input type="hidden" name="next" value={next} />

            <div>
              <label htmlFor="email" className="meta block text-gris-texte">
                Email professionnel
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoFocus
                required
                autoComplete="email"
                placeholder="prenom.nom@neuromorphose.fr"
                className="mt-3 w-full border-b border-gris-trait bg-transparent px-1 py-3 text-base text-encre outline-none transition-colors placeholder:text-gris-meta focus:border-bleu-federation"
              />
            </div>

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
                required
                autoComplete="current-password"
                className="mt-3 w-full border-b border-gris-trait bg-transparent px-1 py-3 text-base text-encre outline-none transition-colors focus:border-bleu-federation"
              />
            </div>

            {messageErreur && (
              <p className="text-sm text-red-600">{messageErreur}</p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-encre bg-encre px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
            >
              Se connecter
            </button>

            <p className="text-center text-xs">
              <Link
                href="/pro/reset-password"
                className="text-gris-texte underline hover:text-bleu-federation"
              >
                Mot de passe oublié&nbsp;?
              </Link>
            </p>
          </form>

          <p className="mt-10 text-center text-xs text-gris-texte">
            Pas encore délégué&nbsp;?{" "}
            <a
              href="mailto:delegues@neuromorphose.fr?subject=Candidature%20délégué%20FFPN"
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
