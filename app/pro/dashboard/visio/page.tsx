export const metadata = { title: "Visio direction" };

export default function VisioPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
      <p className="meta text-bleu-federation">Outil 04</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-encre md:text-5xl">
        Visio directe avec la direction.
      </h1>
      <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
        Un bouton, une visio. Pour un débrief rapide, une validation ou
        une question stratégique — sans passer par un calendrier, sans
        envoyer un email.
      </p>

      <div className="mt-12 rounded-2xl border border-gris-trait bg-blanc-casse p-10 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-bleu-federation/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-bleu-federation"
            aria-hidden
          >
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-encre">
          Démarrer une visio avec François
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gris-texte">
          La direction recevra une notification immédiate et rejoindra la
          visio si elle est disponible. Si elle est indisponible, vous
          serez automatiquement rappelé dans la journée.
        </p>
        <a
          href="https://visio.neuromorphose.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-encre bg-encre px-8 py-4 text-sm font-semibold uppercase tracking-wider text-blanc-casse transition-colors hover:border-bleu-clair hover:bg-bleu-clair"
        >
          Démarrer la visio
        </a>
      </div>

      <div className="mt-10 rounded-xl border border-gris-trait bg-blanc-casse p-6">
        <p className="text-[10px] uppercase tracking-[0.16em] text-gris-texte">
          Bon usage
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gris-texte">
          <li>· Pour les questions tactiques rapides &lt; 5 min</li>
          <li>· Pour valider une concession commerciale exceptionnelle</li>
          <li>· Pour signaler une situation à enjeu (institution majeure, école nationale)</li>
          <li className="text-encre">
            · <strong>Pas pour les sujets de fond</strong> — utiliser l&apos;agenda et caler un RDV
          </li>
        </ul>
      </div>

      <p className="mt-6 text-xs italic text-gris-texte">
        Visio hébergée sur l&apos;instance Jitsi privée du groupe
        (visio.neuromorphose.fr).
      </p>
    </article>
  );
}
