import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputProps } from "./InputProps"
import { cn } from "@/lib/utils"

export default function IconInput({ field, label, icon: Icon }: InputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-10">{label}</Label>
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <Icon size={16} strokeWidth={2} aria-hidden="true" />
          </div>
        )}
        <Input
          id="input-10"
          className={cn("peer", Icon ? "ps-12" : "")}
          placeholder={label}
          {...field}
        />
      </div>
    </div>
  )
}
