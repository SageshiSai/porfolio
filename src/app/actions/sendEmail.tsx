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

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje desde tu portafolio</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .header {
          background-color: #4a90e2;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 0.8em;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nuevo mensaje desde tu portafolio</h1>
        </div>
        <div class="content">
          <h2>Detalles del mensaje:</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Mensaje:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        <div class="footer">
          <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Nuevo mensaje de ${name} desde tu portafolio`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
    html: htmlContent,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Email enviado correctamente" }
  } catch (error) {
    console.error("Error al enviar el email:", error)
    return { success: false, message: "Error al enviar el email" }
  }
}

