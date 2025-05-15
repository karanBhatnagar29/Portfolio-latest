"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <motion.div
        style={{ opacity, y, scale }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5"
          >
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Crafting Digital Experiences with Passion
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border border-primary/20 bg-white dark:bg-background/80 backdrop-blur-md">
              <img
                src="/about.png"
                alt="About Me"
                className="w-full h-auto object-contain aspect-[4/3] transition-transform duration-300 group-hover:scale-105 rounded-3xl"
              />

              {/* Floating Experience Badge */}
              <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-3 shadow-md flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-primary font-bold text-lg">2+</span>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Years of</p>
                  <p className="text-sm font-semibold">Experience</p>
                </div>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -inset-3 rounded-[30px] border-2 border-dashed border-primary/20 opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-primary/10 rounded-full blur-2xl opacity-30 z-0"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 font-heading">
              Transforming Ideas into Exceptional Digital Solutions
            </h3>

            <p className="text-muted-foreground mb-6">
              I am a dedicated full stack developer with expertise across the
              entire tech stack. On the frontend, I build responsive and
              accessible interfaces using React, JavaScript, and Next.js —
              enhanced with Tailwind CSS and shadcn/ui for clean design systems
              and rapid UI development. On the backend, I develop scalable APIs
              and services using NestJS. I also create modern Android
              applications using Jetpack Compose to deliver smooth, native
              mobile experiences.
            </p>

            <p className="text-muted-foreground mb-8">
              I thrive on transforming ideas into polished digital products. My
              development approach blends functionality with visual appeal,
              ensuring that every interface not only works flawlessly but also
              feels intuitive. I'm passionate about writing clean, maintainable
              code and staying up to date with modern tooling and best practices
              across both frontend and backend development.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Frontend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Creating responsive, accessible, and performant user
                  interfaces
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Backend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building robust APIs and server-side applications
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">
                  Designing intuitive and engaging user experiences
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Technical Consulting</h4>
                <p className="text-sm text-muted-foreground">
                  Providing expert guidance on technology decisions
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
