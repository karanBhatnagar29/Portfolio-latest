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
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
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
    <header className="sticky top-0 z-50 w-full px-3 pt-3 transition-all duration-300 md:px-5">
      <div className="container mx-auto">
        <div
          className={`surface-panel flex h-20 items-center justify-between rounded-full px-4 md:px-6 ${
            isScrolled ? "shadow-[0_24px_60px_-42px_rgba(15,23,42,0.5)]" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                KB
              </span>
              <div className="hidden sm:block">
                <p className="text-lg font-bold tracking-[-0.04em]">Karan Bhatnagar</p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Founder, Builder, Product Engineer
                </p>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center rounded-full border border-border/80 bg-background/70 px-2 py-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center space-x-3 md:flex">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300 xl:flex">
              <Sparkles className="h-3.5 w-3.5" />
              Open for selective work
            </div>
            <ThemeToggle />
            <Button size="sm" className="gap-2 rounded-full group">
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Resume
            </Button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
            <div className="surface-panel rounded-[2rem] px-4 py-4">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "bg-primary text-primary-foreground font-medium"
                        : "hover:bg-muted/70"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-2 gap-2 rounded-full">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
