import { Icons } from "@/components/icons"

export const ES_DATA = {
  greeting: "Hola, soy",
  description:
    "Ingeniero Industrial que programa. Creando soluciones tecnológicas para retos del mundo real :)",
  summary:
    "Con formación en **Ingeniería Industrial** y enfoque en *Business Intelligence*, transicioné al desarrollo de software. Durante la universidad, me especialicé en la **toma de decisiones basada en datos** y trabajé como *Data Engineer*. Mi trayectoria con la programación orientada a datos despertó en mí una **pasión por el desarrollo de software**, llevándome a trabajar como *Developer* en **Nestlé IT**, mientras mantengo proyectos **freelance** en mi tiempo libre.",
  work: [
    {
      company: "Nestlé",
      href: "https://www.nestle.com/",
      badges: [],
      location: "Remoto",
      title: "Software Engineer",
      logoUrl: "/nestle.png",
      start: "jun 2024",
      end: "presente",
      description:
        "Liderando el desarrollo y mantenimiento de aplicaciones de la empresa. Colaboré con el equipo de diseño para crear interfaces y experiencias de usuario atractivas. Aseguré la calidad del código e implementé las mejores prácticas en los proyectos.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remoto",
      title: "Full Stack Developer",
      logoUrl: "/freelo.png",
      start: "nov 2021",
      end: "presente",
      description:
        "Desarrollé aplicaciones y sitios web completos para diversos clientes. Gestioné relaciones con clientes y recopilación de requisitos para entregar soluciones personalizadas. Implementé soluciones full-stack usando tecnologías modernas.",
    },
    {
      company: "We Plan LATAM",
      href: "https://weplan.com",
      badges: [],
      location: "Remoto",
      title: "Data Engineer",
      logoUrl: "/weplan.png",
      start: "may 2022",
      end: "dic 2023",
      description:
        "Asistí en el desarrollo e implementación de aplicaciones. Realicé revisiones de código y procesos de control de calidad. Generé documentación completa de sistemas de software.",
    },
    {
      company: "Inst. de Energía Austral",
      badges: [],
      href: "http://www.ieaustral.com/",
      location: "Presencial",
      title: "Data Analyst",
      logoUrl: "/austral.png",
      start: "oct 2021",
      end: "dic 2023",
      description:
        "Implementé modelos de machine learning utilizando python para temas relacionados a la energía. Generé informes y análisis mensuales. Además, realicé mi tesis de grado que sirvió como paper académico para el Instituto, donde se predijo la demanda energética para Argentina para los próximos 10 años.",
    },
    {
      company: "Ferrero",
      badges: [],
      href: "https://www.ferrero.com/",
      location: "Presencial",
      title: "Engineering Intern",
      logoUrl: "/ferrero.png",
      start: "mar 2021",
      end: "may 2022",
      description:
        "Automaticé procesos usando scripts en Python. Desarrollé KPIs y tableros en PowerBI para insights de negocio. Realicé análisis de datos y generé informes completos. Todo esto lo hice trabajando presencialmente en la planta industrial de Ferrero llamada La Pastora, ubicada en Cardales, Buenos Aires",
    },
  ],
  education: [
    {
      school: "Universidad Austral",
      href: "https://www.austral.edu.ar/",
      degree: "Ingeniería Industrial | Business Intelligence",
      logoUrl: "/austral.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "Diploma IB",
      logoUrl: "/ib.png",
      start: "",
      end: "",
    },
    {
      school: "St. Matthew's College",
      href: "https://www.smc.edu.ar/",
      degree: "Bachillerato Bilingüe | Economía y Administración",
      logoUrl: "/sanma.jpg",
      start: "2013",
      end: "2018",
    },
  ],
  skills: {
    heading: "Herramientas y Tecnologías",
    description: "Estas son algunas de las tecnologías con las que trabajo.",
  },
  projects: {
    heading: "Explora mis últimos trabajos",
    description:
      "He desarrollado diversos proyectos, desde sitios web sencillos hasta aplicaciones web complejas. Acá te presento algunos de mis favoritos.",
    recent: [
      {
        title: "Reformer Club",
        href: "https://reformer.com.ar",
        dates: "",
        active: true,
        description:
          "Desarrollo de landing page, sistema de pagos y reservas para estudio de pilates y yoga. Smooth scroll con librería Lenis, animaciones con Framer Motion y diseño responsive. Desarrollado con Next.js y Typescript. Prisma ORM y PostgreSQL para la base de datos.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "MercadoPago",
          "Shadcn UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://reformer.com.ar",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/manuel-barreiro/reformer",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video:
          "https://pub-5d52b00d532e4652b151cf24d2f2682d.r2.dev/reformer.mp4",
      },
      {
        title: "Power Consultant",
        href: "https://www.powerconsultant.com.ar/",
        dates: "",
        active: true,
        description:
          "Diseño y desarrollo (Figma to code) de landing page corporativa y catálogo de productos. Desarrollado utilizando Next.js (App router), optimizado aprovechando el SSR (renderizado del lado del servidor).",
        technologies: ["Next.js", "Javascript", "TailwindCSS", "Figma"],
        links: [
          {
            type: "Website",
            href: "https://www.powerconsultant.com.ar/",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/manuel-barreiro/power_consultant",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "https://pub-5d52b00d532e4652b151cf24d2f2682d.r2.dev/power.mp4",
      },
      {
        title: "llm.report",
        href: "https://llm.report",
        dates: "Abril 2023 - Septiembre 2023",
        active: true,
        description:
          "Desarrollé una plataforma de código abierto para registro y análisis de OpenAI: Registra tus solicitudes de API ChatGPT, analiza costos y mejora tus prompts.",
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
            type: "Sitio Web",
            href: "https://llm.report",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Código Fuente",
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
        dates: "Abril 2023 - Marzo 2024",
        active: true,
        description:
          "Desarrollé un Chatbot de Atención al Cliente con IA que responde automáticamente a tickets de soporte usando los últimos modelos GPT.",
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
            type: "Sitio Web",
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
    heading: "Conectemos",
    description: "¿Tenés un proyecto interesante? Me encantaría conocerlo.",
    channels:
      "Contactame a través de las redes sociales o mediante este formulario. Te responderé lo antes posible.",
  },
  sectionTitles: {
    about: "Sobre mí",
    work: "Experiencia Profesional",
    education: "Formación Académica",
    skills: "Skills",
    projects: "Mis Proyectos",
    contact: "Contacto",
  },
}
