import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Olaleye Seye - Full Stack Developer",
  description:
    "Portfolio of Olaleye Seye, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["portfolio", "developer", "react", "nextjs", "javascript", "typescript"],
  authors: [{ name: "Olaleye Seye" }],
  openGraph: {
    title: "Olaleye Seye - Full Stack Developer",
    description:
      "Portfolio of Olaleye Seye, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    url: "",
    siteName: "Olaleye Seye Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olaleye Seye Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olaleye Seye - Full Stack Developer",
    description:
      "Portfolio of Olaleye Seye, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
