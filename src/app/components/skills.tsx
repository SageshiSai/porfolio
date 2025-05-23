import { Badge } from "@/components/ui/badge"
import { CardContent, CardDescription, CardHeader, CardTitle, SkillsCard } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  {
    category: "FRONT-END",
    items: [
      { 
        number: 1,
        images: "/assets/typescript.svg",
        name: "TypeScript",
      },
      {
        number: 2,
        images: "/assets/react.svg",
        name: "React",
      },
      {
        number: 3,
        images: "/assets/next-dot-js.svg",
        name: "Next.js",
      },
      {
        number: 4,
        images: "/assets/angular.svg",
        name: "Angular",
      },
      {
        number: 5,
        images: "/assets/ionic.svg",
        name: "Ionic",
      },
      {
        number: 6,
        images: "/assets/jquery.svg",
        name: "JQuery",
      },
      {
        number: 7,
        images: "/assets/bootstrap.svg",
        name: "Bootstrap",
      },
      {
        number: 8,
        images: "/assets/tailwind.svg",
        name: "Tailwind CSS",
      }
    ],
  },
  {
    category: "BACK-END",
    items: [
      {
        number: 1,
        images: "/assets/node-js.svg",
        name: "Node.js",
      },
      {
        number: 2,
        images: "/assets/java.svg",
        name: "Java",
      },
      {
        number: 3,
        images: "/assets/spring.svg",
        name: "Spring Boot",
      },
      {
        number: 4,
        images: "/assets/python.svg",
        name: "Python",
      },
      {
        number: 5,
        images: "/assets/php.svg",
        name: "PHP",
      },
      {
        number: 6,
        images: "/assets/Jakarta-ee.svg",
        name: "Jakarta",
      },
      {
        number: 7,
        images: "/assets/hibernate.svg",
        name: "Hibernate",
      }
    ],
  },
  {
    category: "Herramientas",
    items: [

    {
      number: 1,
      images: "/assets/github.svg",
      name: "GitHub",
    },
    {
      number: 2,
      images: "/assets/figma.svg",
      name: "Figma",
    },
    {
      number: 3,
      images: "/assets/postman.svg",
      name: "Postman",
    },
    {
      number: 4,
      images: "/assets/dbdiagram.svg",
      name: "dbdiagram.io",
    }
    ],
  },
  {
    category: "DevOps",
    items: [
      {
        number: 1,
        images: "/assets/vercel.svg",
        name: "Vercel",
      }
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 " >
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Mis habilidades</h2>
    <div className="container mx-auto px-4 flex gap-8 flex-wrap justify-center max-w-7xl h-fit">
      {skills.map((skillCategory) => (
        <SkillsCard key={skillCategory.category}>
          <CardHeader>
            <CardTitle className="flex justify-center font-bold text-2xl">{skillCategory.category}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent >
            <div className="flex flex-wrap justify-center">
            {skillCategory.items.map((skill) => (
              <CardContent key={skill.number} className="flex p-2">
              <Image
                  src={skill.images}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="rounded-md m-1"
                  style={{ width: '30', height: '30' }}
                  priority />
                    <Badge key={skill.name} variant="secondary" className="text-lg py-2 px-2">
                      {/*skill.name*/}
                    </Badge>
              </CardContent>
              ))}
            </div>        
          </CardContent>
          
          
        </SkillsCard>
      ))}
    </div>
  </section>
  )
}

