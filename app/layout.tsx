import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const rubik = Rubik({ subsets: ["hebrew"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E.G שירותי משרד",
  description: "ניהול חכם - הצלחה מובטחת",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" >
      <head>
        <meta
          name="google-site-verification"
          content="RQALfrohxvOxirfJI6NE3O3mUf2ZfaWRAVVmCLc57oY"
        />

        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preconnect"
          href="https://estioffice.co.il"
          crossOrigin="anonymous"
        />
        {/* <link rel="stylesheet" href="/_next/static/css/1be41ebdaec24233.css" /> */}
      </head>
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

        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
