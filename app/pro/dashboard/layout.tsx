import Link from "next/link";
import { deconnecterPro } from "@/app/pro/connexion/actions";

/**
 * Layout du poste de travail délégué FFPN.
 * Sidebar gauche avec les 6 outils, header avec déconnexion,
 * zone de contenu principal flex-1.
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
    <div className="flex min-h-screen bg-blanc-casse">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 flex-col self-start border-r border-gris-trait bg-blanc-casse md:flex">
        <div className="px-6 py-5">
          <Link href="/" className="flex items-baseline gap-2">
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

        <form action={deconnecterPro} className="border-t border-gris-trait p-3">
          <button
            type="submit"
            className="w-full rounded-md px-3 py-2 text-left text-sm text-gris-texte transition-colors hover:bg-gris-fond hover:text-encre"
          >
            ← Se déconnecter
          </button>
        </form>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-x-clip">{children}</main>
    </div>
  );
}
