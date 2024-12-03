import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Work from "@/components/sections/Work"
import Education from "@/components/sections/Education"
import Skills from "@/components/sections/skills/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <Hero blurFadeDelay={BLUR_FADE_DELAY} />
      <About blurFadeDelay={BLUR_FADE_DELAY} />
      <Work blurFadeDelay={BLUR_FADE_DELAY} />
      <Education blurFadeDelay={BLUR_FADE_DELAY} />
      <Skills blurFadeDelay={BLUR_FADE_DELAY} />
      <Projects blurFadeDelay={BLUR_FADE_DELAY} />
      <Contact blurFadeDelay={BLUR_FADE_DELAY} />
    </main>
  )
}
