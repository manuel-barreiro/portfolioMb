import BlurFade from "@/components/magicui/blur-fade"
import { ResumeCard } from "@/components/cards/resume-card"
import { WorkEntry } from "@/types/language-data"
import { useTranslations } from "next-intl"

export default function Work({ blurFadeDelay }: { blurFadeDelay: number }) {
  const t = useTranslations()
  const workEntries = t.raw("work") as WorkEntry[]

  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 5}>
          <h2 className="text-xl font-bold">{t("sectionTitles.work")}</h2>
        </BlurFade>
        {workEntries.map((work, id) => (
          <BlurFade key={work.company} delay={blurFadeDelay * 6 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
