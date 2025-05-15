"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, PenTool, Database, LineChart, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Frontend Development",
    description:
      "Crafting responsive and modern web interfaces using React, Next.js, Tailwind CSS, and shadcn/ui for sleek, scalable designs.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Backend Development",
    description:
      "Building robust backend systems and APIs using NestJS for scalable and secure application logic.",
    technologies: ["NestJS", "TypeScript", "REST APIs"],
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Android Development",
    description:
      "Developing modern Android apps using Jetpack Compose for fast, declarative UI and smooth native performance.",
    technologies: ["Jetpack Compose", "Kotlin"],
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "UI/UX Implementation",
    description:
      "Translating design systems into intuitive, accessible interfaces while collaborating closely with designers.",
    technologies: ["Figma", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Performance Optimization",
    description:
      "Improving performance and user experience through code audits, lazy loading, and efficient rendering strategies.",
    technologies: ["Lighthouse", "Web Vitals", "Code Splitting"],
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Technical Consulting",
    description:
      "Advising on architecture, tech stack decisions, and scaling strategies based on real-world development experience.",
    technologies: ["System Design", "Best Practices", "Architecture"],
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
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
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5">
            My Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What I Can Do For You</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer end-to-end development services, from building clean UI interfaces to crafting powerful backends and native mobile apps, with a strong focus on modern technologies and maintainability.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary/10 p-4 rounded-lg inline-block mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-muted/50">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="group/btn">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
