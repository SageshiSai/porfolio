import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Kevin Leonardo Patiño. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 ">
            <a href="https://github.com/SageshiSai" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-4xl">
            <FaGithub />
            <span className="sr-only">GitHub</span>
            </a>
          <a href="https://es.linkedin.com/in/kevin-leonardo-pati%C3%B1o-sanchez-a1b93032b" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-4xl">
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/kevleopat/" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-4xl">
            <FaInstagram />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}