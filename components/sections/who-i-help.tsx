"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Compass, ShoppingCart, Smartphone } from "lucide-react";

const audiences = [
  {
    icon: Compass,
    title: "Early-stage founders",
    description:
      "You have an idea, investor pressure, or product momentum and need help turning it into a realistic build strategy.",
  },
  {
    icon: ShoppingCart,
    title: "Marketplace startups",
    description:
      "You need trust, discovery, supply-demand balance, and a product experience that feels credible from day one.",
  },
  {
    icon: Smartphone,
    title: "Teams building across web and mobile",
    description:
      "You need help deciding what belongs where, how to phase releases, and how to build without fragmenting the product.",
  },
  {
    icon: Building2,
    title: "Brands needing technical direction",
    description:
      "You need a product-minded engineer who can advise on architecture, execution, UX quality, and launch readiness.",
  },
];

export default function WhoIHelp() {
  return (
    <section id="who-i-help" className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-14"
        >
          <Badge className="mb-4 rounded-full bg-accent/20 px-4 py-2 text-accent-foreground">
            Who I Help
          </Badge>
          <h2 className="text-2xl font-bold md:text-5xl">
            I work best where product and technical decisions overlap.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-muted-foreground md:mt-5 md:text-lg md:leading-7">
            The strongest fit is when someone needs both execution and
            direction, not just task-based development.
          </p>
        </motion.div>

        <div className="mobile-rail md:grid md:grid-cols-2">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="mobile-rail-card card-hover"
            >
              <Card className="surface-card rounded-[1.75rem]">
                <CardContent className="flex gap-4 p-5 md:gap-5 md:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent md:h-12 md:w-12">
                    <audience.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.04em] md:text-2xl">
                      {audience.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {audience.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
