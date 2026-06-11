import { redirect } from "next/navigation";

// Ancienne route /recherche — la recherche scientifique est désormais
// présentée dans la section /methode (les 6 lignées scientifiques
// convergentes) et le détail doctrinal vit sur neuromorphose.com.
export default function RechercheRedirect() {
  redirect("/methode");
}
