import Hero from "@/components/sections/hero"
import FounderVentures from "@/components/sections/founder-ventures"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Skills from "@/components/sections/skills"
import Stats from "@/components/sections/stats"
import WorkWithMe from "@/components/sections/work-with-me"
import WhoIHelp from "@/components/sections/who-i-help"
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
        <div className="mobile-section-shell overflow-hidden md:contents">
          <FounderVentures />
          <WorkWithMe />
        </div>
        <div className="mobile-section-shell overflow-hidden md:contents">
          <About />
        </div>
      </div>
      <div className="mobile-section-shell mx-2 md:mx-0 md:contents">
        <Services />
      </div>
      <div className="container mx-auto px-4">
        <div className="mobile-section-shell overflow-hidden md:contents">
          <Skills />
          <WhoIHelp />
        </div>
      </div>
      <div className="mobile-section-shell mx-2 md:mx-0 md:contents">
        <Stats />
      </div>
      <div className="container mx-auto px-4">
        <div className="mobile-section-shell overflow-hidden md:contents">
          <Projects />
        </div>
      </div>
      <div className="mobile-section-shell mx-2 md:mx-0 md:contents">
        <Experience />
      </div>
      <div className="container mx-auto px-4">
        <div className="mobile-section-shell overflow-hidden md:contents">
          <Testimonials />
        </div>
      </div>
      <div className="mobile-section-shell mx-2 md:mx-0 md:contents">
        <Contact />
      </div>
      <BackToTop />
    </>
  )
}
