import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  ],
  backend: ["Node.js", "Express.js", "Prisma", "Python"],
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
  return (
    <Tabs defaultValue="all" className="flex w-auto flex-col">
      <TabsList className="w-auto rounded-none rounded-t-md">
        <div className="grid grid-cols-2 gap-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </div>
      </TabsList>
      <TabsList className="w-auto rounded-none rounded-b-md">
        <div className="grid grid-cols-3 gap-2">
          <TabsTrigger value="frontend">Front End</TabsTrigger>
          <TabsTrigger value="backend">Back End</TabsTrigger>
          <TabsTrigger value="database">Databases</TabsTrigger>
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

      <TabsContent value="all" className="mt-4">
        <div className="flex flex-wrap justify-center gap-1">
          {Object.values(toolCategories)
            .flat()
            .sort()
            .map((tool, id) => (
              <BlurFade key={tool} delay={blurFadeDelay * 10 + id * 0.05}>
                <Badge>{tool}</Badge>
              </BlurFade>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
