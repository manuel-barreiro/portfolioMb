import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { staticData } from "@/data/static"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(staticData.url),
  title: {
    default: staticData.name,
    template: `%s | ${staticData.name}`,
  },
  description:
    "Ingeniero Industrial especializado en Business Intelligence y desarrollo de software. Data Engineer con experiencia en Nestlé IT y proyectos freelance. Apasionado por la tecnología y los datos.",
  openGraph: {
    title: `${staticData.name}`,
    description:
      "Ingeniero Industrial especializado en Business Intelligence y desarrollo de software. Data Engineer con experiencia en Nestlé IT y proyectos freelance. Apasionado por la tecnología y los datos.",
    url: staticData.url,
    siteName: `${staticData.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${staticData.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <LanguageProvider>
              {children}
              <Navbar />
            </LanguageProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
