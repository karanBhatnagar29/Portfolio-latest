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
        <FounderVentures />
        <WorkWithMe />
        <About />
      </div>
      <Services />
      <div className="container mx-auto px-4">
        <Skills />
        <WhoIHelp />
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
