import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "Git",
  "Java",
  "Angular",
  "Spring Boot",
  "Python",
  "PHP",
  "MySQL",
  "JQuery",
  "Bootstrap",
  "Tailwind CSS",
  "Responsive Design",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

