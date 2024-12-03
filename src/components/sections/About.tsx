import BlurFade from "@/components/magicui/blur-fade"
import Markdown from "react-markdown"
import { useTranslations } from "next-intl"

export default function About({ blurFadeDelay }: { blurFadeDelay: number }) {
  const t = useTranslations()
  return (
    <section id="about">
      <BlurFade delay={blurFadeDelay * 3}>
        <h2 className="text-md font-bold sm:text-xl">
          {t("sectionTitles.about")}
        </h2>
      </BlurFade>
      <BlurFade delay={blurFadeDelay * 4}>
        <Markdown className="prose max-w-full text-pretty text-justify font-sans text-xs text-muted-foreground dark:prose-invert sm:text-sm">
          {t("summary")}
        </Markdown>
      </BlurFade>
    </section>
  )
}
