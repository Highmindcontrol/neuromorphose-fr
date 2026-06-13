import Link from "next/link";

export const metadata = {
  title: "Espace pro",
};

/** Page d'accueil publique de l'espace pro — strictement minimale.
 *  Ne décrit pas le contenu interne du dashboard (réservé à ce qui
 *  vit derrière l'authentification). Deux portes : se connecter
 *  ou postuler comme délégué. */
export default function EspaceProAccueilPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <p className="meta text-bleu-federation">Espace pro · Délégués FFPN</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
        Accéder à votre espace.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-gris-texte md:text-lg">
        Espace réservé aux délégués régionaux de la FFPN.
        L&apos;authentification se fait avec votre email professionnel et
        le mot de passe fourni à votre arrivée dans le réseau. Si vous
        avez perdu vos identifiants, contactez la direction à{" "}
        <a
          href="mailto:delegues@neuromorphose.fr"
          className="text-bleu-federation underline hover:text-bleu-clair"
        >
          delegues@neuromorphose.fr
        </a>
        .
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/pro/connexion"
          className="rounded-full border border-bleu-federation bg-bleu-federation px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
        >
          Se connecter
        </Link>
        <a
          href="mailto:delegues@neuromorphose.fr?subject=Candidature%20délégué%20FFPN"
          className="rounded-full border border-encre bg-blanc-casse px-6 py-3 text-sm font-medium uppercase tracking-wider text-encre transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
        >
          Devenir délégué
        </a>
      </div>
    </article>
  );
}
