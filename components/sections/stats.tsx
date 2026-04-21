"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness, Compass, Gem, Rocket } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "Founder",
    label: "Junto",
    description: "Building a trust-based social coordination product.",
  },
  {
    icon: Gem,
    value: "Co-Founder",
    label: "Stumble Market",
    description: "Shaping a premium second-hand marketplace experience.",
  },
  {
    icon: BriefcaseBusiness,
    value: "3+ Years",
    label: "Product Building",
    description: "Shipping web, mobile, backend, and marketplace systems.",
  },
  {
    icon: Compass,
    value: "Tech Counselling",
    label: "Advisory Lens",
    description: "Helping founders decide what to build and how to build it.",
  },
];

export default function Stats() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-12"
        >
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-2 text-primary">
            Founder Snapshot
          </Badge>
          <h2 className="text-2xl font-bold md:text-5xl">
            More than a portfolio. This is operator context.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-muted-foreground md:mt-5 md:text-lg md:leading-7">
            I bring founder thinking, product judgment, and full-stack
            execution into the same room.
          </p>
        </motion.div>

        <div className="mobile-rail md:grid md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="mobile-rail-card card-hover"
            >
              <Card className="surface-card h-full rounded-[1.75rem]">
                <CardContent className="p-5 md:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary md:h-12 md:w-12">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-2xl font-bold tracking-[-0.04em] md:mt-5 md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
