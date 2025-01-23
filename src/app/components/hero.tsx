import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/assets/0001-0750.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Hola, soy Kevin Patiño</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground">
          Desarrollador web apasionado por crear experiencias digitales increíbles
        </p>
        <Button size="lg">
          Ver mis proyectos <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  )
}


