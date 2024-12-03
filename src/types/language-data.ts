import { IconProps } from "@/components/icons"

type Link = {
  type: string
  href: string
  icon: React.ReactElement<IconProps>
}

type Project = {
  title: string
  href: string
  dates: string
  active: boolean
  description: string
  technologies: string[]
  links: Link[]
  image: string
  video: string
}

type WorkExperience = {
  company: string
  href: string
  badges: string[]
  location: string
  title: string
  logoUrl: string
  start: string
  end: string
  description: string
}

type Education = {
  school: string
  href: string
  degree: string
  logoUrl: string
  start: string
  end: string
}

export type LanguageData = {
  greeting: string
  description: string
  summary: string
  work: WorkExperience[]
  education: Education[]
  skills: {
    heading: string
    description: string
  }
  projects: {
    heading: string
    description: string
    recent: Project[]
  }
  contact: {
    heading: string
    description: string
    channels: string
  }
  sectionTitles: {
    about: string
    work: string
    education: string
    skills: string
    projects: string
    contact: string
  }
}
