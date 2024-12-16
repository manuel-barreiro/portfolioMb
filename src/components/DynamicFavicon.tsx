"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function DynamicFavicon() {
  const { theme } = useTheme()

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!favicon) {
      const newFavicon = document.createElement("link")
      newFavicon.rel = "icon"
      document.head.appendChild(newFavicon)
    }

    const iconPath =
      theme === "dark" ? "/favicon-dark.ico" : "/favicon-light.ico"
    document.querySelector<HTMLLinkElement>('link[rel="icon"]')!.href = iconPath
  }, [theme])

  return null
}
