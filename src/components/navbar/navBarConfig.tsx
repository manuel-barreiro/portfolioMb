import { Icons } from "../icons"
import { HomeIcon } from "lucide-react"

const navBarConfig = {
  leftSide: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/mbarreiro.dev", // Replace with your Instagram URL
      icon: Icons.instagram,
      navbar: true,
    },
  },
}

export default navBarConfig
