import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"

const toolCategories = {
  frontend: [
    "TypeScript",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Next.js",
    "Tanstack Query",
    "Tanstack Table",
    "React Hook Form",
    "Zod",
    "Zustand",
    "Chakra UI",
    "Tailwind CSS",
    "Shadcn/ui",
    "Framer Motion",
    "Figma",
    "Vite",
    "Lenis",
  ],
  backend: ["Next.js", "Node.js", "Express.js", "Prisma", "Python"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  other: [
    "Amazon AWS",
    "Azure",
    "Vercel",
    "Docker",
    "Resend",
    "Upstash",
    "Digital Ocean",
    "Git",
    "Github",
    "VS Code",
    "Cursor",
    "Jira",
    "Azure DevOps",
    "Storybook",
    "Streamlit",
    "Pandas",
    "Numpy",
    "SKlearn",
  ],
}

export default function SkillsFilter({
  blurFadeDelay,
}: {
  blurFadeDelay: number
}) {
  const t = useTranslations()
  return (
    <Tabs defaultValue="frontend" className="flex w-auto flex-col">
      <TabsList className="w-auto rounded-none rounded-b-md">
        <div className="grid grid-cols-4 gap-2">
          <TabsTrigger value="frontend">Front End</TabsTrigger>
          <TabsTrigger value="backend">Back End</TabsTrigger>
          <TabsTrigger value="other">{t("skillsFilter.databases")}</TabsTrigger>
          <TabsTrigger value="database">{t("skillsFilter.other")}</TabsTrigger>
        </div>
      </TabsList>

      {Object.entries(toolCategories).map(([category, tools]) => (
        <TabsContent key={category} value={category} className="mt-4">
          <div className="flex flex-wrap justify-center gap-1">
            {[...tools].sort().map((tool, id) => (
              <BlurFade key={tool} delay={blurFadeDelay * 10 + id * 0.05}>
                <Badge>{tool}</Badge>
              </BlurFade>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
