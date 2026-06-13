/**
 * Client Supabase pour les Server Components et Server Actions.
 * Lit/écrit les cookies via next/headers — c'est ce qui maintient la
 * session côté serveur en cohérence avec celle du navigateur.
 */
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // setAll appelé depuis un Server Component sans server action :
            // peut être ignoré si on a un middleware qui rafraîchit déjà la session.
          }
        },
      },
    },
  );
}

/**
 * Client Supabase avec la service_role key — bypass RLS.
 * À n'utiliser que dans des contextes serveur de confiance (admin,
 * jobs, vues agrégées Forteresse). NE JAMAIS exposer côté client.
 */
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}
