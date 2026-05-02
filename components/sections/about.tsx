"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code2, Rocket, Smartphone, Server } from "lucide-react";
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
    [0.8, 1, 1, 0.8],
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-24"
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
          className="mb-10 text-center md:mb-14"
        >
          <Badge className="mb-4 rounded-full bg-foreground px-4 py-2 text-sm text-background">
            README.md
          </Badge>
          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-[0.95] tracking-[-0.06em] md:text-5xl lg:text-6xl">
            Product brain, coder hands,
            <span className="block italic gradient-text">ship-it nervous system.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group md:sticky md:top-32"
          >
            <div className="relative z-10 overflow-hidden rounded-[1.6rem] border border-foreground/10 bg-foreground p-3 text-background shadow-[0_34px_100px_-58px_rgba(15,23,42,0.65)] md:rounded-[2rem]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(251,191,36,0.18))]" />
              <div className="relative grid gap-3">
                <div className="flex items-center justify-between rounded-[1.15rem] border border-background/10 bg-background/10 px-4 py-3">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-background/55">
                    README.preview
                  </p>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-black text-accent-foreground">
                    merge ready
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="overflow-hidden rounded-[1.15rem] border border-background/10 bg-background/10 p-3">
                    <img
                      src="/about.png"
                      alt="About Me"
                      className="aspect-[4/3.8] w-full rounded-[0.95rem] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-[1.15rem] border border-background/10 bg-background p-4 text-foreground">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        current branch
                      </p>
                      <h3 className="mt-3 text-2xl font-black tracking-[-0.06em] lg:text-3xl">
                        product-builder
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-[1.15rem] border border-background/10 bg-background/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-background/55">
                          exp
                        </p>
                        <p className="mt-2 text-3xl font-black">3+</p>
                      </div>
                      <div className="rounded-[1.15rem] border border-background/10 bg-accent p-4 text-accent-foreground">
                        <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70">
                          mode
                        </p>
                        <p className="mt-2 text-3xl font-black">ship</p>
                      </div>
                    </div>
                    <div className="rounded-[1.15rem] border border-background/10 bg-background/10 p-4 text-sm leading-6 text-background/70">
                      Founder lens and product taste in the same pull request.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-2xl font-black tracking-[-0.05em] md:mb-5 md:text-4xl">
              I turn “what if?” into shipped screens, APIs, and product loops.
            </h3>

            <p className="mb-3 text-sm leading-6 text-muted-foreground md:mb-4 md:text-base md:leading-7">
              I'm a Full Stack Developer with{" "}
              <strong className="text-foreground">
                3+ years of experience
              </strong>{" "}
              building production-grade web and mobile applications. I work
              across frontend, backend, mobile, database, cloud, and CI/CD
              workflows.
            </p>

            <p className="mb-3 text-sm leading-6 text-muted-foreground md:mb-4 md:text-base md:leading-7">
              I bring the founder lens from Junto and Stumble Market into client
              work: clarify the MVP, choose the right stack, design the core
              user flow, and ship without turning the site into a wall of data.
            </p>

            <p className="mb-5 text-sm leading-6 text-muted-foreground md:mb-6 md:text-base md:leading-7">
              My recent work spans Movaraa, ZestyCrops, MegaRail, Junto, and
              Stumble Market, covering full-stack apps, commerce, internal
              tools, social products, product strategy, and AI-assisted delivery.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button className="group" asChild>
                <a href="/Karan-Bhatnagar-Resume.docx" download>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </a>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-7 grid grid-cols-2 gap-2.5 md:mt-9 md:grid-cols-4 md:gap-3"
        >
          <div className="rounded-[1rem] border border-border bg-muted/30 p-3.5 md:rounded-[1.1rem] md:p-4">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              view()
            </p>
            <h4 className="mb-2 flex items-center gap-2 font-black">
              <Code2 className="h-4 w-4" />
              Frontend
            </h4>
            <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
              Interfaces, dashboards, landing flows, and polish.
            </p>
          </div>
          <div className="rounded-[1rem] border border-border bg-muted/30 p-3.5 md:rounded-[1.1rem] md:p-4">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              api()
            </p>
            <h4 className="mb-2 flex items-center gap-2 font-black">
              <Server className="h-4 w-4" />
              Backend
            </h4>
            <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
              Auth, APIs, admin systems, and production logic.
            </p>
          </div>
          <div className="rounded-[1rem] border border-border bg-muted/30 p-3.5 md:rounded-[1.1rem] md:p-4">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              app()
            </p>
            <h4 className="mb-2 flex items-center gap-2 font-black">
              <Smartphone className="h-4 w-4" />
              Mobile
            </h4>
            <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
              Product flows, file handling, and backend-connected screens.
            </p>
          </div>
          <div className="rounded-[1rem] border border-foreground bg-foreground p-3.5 text-background md:rounded-[1.1rem] md:p-4">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background/50">
              deploy()
            </p>
            <h4 className="mb-2 flex items-center gap-2 font-black text-accent">
              <Rocket className="h-4 w-4" />
              Launch
            </h4>
            <p className="text-xs leading-5 text-background/65 sm:text-sm sm:leading-6">
              Cloud, CI/CD, performance, and AI-assisted iteration.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
