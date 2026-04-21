"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  MapPinned,
  ShieldCheck,
  Users2,
} from "lucide-react";

const juntoPillars = [
  "Local plan discovery",
  "Host-controlled acceptance",
  "Trust signals and reliability history",
  "Contextual group coordination",
  "Controlled private messaging",
];

const juntoAdvantages = [
  {
    icon: MapPinned,
    title: "Built for real-world intent",
    description:
      "Junto captures local demand and turns browsing into committed participation through discovery plus request flows.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-first coordination",
    description:
      "The product uses gated access, host review, and participation history to reduce flaking and unsafe group dynamics.",
  },
  {
    icon: Users2,
    title: "Founder-led social product",
    description:
      "You founded and built the app around repeatable neighborhood plans, trust loops, and long-term local reputation.",
  },
];

export default function FounderVentures() {
  return (
    <section id="ventures" className="py-5 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[1.45rem] border border-amber-500/20 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(140deg,_rgba(255,255,255,0.98),_rgba(255,251,235,0.96))] p-2.5 shadow-[0_30px_100px_-45px_rgba(245,158,11,0.55)] md:rounded-[2rem] md:p-4 dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.1),_transparent_30%),linear-gradient(140deg,_rgba(11,15,24,0.98),_rgba(24,20,10,0.92))]"
      >
        <div className="grid gap-5 rounded-[1.15rem] border border-white/40 bg-background/70 p-3.5 backdrop-blur sm:p-5 md:gap-8 md:rounded-[1.5rem] md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between gap-6 md:gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="rounded-full border-0 bg-amber-500 text-black">
                  Founder-Led Venture
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                >
                  Junto Social App
                </Badge>
              </div>

              <h2 className="mt-4 max-w-3xl text-[1.8rem] font-bold tracking-tight sm:text-3xl md:mt-5 md:text-5xl">
                Junto is the trust layer for local coordination.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:mt-4 md:text-lg">
                Founded and built as a social coordination platform for
                discovering, joining, hosting, and repeating small local plans.
                The product vision moves beyond attention feeds toward safer,
                higher-intent, real-world participation.
              </p>
            </div>

            <div className="mobile-rail md:grid md:grid-cols-2 xl:grid-cols-3">
              {juntoAdvantages.map((item) => (
                <Card
                  key={item.title}
                  className="mobile-rail-card rounded-[1.25rem] border-white/50 bg-background/85 shadow-none md:rounded-[1.5rem]"
                >
                  <CardContent className="p-4 md:p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-[1.35rem] border border-amber-500/15 bg-background/85 p-4 md:rounded-[1.5rem] md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
                Core Product System
              </p>
              <div className="mt-3 flex flex-wrap gap-2 sm:gap-3 md:mt-4">
                {juntoPillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex w-full items-center gap-2 rounded-2xl border border-border/70 bg-muted/35 px-4 py-3 text-sm text-foreground sm:w-auto sm:rounded-full sm:py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-amber-500" />
                    {pillar}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                className="rounded-full bg-amber-500 text-black hover:bg-amber-400"
                asChild
              >
                <a href="#projects">
                  Explore Founder Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-amber-500/30 hover:bg-amber-500/5"
                asChild
              >
                <a href="#contact">Let&apos;s talk product</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5">
            <Card className="overflow-hidden rounded-[1.25rem] border-white/50 bg-card/95 shadow-xl md:rounded-[1.75rem]">
              <div className="border-b border-border/70 bg-muted/40 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Junto Platform Overview
                </p>
              </div>
              <img
                src="/junto/junto-intro.png"
                alt="Junto platform introduction"
                className="h-auto w-full object-cover"
              />
            </Card>

            <div className="grid gap-5 md:grid-cols-2">
              <Card className="overflow-hidden rounded-[1.25rem] border-white/50 bg-card/95 shadow-lg md:rounded-[1.5rem]">
                <img
                  src="/junto/junto-gatekeeping.png"
                  alt="Junto host review and coordination system"
                  className="h-full w-full object-cover"
                />
              </Card>
              <Card className="overflow-hidden rounded-[1.25rem] border-white/50 bg-card/95 shadow-lg md:rounded-[1.5rem]">
                <img
                  src="/junto/junto-os.png"
                  alt="Junto operating system for local coordination"
                  className="h-full w-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
