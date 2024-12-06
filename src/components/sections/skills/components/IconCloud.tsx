import IconCloud from "@/components/magicui/icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "python",
  "figma",
  "framer",
  "databricks",
  "tailwindcss",
  "shadcnui",
  "digitalocean",
  "postgresql",
  "mongodb",
  "mysql",
  "vite",
  "storybook",
  "upstash",
  "sqlite",
  "reactquery",
  "reacttable",
  "reacthookform",
  "zod",
  "scikitlearn",
]

export function IconCloudDemo() {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden rounded-lg pb-20 pt-8 opacity-25 lg:px-0">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
