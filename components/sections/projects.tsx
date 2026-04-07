"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 10,
    title: "ZestyCrops – Spices E-Commerce",
    description:
      "A full-stack e-commerce platform for premium spices. Built with Next.js and NestJS, featuring product listings, cart, secure checkout, order management, and an admin dashboard. Deployed on AWS EC2 with CI/CD pipelines.",
    image:
      "https://res.cloudinary.com/dkln9vlws/image/upload/v1771144910/banners/j8eoj8wnfunwhfjwzwuw.png",
    tags: ["Next.js", "NestJS", "AWS EC2", "CI/CD", "PostgreSQL"],
    demo: "https://www.zestycrops.com/",
    github: "",
    category: "fullstack",
    featured: true,
    platform: "",
  },
  {
    id: 11,
    title: "MegaRail – Western Railways ID Card Generator",
    description:
      "An employee ID card generator built for Western Railways. Allows bulk generation and printing of official ID cards with custom data, QR codes, and branded templates. Deployed on Vercel.",
    image: "https://image.thum.io/get/width/1200/https://megarail.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    demo: "https://megarail.vercel.app/",
    github: "",
    category: "fullstack",
    featured: true,
    platform: "",
  },
  {
    id: 12,
    title: "Social – React Native App",
    description:
      "A feature-rich social networking mobile app built with React Native. Includes user profiles, posts, real-time feed, likes/comments, follow system, and push notifications. Available on Android.",
    image: "https://reactnative.dev/img/header_logo.svg",
    tags: ["React Native", "Supabase", "Expo", "TypeScript"],
    demo: "",
    github: "",
    category: "fullstack",
    featured: true,
    platform: "mobile",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold section-title mx-auto">
            My Portfolio
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing my expertise in web
            development, from responsive frontends to scalable backend systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="card-hover"
            >
              <Card className="overflow-hidden h-full flex flex-col border bg-card">
                <div className="relative overflow-hidden h-48 group">
                  {project.platform === "mobile" ? (
                    <div className="w-full h-full flex items-center justify-center bg-[#20232a]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        {project.demo && (
                          <Button size="sm" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  {(project as any).platform === "mobile" && (
                    <Badge className="absolute top-2 left-2 bg-blue-600 text-white">
                      Mobile App
                    </Badge>
                  )}
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="rounded-full">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  {project.demo ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto group"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  ) : (
                    <span className="ml-auto text-sm text-muted-foreground italic">
                      Android APK
                    </span>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
