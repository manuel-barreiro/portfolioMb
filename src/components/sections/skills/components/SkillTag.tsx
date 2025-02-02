"use client"

import { FC, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  fetchSimpleIcons,
  SimpleIcon,
  renderSimpleIcon,
} from "react-icon-cloud"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface SkillTagProps {
  slug: string
  text: string
  className?: string
}

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "dark" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "dark" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "light" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 20, // Smaller size for badges
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

const SkillTag: FC<SkillTagProps> = ({ slug, text, className }) => {
  const [iconData, setIconData] = useState<SimpleIcon | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: [slug] }).then((data) => {
      setIconData(data.simpleIcons[slug])
    })
  }, [slug])

  return (
    <Badge
      className={cn(
        "flex cursor-default items-center gap-2 px-2 py-2",
        className
      )}
    >
      {iconData && (
        <span className={cn("flex size-4 items-center")}>
          {renderCustomIcon(iconData, theme || "dark")}
        </span>
      )}
      <span className="text-xs">{text}</span>
    </Badge>
  )
}

export default SkillTag
