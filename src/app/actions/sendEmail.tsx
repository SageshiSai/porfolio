"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Envía el correo a tu propia dirección
    subject: `Nuevo mensaje de ${name} desde tu portafolio`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Email enviado correctamente" }
  } catch (error) {
    console.error("Error al enviar el email:", error)
    return { success: false, message: "Error al enviar el email" }
  }
}

