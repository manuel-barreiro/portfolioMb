"use client"

import BlurFade from "@/components/magicui/blur-fade"
import { ProjectCard } from "@/components/cards/project-card"
import { ProjectEntry } from "@/types/language-data"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Projects({ blurFadeDelay }: { blurFadeDelay: number }) {
  const t = useTranslations()
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const recentProjects = t.raw("projects.recent") as ProjectEntry[]

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isInView, isLoaded])

  return (
    <section id="projects" className="sm:py-32" ref={sectionRef}>
      <div className="w-full space-y-12">
        <BlurFade delay={blurFadeDelay * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {t("sectionTitles.projects")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t("projects.heading")}
              </h2>
              <p className="text-sm text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("projects.description")}
              </p>
            </div>
          </div>
        </BlurFade>
        {isLoaded && (
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2">
            {recentProjects.map((project, id) => (
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
        )}
      </div>
    </section>
  )
}
