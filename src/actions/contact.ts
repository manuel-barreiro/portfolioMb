"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
})

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {
  console.log("Sending email", formData)
  try {
    const result = await resend.emails.send({
      from: "Consulta Portfolio <consultas@mbarreiro.dev>",
      to: "ing.mbarreiro@gmail.com",
      subject: `Consulta de ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to send email" }
  }
}
