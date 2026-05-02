"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const quickNotes = [
  "git push taste",
  "ship > pitch",
  "founder.exe",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const phrases = [
    "Product direction without the corporate fog",
    "Interfaces that feel alive, useful, and shipped",
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

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden py-4 md:min-h-[calc(100svh-6.5rem)] md:py-6"
    >
      <div className="absolute inset-0 -z-10 kinetic-grid opacity-70" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-5 md:gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-10">
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
              <span className="eyebrow border-foreground/10 bg-foreground text-background px-3 py-2 text-[0.65rem] shadow-[0_18px_45px_-28px_rgba(15,23,42,0.55)] sm:px-4 sm:py-2.5 sm:text-xs dark:bg-foreground dark:text-background">
                <Code2 className="h-3.5 w-3.5" />
                Product engineer who actually ships
              </span>
            </motion.div>

            <motion.h1
              className="mt-4 max-w-4xl text-[2.38rem] font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl md:mt-5 md:text-7xl lg:text-[5.05rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Build the thing.
              <span className="mt-2 block text-[0.92em] italic gradient-text">
                Make it feel inevitable.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-3 max-w-2xl text-[0.9rem] leading-6 text-muted-foreground sm:mt-4 lg:mx-0 lg:mt-5 lg:text-lg lg:leading-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              I&apos;m Karan Bhatnagar. I turn fuzzy startup ideas into sharp
              web and mobile products, with founder judgment, clean UX, and
              production-ready full-stack engineering.
            </motion.p>

            <motion.div
              className="mx-auto mt-3 flex min-h-[2.7rem] max-w-2xl items-center justify-center rounded-[1rem] border border-foreground/10 bg-foreground/5 px-3.5 py-2.5 text-left shadow-[0_20px_45px_-35px_rgba(15,23,42,0.25)] backdrop-blur sm:mt-4 lg:mx-0 lg:mt-5 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <p className="text-sm font-bold text-foreground sm:text-base md:text-lg">
                {typedText}
                <span
                  className={`ml-1 inline-block h-6 w-1 rounded-full bg-primary ${
                    isPaused ? "opacity-0" : "animate-blink"
                  }`}
                />
              </p>
            </motion.div>

            <motion.div
              className="mobile-rail mt-3 justify-start sm:mt-4 lg:mt-5 lg:flex lg:flex-wrap lg:overflow-visible lg:gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              {quickNotes.map((note) => (
                <div
                  key={note}
                  className="mobile-rail-card rounded-full border border-border/80 bg-background/75 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-[0_14px_30px_-22px_rgba(15,23,42,0.2)] backdrop-blur sm:min-w-0 sm:text-sm"
                >
                  {note}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-4 flex flex-col justify-center gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-3 lg:mt-6 lg:justify-start"
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
              <Button size="lg" variant="ghost" className="h-12 rounded-[1rem] sm:rounded-full" asChild>
                <a href="/Karan-Bhatnagar-Resume.docx" download>
                  Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-3 flex items-center justify-center space-x-3 sm:mt-4 lg:mt-5 lg:justify-start lg:space-x-4"
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
            <div className="relative overflow-hidden rounded-[1.55rem] border border-foreground/10 bg-foreground p-2.5 text-background shadow-[0_34px_100px_-55px_rgba(15,23,42,0.7)] sm:p-3 md:rounded-[1.8rem]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_30%,rgba(251,191,36,0.2)_70%,transparent)]" />
              <div className="absolute inset-x-0 top-0 flex min-w-max animate-marquee gap-8 border-b border-background/10 py-3 text-xs font-black uppercase tracking-[0.28em] text-background/50">
                <span>commit</span><span>interface</span><span>api</span><span>launch</span><span>debug</span><span>commit</span><span>interface</span><span>api</span>
              </div>
              <div className="relative grid gap-3 pt-10">
                <div className="relative overflow-hidden rounded-[1.15rem] border border-background/10 bg-background/10 p-3 backdrop-blur md:rounded-[1.45rem]">
                  <div className="relative grid gap-3 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-4">
                    <div className="rounded-[1.15rem] bg-background/10 p-3 md:rounded-[1.4rem]">
                      <img
                        src="/me.jpeg"
                        alt="Karan Bhatnagar"
                        className="aspect-[4/4.45] w-full rounded-[1rem] object-cover grayscale transition duration-500 hover:grayscale-0"
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/55">
                          Build Mode
                        </p>
                        <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                          Taste-led builds for people who are done with generic.
                        </h3>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1.1rem] border border-background/10 bg-background/10 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-background/55">
                            Experience
                          </p>
                          <p className="mt-2 text-2xl font-bold sm:text-3xl">3+</p>
                          <p className="mt-1 text-sm text-background/65">
                            Years shipping production apps
                          </p>
                        </div>
                        <div className="rounded-[1.1rem] border border-background/10 bg-accent p-4 text-accent-foreground">
                          <p className="text-xs uppercase tracking-[0.2em] opacity-70">
                            Stack
                          </p>
                          <p className="mt-2 text-2xl font-bold sm:text-3xl">Ship</p>
                          <p className="mt-1 text-sm opacity-75">
                            Frontend, backend, mobile
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {["clean UX", "fast APIs", "AI builds", "mobile flows"].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-background/10 bg-background/10 px-3 py-2 text-center text-xs font-black uppercase tracking-[0.16em] text-background/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden gap-3 md:grid md:grid-cols-3">
                  <div className="rounded-[1.15rem] border border-background/10 bg-background/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-background/55">products</p>
                    <p className="mt-2 text-3xl font-black">05</p>
                  </div>
                  <div className="rounded-[1.15rem] border border-background/10 bg-accent p-4 text-accent-foreground">
                    <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70">mode</p>
                    <p className="mt-2 text-3xl font-black">ship</p>
                  </div>
                  <div className="rounded-[1.15rem] border border-background/10 bg-background p-4 text-foreground">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">fit</p>
                    <p className="mt-2 text-xl font-black">MVPs + AI</p>
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
              Taste + engineering depth
            </motion.div>
            <motion.div
              className="absolute -bottom-4 right-6 hidden rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-medium shadow-[0_16px_35px_-24px_rgba(15,23,42,0.35)] backdrop-blur md:block dark:border-white/10 dark:bg-slate-900/75"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              Custom over template energy
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
