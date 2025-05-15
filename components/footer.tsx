import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Karan Bhatnagaer
            </h3>
            <p className="text-muted-foreground mt-2 max-w-md">
              Creating exceptional digital experiences with cutting-edge technologies and innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">karanbhatnagar862@gmail.com</li>
                <li className="text-muted-foreground">9829760022</li>
                <li className="text-muted-foreground">Jodhpur, Rajasthan</li>
              </ul>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/karanBhatnagar29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/karanbhatnagar29/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                {/* <Button variant="ghost" size="icon" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button> */}
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/karan_bhatnagar_/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Karan Bhatnagar. All rights reserved. Designed and developed with passion.</p>
        </div>
      </div>
    </footer>
  )
}
