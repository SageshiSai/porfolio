import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "NeoBanco | NBSage",
    description: "Pequeño proyecto dedicado a un neobanco, el cual me aprecio una buena ida hacerlo, con junto a la parte de banco para mantener dinero dentro y la posibilidad de invertir dentro de el mismamente.",
    image: "/FotoPlantillaWeb.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Agencia de viajes | KEBIGO",
    description: "Un proyecto que he vuelto a crear, ya que me gusto la idea de cuando lo hice en el grado con mis compañeros. Un proyecto con bastantes caracteristicas y interacciones con el ususario, intuitivo y facil de usar.",
    image: "/ProyectoViajes.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Tienda de ropa (En proceso)",
    description: "Mi primer pedido, parte de un familiar, el cual necesitaba una tienda online la cual pudiera subir todo el tipo de ropa que puede dar o arreglar ya que es consturera, un proyecto que me gsuto bastante.",
    image: "/FFFFFF.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Inmobiliaria (En proceso)",
    description: "Gran proyecto que tengo pendiente para hacer gracias a un curso en le que estoy metido, un proyecto que me gusta bastante y que me gustaria hacerlo para poder tenerlo en mi portafolio y ganar a un más experiencia.",
    image: "/FFFFFF.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "TPV",
    description: "Un proyecto el cual me pidieron tambien, un tpv para hosteleria pero que tambien se puede usar en otras empresas, pero em principio es unicamente para TPV.",
    image: "/TPVIMG.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image || "/FFFFFF.png"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

