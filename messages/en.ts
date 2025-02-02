import { LanguageData } from "@/types/language-data"

export default {
  name: "Manuel Barreiro",
  initials: "MB",
  url: "https://mbarreiro.dev",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/buenosaires",
  contactInfo: {
    email: "ing.mbarreiro@gmail.com",
    tel: "+5491166726968",
  },
  greeting: "Hi, I'm",
  description:
    "Engineer & Software Developer. Creating practical tech solutions for tangible problems.",
  summary:
    "With a background in **Industrial Engineering** and focus on *Business Intelligence*, I've successfully transitioned into **Software Engineering**. My journey with data programming sparked a **natural passion for software development**, leading me to work as a *Software Engineer* at **Nestlé IT**, while maintaining freelance projects in my spare time.",
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
      company: "Inst. de Energía Austral",
      badges: [],
      href: "http://www.ieaustral.com/",
      location: "On-Site",
      title: "Data Analyst",
      logoUrl: "/austral.jpeg",
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
      logoUrl: "/ferrero.png",
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
      logoUrl: "/austral.jpeg",
      start: "2019",
      end: "2024",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "",
    //   end: "",
    // },
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
    description:
      "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    recent: [
      {
        title: "Reformer Club",
        href: "https://reformer.com.ar",
        dates: "",
        active: true,
        description:
          "Landing page, payment and booking system for pilates & yoga studio. Smooth scroll with Lenis library, animations with Framer Motion. Developed with Next.js and TypeScript. Prisma and PostgreSQL for the database.",
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
          "Design and development (Figma to code) of corporate landing page and product catalog. Developed using Next.js (App router), optimized by taking advantage of SSR (server side rendering).",
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
          "DevaluApp helps you calculate the appreciation or devaluation of your salary in ARS in relation to the value of the US dollar. It does this using the Bluelytics API. Developed using Next.js, with styles done through Tailwind CSS.",
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
          "Design and development of a web application for a bar, which has an ordering system integrated with Mercado Pago for payment processing. Includes email notifications, and an administrator panel to view payments and orders.",
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
    heading: "Let's connect",
    description: "Got an interesting project? I'd love to hear about it.",
    channels:
      "Reach out through any of my social media or this form - I'll get back to you as soon as possible.",
    form: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        error: {
          required: "Full name is required",
          min: "Message must be at least 10 characters",
        },
      },
      phone: {
        label: "Phone Number",
        placeholder: "Enter your phone number",
        error: {
          required: "Phone number is required",
        },
        dropdownText: "Select your country",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        error: {
          required: "Email address is required",
          invalid: "Please enter a valid email address",
        },
      },
      message: {
        label: "Message",
        placeholder: "Enter your message",
        error: {
          required: "Message is required",
          min: "Message must be at least 10 characters",
        },
      },
      submitBtn: {
        default: "Send Message",
        sending: "Sending...",
        success: "Message sent!",
      },
      toast: {
        success: "Message sent",
        successDesc: "Thanks for contacting me! I'll reply shortly.",
        error: "Error sending message",
        errorDesc: "There was an error sending your message. Please try again.",
      },
    },
  },
  sectionTitles: {
    about: "About",
    work: "Work Experience",
    education: "Education",
    skills: "Skills",
    projects: "My Projects",
    contact: "Contact",
  },
  skillsFilter: {
    other: "Other",
    databases: "DBs",
  },
  terminal: {
    arr: [
      "software developer && @industrial/engineer",
      "industrial engineer @who/codes",
      "tech enthusiast :)",
    ],
  },
} satisfies LanguageData
