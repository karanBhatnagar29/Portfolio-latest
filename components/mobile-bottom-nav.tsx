"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Home, Code2, FolderKanban, MessageCircleMore, UserRound } from "lucide-react"

const mobileNavItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: UserRound },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Contact", href: "#contact", icon: MessageCircleMore },
]

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const current = mobileNavItems.find((item) => {
        const section = document.getElementById(item.href.slice(1))
        if (!section) return false

        const rect = section.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })

      if (current) {
        setActiveSection(current.href.slice(1))
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-1.5 pb-[max(0.38rem,calc(env(safe-area-inset-bottom)*0.45))] pt-1.5 md:hidden">
      <div className="mobile-bottom-nav mx-auto grid max-w-md grid-cols-5 gap-1 rounded-[1.35rem] p-1.5">
        {mobileNavItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex min-h-[3.35rem] flex-col items-center justify-center gap-0.5 rounded-[1rem] px-1 py-1.5 text-center text-[0.6rem] font-black uppercase tracking-[0.04em] transition-all ${
                activeSection === item.href.slice(1)
                  ? "bg-foreground text-background shadow-[0_12px_24px_-16px_rgba(15,23,42,0.9)]"
                  : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
