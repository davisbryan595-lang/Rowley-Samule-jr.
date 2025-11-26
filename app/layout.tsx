import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rowley Samuels Jr. | Author & Musician",
  description:
    "Discover the works of Rowley Samuels Jr. - Author, Poet, Songwriter, and Storyteller from Farrell, PA. Explore books, music, and collaborations.",
  keywords: "author, poet, songwriter, music, Pennsylvania, Farrell",
  generator: "v0.app",
  openGraph: {
    title: "Rowley Samuels Jr. - Author & Musician",
    description: "The Works of Rowley Samuels Jr. - Poetry, Fiction, Music, and Storytelling",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/images/transparent-logo.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased bg-primary text-foreground`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
