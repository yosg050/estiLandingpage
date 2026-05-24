import type { Metadata } from "next";
import Script from "next/script";
import Solution from "@/components/Solution";

export const metadata: Metadata = {
  title: "אסתי גלר | מזכירה וירטואלית לרופאים ומטפלים עצמאיים | Esti Office",
  description:
    "אסתי גלר – מזכירה וירטואלית ומנהלת משרד מרחוק לרופאים, פסיכולוגים ומטפלים עצמאיים. מעל עשור שנים ניסיון, ניהול יומן וגבייה ממטופלים.",
  alternates: {
    canonical: "https://estioffice.co.il/about",
  },
  openGraph: {
    title: "אסתי גלר | מזכירה וירטואלית לרופאים ומטפלים עצמאיים | Esti Office",
    description: "אסתי גלר – מזכירה וירטואלית ומנהלת משרד מרחוק לרופאים, פסיכולוגים ומטפלים עצמאיים. מעל עשור שנים ניסיון, ניהול יומן וגבייה ממטופלים.",
    url: "https://estioffice.co.il/about",
    siteName: "Esti Office - ניהול משרד מרחוק",
    locale: "he_IL",
    type: "website",
    images: [{ url: "https://estioffice.co.il/og-image.webp", width: 1200, height: 630, alt: "אסתי גלר - מנהלת משרד מרחוק" }],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "בית", item: "https://estioffice.co.il" },
    { "@type": "ListItem", position: 2, name: "אודות", item: "https://estioffice.co.il/about" },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section
        className="min-h-screen py-10 px-4 bg-white flex items-center"
        dir="rtl"
      >
        <div className="container mx-auto">
          <Solution />
        </div>
      </section>
    </main>
  );
}
