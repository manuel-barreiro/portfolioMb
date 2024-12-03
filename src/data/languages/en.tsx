import { Icons } from "@/components/icons"

export const EN_DATA = {
  greeting: "Hi, I'm",
  description:
    "Industrial Engineer who codes. Crafting tech solutions for real-world challenges :)",
  summary:
    "With a background in **Industrial Engineering** and focus on *Business Intelligence*, I've successfully transitioned into software development. During university, I specialized in **data-driven decision making** and worked as a *Data Engineer*. My journey with data programming sparked a **natural passion for software development**, leading me to work as a **Software Engineer at Nestlé IT** as a *Software Engineer*, while maintaining freelance projects in my spare time.",
  work: [
    {
      company: "Nestlé",
      href: "https://www.nestle.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/nestle.png",
      start: "jun 2024",
      end: "present",
      description:
        "Leading development and maintenance of company applications. Collaborated with design team to create engaging UIs and UXs. Ensured code quality and implemented best practices across projects.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/freelo.png",
      start: "nov 2022",
      end: "present",
      description:
        "Developed end-to-end web applications and sites for diverse clients. Managed client relationships and requirements gathering to deliver customized solutions. Implemented full-stack solutions using modern technologies.",
    },
    {
      company: "We Plan LATAM",
      href: "https://weplan.com",
      badges: [],
      location: "Remote",
      title: "Data Engineer",
      logoUrl: "/weplan.png",
      start: "may 2022",
      end: "dec 2023",
      description:
        "Assisted in application development and implementation. Conducted code reviews and quality assurance processes. Generated comprehensive software system documentation.",
    },
    {
      company: "Instituto de Energía Austral",
      badges: [],
      href: "http://www.ieaustral.com/",
      location: "On-Site",
      title: "Data Analyst",
      logoUrl: "/austral.png",
      start: "oct 2021",
      end: "dec 2023",
      description:
        "Implemented machine learning models using Python for energy-related topics. Generated monthly reports and analysis. Additionally, I completed my thesis which served as an academic paper for the Institute, predicting Argentina's energy demand for the next 10 years.",
    },
    {
      company: "Ferrero",
      badges: [],
      href: "https://www.ferrero.com/",
      location: "On-Site",
      title: "Engineering Intern",
      logoUrl: "/ferrero.jpg",
      start: "mar 2021",
      end: "may 2022",
      description:
        "Automated processes using Python scripts. Developed KPIs and PowerBI dashboards for business insights. Conducted data analysis and generated comprehensive reports. I did all this in Ferrero's production plant named La Pastora, located in Cardales, Buenos Aires.",
    },
  ],
  education: [
    {
      school: "Universidad Austral",
      href: "https://www.austral.edu.ar/",
      degree: "Industrial Engineering | Business Intelligence",
      logoUrl: "/austral.png",
      start: "2019",
      end: "2024",
    },
    ,
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "",
      end: "",
    },
    {
      school: "St. Matthew's College",
      href: "https://www.smc.edu.ar/",
      degree: "Business & Management High School",
      logoUrl: "/sanma.jpg",
      start: "2013",
      end: "2018",
    },
  ],
  skills: {
    heading: "Tools & Technologies",
    description:
      "Here are some of the technologies and tools I've worked with recently.",
  },
  projects: {
    heading: "Check Out My Latest Work",
    recent: [
      {
        title: "Chat Collect",
        href: "https://chatcollect.com",
        dates: "Jan 2024 - Feb 2024",
        active: true,
        description:
          "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Stripe",
          "Shadcn UI",
          "Magic UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://chatcollect.com",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "",
        video:
          "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      },
      {
        title: "Magic UI",
        href: "https://magicui.design",
        dates: "June 2023 - Present",
        active: true,
        description:
          "Designed, developed and sold animated UI components for developers.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Stripe",
          "Shadcn UI",
          "Magic UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://magicui.design",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/magicuidesign/magicui",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "https://cdn.magicui.design/bento-grid.mp4",
      },
      {
        title: "llm.report",
        href: "https://llm.report",
        dates: "April 2023 - September 2023",
        active: true,
        description:
          "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "Magic UI",
          "Stripe",
          "Cloudflare Workers",
        ],
        links: [
          {
            type: "Website",
            href: "https://llm.report",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/dillionverma/llm.report",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "https://cdn.llm.report/openai-demo.mp4",
      },
      {
        title: "Automatic Chat",
        href: "https://automatic.chat",
        dates: "April 2023 - March 2024",
        active: true,
        description:
          "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "Magic UI",
          "Stripe",
          "Cloudflare Workers",
        ],
        links: [
          {
            type: "Website",
            href: "https://automatic.chat",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "",
        video:
          "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
      },
    ],
  },
  contact: {
    heading: "Let's connect",
    description: "Got an interesting project? I'd love to hear about it.",
    channels:
      "Reach out through any of my social media or this form - I'll get back to you as soon as possible.",
  },
  sectionTitles: {
    about: "About",
    work: "Work Experience",
    education: "Education",
    skills: "Skills",
    projects: "My Projects",
    contact: "Contact",
  },
} as const
