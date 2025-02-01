import { LanguageData } from "@/types/language-data"

const data: LanguageData = {
  name: "Manuel Barreiro",
  initials: "MB",
  url: "https://mbarreiro.dev",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/buenosaires",
  contactInfo: {
    email: "ing.mbarreiro@gmail.com",
    tel: "+5491166726968",
  },
  greeting: "Hola, soy",
  description:
    "Ingeniero & Desarrollador. Creando soluciones tecnológicas para problemas tangibles.",
  summary:
    "Con formación en **Ingeniería Industrial** y enfoque en *Business Intelligence*, transicioné al desarrollo de software. Mi trayectoria con la programación orientada a datos despertó en mí una **pasión por el desarrollo web**, llevándome a trabajar como *Developer* en **Nestlé IT**, mientras mantengo proyectos **freelance** en mi tiempo libre.",
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
      logoUrl: "/austral.jpeg",
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
      logoUrl: "/austral.jpeg",
      start: "2019",
      end: "2023",
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
    description:
      "Estas son algunas de las tecnologías con las que tengo experiencia trabajando.",
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
          "Desarrollo de landing page, sistema de pagos y reservas para estudio de pilates y yoga. Smooth scroll con librería Lenis, animaciones con Framer Motion y diseño responsive. Desarrollado con Next.js y TypeScript. Prisma ORM y PostgreSQL para la base de datos.",
        technologies: [
          { text: "Next.js", slug: "nextdotjs" },
          { text: "TypeScript", slug: "typescript" },
          { text: "PostgreSQL", slug: "postgresql" },
          { text: "Prisma", slug: "prisma" },
          { text: "TailwindCSS", slug: "tailwindcss" },
          { text: "MercadoPago", slug: "mercadopago" },
          { text: "Shadcn UI", slug: "shadcnui" },
        ],
        links: [
          {
            type: "Website",
            href: "https://reformer.com.ar",
            icon: "globe",
          },
          {
            type: "Source",
            href: "https://github.com/manuel-barreiro/reformer",
            icon: "github",
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
        technologies: [
          { text: "Next.js", slug: "nextdotjs" },
          { text: "Javascript", slug: "javascript" },
          { text: "TailwindCSS", slug: "tailwindcss" },
          { text: "Figma", slug: "figma" },
          { text: "Framer Motion", slug: "framer" },
          { text: "Zod", slug: "zod" },
          { text: "React Hook Form", slug: "reacthookform" },
        ],
        links: [
          {
            type: "Website",
            href: "https://www.powerconsultant.com.ar/",
            icon: "globe",
          },
          {
            type: "Source",
            href: "https://github.com/manuel-barreiro/power_consultant",
            icon: "github",
          },
        ],
        image: "",
        video: "https://pub-5d52b00d532e4652b151cf24d2f2682d.r2.dev/power.mp4",
      },
      {
        title: "DevaluApp",
        href: "https://devaluapp.vercel.app/",
        dates: "",
        active: true,
        description:
          "DevaluApp te ayuda a calcular la apreciación o devaluación de tu salario en pesos en relación al valor del dólar estadounidense. Lo hace utilizando la API de Bluelytics. Desarrollado utilizando Next.js, con estilos realizados a través de Tailwind CSS.",
        technologies: [
          { text: "Next.js", slug: "nextdotjs" },
          { text: "TypeScript", slug: "typescript" },
          { text: "TailwindCSS", slug: "tailwindcss" },
          { text: "Shadcn UI", slug: "shadcnui" },
          { text: "Framer Motion", slug: "framer" },
          { text: "Zod", slug: "zod" },
          { text: "React Hook Form", slug: "reacthookform" },
        ],
        links: [
          {
            type: "Website",
            href: "https://devaluapp.vercel.app/",
            icon: "globe",
          },
          {
            type: "Source",
            href: "https://github.com/manuel-barreiro/devaluapp",
            icon: "github",
          },
        ],
        image: "",
        video:
          "https://pub-5d52b00d532e4652b151cf24d2f2682d.r2.dev/devaluapp.mp4",
      },
      {
        title: "ShortCut",
        href: "https://shortcut-nigeria.vercel.app/",
        dates: "",
        active: true,
        description:
          "Diseño y desarrollo de una aplicación web para un bar, que cuenta con un sistema de pedidos integrado con Mercado Pago para el procesamiento de pagos. Incluye notificaciones por correo electrónico, y panel de administrador para visualizar pagos y órdenes.",
        technologies: [
          { text: "Next.js", slug: "nextdotjs" },
          { text: "TypeScript", slug: "typescript" },
          { text: "MongoDB", slug: "mongodb" },
          { text: "Prisma", slug: "prisma" },
          { text: "TailwindCSS", slug: "tailwindcss" },
          { text: "Shadcn UI", slug: "shadcnui" },
          { text: "MercadoPago", slug: "mercadopago" },
        ],
        links: [
          {
            type: "Website",
            href: "https://shortcut-nigeria.vercel.app/",
            icon: "globe",
          },
          {
            type: "Source",
            href: "https://github.com/manuel-barreiro/inTime",
            icon: "github",
          },
        ],
        image: "/shortcut.webp",
      },
    ],
  },
  contact: {
    heading: "Contactame",
    description: "¿Tenés un proyecto interesante?",
    channels:
      "Contactame a través de mis redes sociales o mediante este formulario. Te responderé lo antes posible.",
    form: {
      name: {
        label: "Nombre Completo",
        placeholder: "Ingresa tu nombre completo",
        error: {
          required: "El nombre completo es obligatorio",
          min: "El nombre debe tener al menos 3 caracteres",
        },
      },
      phone: {
        label: "Número de Teléfono",
        placeholder: "Ingresa tu número de teléfono",
        error: {
          required: "El número de teléfono es obligatorio",
        },
        dropdownText: "Selecciona tu país",
      },
      email: {
        label: "Correo Electrónico",
        placeholder: "Ingresa tu correo electrónico",
        error: {
          required: "La dirección de correo electrónico es obligatoria",
          invalid: "Por favor ingresa un correo válido",
        },
      },
      message: {
        label: "Mensaje",
        placeholder: "Ingresa tu consulta",
        error: {
          required: "El mensaje es obligatorio",
          min: "El mensaje debe tener al menos 10 caracteres",
        },
      },
      submitBtn: {
        default: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado!",
      },
      toast: {
        success: "Mensaje enviado",
        successDesc: "¡Gracias por contactarme! Te responderé a la brevedad.",
        error: "Error al enviar mensaje",
        errorDesc:
          "Hubo un error al enviar tu mensaje. Por favor, intentá nuevamente.",
      },
    },
  },
  sectionTitles: {
    about: "Sobre mí",
    work: "Experiencia Profesional",
    education: "Formación Académica",
    skills: "Habilidades",
    projects: "Mis Proyectos",
    contact: "Contacto",
  },
  skillsFilter: {
    other: "Otras",
    databases: "DBs",
  },
  terminal: {
    arr: [
      "programador && @ingeniero/industrial",
      "ingeniero industrial && @developer",
      "tech enthusiast :)",
    ],
  },
}

export default data
