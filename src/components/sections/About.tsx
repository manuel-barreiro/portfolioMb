"use client"
import BlurFade from "@/components/magicui/blur-fade"
import Markdown from "react-markdown"
import { useTranslation } from "@/hooks/useTranslation"

export default function About({ blurFadeDelay }: { blurFadeDelay: number }) {
  const { t } = useTranslation()
  return (
    <section id="about">
      <BlurFade delay={blurFadeDelay * 3}>
        <h2 className="text-xl font-bold">{t.sectionTitles.about}</h2>
      </BlurFade>
      <BlurFade delay={blurFadeDelay * 4}>
        <Markdown className="prose max-w-full text-pretty text-justify font-sans text-sm text-muted-foreground dark:prose-invert">
          {t.summary}
        </Markdown>
      </BlurFade>
    </section>
  )
}
