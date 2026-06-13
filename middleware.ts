import { NextResponse, type NextRequest } from "next/server";
import { updateSupabaseSession } from "@/lib/supabase/middleware";

/**
 * Verrou de l'espace pro délégués FFPN — auth Supabase.
 * Toute requête vers /pro/dashboard/* exige une session Supabase valide.
 * Sinon → redirection vers /pro/connexion?next=<chemin demandé>.
 *
 * Les autres routes /pro/* (landing publique /pro, /pro/connexion,
 * /pro/reset-password) restent libres d'accès.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rafraîchit la session Supabase sur toutes les requêtes (refresh des tokens)
  const { supabaseResponse, user } = await updateSupabaseSession(request);

  // Protection /pro/dashboard/* : exige un utilisateur authentifié
  if (pathname.startsWith("/pro/dashboard")) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/pro/connexion";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match toutes les routes sauf les fichiers statiques et les images.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
