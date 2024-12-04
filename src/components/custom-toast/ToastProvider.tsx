"use client"

import { createContext, useContext, useState } from "react"
import Toast from "./Toast"
import { AnimatePresence } from "framer-motion"

interface ToastContextType {
  showToast: (text: string, variant: "success" | "error") => void
  hideToast: () => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{
    text: string
    variant: "success" | "error"
  } | null>(null)

  const showToast = (text: string, variant: "success" | "error") => {
    setToast({ text, variant })
    setTimeout(() => setToast(null), 7000) // Auto hide after 7s
  }

  const hideToast = () => setToast(null)

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-lg">
        <AnimatePresence>
          {toast && <Toast onClose={hideToast} {...toast} />}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within ToastProvider")
  return context
}
