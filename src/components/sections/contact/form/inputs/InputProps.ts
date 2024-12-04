import { ControllerRenderProps } from "react-hook-form"
import { LucideIcon } from "lucide-react"

export interface InputProps {
  field: ControllerRenderProps<
    { name: string; phone: string; email: string; message: string },
    "name" | "phone" | "email" | "message"
  >
  label: string
  icon?: LucideIcon
}
