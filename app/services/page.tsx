import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "שירותי ניהול משרד ומזכירות מרחוק | גבייה, יומן, אוטומציה | Esti Office",
  description:
    "ניהול יומן ותיאום תורים, גבייה וסדר פיננסי, תיעוד והפקת דוחות, ניהול מערכות CRM ואוטומציות – שירות מודולרי ומותאם אישית לבעלי מקצוע בתחומי הטיפול והשירות.",
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
