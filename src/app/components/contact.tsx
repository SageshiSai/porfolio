"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "../actions/sendEmail"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)

    const result = await sendEmail(formData)

    setIsSubmitting(false)

    if (result.success) {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Te responderé pronto.",
      })
      setName("")
      setEmail("")
      setMessage("")
    } else {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-20 ">
      <div className="container mx-auto px-4 bg-zinc-50 rounded-lg shadow-lg p-8 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contáctame</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Textarea
              name="message"
              placeholder="Mensaje"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </div>
    </section>
  )
}

