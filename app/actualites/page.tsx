import { redirect } from "next/navigation";

// Ancienne route /actualites — intégrée dans /ressources (section
// "Communiqués officiels") après refonte du manifeste Cowork.
export default function ActualitesRedirect() {
  redirect("/ressources");
}
