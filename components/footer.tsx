import Link from "next/link"
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 pb-6 pt-16">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(7,44,37,0.96),rgba(10,22,37,0.98))] px-6 py-10 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)] md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl text-center md:text-left">
              <div className="eyebrow border-white/10 bg-white/5 text-white/70">
                Built for products with ambition
              </div>
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white md:text-4xl">
                Karan Bhatnagar
              </h3>
              <p className="mt-4 max-w-lg text-white/70">
                Founder of Junto and co-founder of Stumble Market. I build
                memorable digital products with strong product thinking, visual
                taste, and production-ready engineering.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <Button className="rounded-full bg-white text-slate-950 hover:bg-white/90" asChild>
                  <a href="#contact">
                    Start a conversation
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="#projects">Browse selected work</a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 md:text-left">
              <div>
                <h4 className="mb-3 font-semibold text-white">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#home" className="text-white/65 transition-colors hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="text-white/65 transition-colors hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="text-white/65 transition-colors hover:text-white">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-white/65 transition-colors hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white">Focus</h4>
                <ul className="space-y-2">
                  <li className="text-white/65">Founder-led products</li>
                  <li className="text-white/65">Marketplaces</li>
                  <li className="text-white/65">Social experiences</li>
                  <li className="text-white/65">Full-stack systems</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="mb-3 font-semibold text-white">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-white/65">karanbhatnagar862@gmail.com</li>
                  <li className="text-white/65">9829760022</li>
                  <li className="text-white/65">Jodhpur, Rajasthan</li>
                </ul>
                <div className="mt-4 flex justify-center space-x-3 md:justify-start">
                  <Button variant="ghost" size="icon" className="rounded-full text-white/80 hover:bg-white/10 hover:text-white" asChild>
                    <a href="https://github.com/karanBhatnagar29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full text-white/80 hover:bg-white/10 hover:text-white" asChild>
                    <a href="https://www.linkedin.com/in/karanbhatnagar29/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full text-white/80 hover:bg-white/10 hover:text-white" asChild>
                    <a href="https://www.instagram.com/karan_bhatnagar_/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
            <p>© {currentYear} Karan Bhatnagar. Designed to feel like a product, not a template.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
