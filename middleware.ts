import { NextResponse, type NextRequest } from "next/server";
import { PRO_COOKIE, hashProPassword } from "@/lib/pro-lock";

/**
 * Verrou de l'espace pro représentants FFPN.
 * Toute requête vers /pro/dashboard/* exige le cookie ffpn_pro valide.
 * Sinon → redirection vers /pro/connexion?next=<chemin demandé>.
 *
 * Les autres routes /pro/* (landing publique /pro et /pro/connexion)
 * restent libres d'accès.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/pro/dashboard")) {
    return NextResponse.next();
  }

  const expected = process.env.FFPN_PRO_PASSWORD;
  if (!expected) {
    // Pas de mot de passe configuré : on laisse passer pour ne pas casser
    // le dev local. À configurer impérativement en prod.
    return NextResponse.next();
  }

  const cookie = request.cookies.get(PRO_COOKIE)?.value;
  if (cookie) {
    const expectedHash = await hashProPassword(expected);
    if (cookie === expectedHash) {
      return NextResponse.next();
    }
  }

  const url = request.nextUrl.clone();
  url.pathname = "/pro/connexion";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/pro/dashboard/:path*"],
};
