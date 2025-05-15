"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MousePointer,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        // Deleting text
        setTypedText(currentPhrase.substring(0, typedText.length - 1));

        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      } else if (!isPaused) {
        // Typing text
        setTypedText(currentPhrase.substring(0, typedText.length + 1));

        // If we've completed typing the current phrase
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
      isDeleting ? deletingSpeed : isPaused ? pauseDuration : typingSpeed
    );

    return () => {
      clearTimeout(timeout);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [typedText, currentPhraseIndex, isDeleting, isPaused, phrases]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div
          className={cn(
            "absolute top-20 right-[10%] w-72 h-72 rounded-full blur-3xl opacity-20",
            theme === "dark" ? "bg-primary" : "bg-primary/40"
          )}
        ></div>
        <div
          className={cn(
            "absolute bottom-20 left-[10%] w-96 h-96 rounded-full blur-3xl opacity-20",
            theme === "dark" ? "bg-primary/60" : "bg-primary/30"
          )}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Available for freelance work
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Hi, I'm <span className="text-primary">Karan Bhatnagar</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium mt-4 text-muted-foreground h-12 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <span className="inline-block min-w-[20px]">{typedText}</span>
              <span
                className={`inline-block w-1 h-6 ml-1 bg-primary ${
                  isPaused ? "opacity-0" : "animate-blink"
                }`}
              ></span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              I craft exceptional digital experiences with modern technologies.
              Focused on creating innovative, user-centered solutions that drive
              results.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center space-x-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <a
                href="https://github.com/karanBhatnagar29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/karanbhatnagar29/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:karanbhatnagar862@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1.5">
                <div className="h-full w-full overflow-hidden rounded-full bg-background p-4">
                  <img
                    src="/me.jpeg"
                    alt="Your Name"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 rounded-xl bg-background p-4 shadow-lg dark:shadow-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-primary">
                  <p className="font-medium">2+ Years Experience</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-2 -left-6 rounded-xl bg-background p-4 shadow-lg dark:shadow-primary/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-primary">
                  <p className="font-medium">10+ Projects</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/20 animate-slow-spin"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-primary/10 animate-slow-spin-reverse"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToNext}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
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
