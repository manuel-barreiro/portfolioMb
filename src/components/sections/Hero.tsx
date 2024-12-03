"use client"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "@/hooks/useTranslation"
import { staticData } from "@/data/static"

export default function Hero({ blurFadeDelay }: { blurFadeDelay: number }) {
  const { t, isLoading } = useTranslation()

  if (isLoading) {
    return null
  }

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex justify-between gap-1 md:gap-2">
          <div className="flex flex-1 flex-col space-y-1.5">
            <BlurFadeText
              delay={blurFadeDelay}
              className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
              yOffset={8}
              text={`${t.greeting} ${staticData.name.split(" ")[0]} 👋🏽`}
            />
            <BlurFadeText
              className="max-w-[600px] text-sm md:text-xl"
              delay={blurFadeDelay}
              text={t.description}
            />
          </div>
          <BlurFade delay={blurFadeDelay}>
            <Avatar className="size-28 border">
              <AvatarImage alt={staticData.name} src={staticData.avatarUrl} />
              <AvatarFallback>{staticData.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
