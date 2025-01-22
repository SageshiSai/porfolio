import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Hola, soy Kevin Leonardo Patiño</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        Desarrollador web apasionado por crear experiencias digitales increíbles
      </p>
      <Button size="lg">
        Ver mis proyectos <ArrowRight className="ml-2" />
      </Button>
    </section>
  )
}

