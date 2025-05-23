import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowBigDownDash, ArrowRight } from "lucide-react"
import styles from "./css/VideoMask.module.css"
import Typewriter from "@/components/typewriter";



export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-neutral-900"
    >
      <div className="absolute inset-0 flex justify-end mix-blend-lighten">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover ${styles.customMask} md:w-9/12`}
          
        >
          <source src="/assets/0001-0750.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        
        <div className="absolute"></div>
      </div>
      <div className="relative z-10 px-4">
      
          <p className="text-4xl md:text-6xl font-bold mb-6 text-gray-300">
            Hola, soy 
          </p>
          <Typewriter text="[ Kevin Patiño ]" />
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground text-gray-300">
          Desarrollador web especializado en crear experiencias digitales
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="#projects">
            <Button size="lg" className="bg-accent text-foreground hover:bg-teal-500 transition duration-200">
              Ver mis proyectos <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <a href="/assets/CV Kevin Patiño.pdf" download={true}>
            <Button size="lg" className="bg-accent text-foreground hover:bg-teal-500 transition duration-200">
              Descargar mi CV <ArrowBigDownDash className="ml-2" />
            </Button>
          </a>
        </div>
        
      </div>
    </section>
  )
}


