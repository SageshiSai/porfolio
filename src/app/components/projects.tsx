import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, ProjectCard  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    number: 1,
    title: "NeoBanco | NBSage",
    description: "Pequeño proyecto dedicado a un neobanco, el cual me aprecio una buena ida hacerlo, con junto a la parte de banco para mantener dinero dentro y la posibilidad de invertir dentro de el mismamente.",
    image: "/FotoPlantillaWeb.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
    TechStack: "NextJS, TailwindCSS, TypeScript, Java jakarta, Hibernate, MySQL, Spring (validations, Security, Web), Vercel, Angular, Ionic, Git, Github, Postman, Figma, NodeJS, dbdiagram.io",
  },
  {
    number: 2,
    title: "Agencia de viajes | KEBIGO",
    description: "Un proyecto que he vuelto a crear, ya que me gusto la idea de cuando lo hice en el grado con mis compañeros. Un proyecto con bastantes caracteristicas y interacciones con el ususario, intuitivo y facil de usar.",
    image: "/ProyectoViajes.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
    TechStack: "JavaScript, HTML, CSS, Bootstrap, PHP, MySQL, Git, Github, Figma, NodeJS",
  },
  {
    number: 3,
    title: "Tienda de ropa (En proceso)",
    description: "Mi primer pedido, parte de un familiar, el cual necesitaba una tienda online la cual pudiera subir todo el tipo de ropa que puede dar o arreglar ya que es consturera, un proyecto que me gsuto bastante.",
    image: "/CommingSoon.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
    TechStack: "Angular, TypeScript, TailwindCSS, Git, Github, Postman, Figma, NodeJS, dbdiagram.io",
  },
  {
    number: 4,
    title: "Inmobiliaria",
    description: "Gran proyecto que estoy actualizando y mejorando actualmente. Un proyecto que me está ayudando mucho a aprender y a seguir mejorando mis tecnicas de Clean Code y de arquitectura de software.",
    image: "/elPisito.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
    TechStack: "TailwindCSS, TypeScript, Java jakarta, Hibernate, MySQL, Spring (validations, Security, Web), Vercel, Angular, Git, Github, Postman, Figma, NodeJS, dbdiagram.io",
  },
  {
    number: 5,
    title: "TPV Hosteleria",
    description: "Un proyecto el cual me pidieron tambien, un tpv para hosteleria pero que tambien se puede usar en otras empresas, pero en principio es unicamente para TPV.",
    image: "/TPVIMG.png?height=auto&width=auto",
    demoLink: "#",
    codeLink: "#",
    TechStack: "HTML, CSS, JavaScript, Bootstrap, MySQL, Git, Github, Figma",
  },
  {
    number: 6,
    title: "BarberShop",
    description: "Pagina web dedicada a una peluqueria/Barberia, la cual fue un trabajo de la empresa en la que estuve, donde me pidieron que hiciera una pagina web para ellos, un proyecto sencillo pero que me gusto mucho.",
    image: "/BarberShop_web.png?height=auto&width=auto",
    demoLink: "https://forutxuileart.com/",
    codeLink: "#",
    TechStack: "WordPress",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex justify-center">Mis proyectos</h2>
        <div className="mb-8 flex justify-center">
          <Card >
            <CardHeader>
              <CardTitle>  NOTA:</CardTitle>
              <CardDescription>Pequeña nota aclarando sobre las demos</CardDescription>
            </CardHeader>
            <CardContent >
            Los proyectos aún no están subidos!! Por lo que no se puede ver una demo. Con el paso del tiempo podré ir subiendo uno a uno para que se puedan ver los trabajos. 😊
            Pero muy probablemente llegue antes un nuevo apartado para cada uno de estos mas detallado, con esto me refiero a que pasare imagenes 
            de lo que haya hecho tanto en figma para la UI de cada uno de estos proyectos, como el diagrama de la base de datos dependiendo de que tan importante sea el proyecto,
            en dado caso como el neobanco no creo que pase la base de datos porque siento que es un poco privado de mi parte ya que es un proyecto muy personal.
            <br /><b> Ultima actualización del porfolio:</b> 20/05/2025 15:54
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.number} className="bg-background/90 shadow-lg transition-transform transform hover:scale-105 duration-300">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={project.image || "/CommingSoon.png"}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-md mb-4"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <CardDescription>{project.description}</CardDescription>
            <CardDescription className="text-sm mt-4"><b>TechStack: <br /></b>{project.TechStack}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
                {project.demoLink.includes("https") ? (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Link
                </a> 
                ) : (
                <span className="text-gray-500">Demo no disponible</span>
                )}
            </Button>
            {/* 
            <Button variant="outline" asChild>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                Código
              </a>
            </Button> */}
          </CardFooter>
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

