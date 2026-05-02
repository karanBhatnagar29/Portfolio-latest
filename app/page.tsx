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
      <Hero />
      <div className="mobile-section-shell mx-1.5 overflow-hidden md:mx-0 md:contents">
        <About />
      </div>
      <div className="mobile-section-shell mx-1.5 overflow-hidden md:mx-0 md:contents">
        <Skills />
      </div>
      <div className="mobile-section-shell mx-1.5 overflow-hidden md:mx-0 md:contents">
        <Projects />
      </div>
      <div className="mobile-section-shell mx-1.5 md:mx-0 md:contents">
        <Experience />
      </div>
      <div className="mobile-section-shell mx-1.5 md:mx-0 md:contents">
        <Contact />
      </div>
      <BackToTop />
    </>
  )
}
