// types/language-data.ts
import { IconProps } from "@/components/icons"

export type Link = {
  type: string
  href: string
  icon: "globe" | "github" // Icon types instead of JSX
}

export interface WorkEntry {
  company: string
  href: string
  badges: string[]
  location: string
  title: string
  logoUrl: string
  start: string
  end?: string
  description: string
}

export type EducationEntry = {
  school: string
  href: string
  degree: string
  logoUrl: string
  start: string
  end: string
}

export type ProjectEntry = {
  title: string
  href: string
  dates: string
  active: boolean
  description: string
  technologies: ReadonlyArray<string>
  links: ReadonlyArray<Link>
  image?: string
  video?: string
}

export type LanguageData = {
  name: string
  initials: string
  url: string
  location: string
  locationLink: string
  contactInfo: {
    email: string
    tel: string
  }
  greeting: string
  description: string
  summary: string
  work: WorkEntry[]
  education: EducationEntry[]
  skills: {
    heading: string
    description: string
  }
  projects: {
    heading: string
    description: string
    recent: ProjectEntry[]
  }
  contact: {
    heading: string
    description: string
    channels: string
    form: {
      name: {
        label: string
        placeholder: string
        error: {
          required: string
          min: string
        }
      }
      phone: {
        label: string
        placeholder: string
        error: {
          required: string
        }
        dropdownText: string
      }
      email: {
        label: string
        placeholder: string
        error: {
          required: string
          invalid: string
        }
      }
      message: {
        label: string
        placeholder: string
        error: {
          required: string
          min: string
        }
      }
      submitBtn: {
        default: string
        sending: string
        success: string
      }
      toast: {
        success: string
        successDesc: string
        error: string
        errorDesc: string
      }
    }
  }
  sectionTitles: {
    about: string
    work: string
    education: string
    skills: string
    projects: string
    contact: string
  }
  skillsFilter: {
    other: string
    databases: string
  }
  terminal: {
    eng: string
    whoCodes: string
  }
}
