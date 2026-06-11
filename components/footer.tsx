import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gris-trait bg-blanc-casse">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-encre">
              Fédération Française des Praticiens de la Neuromorphose®
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gris-texte">
              Association loi 1901 — siège social France.
              Ouverture officielle des adhésions en septembre 2026.
            </p>
            <p className="mt-3 text-xs text-gris-texte">
              Membre de l&apos;écosystème{" "}
              <a
                href="https://ataraxis.group"
                className="underline hover:text-bleu-federation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ataraxis Group Ltd
              </a>
              .
            </p>
          </div>
          <div>
            <p className="meta text-gris-texte">Naviguer</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <Link href="/mission" className="hover:text-bleu-federation">
                  Mission & valeurs
                </Link>
              </li>
              <li>
                <Link href="/recherche" className="hover:text-bleu-federation">
                  Recherche scientifique
                </Link>
              </li>
              <li>
                <Link href="/annuaire" className="hover:text-bleu-federation">
                  Annuaire des praticiens
                </Link>
              </li>
              <li>
                <Link href="/adherer" className="hover:text-bleu-federation">
                  Adhérer
                </Link>
              </li>
              <li>
                <Link href="/statuts" className="hover:text-bleu-federation">
                  Statuts & gouvernance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="meta text-gris-texte">Contact</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a
                  href="mailto:contact@neuromorphose.fr"
                  className="hover:text-bleu-federation"
                >
                  contact@neuromorphose.fr
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bleu-federation">
                  Formulaire de contact
                </Link>
              </li>
              <li>
                <a
                  href="https://neuroactif.com"
                  className="hover:text-bleu-federation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plateforme Neuroactif Pro Santé
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-gris-trait pt-6 text-xs text-gris-texte">
          © {new Date().getFullYear()} FFPN — Tous droits réservés. Neuromorphose® est une marque déposée.
        </p>
      </div>
    </footer>
  );
}
