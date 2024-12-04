import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/navbar"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages, getTranslations } from "next-intl/server"
import { ToastProvider } from "@/components/custom-toast/ToastProvider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()
  return {
    metadataBase: new URL(t("url")),
    title: {
      default: t("name"),
      template: `%s | ${t("name")}`,
    },
    description: t("description"),
    openGraph: {
      title: `${t("name")}`,
      description: t("description"),
      url: t("url"),
      siteName: `${t("name")}`,
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
      title: `${t("name")}`,
      card: "summary_large_image",
    },
    verification: {
      google: "",
      yandex: "",
    },
  }
}

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: "device-width",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider>
              <TooltipProvider delayDuration={0}>
                {children}
                <Navbar />
              </TooltipProvider>
            </ToastProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
