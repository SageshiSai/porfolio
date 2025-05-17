import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, SkillsCard } from "@/components/ui/card"

const skills = [
  {
    category: "FRONT-END",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Ionic",
      "JQuery",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "BACK-END",
    items: [
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "PHP",
      "Jakarta",
      "Hibernate",
    ],
  },
  {
    category: "Herramientas",
    items: [
      "GitHub",
      "Figma",
      "Postman",
      "dbdiagram.io",
      "Vercel",
    ],
  },
  {
    category: "DevOps",
    items: [
      "Vercel",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
    <h2 className="text-3xl font-bold mb-8 text-center">Mis habilidades</h2>
    <div className="container mx-auto px-4 flex gap-8 flex-wrap justify-center max-w-7xl">
      {skills.map((skillCategory) => (
        <SkillsCard key={skillCategory.category}>
          <CardHeader>
            <CardTitle className="flex justify-center font-bold text-2xl">{skillCategory.category}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {skillCategory.items.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-lg py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </SkillsCard>
      ))}
    </div>
  </section>
  )
}

