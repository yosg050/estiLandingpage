import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "השירותים שלנו | אסתי גלר - ניהול משרד מרחוק",
  description:
    "ניהול יומן, תיעוד והפקת דוחות, גבייה, ניהול מערכות דיגיטליות ואוטומציות - כל מה שצריך כדי לנהל משרד מקצועי מרחוק.",
  alternates: {
    canonical: "https://estioffice.co.il/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Services />
    </main>
  );
}
