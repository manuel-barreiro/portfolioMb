import BlurFade from "@/components/magicui/blur-fade"
import { useTranslations } from "next-intl"

export default function Contact({ blurFadeDelay }: { blurFadeDelay: number }) {
  const t = useTranslations()
  return (
    <section id="contact">
      <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
        <BlurFade delay={blurFadeDelay * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              {t("sectionTitles.contact")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("contact.heading")}
            </h2>
            <p className="mx-auto max-w-[600px] text-sm text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("contact.description")} {t("contact.channels")}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
