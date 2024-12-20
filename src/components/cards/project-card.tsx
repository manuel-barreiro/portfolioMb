import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown"
import { Icons } from "@/components/icons"
import SkillTag from "../sections/skills/components/SkillTag"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"

interface Props {
  title: string
  href?: string
  description: string
  dates: string
  tags: Array<{ slug: string; text: string }>
  link?: string
  image?: string
  video?: string
  links?: readonly {
    icon: "globe" | "github"
    type: string
    href: string
  }[]
  className?: string
}

function renderIcon(iconType: "globe" | "github") {
  const iconMap = {
    globe: <Icons.globe className="size-3" />,
    github: <Icons.github className="size-3" />,
  }
  return iconMap[iconType]
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [isMediaLoaded, setIsMediaLoaded] = useState(false)

  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border shadow-lg transition-all duration-300 ease-out hover:shadow-xl",
        "bg-gradient-to-br from-white via-[hsl(60,30%,98%)] to-[hsl(60,30%,94%)]",
        "dark:from-[hsl(240,10%,10%)] dark:via-[hsl(240,10%,12%)] dark:to-[hsl(240,10%,15%)]"
      )}
    >
      <div className="relative h-40 w-full overflow-hidden rounded-lg">
        {!isMediaLoaded && <Skeleton className="h-full w-full" />}
        {image ? (
          <Image
            src={image}
            width={400}
            height={400}
            alt={title}
            className="h-full w-full object-cover object-top"
            onLoad={() => setIsMediaLoaded(true)}
          />
        ) : (
          video && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-top"
              onLoadedData={() => setIsMediaLoaded(true)}
            >
              <source src={video} type="video/mp4" />
            </video>
          )
        )}
      </div>
      <CardHeader className="p-2">
        <div className="space-y-1">
          <CardTitle className="text-md mt-1">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty text-justify font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag, idx) => (
              // <Badge
              //   className="px-1 py-0 text-[10px]"
              //   variant="default"
              //   key={tag}
              // >
              //   {tag}
              // </Badge>
              <SkillTag
                key={idx}
                slug={tag.slug}
                text={tag.text}
                className="gap-1 px-[3px] py-[2px] text-xs"
              />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  variant="secondary"
                  className="flex gap-2 px-2 py-1 text-[10px]"
                >
                  {renderIcon(link.icon)}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
