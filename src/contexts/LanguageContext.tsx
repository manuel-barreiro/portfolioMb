// contexts/LanguageContext.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { EN_DATA } from "@/data/languages/en"
import { LanguageData } from "@/types/language-data" // Ensure this path is correct
import { ES_DATA } from "@/data/languages/es"
import Cookies from "js-cookie"

type LanguageContextType = {
  language: "en" | "es"
  toggleLanguage: () => void
  t: LanguageData
  isLoading: boolean
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"en" | "es">("en") // Start with "en" for SSR
  const [isLoading, setIsLoading] = useState(true) // Add loading state

  // Run this effect only on client-side after hydration
  useEffect(() => {
    const savedLanguage = Cookies.get("language") as "en" | "es"
    const browserLang = window.navigator.language.toLowerCase()
    const initialLang =
      savedLanguage || (browserLang.startsWith("es") ? "es" : "en")

    setLanguage(initialLang)
    if (!savedLanguage) {
      Cookies.set("language", initialLang, { expires: 365 })
    }
    setIsLoading(false)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en"
    setLanguage(newLang)
    Cookies.set("language", newLang, { expires: 365 })
  }

  const t = (language === "en" ? EN_DATA : ES_DATA) as LanguageData

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t, isLoading }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
