import type { Metadata } from "next";
import { ChromePublicConditionnel } from "@/components/chrome-public-conditionnel";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FFPN — Fédération Française des Praticiens de la Neuromorphose®",
    template: "%s · FFPN",
  },
  description:
    "La Fédération Française des Praticiens de la Neuromorphose® fédère les professionnels de l'accompagnement formés à la Neuromorphose® et porte la recherche scientifique sur le son, la musique et les ressentis émotionnels dans le développement cérébral.",
  metadataBase: new URL("https://neuromorphose.fr"),
  openGraph: {
    title: "FFPN — Fédération Française des Praticiens de la Neuromorphose®",
    description:
      "Réseau international des praticiens de la Neuromorphose®. Ouverture officielle septembre 2026, déploiement sur 20 pays en 5 ans.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <ChromePublicConditionnel>{children}</ChromePublicConditionnel>
      </body>
    </html>
  );
}
