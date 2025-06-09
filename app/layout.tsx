import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import { Fredoka } from "next/font/google"
import { Rubik } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })
// const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "700"] })
const rubik = Rubik({ subsets: ["hebrew"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "E.G שירותי משרד ",
  description: "ניהול חכם - הצלחה מובטחת",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CL4R4PB25H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CL4R4PB25H');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  )
}
