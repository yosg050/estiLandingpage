import type { Metadata } from "next";
import Script from "next/script";
import Services from "@/components/Services";
import PageViewTracker from "@/components/PageViewTracker";

export const metadata: Metadata = {
  title: "שירותי מזכירה וירטואלית לרופאים ומטפלים | גבייה, יומן, תורים | Esti Office",
  description:
    "מזכירה וירטואלית לרופאים ומטפלים: ניהול יומן ותיאום תורים, גבייה ממטופלים, תזכורות אוטומטיות בוואטסאפ ומערכות CRM. שירות מודולרי לבעלי מקצוע עצמאיים.",
  alternates: {
    canonical: "https://estioffice.co.il/services",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "בית", item: "https://estioffice.co.il" },
    { "@type": "ListItem", position: 2, name: "שירותים", item: "https://estioffice.co.il/services" },
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {/* Facebook Pixel + GA4 ViewContent for the services page */}
      <PageViewTracker type="service" identifier="services_page" />
      <Services />
    </main>
  );
}
