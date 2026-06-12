import { redirect } from "next/navigation";

/**
 * Dashboard représentant FFPN — squelette protégé.
 *
 * Pour l'instant : redirection systématique vers /pro/connexion.
 * À brancher sur Supabase auth (même projet partagé que
 * neuroactif-platform et ataraxis-platform). Quand un représentant
 * sera authentifié, on affichera ici les six outils ci-dessous
 * (libellés et descriptifs validés par François le 12 juin 2026,
 * ne pas les exposer publiquement avant authentification).
 *
 * ---
 * 6 outils du poste de travail représentant à afficher après auth :
 *
 *   1. Tableau de bord prospects
 *      « Liste des praticiens et écoles à approcher dans votre zone,
 *      statut de chaque contact (à appeler, en cours, conclu, à
 *      relancer), priorisation hebdomadaire. »
 *
 *   2. Agenda & rendez-vous
 *      « Vos rendez-vous physiques et en visio, synchronisés avec
 *      votre Google Calendar. Préparation automatique de fiche
 *      briefing avant chaque rendez-vous. »
 *
 *   3. Compte rendu de rendez-vous
 *      « Saisie rapide post-rendez-vous : décisions, actions,
 *      prochaine étape. Tout est archivé et remonté à la direction
 *      pour suivi du pipeline. »
 *
 *   4. Visio directe avec la direction
 *      « Bouton "Visio" direct vers François pour un débrief rapide,
 *      une validation ou une question stratégique — sans passer par
 *      un calendrier. »
 *
 *   5. Bibliothèque commerciale
 *      « Présentations, argumentaires, FAQ, témoignages, à jour en
 *      permanence. Versions selon le profil cible : école de formation,
 *      praticien individuel, institution. »
 *
 *   6. Suivi de commission
 *      « Visualisation en temps réel de vos adhésions générées,
 *      commissions acquises et à venir. Téléchargement de votre
 *      relevé mensuel. »
 */
export default function DashboardRepresentantPage() {
  redirect("/pro/connexion");
}
