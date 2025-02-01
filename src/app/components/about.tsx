import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
        <Card>
          <CardHeader>
            <CardTitle>Mi historia</CardTitle>
            <CardDescription>Un vistazo a mi trayectoria profesional</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
            Desarrollador Full Stack con un grado superior en Desarrollo Web del CIFP ZORNOTZA LHII. A lo largo de mi carrera, he tenido la 
            oportunidad de trabajar junto a un equipo de desarrolladores, lo que ha fortalecido mi capacidad para colaborar y adaptarme a 
            distintos entornos.
            </p>
            <p className="mb-4">
            🚀 Desde siempre, he tenido la facilidad para aprender de manera rápida y sin dificultad. Durante mis estudios, adquirí experiencia 
            tanto en liderazgo como en el trabajo en equipo, desarrollando proyectos complejos con mi grupo, como simulaciones de aplicaciones 
            bancarias y plataformas de ventas, incluyendo una app de viajes y hoteles al estilo de booking. Estas experiencias han sido clave 
            para mejorar mi dominio de distintos lenguajes de programación y mi capacidad para abordar problemas con creatividad y eficiencia.
            </p>
            <p className="mb-4">
            💡 Creo firmemente en la filosofía de que todo lo que se puede imaginar, se puede crear, siempre y cuando se combinen disciplina y 
            confianza. Este principio guía mi trabajo y mi forma de aprender, impulsándome a explorar constantemente nuevas ideas y tecnologías.
            </p>
            <p className="mb-4">
            🎯 Con objetivos ambiciosos para el futuro, mi meta principal es seguir adquiriendo conocimientos tanto a nivel profesional como 
            personal, buscando siempre oportunidades para crecer y mejorar en cada proyecto.
            </p>
            <p className="mb-4">
            📬 Si quieres conocer más sobre mi perfil o tienes una propuesta, ¡me encantaría conectar! Puedes contactarme por LinkedIn o correo 
            electrónico que lo tienes de manera muy semcilla al final de esta pagina web😄.
            </p>
            <p>
              Fuera del mundo del desarrollo, disfruto de la creacion de contenido y edicion de videos o creacion de personajes 3D. Creo que estas actividades
              complementan mi trabajo al fomentar la creatividad y el pensamiento innovador.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

