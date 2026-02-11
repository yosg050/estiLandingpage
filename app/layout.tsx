import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import {Alef, Rubik } from "next/font/google";
import Script from "next/script";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const alef = Alef({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const viewport: Metadata = {
  title: "שירותי משרד מקצועיים לרופאים ומרפאות | מזכירות רפואית מרחוק",
  description:
    "שירותי מזכירות רפואית וניהול משרד מרחוק לרופאים ומרפאות בהתאמה אישית: ניהול יומן, מענה לפניות, גבייה וסדר תפעולי – בלי להעסיק מזכירה ",

  keywords: [
    "שירותי משרד לרופאים",
    "ניהול מרפאות מרחוק",
    "שירותי back office",
    "אסתי גלר",
    "ניהול יומנים רפואיים",
    "גבייה מלקוחות",
    "הפקת דוחות",
    "ניהול מערכות קליניקה ו-CRM",
    "מזכירה רפואית מרחוק",
    "ניהול מרפאה אונליין",
    "שירותי Back Office רפואי",
    "מזכירה רפואית מרחוק מנהלת יומן תורים",
  ],

  creator: "אסתי גלר",
  publisher: "אסתי גלר - שירותי משרד",

  openGraph: {
    title: "אסתי גלר - שירותי משרד לרופאים ומרפאות",
    description: "אתם מתמקדים בלקוחות - אני דואגת לכל השאר",
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
    <html lang="he">
      <head>
        <meta name="author" content="אסתי גלר" />
      </head>
      <body className={rubik.className}>
        {/* Google Analytics */}
        {/* <Script
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
        /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6EBV9FJT3N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6EBV9FJT3N');
        `,
          }}
        />
        <Script
          type="application/ld+json"
          id="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://estioffice.co.il/#organization",
                  name: "Esti Office",
                  alternateName: "אסתי גלר - שירותי משרד",
                  url: "https://estioffice.co.il",
                  logo: "https://estioffice.co.il/favicon.svg",
                  description:
                    "שירותי Back Office וניהול משרד מרחוק לבעלי מקצוע בתחומי הטיפול, הבריאות והשירות האישי.",
                  telephone: "+972533309144",
                  email: "estigeller1@gmail.com",
                  founder: {
                    "@id": "https://estioffice.co.il/#person",
                  },
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
                  sameAs: [
                    "https://www.linkedin.com/in/estigeller",
                  ],
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
                  name: "איך אפשר לייעל את התפעול השוטף של מרפאה",
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
