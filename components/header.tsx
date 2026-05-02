"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Download, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full px-2.5 pt-2.5 transition-all duration-300 md:px-5 md:pt-3">
      <div className="container mx-auto">
        <div
          className={`surface-panel flex h-14 items-center justify-between rounded-[1.2rem] px-3 md:h-20 md:rounded-[1.6rem] md:px-5 ${
            isScrolled ? "shadow-[0_24px_60px_-42px_rgba(15,23,42,0.5)]" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex h-9 w-9 rotate-[-3deg] items-center justify-center rounded-[0.8rem] bg-foreground text-sm font-black text-background shadow-lg shadow-primary/20 transition group-hover:rotate-3 md:h-11 md:w-11 md:text-base">
                KB
              </span>
              <div>
                <p className="text-sm font-black tracking-[-0.05em] sm:text-base md:text-lg">Karan Bhatnagar</p>
                <p className="hidden text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground sm:block">
                  Founder / Builder / Product Engineer
                </p>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center rounded-[1.1rem] border border-border/80 bg-background/70 px-1.5 py-1.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-[0.85rem] px-3 py-2 text-sm font-black transition-colors lg:px-4 ${
                  activeSection === item.href.substring(1)
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center space-x-3 md:flex">
            <div className="hidden rotate-[-1deg] items-center gap-2 rounded-[0.9rem] border border-accent bg-accent px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-accent-foreground xl:flex">
              <Sparkles className="h-3.5 w-3.5" />
              Open for sharp builds
            </div>
            <ThemeToggle />
            <Button size="sm" className="gap-2 rounded-full group" asChild>
              <a href="/Karan-Bhatnagar-Resume.docx" download>
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center space-x-1.5 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-2xl"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-3 max-w-7xl md:hidden"
          >
            <div className="surface-panel rounded-[1.35rem] px-3 py-3">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-[1rem] px-4 py-2.5 text-sm font-black transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "bg-foreground text-background"
                        : "hover:bg-muted/70"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-1 rounded-[1rem] border border-accent bg-accent px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-accent-foreground">
                  Open for sharp builds
                </div>
                <Button className="mt-1 gap-2 rounded-[1rem]" asChild>
                  <a href="/Karan-Bhatnagar-Resume.docx" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
