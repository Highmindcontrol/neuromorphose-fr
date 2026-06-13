/**
 * Verrou de l'espace pro délégués FFPN — utilitaires partagés
 * entre le middleware (runtime Edge) et le formulaire de connexion
 * (runtime Node).
 *
 * V1 : un mot de passe partagé pour tous les délégués
 * (variable d'environnement `FFPN_PRO_PASSWORD`). À l'arrivée d'une
 * équipe étoffée, on basculera sur Supabase Auth avec un compte par
 * délégué. Pour l'instant, mot de passe unique cohérent avec le
 * faible nombre de délégués au lancement.
 *
 * Le cookie posé est un SHA-256 du mot de passe attendu — le mot de
 * passe lui-même ne transite pas en clair après la première saisie.
 */

export const PRO_COOKIE = "ffpn_pro";
export const PRO_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 jours

export async function hashProPassword(input: string): Promise<string> {
  const buf = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Vérifie qu'un chemin de redirection est sûr (relatif au site). */
export function safeNextPath(input: string | undefined | null): string {
  if (!input) return "/pro/dashboard";
  if (!input.startsWith("/")) return "/pro/dashboard";
  if (input.startsWith("//")) return "/pro/dashboard";
  return input;
}
