"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MousePointer,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const quickNotes = [
  "Founder of Junto",
  "Co-Founder at Stumble Market",
  "Full-Stack Product Builder",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const phrases = [
    "Founder-led products with taste",
    "Modern marketplaces and social apps",
    "Full-stack execution from idea to launch",
  ];
  const typingSpeed = 70;
  const deletingSpeed = 36;
  const pauseDuration = 1700;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));

        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      } else if (!isPaused) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));

        if (typedText.length === currentPhrase.length) {
          setIsPaused(true);
          pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : isPaused ? pauseDuration : typingSpeed,
    );

    return () => {
      clearTimeout(timeout);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [typedText, currentPhraseIndex, isDeleting, isPaused, phrases]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("ventures");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5.5rem)] items-center overflow-hidden py-8 md:min-h-screen md:py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-28 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute right-[10%] top-24 h-72 w-72 rounded-full bg-emerald-500/16 blur-3xl" />
        <div className="absolute bottom-20 left-[28%] h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="eyebrow px-3 py-2 text-[0.65rem] sm:px-4 sm:py-2.5 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Contact for tech counselling
              </span>
            </motion.div>

            <motion.h1
              className="mt-5 text-[2.5rem] font-bold tracking-[-0.06em] sm:text-5xl md:mt-7 md:text-6xl lg:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Founder-minded design.
              <span className="mt-2 block gradient-text">
                Full-stack execution.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-6 text-muted-foreground lg:mx-0 lg:mt-6 lg:text-xl lg:leading-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              I&apos;m Karan Bhatnagar. I build modern digital products that look
              intentional, convert clearly, and ship fast, from founder-led
              ventures like Junto to commerce platforms like Stumble Market.
            </motion.p>

            <motion.div
              className="mx-auto mt-5 flex min-h-[3.15rem] max-w-2xl items-center justify-center rounded-[1.35rem] border border-border/80 bg-background/75 px-4 py-3 text-left shadow-[0_20px_45px_-35px_rgba(15,23,42,0.25)] backdrop-blur lg:mx-0 lg:mt-7 lg:min-h-[3.5rem] lg:justify-start lg:px-5 lg:py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <p className="text-sm font-medium text-foreground sm:text-base md:text-lg">
                {typedText}
                <span
                  className={`ml-1 inline-block h-6 w-1 rounded-full bg-primary ${
                    isPaused ? "opacity-0" : "animate-blink"
                  }`}
                />
              </p>
            </motion.div>

            <motion.div
              className="mobile-rail mt-5 justify-start lg:mt-8 lg:flex lg:flex-wrap lg:overflow-visible lg:gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              {quickNotes.map((note) => (
                <div
                  key={note}
                  className="mobile-rail-card rounded-full border border-border/80 bg-background/75 px-4 py-2 text-xs font-medium text-muted-foreground shadow-[0_14px_30px_-22px_rgba(15,23,42,0.2)] backdrop-blur sm:min-w-0 sm:text-sm"
                >
                  {note}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-8 lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
            >
              <Button size="lg" className="group h-12 rounded-[1rem] sm:rounded-full" asChild>
                <a href="#projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 rounded-[1rem] sm:rounded-full" asChild>
                <a href="#contact">Discuss a project</a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-6 flex items-center justify-center space-x-3 lg:mt-8 lg:justify-start lg:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <a
                href="https://github.com/karanBhatnagar29"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/80 bg-background/75 p-3 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/karanbhatnagar29/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/80 bg-background/75 p-3 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:karanbhatnagar862@gmail.com"
                className="rounded-full border border-border/80 bg-background/75 p-3 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="relative"
          >
            <div className="surface-panel relative overflow-hidden rounded-[1.7rem] p-2.5 sm:p-4 md:rounded-[2.25rem] md:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_30%)]" />
              <div className="relative grid gap-4">
                <div className="surface-card relative overflow-hidden rounded-[1.2rem] p-3 sm:p-4 md:rounded-[1.8rem]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent)]" />
                  <div className="relative grid gap-3 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-4">
                    <div className="rounded-[1.2rem] bg-[linear-gradient(145deg,rgba(7,44,37,0.95),rgba(20,78,65,0.9))] p-3 md:rounded-[1.5rem]">
                      <img
                        src="/me.jpeg"
                        alt="Karan Bhatnagar"
                        className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
                      />
                    </div>
                    <div className="space-y-3 text-left md:space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Selected Identity
                        </p>
                        <h3 className="mt-2 text-xl font-bold tracking-[-0.05em] sm:text-2xl">
                          Modern products with founder energy.
                        </h3>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1.2rem] border border-border/80 bg-muted/35 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Experience
                          </p>
                          <p className="mt-2 text-2xl font-bold sm:text-3xl">3+</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Years shipping production apps
                          </p>
                        </div>
                        <div className="rounded-[1.2rem] border border-border/80 bg-muted/35 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Ventures
                          </p>
                          <p className="mt-2 text-2xl font-bold sm:text-3xl">2</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Founder-led products in market
                          </p>
                        </div>
                      </div>
                      <div className="rounded-[1.2rem] border border-emerald-500/15 bg-emerald-500/8 p-4 text-sm leading-6 text-muted-foreground">
                        Junto focuses on trust-based local coordination.
                        Stumble Market reframes second-hand commerce as curated
                        and premium.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden gap-4 md:grid md:grid-cols-[1.1fr_0.9fr]">
                  <div className="surface-card rounded-[1.4rem] p-4 sm:p-5 md:rounded-[1.6rem]">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                      <Globe2 className="h-4 w-4" />
                      Founder Project
                    </div>
                    <h4 className="mt-3 text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                      Junto
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Trust-based social coordination for real-world plans, safer
                      participation, and repeatable local momentum.
                    </p>
                  </div>
                  <div className="surface-card rounded-[1.4rem] p-4 sm:p-5 md:rounded-[1.6rem]">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                      <Layers3 className="h-4 w-4" />
                      Co-Founder Venture
                    </div>
                    <h4 className="mt-3 text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                      Stumble Market
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Curated second-hand marketplace with a cleaner,
                      credibility-first experience for buyers and sellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -left-4 top-10 hidden rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-medium shadow-[0_16px_35px_-24px_rgba(15,23,42,0.35)] backdrop-blur md:block dark:border-white/10 dark:bg-slate-900/75"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
            >
              Product taste + engineering depth
            </motion.div>
            <motion.div
              className="absolute -bottom-4 right-6 hidden rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-medium shadow-[0_16px_35px_-24px_rgba(15,23,42,0.35)] backdrop-blur md:block dark:border-white/10 dark:bg-slate-900/75"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              Built to feel custom, not generic
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center md:flex"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.45, duration: 0.5 }}
        onClick={scrollToNext}
      >
        <span className="mb-2 text-sm text-muted-foreground">Scroll Into Ventures</span>
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <MousePointer className="h-3 w-3 text-primary" />
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="mt-2"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
