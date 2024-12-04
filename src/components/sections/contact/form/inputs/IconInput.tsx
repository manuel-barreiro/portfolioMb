import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputProps } from "./InputProps"
import { cn } from "@/lib/utils"

export default function IconInput({
  field,
  label,
  placeholder,
  icon: Icon,
}: InputProps) {
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
          className={cn(
            "duration-400 flex h-10 w-full rounded-md border-none bg-secondary px-3 py-2 text-sm text-zinc-800 shadow-md transition-shadow placeholder:text-neutral-400 focus-visible:shadow-xl focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-primary dark:focus-visible:ring-neutral-200",
            Icon ? "ps-12" : ""
          )}
          placeholder={placeholder}
          {...field}
        />
      </div>
    </div>
  )
}
