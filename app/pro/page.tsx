import Link from "next/link";

export const metadata = {
  title: "Espace pro représentants",
};

/** Page d'accueil de l'espace pro — landing avant login.
 *  Explique aux représentants régionaux FFPN ce qu'ils trouveront
 *  dans leur dashboard et leur permet de se connecter ou de
 *  demander un compte. */
export default function EspaceProAccueilPage() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <p className="meta text-bleu-federation">Espace pro · Représentants FFPN</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
        Le poste de travail des représentants régionaux
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gris-texte md:text-xl">
        Espace réservé aux représentants régionaux de la FFPN — ceux et
        celles qui portent la méthode Neuromorphose® sur le terrain dans
        leur pays. Outils de prospection, agenda, comptes rendus de
        rendez-vous et ligne directe avec la direction.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Outil
          titre="Tableau de bord prospects"
          texte="Liste des praticiens et écoles à approcher dans votre zone, statut de chaque contact (à appeler, en cours, conclu, à relancer), priorisation hebdomadaire."
        />
        <Outil
          titre="Agenda & rendez-vous"
          texte="Vos rendez-vous physiques et en visio, synchronisés avec votre Google Calendar. Préparation automatique de fiche briefing avant chaque rendez-vous."
        />
        <Outil
          titre="Compte rendu de rendez-vous"
          texte="Saisie rapide post-rendez-vous : décisions, actions, prochaine étape. Tout est archivé et remonté à la direction pour suivi du pipeline."
        />
        <Outil
          titre="Visio directe avec la direction"
          texte="Bouton « Visio » direct vers François pour un débrief rapide, une validation ou une question stratégique — sans passer par un calendrier."
        />
        <Outil
          titre="Bibliothèque commerciale"
          texte="Présentations, argumentaires, FAQ, témoignages, à jour en permanence. Versions selon le profil cible : école de formation, praticien individuel, institution."
        />
        <Outil
          titre="Suivi de commission"
          texte="Visualisation en temps réel de vos adhésions générées, commissions acquises et à venir. Téléchargement de votre relevé mensuel."
        />
      </div>

      <div className="mt-16 rounded-sm border border-bleu-federation bg-bleu-federation/5 p-8">
        <h2 className="text-xl font-semibold text-encre">
          Accéder à votre espace
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gris-texte">
          L&apos;authentification se fait avec votre email professionnel et
          le mot de passe fourni à votre arrivée dans le réseau de représentants.
          Si vous avez perdu vos identifiants, contactez la direction par
          email à{" "}
          <a
            href="mailto:representants@neuromorphose.fr"
            className="text-bleu-federation underline hover:text-bleu-clair"
          >
            representants@neuromorphose.fr
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pro/connexion"
            className="rounded-full border border-bleu-federation bg-bleu-federation px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
          >
            Se connecter
          </Link>
          <a
            href="mailto:representants@neuromorphose.fr?subject=Candidature%20représentant%20FFPN"
            className="rounded-full border border-encre bg-blanc-casse px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-encre transition-colors hover:bg-encre hover:text-blanc-casse"
          >
            Devenir représentant
          </a>
        </div>
      </div>
    </article>
  );
}

function Outil({ titre, texte }: { titre: string; texte: string }) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <h3 className="text-base font-semibold text-encre">{titre}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}
