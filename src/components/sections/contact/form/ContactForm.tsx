"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/hooks/use-toast"
import { Textarea } from "@/components/ui/textarea"
import PhoneNumberInput from "./inputs/PhoneNumberInput"
import IconInput from "./inputs/IconInput"
import { Mail, User } from "lucide-react"
import { Label } from "@/components/ui/label"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { sendEmail } from "@/actions/contact"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const t = useTranslations()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formSchema = z.object({
    name: z.string().min(2, t("contact.form.name.error.min")),
    phone: z.string().min(10, t("contact.form.phone.error.required")),
    email: z
      .string()
      .min(1, t("contact.form.email.error.required"))
      .email(t("contact.form.email.error.invalid")),
    message: z.string().min(10, t("contact.form.message.error.min")),
  })
  const { toast } = useToast()
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
        toast({
          title: t("contact.form.submitBtn.success"),
          description: t("contact.form.submitBtn.successDesc"),
          variant: "default",
          duration: 5000,
        })
        form.reset()
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: t("contact.form.submitBtn.error"),
        description: t("contact.form.submitBtn.errorDesc"),
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-lg space-y-6 font-[16px]"
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
          {isSubmitting
            ? t("contact.form.submitBtn.sending")
            : t("contact.form.submitBtn.default")}
        </Button>
      </form>
    </Form>
  )
}
