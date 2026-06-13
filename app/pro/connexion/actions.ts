"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  PRO_COOKIE,
  PRO_COOKIE_MAX_AGE,
  hashProPassword,
  safeNextPath,
} from "@/lib/pro-lock";

export async function connecterPro(formData: FormData) {
  const password = String(formData.get("password") ?? "").trim();
  const next = safeNextPath(String(formData.get("next") ?? "/pro/dashboard"));
  const expected = process.env.FFPN_PRO_PASSWORD;

  if (!expected) {
    redirect(next);
  }

  if (password !== expected) {
    const params = new URLSearchParams({ error: "1" });
    if (next !== "/pro/dashboard") params.set("next", next);
    redirect(`/pro/connexion?${params.toString()}`);
  }

  const value = await hashProPassword(expected);
  const store = await cookies();
  store.set({
    name: PRO_COOKIE,
    value,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: PRO_COOKIE_MAX_AGE,
    path: "/",
  });

  redirect(next);
}

export async function deconnecterPro() {
  const store = await cookies();
  store.delete(PRO_COOKIE);
  redirect("/pro");
}
