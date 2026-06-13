import Link from "next/link";
import { demanderResetMotDePasse } from "@/app/pro/connexion/actions";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Mot de passe oublié",
};

type Props = {
  searchParams: Promise<{ envoye?: string; error?: string }>;
};

export default async function ResetPasswordPage({ searchParams }: Props) {
  const params = await searchParams;
  const envoye = params.envoye === "1";
  const erreur = params.error;

  return (
    <>
      <Header />
      <main className="bg-blanc-casse">
        <article className="mx-auto max-w-md px-6 py-20 md:py-24">
          <p className="meta text-bleu-federation">Espace pro · Délégués FFPN</p>
          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Mot de passe oublié&nbsp;?
          </h1>

          {envoye ? (
            <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-5">
              <p className="text-sm font-medium text-green-900">
                Un email avec un lien de réinitialisation a été envoyé à
                votre adresse (si elle est enregistrée comme délégué).
              </p>
              <p className="mt-3 text-xs text-green-800">
                Le lien expire dans 1 heure. Pensez à vérifier vos spams.
              </p>
              <Link
                href="/pro/connexion"
                className="mt-5 inline-block text-xs font-medium uppercase tracking-wider text-bleu-federation hover:text-bleu-clair"
              >
                ← Retour à la connexion
              </Link>
            </div>
          ) : (
            <>
              <p className="mt-5 text-sm leading-relaxed text-gris-texte">
                Saisissez votre email professionnel. Si votre compte
                existe, un lien de réinitialisation vous sera envoyé.
              </p>

              <form action={demanderResetMotDePasse} className="mt-10 space-y-5">
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

                {erreur === "email" && (
                  <p className="text-sm text-red-600">
                    Merci de saisir votre email.
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full border border-encre bg-encre px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
                >
                  Envoyer le lien
                </button>

                <p className="text-center text-xs">
                  <Link
                    href="/pro/connexion"
                    className="text-gris-texte underline hover:text-bleu-federation"
                  >
                    ← Retour à la connexion
                  </Link>
                </p>
              </form>
            </>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
