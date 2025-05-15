"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Coffee, Award } from "lucide-react"

const stats = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    value: 50,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: 50,
    label: "Satisfied Clients",
    suffix: "+",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    value: 5000,
    label: "Cups of Coffee",
    suffix: "+",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: 15000,
    label: "Hours of Experience",
    suffix: "",
  },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true)
    }
  }, [isInView])

  return (
    <section className="py-16 bg-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5">
            Achievements
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Journey in Numbers</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4 text-primary">{stat.icon}</div>
              <div className="flex items-center justify-center">
                <CountUp
                  end={stat.value}
                  duration={2}
                  isInView={hasAnimated}
                  className="text-3xl md:text-4xl font-bold"
                />
                <span className="text-3xl md:text-4xl font-bold">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CountUpProps {
  end: number
  duration: number
  isInView: boolean
  className?: string
}

function CountUp({ end, duration, isInView, className }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const progressPercent = Math.min(progress / (duration * 1000), 1)

      setCount(Math.floor(progressPercent * end))

      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(startAnimation)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration])

  return <span className={className}>{count}</span>
}
