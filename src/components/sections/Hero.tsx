import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslations } from "next-intl"

export default function Hero({ blurFadeDelay }: { blurFadeDelay: number }) {
  const t = useTranslations()

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex justify-between gap-1 md:gap-2">
          <div className="flex flex-1 flex-col space-y-1.5">
            <div className="flex items-center gap-2">
              <BlurFadeText
                delay={blurFadeDelay}
                className="text-xl font-bold tracking-tighter sm:!text-5xl xl:!text-5xl/none [@media(min-width:380px)]:text-2xl"
                text={`${t("greeting")} ${t("name").split(" ")[0]}`}
              />
              <BlurFadeText
                delay={blurFadeDelay}
                className="mb-4 animate-wiggle text-xl font-bold tracking-tighter animate-delay-1000 animate-duration-[2000ms] animate-infinite animate-ease-in-out sm:!text-5xl xl:!text-5xl/none [@media(min-width:380px)]:text-2xl"
                text={`👋🏽`}
              />
            </div>

            <BlurFadeText
              className="prose max-w-[450px] text-pretty font-sans text-sm text-muted-foreground dark:prose-invert sm:text-lg"
              delay={blurFadeDelay}
              text={t("description")}
            />
          </div>
          <BlurFade delay={blurFadeDelay}>
            <Avatar className="size-28 border lg:size-32">
              <AvatarImage alt={t("name")} src={"/profile.webp"} />
              <AvatarFallback>{t("initials")}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
