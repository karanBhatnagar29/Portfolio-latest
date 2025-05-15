import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Skills from "@/components/sections/skills"
import Stats from "@/components/sections/stats"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hero />
        <About />
      </div>
      <Services />
      <div className="container mx-auto px-4">
        <Skills />
      </div>
      <Stats />
      <div className="container mx-auto px-4">
        <Projects />
      </div>
      <Experience />
      <div className="container mx-auto px-4">
        <Testimonials />
      </div>
      <Contact />
      <BackToTop />
    </>
  )
}
