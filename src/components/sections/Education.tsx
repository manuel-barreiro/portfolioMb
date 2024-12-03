"use client"
import BlurFade from "@/components/magicui/blur-fade"
import { ResumeCard } from "@/components/resume-card"
import { useTranslation } from "@/hooks/useTranslation"

export default function Education({
  blurFadeDelay,
}: {
  blurFadeDelay: number
}) {
  const { t } = useTranslation()

  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 7}>
          <h2 className="text-xl font-bold">{t.sectionTitles.education}</h2>
        </BlurFade>
        {t.education.map((education, id) => (
          <BlurFade
            key={education?.school}
            delay={blurFadeDelay * 8 + id * 0.05}
          >
            {education && (
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            )}
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
