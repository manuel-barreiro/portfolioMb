"use client"
import { Button } from "@/components/ui/button"
import { CircleAlert, CircleCheck, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface ToastProps {
  text: string
  variant: "success" | "error"
  onClose: () => void
  testMode?: boolean // For development
}

export default function Toast({
  text,
  variant,
  onClose,
  testMode = false,
}: ToastProps) {
  useEffect(() => {
    if (!testMode) {
      const timer = setTimeout(onClose, 5000)
      return () => clearTimeout(timer)
    }
  }, [onClose, testMode])

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(
        "w-full rounded-lg p-4 shadow-lg",
        variant === "success"
          ? "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300"
          : "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300"
      )}
    >
      <div className="flex gap-2">
        <p className="grow text-sm">
          {variant === "success" ? (
            <CircleCheck
              className="-mt-0.5 me-3 inline-flex text-emerald-500"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          ) : (
            <CircleAlert
              className="mt-0.5 shrink-0 text-red-500"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
          {text}
        </p>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={onClose}
          aria-label="Close notification"
        >
          <X
            size={16}
            strokeWidth={2}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </motion.div>
  )
}
