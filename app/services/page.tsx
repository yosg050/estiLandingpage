import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "שירותי מזכירה וירטואלית לרופאים ומטפלים | גבייה, יומן, תורים | Esti Office",
  description:
    "מזכירה וירטואלית לרופאים ומטפלים: ניהול יומן ותיאום תורים, גבייה ממטופלים, תזכורות אוטומטיות בוואטסאפ ומערכות CRM. שירות מודולרי לבעלי מקצוע עצמאיים.",
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
