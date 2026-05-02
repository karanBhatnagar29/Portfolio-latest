import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hero />
        <div className="mobile-section-shell overflow-hidden md:contents">
          <About />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mobile-section-shell overflow-hidden md:contents">
          <Skills />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mobile-section-shell overflow-hidden md:contents">
          <Projects />
        </div>
      </div>
      <div className="mobile-section-shell mx-2 md:mx-0 md:contents">
        <Experience />
      </div>
      <div className="mobile-section-shell mx-2 md:mx-0 md:contents">
        <Contact />
      </div>
      <BackToTop />
    </>
  )
}
