"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import PhoneNumberInput from "./inputs/PhoneNumberInput"
import IconInput from "./inputs/IconInput"
import { Mail, User } from "lucide-react"
import { Label } from "@/components/ui/label"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { sendEmail } from "@/actions/contact"
import { Send, LoaderCircle } from "lucide-react"
import { useToast } from "@/components/custom-toast/ToastProvider"

export default function ContactForm() {
  const t = useTranslations()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast } = useToast()

  const formSchema = z.object({
    name: z.string().min(2, t("contact.form.name.error.min")),
    phone: z.string().min(10, t("contact.form.phone.error.required")),
    email: z
      .string()
      .min(1, t("contact.form.email.error.required"))
      .email(t("contact.form.email.error.invalid")),
    message: z.string().min(10, t("contact.form.message.error.min")),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await sendEmail(values)

      if (result.success) {
        showToast(t("contact.form.toast.success"), "success")
        form.reset()
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      showToast(t("contact.form.toast.error"), "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-lg space-y-6 text-base"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <IconInput
                field={field}
                label={t("contact.form.name.label")}
                placeholder={t("contact.form.name.placeholder")}
                icon={User}
                type="text"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <PhoneNumberInput
                field={field}
                label={t("contact.form.phone.label")}
                placeholder={t("contact.form.phone.placeholder")}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <IconInput
                field={field}
                label={t("contact.form.email.label")}
                icon={Mail}
                placeholder={t("contact.form.email.placeholder")}
                type="email"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-2">
                <Label htmlFor="textarea-03">
                  {t("contact.form.message.label")}
                </Label>
                <Textarea
                  placeholder={t("contact.form.message.placeholder")}
                  className="duration-400 flex h-10 w-full rounded-md border-none bg-secondary px-3 py-2 text-sm text-zinc-800 shadow-md transition-shadow placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-primary dark:focus-visible:ring-neutral-200"
                  {...field}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:from-zinc-600 dark:to-zinc-500 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          {isSubmitting ? (
            <div className="flex w-full items-center justify-center gap-2">
              <LoaderCircle className="h-4 w-4 animate-spin" />

              <p>{t("contact.form.submitBtn.sending")}</p>
            </div>
          ) : (
            <div className="flex w-full items-center justify-center gap-2">
              <Send className="h-4 w-4" />

              <p>{t("contact.form.submitBtn.default")}</p>
            </div>
          )}
        </Button>
      </form>
    </Form>
  )
}
