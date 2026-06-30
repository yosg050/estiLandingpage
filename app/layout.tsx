import type React from "react";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  title: "שירותי משרד מרחוק ומזכירה וירטואלית לרופאים ומטפלים | Esti Office",
  description:
    "שירותי משרד מרחוק ומזכירה וירטואלית לבעלי מקצוע בתחום הטיפול – ניהול יומן, גבייה, תיאום תורים ואדמיניסטרציה במיקור חוץ. ללא עלויות מעביד, ללא התחייבות.",

  keywords: [
    "שירותי משרד מרחוק",
    "שירותי משרד",
    "מזכירה וירטואלית",
    "ניהול משרד מרחוק",
    "מיקור חוץ מזכירות",
    "מזכירה במיקור חוץ",
    "מזכירה דיגיטלית",
    "מזכירה לעסק",
    "מזכירה מרחוק",
    "שירותי back office",
    "מזכירה לבעלי מקצוע",
    "תיאום תורים מרחוק",
    "גבייה לעסק",
    "ביטולי תורים פתרון",
    "ייעול עסק עצמאי",
    "כמה עולה מזכירה וירטואלית",
  ],

  creator: "אסתי גלר",
  publisher: "אסתי גלר - שירותי משרד",

  openGraph: {
    title: "שירותי משרד מרחוק ומזכירה וירטואלית לרופאים ומטפלים | Esti Office",
    description:
      "שירותי משרד מרחוק ומזכירה וירטואלית לבעלי מקצוע בתחום הטיפול – ניהול יומן, גבייה, תיאום תורים ואדמיניסטרציה במיקור חוץ. ללא עלויות מעביד, ללא התחייבות.",
    url: "https://estioffice.co.il",
    siteName: "Esti Office - ניהול משרד מרחוק",
    images: [
      {
        url: "https://estioffice.co.il/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Esti Office - ניהול משרד מרחוק ושירותי back office",
      },
      {
        url: "https://estioffice.co.il/og-square-image.webp",
        width: 600,
        height: 600,
        alt: "לוגו Esti Office - ניהול משרד מרחוק",
      },
    ],
    locale: "he_IL",
    type: "website",
  },

  // הגדרות Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Esti Office | שירותי משרד מרחוק ומזכירה וירטואלית",
    description:
      "שירותי משרד מרחוק, מזכירות במיקור חוץ, גבייה ואדמיניסטרציה – לבעלי מקצוע בתחום הטיפול והשירות האישי.",
    images: ["https://estioffice.co.il/og-image.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://estioffice.co.il",
  },

  manifest: "/manifest.json",

  verification: {
    google: "U_mO3ozacc4NsxVJbZCtPusNrmWRRH2puwRVXrXMyWA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <head>
        <meta name="author" content="אסתי גלר" />
        <meta
          name="facebook-domain-verification"
          content="c8kgd3xuby98ia2k0e9qlb65qn28q5"
        />
        {/* Google Analytics - in <head> for Search Console verification */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8VVDWHXYCZ"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8VVDWHXYCZ');
            `,
          }}
        />
      </head>
      <body className={rubik.className}>
        <Script
          type="application/ld+json"
          id="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://estioffice.co.il/#website",
                  url: "https://estioffice.co.il",
                  name: "Esti Office",
                  description:
                    "שירותי משרד מרחוק ומזכירה וירטואלית במיקור חוץ לבעלי מקצוע בתחומי הטיפול, הבריאות והשירות האישי",
                  inLanguage: "he-IL",
                  publisher: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                },
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://estioffice.co.il/#organization",
                  name: "Esti Office",
                  alternateName: "אסתי אופיס",
                  url: "https://estioffice.co.il",
                  logo: "https://estioffice.co.il/favicon.svg",
                  description:
                    "שירותי ניהול משרד מרחוק ומזכירות במיקור חוץ לבעלי מקצוע בתחומי הטיפול, הבריאות והשירות האישי",
                  telephone: "+972533309144",
                  email: "estigeller1@gmail.com",
                  founder: {
                    "@id": "https://estioffice.co.il/#person",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  serviceType: [
                    "ניהול משרד מרחוק",
                    "מזכירות במיקור חוץ",
                    "שירותי back office",
                    "גבייה מלקוחות",
                    "ניהול יומן ותיאום פגישות",
                  ],
                  knowsAbout: [
                    "ניהול משרד מרחוק",
                    "מזכירות במיקור חוץ",
                    "ניהול יומן ותורים",
                    "שירותי back office",
                    "ייעול עסקי",
                    "אוטומציות עסקיות",
                  ],
                  sameAs: [
                    "https://www.facebook.com/estioffice",
                    "https://www.linkedin.com/in/estigeller",
                  ],
                  knowsLanguage: "he",
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://estioffice.co.il/#localbusiness",
                  name: "Esti Office - ניהול משרד מרחוק",
                  image: "https://estioffice.co.il/og-image.webp",
                  url: "https://estioffice.co.il",
                  telephone: "+972533309144",
                  email: "estigeller1@gmail.com",
                  priceRange: "₪₪",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IL",
                    addressLocality: "Israel",
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                      ],
                      opens: "08:00",
                      closes: "17:00",
                    },
                  ],
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  parentOrganization: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://estioffice.co.il/#person",
                  name: "אסתי גלר",
                  alternateName: "Esti Geller",
                  url: "https://estioffice.co.il",
                  image: "https://estioffice.co.il/esti-profile.jpg",
                  jobTitle: "מנהלת משרד מרחוק",
                  description:
                    "מעל עשור של ניסיון בליווי בעלי מקצוע בתחומי הטיפול, הבריאות והשירות האישי. מקימת Esti Office.",
                  telephone: "+972533309144",
                  email: "estigeller1@gmail.com",
                  worksFor: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                  sameAs: ["https://www.linkedin.com/in/estigeller"],
                },
                {
                  "@type": "Service",
                  "@id": "https://estioffice.co.il/#service-diary",
                  name: "ניהול יומן ותיאום פגישות",
                  description:
                    "ניהול יומנים, תיאום פגישות עם לקוחות ומטופלים, שליחת תזכורות, טיפול בביטולים ושינויים.",
                  provider: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  serviceType: "ניהול יומן",
                },
                {
                  "@type": "Service",
                  "@id": "https://estioffice.co.il/#service-reports",
                  name: "תיעוד, מעקב והפקת דוחות",
                  description:
                    "הזנת מידע ותיעוד פגישות, מעקב שוטף והפקת דוחות ניהוליים.",
                  provider: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  serviceType: "תיעוד והפקת דוחות",
                },
                {
                  "@type": "Service",
                  "@id": "https://estioffice.co.il/#service-privacy",
                  name: "דיסקרטיות וחיסיון מלא",
                  description:
                    "טיפול בלקוחות ומטופלים בצורה דיסקרטית ושמירה מלאה על פרטיותם.",
                  provider: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  serviceType: "שמירת פרטיות",
                },
                {
                  "@type": "Service",
                  "@id": "https://estioffice.co.il/#service-digital",
                  name: "ניהול מערכות וכלים דיגיטליים",
                  description:
                    "עבודה שוטפת עם תוכנות ניהול ייעודיות, כולל הקמה, תחזוקה ואופטימיזציה.",
                  provider: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  serviceType: "ניהול מערכות דיגיטליות",
                },
                {
                  "@type": "Service",
                  "@id": "https://estioffice.co.il/#service-billing",
                  name: "גבייה וסדר פיננסי",
                  description:
                    "גבייה מלקוחות, שליחת תזכורות תשלום, טיפול בהוראות קבע, ניהול ספקים ועבודה שוטפת מול הנהלת החשבונות.",
                  provider: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  serviceType: "גבייה וניהול פיננסי",
                },
                {
                  "@type": "Service",
                  "@id": "https://estioffice.co.il/#service-automation",
                  name: "אוטומציות וטכנולוגיה עדכנית",
                  description:
                    "הטמעת כלים טכנולוגיים חכמים: תזכורות אוטומטיות בוואטסאפ, טפסים דיגיטליים, מערכות זימון עצמי ואוטומציות שחוסכות זמן.",
                  provider: {
                    "@id": "https://estioffice.co.il/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Israel",
                  },
                  serviceType: "אוטומציה וטכנולוגיה",
                },
              ],
            }),
          }}
        />
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
        <AccessibilityWidget />
        <FacebookPixel />
      </body>
    </html>
  );
}
