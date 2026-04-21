"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  MessageSquareHeart,
  Rocket,
  ShoppingBag,
} from "lucide-react";

const offers = [
  {
    icon: MessageSquareHeart,
    title: "Tech Counselling",
    description:
      "Get clarity on product direction, MVP scope, tech choices, hiring tradeoffs, and how to avoid expensive early-stage mistakes.",
    fit: "Best for founders who need direction before building.",
  },
  {
    icon: Rocket,
    title: "Founder Advisory",
    description:
      "I help founders translate an idea into a practical build plan, roadmap, stack strategy, and execution sequence.",
    fit: "Best for early-stage teams shaping version one.",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace Builds",
    description:
      "From storefront UX to seller flows, buyer trust, and checkout paths, I build commerce experiences that feel structured and premium.",
    fit: "Best for marketplace and e-commerce products.",
  },
  {
    icon: BrainCircuit,
    title: "AI Product Execution",
    description:
      "I use AI as a force multiplier for faster prototyping, cleaner implementation, and sharper iteration across the stack.",
    fit: "Best for teams that want speed without chaos.",
  },
  {
    icon: Briefcase,
    title: "Mobile + Web Strategy",
    description:
      "I help decide what should live on web, what belongs in mobile, and how to prioritize features for real adoption.",
    fit: "Best for products spanning multiple platforms.",
  },
];

export default function WorkWithMe() {
  return (
    <section id="work-with-me" className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-14"
        >
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-2 text-primary">
            Work With Me
          </Badge>
          <h2 className="text-2xl font-bold md:text-5xl">
            Product execution plus tech counselling.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-muted-foreground md:mt-5 md:text-lg md:leading-7">
            I don&apos;t just write code. I help founders and teams make better
            product decisions, choose the right technical path, and ship with
            more confidence.
          </p>
        </motion.div>

        <div className="mobile-rail md:grid md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="mobile-rail-card card-hover"
            >
              <Card className="surface-card h-full rounded-[1.75rem]">
                <CardContent className="p-5 md:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary md:h-12 md:w-12">
                    <offer.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-[-0.04em] md:mt-5 md:text-2xl">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {offer.description}
                  </p>
                  <p className="mt-4 rounded-2xl border border-border/70 bg-muted/35 px-4 py-3 text-sm text-foreground md:mt-5">
                    {offer.fit}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-7 flex justify-center md:mt-10"
        >
          <Button size="lg" className="rounded-full" asChild>
            <a href="#contact">
              Need clarity on your product or stack?
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
