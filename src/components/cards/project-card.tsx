"use client"
import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown"
import { Icons } from "@/components/icons"
import SkillTag from "@/components/sections/skills/components/SkillTag"
import { Fullscreen } from "lucide-react"

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

const iconMap = {
  globe: <Icons.globe className="size-4" />,
  github: <Icons.github className="size-4" />,
} as const

function renderIcon(iconType: "globe" | "github") {
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
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Pause video when dialog closes
  const handleDialogChange = (open: boolean) => {
    setIsVideoDialogOpen(open)
    if (!open && videoRef.current) {
      videoRef.current.pause()
    }
  }

  const mediaContent = image ? (
    // Image content
    <Dialog open={isVideoDialogOpen} onOpenChange={handleDialogChange}>
      <DialogDescription className="sr-only">{title}</DialogDescription>
      <DialogTitle className="sr-only">{title}</DialogTitle>
      <div className="relative h-full w-full">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          className={cn(
            "h-full w-full object-cover object-top transition-transform duration-300",
            "group-hover:scale-105"
          )}
          onLoad={() => setIsMediaLoaded(true)}
          priority
        />
        <FullscreenButton isVisible={isMediaLoaded} title={title} />
      </div>

      <DialogContent className="max-w-4xl rounded-lg p-0">
        <div className="p-4">
          <Image
            src={image}
            width={800}
            height={800}
            alt={title}
            className="h-full w-full rounded-md object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  ) : video ? (
    // Video content
    <Dialog open={isVideoDialogOpen} onOpenChange={handleDialogChange}>
      <DialogDescription className="sr-only">{title}</DialogDescription>
      <DialogTitle className="sr-only">{title}</DialogTitle>

      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className={cn(
            "h-full w-full object-cover object-top transition-transform duration-300",
            "group-hover:scale-105",
            !isMediaLoaded && "opacity-0"
          )}
          onLoadedData={() => setIsMediaLoaded(true)}
          aria-label={`Video preview of ${title}`}
        >
          <source src={video} type="video/mp4" />
        </video>
        <FullscreenButton isVisible={isMediaLoaded} title={title} />
      </div>

      <DialogContent className="max-w-4xl rounded-lg p-0">
        <div className="p-4">
          <video
            ref={videoRef}
            autoPlay
            controls
            className="h-auto max-h-[80vh] w-full rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  ) : null

  return (
    <Card
      className={cn(
        "flex h-full cursor-default flex-col overflow-hidden border shadow-lg transition-all duration-300 ease-out hover:shadow-xl",
        "bg-gradient-to-br from-white via-[hsl(60,30%,98%)] to-[hsl(60,30%,94%)]",
        "dark:from-[hsl(240,10%,10%)] dark:via-[hsl(240,10%,12%)] dark:to-[hsl(240,10%,15%)]",
        "group hover:shadow-lg hover:ring-2 hover:ring-primary/10",
        className
      )}
    >
      <div className="relative aspect-video h-40 w-full overflow-hidden rounded-lg">
        {!isMediaLoaded && <Skeleton className="h-full w-full" />}
        {mediaContent}
      </div>

      <CardHeader className="p-2">
        <div className="space-y-1">
          <CardTitle className="text-md mt-1">{title}</CardTitle>
          <Markdown className="prose max-w-full text-pretty text-justify font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-wrap gap-x-2 gap-y-1 px-2">
        {tags.map((tag, idx) => (
          <SkillTag
            key={idx}
            slug={tag.slug}
            text={tag.text}
            className="gap-1 px-[4px] py-[4px] text-xs"
          />
        ))}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge variant="secondary" className="flex gap-2 p-2 text-xs">
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

// Extracted Fullscreen button component for reusability
function FullscreenButton({
  isVisible,
  title,
}: {
  isVisible: boolean
  title: string
}) {
  return isVisible ? (
    <DialogTrigger asChild>
      <Button
        aria-label="View full video"
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "flex items-center gap-2 rounded-full bg-background/90 px-4 py-2",
          "text-sm font-medium text-foreground shadow-lg",
          "opacity-0 transition-all duration-300 group-hover:opacity-100",
          "hover:scale-105 hover:bg-background"
        )}
      >
        <Fullscreen className="size-4" />
        <span>Fullscreen</span>
      </Button>
    </DialogTrigger>
  ) : null
}
