"use client"
import { IconCloudDemo } from "@/components/sections/skills/components/IconCloud"
import SkillsHeader from "./components/SkillsHeader"
import SkillsFilter from "./components/SkillsFilter"

export default function Skills({ blurFadeDelay }: { blurFadeDelay: number }) {
  return (
    <section id="skills" className="flex min-h-[100vh] w-full flex-col">
      <div className="relative grid w-full items-center justify-center gap-4 px-4 py-32 text-center md:px-6">
        <SkillsHeader blurFadeDelay={blurFadeDelay} />
        <IconCloudDemo />
      </div>
      <SkillsFilter blurFadeDelay={0.007} />
    </section>
  )
}
