"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-4 z-40 md:bottom-8 md:right-8"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-10 w-10 rounded-full bg-primary shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl md:h-12 md:w-12"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
