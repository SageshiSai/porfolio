import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Kevin leonardo patiño. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  )
}