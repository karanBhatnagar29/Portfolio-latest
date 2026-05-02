"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  BrainCircuit,
  Code2,
  Smartphone,
  Server,
  Cloud,
  Database,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10" />,
    title: "Tech Counselling & Product Direction",
    description:
      "I help founders and teams make smarter early technical decisions around MVP scope, stack choice, roadmap sequencing, architecture, and delivery risk.",
    technologies: ["MVP Scoping", "Architecture Direction", "Product Strategy", "Startup Advisory"],
  },
  {
    icon: <BrainCircuit className="h-10 w-10" />,
    title: "AI-Powered Full Stack Development",
    description:
      "I use cutting-edge AI tools to architect, build, and ship complete web and mobile products — delivering higher quality at a faster pace than traditional workflows.",
    technologies: ["ChatGPT", "GitHub Copilot", "Cursor", "AI Code Generation"],
  },
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Web App Development",
    description:
      "Building fast, responsive, and scalable web applications using React and Next.js — with Tailwind CSS and shadcn/ui for clean, accessible design systems.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "React Native Mobile Apps",
    description:
      "Developing cross-platform iOS & Android apps with React Native and Expo — featuring real-time feeds, push notifications, and seamless performance.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase"],
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "Backend & API Development",
    description:
      "Building robust, secure RESTful APIs and server-side services using NestJS and Node.js — structured for scale and easy to maintain.",
    technologies: ["NestJS", "Node.js", "REST APIs", "TypeScript"],
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on AWS EC2 with automated CI/CD pipelines — ensuring reliable, zero-downtime releases and production-grade infrastructure.",
    technologies: ["AWS EC2", "CI/CD", "GitHub Actions", "Docker"],
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Database Architecture",
    description:
      "Designing and optimising database schemas and queries across relational and NoSQL databases — picking the right tool for each project's scale and needs.",
    technologies: ["PostgreSQL", "MongoDB", "Supabase", "Database Design"],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="services"
      className="py-10 md:py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5"
          >
            Services & Advisory
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold font-heading mb-3 md:mb-4">
            What I Can Help You Build
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-sm leading-6 text-muted-foreground max-w-2xl mx-auto md:text-base md:leading-7">
            From founder advisory and tech counselling to full-stack execution,
            I help shape and ship digital products with stronger decisions and
            cleaner implementation.
          </p>
        </motion.div>

        <motion.div
          className="mobile-rail md:grid md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mobile-rail-card group surface-card rounded-[1.75rem] p-5 transition-all duration-300 hover:-translate-y-1 md:p-6"
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white md:mb-6 md:p-4">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">{service.title}</h3>
              <p className="mb-5 text-sm leading-6 text-muted-foreground md:mb-6 md:text-base">
                {service.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2 md:mb-6">
                {service.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-muted/50">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="group/btn px-0">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
