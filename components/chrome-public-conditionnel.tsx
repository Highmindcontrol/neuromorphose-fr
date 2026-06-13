"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";

/**
 * Wrapper qui n'affiche le Header et le Footer publics QUE hors de
 * l'espace pro authentifié (/pro/dashboard/*). Ailleurs (site public,
 * /pro landing, /pro/connexion, /pro/reset-password) on garde le
 * chrome public habituel.
 */
export function ChromePublicConditionnel({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const estEspaceProAuthentifie = pathname?.startsWith("/pro/dashboard");

  if (estEspaceProAuthentifie) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
