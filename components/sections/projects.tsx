"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Admin Panel Dashboard",
    description:
      "Built an admin panel for a live streaming app to manage users, content, and real-time analytics.Included features like stream moderation, gift/sticker management, and performance monitoring.",
    image: "/projects/project-management.png",
    tags: ["Next.js", "ShadCn", "Tailwind CSS", "mongoDB"],
    demo: "https://admin.workuplift.com/",
    category: "fullstack",
    featured: true,
  },
  {
    id: 2,
    title: "Agency Management Dashboard",
    description:
      "Designed an agency panel dashboard to manage influencers, campaigns, and earnings.Included real-time analytics, approval workflows, and performance tracking tools.",
    image: "/projects/project-management.png",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux", "Real-time Database"],

    demo: "https://agency.salsayou.app/",
    category: "frontend",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio for myself",
    description:
      "Designed and developed my first personal portfolio using React.Showcased projects, skills, and an interactive UI with smooth navigation.",
    image: "/projects/portfolio.png",
    tags: ["React.js", "Google Maps API", "Chart.js"],

    demo: "https://karanbhatnagar.netlify.app/",
    category: "frontend",
    featured: true,
  },
  {
    id: 4,
    title: "Ecommerce Full Stack",
    description:
      "Developed a full-stack e-commerce application using NestJS for the backend and Next.js for the frontend. Implemented features like authentication, product management, cart functionality, and order processing with responsive UI.",
    image: "/projects/ecom.jpg",
    tags: ["Nest.js", "Next.js", "MongoDb", "Tailwind"],

    demo: "https://github.com/karanBhatnagar29/Ecommerce-Full-Stack",
    category: "fullstack",
    featured: false,
  },
  {
    id: 5,
    title: "Whatsapp Clone",
    description:
      "I developed a WhatsApp clone using Jetpack Compose and Kotlin, focusing on replicating modern UI patterns and smooth user experience",
    image: "/projects/whatsapp_clone.jpeg",
    tags: ["Android", "jetpack compose", "kotlin "],

    demo: "https://github.com/karanBhatnagar29/Whatsapp-Clone",
    category: "fullstack",
    featured: false,
  },
  {
    id: 6,
    title: "Corporate Portfolio",
    description:
      "A professional portfolio website for a corporate client with custom animations, content management, and analytics integration.",
    image: "/projects/corporate-portfolio.png",
    tags: [
      "React",
      "Next.js",
      "Framer Motion",
      "Contentful CMS",
      "Google Analytics",
    ],

    demo: "https://example.com",
    category: "frontend",
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === filter);

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

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All Projects
          </Button>
          <Button
            variant={filter === "featured" ? "default" : "outline"}
            onClick={() => setFilter("featured")}
            className="rounded-full"
          >
            Featured
          </Button>
          <Button
            variant={filter === "frontend" ? "default" : "outline"}
            onClick={() => setFilter("frontend")}
            className="rounded-full"
          >
            Frontend
          </Button>
          <Button
            variant={filter === "backend" ? "default" : "outline"}
            onClick={() => setFilter("backend")}
            className="rounded-full"
          >
            Backend
          </Button>
          <Button
            variant={filter === "fullstack" ? "default" : "outline"}
            onClick={() => setFilter("fullstack")}
            className="rounded-full"
          >
            Full Stack
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                  <img
                    src={
                      project.image ||
                      `/placeholder.svg?height=300&width=500&query=${project.title}`
                    }
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <Button size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      Featured
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
