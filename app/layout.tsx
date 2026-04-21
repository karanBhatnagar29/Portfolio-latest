import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Karan Bhatnagar | Full-Stack Developer & Co-Founder",
  description:
    "Portfolio of Karan Bhatnagar, a full-stack developer, founder of Junto, and co-founder building modern social products, marketplaces, and scalable digital experiences.",
  keywords:
    "Karan Bhatnagar, portfolio, Junto, social app founder, marketplace builder, Next.js developer, co-founder, UI UX, ecommerce",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background transition-colors duration-300">
            <Header />
            <main className="flex-1 pb-28 md:pb-0">{children}</main>
            <MobileBottomNav />
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
