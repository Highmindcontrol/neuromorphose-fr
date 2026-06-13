import Link from "next/link";
import { deconnecterPro } from "@/app/pro/connexion/actions";

/**
 * Layout du poste de travail délégué FFPN.
 * Sidebar gauche avec les 6 outils + top bar minimal avec
 * « Déconnexion espace pro » à droite. Aucun chrome public hérité
 * (header public et footer sont masqués par <ChromePublicConditionnel>
 * dans le layout racine quand on est sur /pro/dashboard/*).
 */

const OUTILS = [
  { href: "/pro/dashboard", label: "Tableau de bord", icone: "📊" },
  { href: "/pro/dashboard/prospects", label: "Prospects", icone: "🎯" },
  { href: "/pro/dashboard/agenda", label: "Agenda", icone: "📅" },
  { href: "/pro/dashboard/comptes-rendus", label: "Comptes rendus", icone: "📝" },
  { href: "/pro/dashboard/visio", label: "Visio direction", icone: "📹" },
  { href: "/pro/dashboard/bibliotheque", label: "Bibliothèque", icone: "📚" },
  { href: "/pro/dashboard/commissions", label: "Commissions", icone: "💼" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-blanc-casse">
      {/* Sidebar gauche */}
      <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 flex-col self-start border-r border-gris-trait bg-blanc-casse md:flex">
        <div className="px-6 py-5">
          <Link href="/pro/dashboard" className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-[-0.01em] text-encre">
              FFPN
            </span>
          </Link>
          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-gris-texte">
            Espace pro
          </p>
        </div>

        <nav
          aria-label="Outils délégué"
          className="flex-1 overflow-y-auto px-3"
        >
          <ul className="space-y-1">
            {OUTILS.map((o) => (
              <li key={o.href}>
                <Link
                  href={o.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-encre transition-colors hover:bg-gris-fond hover:text-bleu-federation"
                >
                  <span className="text-base" aria-hidden>
                    {o.icone}
                  </span>
                  {o.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Colonne droite : top bar + contenu */}
      <div className="flex flex-1 flex-col overflow-x-clip">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex items-center justify-end border-b border-gris-trait bg-blanc-casse px-6 py-3">
          <form action={deconnecterPro}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-encre bg-blanc-casse px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-encre transition-colors hover:border-bleu-clair hover:bg-bleu-clair hover:text-blanc-casse"
            >
              Déconnexion espace pro →
            </button>
          </form>
        </header>

        {/* Contenu principal */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
