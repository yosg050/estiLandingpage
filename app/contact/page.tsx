import type { Metadata } from "next";
import Script from "next/script";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "צור קשר | מזכירה וירטואלית לרופאים ומטפלים | Esti Office",
  description:
    "רוצים מזכירה וירטואלית לעסק שלכם? שיחת היכרות בחינם וללא התחייבות – טלפון, WhatsApp או קביעת פגישה אונליין.",
  alternates: {
    canonical: "https://estioffice.co.il/contact",
  },
  openGraph: {
    title: "צור קשר | מזכירה וירטואלית לרופאים ומטפלים | Esti Office",
    description: "רוצים מזכירה וירטואלית לעסק שלכם? שיחת היכרות בחינם וללא התחייבות – טלפון, WhatsApp או קביעת פגישה אונליין.",
    url: "https://estioffice.co.il/contact",
    siteName: "Esti Office - ניהול משרד מרחוק",
    locale: "he_IL",
    type: "website",
    images: [{ url: "https://estioffice.co.il/og-image.webp", width: 1200, height: 630, alt: "יצירת קשר - Esti Office" }],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "בית", item: "https://estioffice.co.il" },
    { "@type": "ListItem", position: 2, name: "יצירת קשר", item: "https://estioffice.co.il/contact" },
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto">
        <ContactSection />
      </div>
    </main>
  );
}
