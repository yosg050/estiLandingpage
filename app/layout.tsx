import type React from "react";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

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
  title: "ניהול משרד מרחוק ושירותי back office | Esti Office",
  description:
    "שירותי ניהול משרד, מזכירות, גבייה ואדמיניסטרציה מרחוק – לרופאים, מטפלים, יועצים וכל בעל עסק שנותן שירות אישי. בלי להעסיק מזכירה, בלי עלויות מעביד.",

  keywords: [
    "ניהול משרד מרחוק",
    "שירותי back office",
    "עוזרת אישית מרחוק",
    "מיקור חוץ אדמיניסטרטיבי",
    "ייעול עסק",
    "ניהול תפעולי",
    "גבייה מלקוחות",
    "שירותי מזכירות",
    "ניהול קליניקה",
    "ניהול מרפאה",
    "תיאום תורים",
    "שירות לקוחות מרחוק",
    "מזכירה מרחוק",
    "מזכירה וירטואלית",
    "ייעול מרפאה",
    "אסתי גלר",
  ],

  creator: "אסתי גלר",
  publisher: "אסתי גלר - שירותי משרד",

  openGraph: {
    title: "Esti Office | ניהול משרד מרחוק לבעלי עסקים בתחומי הטיפול והשירות",
    description:
      "שירותי ניהול משרד, מזכירות, גבייה ואדמיניסטרציה מרחוק – לרופאים, מטפלים, יועצים וכל בעל עסק שנותן שירות אישי.",
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
    title: "Esti Office | ניהול משרד מרחוק ושירותי back office",
    description:
      "שירותי ניהול משרד, מזכירות, גבייה ואדמיניסטרציה מרחוק – לרופאים, מטפלים, יועצים וכל בעל עסק שנותן שירות אישי.",
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
        {/* Google Analytics - in <head> for Search Console verification */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6EBV9FJT3N"
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
              gtag('config', 'G-6EBV9FJT3N');
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
                    "ניהול מרפאות",
                    "ניהול קליניקות",
                    "מזכירות רפואית",
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
                  name: "מה ההבדל בין ניהול משרד מרחוק למזכירה שכירה?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ניהול משרד מרחוק חוסך בעלויות מעביד, מציע גמישות מלאה, ונעשה על ידי מנהלת משרד מנוסה שמכירה את התחום שלכם. בניגוד למזכירה שכירה, אין צורך במשרד פיזי, אין ימי מחלה או חופשה, והשירות מותאם אישית להיקף שאתם צריכים.",
                  },
                },
                {
                  "@type": "Question",
                  name: "איך אפשר לייעל את התפעול השוטף של מרפאה או קליניקה?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "באמצעות מיקור חוץ של ניהול המשרד – תיאום תורים, גבייה, מענה לפניות ואוטומציות – אפשר לחסוך שעות של עבודה ניהולית ולהתמקד בטיפול במטופלים.",
                  },
                },
                {
                  "@type": "Question",
                  name: "האם השירות מתאים גם לעסקים שלא בתחום הרפואי?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "כן. השירות מתאים לכל בעל מקצוע שנותן שירות אישי – מטפלים, יועצים, קוסמטיקאיות, דיאטניות ועוד. כל מי שרוצה להתפנות מהנטל הניהולי ולהתמקד בעבודה המקצועית.",
                  },
                },
                {
                  "@type": "Question",
                  name: "האם אפשר לשלב את השירות עם המערכות הקיימות שלי?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "בוודאי. אני מתאימה את עצמי לכל מערכת שאתם עובדים איתה – בין אם זה CRM, מערכת תורים, תוכנת ניהול קליניקה או כל כלי דיגיטלי אחר.",
                  },
                },
                {
                  "@type": "Question",
                  name: "כמה עולה ניהול משרד במיקור חוץ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "התמחור מותאם אישית לפי היקף השירותים. אפשר להתחיל עם שירות אחד (כמו ניהול יומן או גבייה) ולהרחיב בהדרגה. שיחת ההיכרות בחינם וללא התחייבות.",
                  },
                },
                {
                  "@type": "Question",
                  name: "מה היתרונות של מיקור חוץ ניהולי לעסק קטן?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "חיסכון בעלויות מעביד, גמישות מלאה בהיקף השירות, מקצועיות מוכחת, שירות מותאם אישית, וללא התחייבות לטווח ארוך. אתם משלמים רק על מה שאתם צריכים.",
                  },
                },
                {
                  "@type": "Question",
                  name: "איך שירות ניהול מרחוק עובד ביום-יום?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "אני זמינה בימי עבודה לניהול יומן, מענה לפניות, גבייה, תיעוד והפקת דוחות. התקשורת מתנהלת בטלפון, וואטסאפ ומייל. תקבלו דוחות חודשיים ועדכונים שוטפים.",
                  },
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
      </body>
    </html>
  );
}
