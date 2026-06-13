"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function safeNextPath(input: string | undefined | null): string {
  if (!input) return "/pro/dashboard";
  if (!input.startsWith("/")) return "/pro/dashboard";
  if (input.startsWith("//")) return "/pro/dashboard";
  return input;
}

export async function connecterPro(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = safeNextPath(String(formData.get("next") ?? "/pro/dashboard"));

  if (!email || !password) {
    redirect("/pro/connexion?error=champs");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    const params = new URLSearchParams({ error: "auth" });
    if (next !== "/pro/dashboard") params.set("next", next);
    redirect(`/pro/connexion?${params.toString()}`);
  }

  redirect(next);
}

export async function deconnecterPro() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/pro");
}

export async function demanderResetMotDePasse(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!email) {
    redirect("/pro/reset-password?error=email");
  }

  const supabase = await createClient();
  const redirectTo =
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/pro/reset-password/nouveau`
      : "https://neuromorphose.fr/pro/reset-password/nouveau";

  await supabase.auth.resetPasswordForEmail(email, { redirectTo });

  // Toujours renvoyer un succès même si l'email n'existe pas, pour ne
  // pas révéler quels emails sont enregistrés (sécurité par obscurité).
  redirect("/pro/reset-password?envoye=1");
}

export async function definirNouveauMotDePasse(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const passwordConfirm = String(formData.get("password_confirm") ?? "");

  if (password.length < 8) {
    redirect("/pro/reset-password/nouveau?error=taille");
  }
  if (password !== passwordConfirm) {
    redirect("/pro/reset-password/nouveau?error=match");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    redirect("/pro/reset-password/nouveau?error=auth");
  }

  redirect("/pro/dashboard");
}
