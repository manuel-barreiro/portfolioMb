"use client"
import { IconCloudDemo } from "@/components/sections/skills/components/IconCloud"
import SkillsHeader from "./components/SkillsHeader"
import SkillsFilter from "./components/SkillsFilter"

export default function Skills({ blurFadeDelay }: { blurFadeDelay: number }) {
  return (
    <section
      id="skills"
      className="flex h-[120vh] min-h-[100vh] w-full flex-col gap-0 pb-56 sm:py-24"
    >
      <div className="relative grid w-full items-center justify-center gap-4 px-4 py-28 text-center md:px-6">
        <SkillsHeader blurFadeDelay={blurFadeDelay} />
        <IconCloudDemo />
      </div>
      <SkillsFilter blurFadeDelay={0.007} />
    </section>
  )
}
