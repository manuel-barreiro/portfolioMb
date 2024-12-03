import { Icons } from "@/components/icons"
import { HomeIcon } from "lucide-react"

export const staticData = {
  name: "Manuel Barreiro",
  initials: "MB",
  url: "https://mbarreiro.dev",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/buenosaires",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ing.mbarreiro@gmail.com",
    tel: "+5491166726968",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/manuel-barreiro",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manuel-barreiro/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/5491166726968?text=Hola!%20C%C3%B3mo%20est%C3%A1s%3F%20Vengo%20de%20tu%20portfolio%20y%20tengo%20una%20consulta.",
        icon: Icons.whatsapp,
        navbar: true,
      },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,
      //   navbar: true,
      // },
    },
  },
}
