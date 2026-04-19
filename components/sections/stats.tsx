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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-2 text-primary">
            Founder Snapshot
          </Badge>
          <h2 className="text-3xl font-bold md:text-5xl">
            More than a portfolio. This is operator context.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            I bring founder thinking, product judgment, and full-stack
            execution into the same room.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Card className="surface-card h-full rounded-[1.75rem]">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-3xl font-bold tracking-[-0.04em]">
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
