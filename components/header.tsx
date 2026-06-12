import Link from "next/link";

/** Header public FFPN — sobre, institutionnel, fond blanc.
 *  L'espace pro représentants est accessible via le lien tout à
 *  droite (badge discret « Espace pro » → /pro). */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gris-trait bg-blanc-casse/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-[-0.01em] text-encre">
            FFPN
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <NavLink href="/methode">La méthode</NavLink>
          <NavLink href="/annuaire">Trouver un praticien</NavLink>
          <NavLink href="/devenir-praticien" className="hidden md:inline-flex">
            Devenir praticien
          </NavLink>
          <NavLink href="/federation" className="hidden md:inline-flex">
            La fédération
          </NavLink>
          <NavLink href="/deontologie" className="hidden md:inline-flex">
            Déontologie
          </NavLink>
          <Link
            href="/pro"
            className="ml-2 rounded-full border border-bleu-federation bg-bleu-federation px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-bleu-clair"
          >
            Espace pro
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`rounded-sm px-3 py-1.5 text-encre transition-colors hover:text-bleu-federation ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
