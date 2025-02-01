"use client"
import BlurFade from "@/components/magicui/blur-fade"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Terminal, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useTranslations } from "next-intl"
import Typewriter from "typewriter-effect"

export default function CodeBlock({
  blurFadeDelay,
}: {
  blurFadeDelay: number
}) {
  const [copied, setCopied] = useState(false)
  const t = useTranslations()

  const copyToClipboard = () => {
    navigator.clipboard.writeText("industrial engineer who/codes")
    setCopied(true)
    setTimeout(() => setCopied(false), 20000)
  }

  return (
    <BlurFade delay={blurFadeDelay}>
      <Card className="relative overflow-hidden border-none bg-gray-900">
        <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-950 px-4 py-2">
          <Terminal className="h-4 w-4 text-gray-400" />
          <div className="text-xs text-gray-400">manuel</div>
        </div>

        <div className="group relative">
          <div className="flex items-center gap-2 p-3 font-mono text-xs sm:p-4 sm:text-sm">
            <span className="text-gray-500">$</span>{" "}
            <span className="text-gray-200">
              <Typewriter
                options={{
                  strings: t.raw("terminal.arr") as string[],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "absolute right-[5%] top-[25%] h-6 w-6 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100",
              copied && "text-green-500"
            )}
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </Card>
    </BlurFade>
  )
}
