"use client"
import BlurFade from "@/components/magicui/blur-fade"
import { useTranslation } from "@/hooks/useTranslation"
import { ProjectCard } from "@/components/project-card"

export default function Projects({ blurFadeDelay }: { blurFadeDelay: number }) {
  const { t } = useTranslation()
  return (
    <section id="projects" className="md:py-48">
      <div className="w-full space-y-12">
        <BlurFade delay={blurFadeDelay * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {t.sectionTitles.projects}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t.projects.heading}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.projects.description}
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
          {t.projects.recent.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={blurFadeDelay * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
