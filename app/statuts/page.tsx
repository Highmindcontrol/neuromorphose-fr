import { redirect } from "next/navigation";

// Ancienne route /statuts — intégrée dans /federation après refonte
// du manifeste éditorial Cowork du 5 juin 2026.
export default function StatutsRedirect() {
  redirect("/federation");
}
