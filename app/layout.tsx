import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "אסתי גלר | שירותי משרד מקצועיים לרופאים וקליניקות - ניהול מרחוק",
  description:
    "שירותי Back Office מקצועיים לרופאים וקליניקות: ניהול תורים, גבייה, CRM ומזכירות מרחוק. חוסכים זמן וכסף.",

  keywords: [
    "שירותי משרד לרופאים",
    "ניהול מרפאות מרחוק",
    "שירותי back office",
    "אסתי גלר",
    "ניהול יומנים רפואיים",
    "גבייה מלקוחות",
    "הפקת דוחות",
    "ניהול מערכות קליניקה ו-CRM",
  ],

  creator: "אסתי גלר",
  publisher: "אסתי גלר - שירותי משרד",

  openGraph: {
    title: "אסתי גלר - שירותי משרד לרופאים ומרפאות",
    description: "אתם מתמקדים במטופלים - אני דואגת לכל השאר",
    url: "https://estioffice.co.il",
    siteName: "אסתי גלר - שירותי משרד",
    images: [
      {
        // חשוב: יש ליצור תמונה זו ולהעלות אותה לתיקיית public
        url: "https://estioffice.co.il/og-image.webp",
        width: 1200,
        height: 630,
        alt: "אסתי גלר - שירותי משרד לרופאים ומרפאות",
      },
      {
        url: "https://estioffice.co.il/og-square-image.webp",
        width: 600,
        height: 600,
        alt: "לוגו - אסתי גלר שירותי משרד",
      },
    ],
    locale: "he_IL",
    type: "website",
  },

  // הגדרות Twitter Card
  twitter: {
    card: "summary_large_image", // סוג הכרטיס עם תמונה גדולה
    title: "אסתי גלר | שירותי משרד לרופאים ומרפאות",
    description: "תתמקדו בטיפול - אני דואגת לכל השאר.",
    images: ["https://estioffice.co.il/og-image.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],

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
    google: "RQALfrohxvOxirfJI6NE3O3mUf2ZfaWRAVVmCLc57oY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head></head>
      <body className={rubik.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CL4R4PB25H"
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
              gtag('config', 'G-CL4R4PB25H');
            `,
          }}
        />
        <Script
          type="application/ld+json"
          id="organization-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AdministrativeAssistant",
              "@id": "https://estioffice.co.il/#organization",
              name: "אסתי גלר - שירותי משרד",
              url: "https://estioffice.co.il",
              founder: { "@type": "Person", name: "אסתי גלר" },
              logo: "https://estioffice.co.il/favicon.svg",
              description:
                "שירותי Back Office וניהול משרד מרחוק לרופאים וקליניקות.",
              telephone: "+972533309144",
              email: "estigeller1@gmail.com",
              sameAs: [
                "https://www.facebook.com/gelleresti",
                "https://www.linkedin.com/in/estigeller",
              ],
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
              priceRange: "₪₪",

              knowsLanguage: ["he"],
              serviceType:
                "Virtual back office management for clinics and professionals",
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "שירותי ניהול משרד וירטואליים למרפאות ורופאים",
                  description:
                    "שירות מקיף הכולל: ניהול יומן ותיאום תורים, גבייה, עדכון תיקים, ניהול CRM וקשר עם מטופלים.",
                  provider: { "@id": "https://estioffice.co.il/#organization" },
                },
              },
            }),
          }}
        />
        <Script
          type="application/ld+json"
          id="faq-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "איך אפשר לייעל את התפעול השוטף של הקליניקה",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "באמצעות מיקור חוץ של משימות ניהול משרד (back office) – תיאום תורים, גבייה ומענה לפניות – אפשר לחסוך זמן יקר ולהתמקד רק בטיפול.",
                  },
                },
                {
                  "@type": "Question",
                  name: "האם שירות ניהול משרד מרחוק עדיף על מזכירה במרפאה?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "כן, השירות חוסך בעלויות, גמיש יותר, אינו מצריך מיקום פיזי, ונעשה על ידי אדם מיומן ומנוסה בתחום הקליניקות.",
                  },
                },
                {
                  "@type": "Question",
                  name: "האם אפשר לשלב את השירות עם המערכות הקיימות שלי?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: " בוודאי. אני מתאימה את עצמי לכל מערכת בה אתה משתמש – בין אם זה CRM, מערכת תורים או ניהול מסמכים.",
                  },
                },
                {
                  "@type": "Question",
                  name: "איך אפשר להבטיח מעקב שוטף אחרי פניות ותשלומים?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "השירות כולל תיעוד מלא של כל פנייה, גבייה שוטפת, שליחת חשבוניות, והפקת דוחות חודשיים לפי הצורך.",
                  },
                },
                {
                  "@type": "Question",
                  name: "איך התמחור עובד",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "אנחנו בונים בייחד חבילה מותאמת אישית לצרכים שלך ושל המרפאה שלך",
                  },
                },
              ],
            }),
          }}
        />

        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
