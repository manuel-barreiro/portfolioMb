import BlurFade from "@/components/magicui/blur-fade"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"
import SkillTag from "@/components/sections/skills/components/SkillTag"

const toolCategories = {
  frontend: [
    { slug: "typescript", text: "TypeScript" },
    { slug: "javascript", text: "JavaScript" },
    { slug: "react", text: "React" },
    { slug: "html5", text: "HTML" },
    { slug: "css3", text: "CSS" },
    { slug: "nextdotjs", text: "Next.js" },
    { slug: "reactquery", text: "Tanstack Query" },
    { slug: "reacttable", text: "Tanstack Table" },
    { slug: "reacthookform", text: "React Hook Form" },
    { slug: "zod", text: "Zod" },
    { slug: "chakraui", text: "Chakra UI" },
    { slug: "tailwindcss", text: "Tailwind CSS" },
    { slug: "shadcnui", text: "Shadcn/ui" },
    { slug: "framer", text: "Framer Motion" },
    { slug: "figma", text: "Figma" },
    { slug: "vite", text: "Vite" },
  ],
  backend: [
    { slug: "nextdotjs", text: "Next.js" },
    { slug: "nodedotjs", text: "Node.js" },
    { slug: "express", text: "Express.js" },
    { slug: "prisma", text: "Prisma" },
    { slug: "python", text: "Python" },
  ],
  database: [
    { slug: "postgresql", text: "PostgreSQL" },
    { slug: "mongodb", text: "MongoDB" },
    { slug: "mysql", text: "MySQL" },
    { slug: "sqlite", text: "SQLite" },
    { slug: "databricks", text: "Databricks" },
  ],
  other: [
    { slug: "amazonaws", text: "Amazon AWS" },
    { slug: "cloudflare", text: "Cloudflare" },
    { slug: "vercel", text: "Vercel" },
    { slug: "docker", text: "Docker" },
    { slug: "resend", text: "Resend" },
    { slug: "upstash", text: "Upstash" },
    { slug: "digitalocean", text: "Digital Ocean" },
    { slug: "git", text: "Git" },
    { slug: "github", text: "Github" },
    { slug: "visualstudiocode", text: "VS Code" },
    { slug: "jira", text: "Jira" },
    { slug: "azuredevops", text: "Azure DevOps" },
    { slug: "storybook", text: "Storybook" },
    { slug: "streamlit", text: "Streamlit" },
    { slug: "pandas", text: "Pandas" },
    { slug: "numpy", text: "Numpy" },
    { slug: "scikitlearn", text: "SKlearn" },
    { slug: "mercadopago", text: "MercadoPago" },
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
          <TabsTrigger value="database">
            {t("skillsFilter.databases")}
          </TabsTrigger>
          <TabsTrigger value="other">{t("skillsFilter.other")}</TabsTrigger>
        </div>
      </TabsList>

      {Object.entries(toolCategories).map(([category, tools]) => (
        <TabsContent key={category} value={category} className="mt-4">
          <div className="flex flex-wrap justify-center gap-1">
            {[...tools]
              .sort((a, b) => a.text.localeCompare(b.text))
              .map((tool, id) => (
                <BlurFade
                  key={tool.slug}
                  delay={blurFadeDelay * 10 + id * 0.05}
                >
                  <SkillTag slug={tool.slug} text={tool.text} />
                </BlurFade>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
