import { redirect } from "next/navigation";

// Ancienne route /adherer — renommée en /devenir-praticien après
// refonte du manifeste éditorial Cowork du 5 juin 2026.
export default function AdhererRedirect() {
  redirect("/devenir-praticien");
}
