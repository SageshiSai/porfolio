import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import {AuroraBackground} from "../components/ui/aurora-background"


export default function Portfolio() {


  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        
        <AuroraBackground className="h-full hidden mb:block md:block">
          <div className="bg-black w-full h-full mb:h-5/6">
            <Skills />
          </div>
        </AuroraBackground>
          <div className="bg-black w-full h-full mb:h-5/6 sm:block md:hidden">
            <Skills />
          </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

