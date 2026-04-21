"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Home, BriefcaseBusiness, Layers3, FolderKanban, MessageCircleMore } from "lucide-react"

const mobileNavItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Ventures", href: "#ventures", icon: Layers3 },
  { name: "Work", href: "#work-with-me", icon: BriefcaseBusiness },
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
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <div className="mobile-bottom-nav mx-auto grid max-w-md grid-cols-5 gap-1 rounded-[1.8rem] p-2">
        {mobileNavItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex min-h-[4.25rem] flex-col items-center justify-center gap-1 rounded-[1.2rem] px-1 py-2 text-center text-[0.68rem] font-semibold tracking-[0.08em] transition-all ${
                activeSection === item.href.slice(1)
                  ? "bg-primary text-primary-foreground shadow-[0_12px_24px_-16px_rgba(16,185,129,0.9)]"
                  : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
              }`}
            >
              <Icon className="h-4.5 w-4.5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
