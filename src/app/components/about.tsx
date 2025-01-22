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
              Soy un desarrollador web con [X] años de experiencia en la creación de aplicaciones web modernas y
              responsivas. Mi pasión por la tecnología y el diseño me impulsa a estar siempre aprendiendo y mejorando
              mis habilidades.
            </p>
            <p>
              Fuera del mundo del desarrollo, disfruto [tus hobbies o intereses]. Creo que estas actividades
              complementan mi trabajo al fomentar la creatividad y el pensamiento innovador.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

