import { redirect } from "next/navigation";

// Ancienne route /mission — renommée en /federation après refonte
// du manifeste éditorial Cowork du 5 juin 2026.
export default function MissionRedirect() {
  redirect("/federation");
}
