import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Fredoka } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "E.G שירותי משרד ",
  description:
    "ניהול חכם - הצלחה מובטחת",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXX');
            `,
          }}
        />
        <link rel="icon" href="/logo2.ico" />

      </head>
      {/* <body className={inter.className}> */}
      <body className={fredoka.className}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
