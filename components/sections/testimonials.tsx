"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechStart",
    company: "TechStart Inc.",
    image: "/testimonials/sarah-johnson.png",
    text: "Working with this developer was an absolute pleasure. They delivered our enterprise platform on time and exceeded our expectations in terms of quality and functionality. Their attention to detail and problem-solving skills are truly impressive.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO at InnovateCorp",
    company: "InnovateCorp",
    image: "/testimonials/michael-chen.png",
    text: "I've worked with many developers over the years, but few have demonstrated the level of expertise and dedication that I experienced with this developer. They not only understood our complex technical requirements but also provided valuable insights that improved our product architecture.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder of DesignHub",
    company: "DesignHub",
    image: "/testimonials/emily-rodriguez.png",
    text: "The developer's ability to translate our design vision into a fully functional website was remarkable. They were responsive, professional, and delivered high-quality work that perfectly captured our brand identity while ensuring optimal performance.",
  },
  {
    id: 4,
    name: "David Kim",
    position: "VP of Engineering",
    company: "SoftSolutions",
    image: "/testimonials/david-kim.png",
    text: "We hired this developer to help us modernize our legacy application, and the results were outstanding. Their technical knowledge, clean coding practices, and ability to work within our existing architecture made the transition smooth and successful.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold section-title mx-auto">Client Testimonials</h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5 }}
                className="card-hover"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <Card className="border shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
                          <img
                            src={
                              currentTestimonial.image ||
                              `/placeholder.svg?height=96&width=96&query=professional portrait of ${currentTestimonial.name || "/placeholder.svg"}`
                            }
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -left-2 bg-primary text-primary-foreground p-2 rounded-full shadow-md">
                          <Quote className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <blockquote className="text-lg italic mb-6 relative">
                          <div className="absolute -left-4 top-0 text-6xl text-primary/10">"</div>
                          <div className="relative z-10">{currentTestimonial.text}</div>
                          <div className="absolute -right-4 bottom-0 text-6xl text-primary/10">"</div>
                        </blockquote>

                        <div className="border-t pt-4">
                          <h4 className="font-medium text-lg">{currentTestimonial.name}</h4>
                          <p className="text-muted-foreground">{currentTestimonial.position}</p>
                          <p className="text-primary text-sm font-medium">{currentTestimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`w-2.5 h-2.5 rounded-full p-0 ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
