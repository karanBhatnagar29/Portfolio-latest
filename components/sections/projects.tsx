"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ExternalLink,
  Layers3,
  Linkedin,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

const projects = [
  {
    id: 13,
    title: "Stumble Market",
    description:
      "A curated resale marketplace for fashion, home goods, collectibles, and independent sellers. I help shape the product direction and buyer experience so sustainable shopping feels premium, modern, and trustworthy.",
    image: "https://image.thum.io/get/width/1400/https://www.stumble.market/",
    tags: ["Marketplace", "Next.js", "E-commerce", "Product Strategy", "Brand UX"],
    demo: "https://www.stumble.market/",
    github: "",
    category: "marketplace",
    featured: true,
    platform: "web",
    role: "Co-Founder",
    previewMode: "live",
    highlight: "Curated resale experience with verified sellers, trusted checkout, and a premium visual layer for second-hand commerce.",
    stats: [
      { label: "Role", value: "Co-Founder" },
      { label: "Focus", value: "Marketplace UX" },
      { label: "Signal", value: "Verified resale" },
    ],
  },
  {
    id: 14,
    title: "Movaraa",
    description:
      "A movement and wellness web product with a clean service flow, live class positioning, and warm editorial visuals. Built as a polished full-stack experience rather than a plain brochure site.",
    image: "https://image.thum.io/get/width/1200/https://movaraa.vercel.app/",
    tags: ["Next.js", "Supabase", "Full-stack", "Vercel", "Product UX"],
    demo: "https://movaraa.vercel.app/",
    github: "",
    category: "fullstack",
    featured: true,
    platform: "web",
    role: "Full-Stack Developer",
    thumbnailVariant: "movaraa",
  },
  {
    id: 10,
    title: "ZestyCrops – Spices E-Commerce",
    description:
      "A premium spices e-commerce platform with product browsing, cart, checkout, order management, and an admin dashboard. Built with Next.js, NestJS, PostgreSQL, and AWS deployment workflows.",
    image:
      "https://res.cloudinary.com/dkln9vlws/image/upload/v1771144910/banners/j8eoj8wnfunwhfjwzwuw.png",
    tags: ["Next.js", "NestJS", "AWS EC2", "CI/CD", "PostgreSQL"],
    demo: "https://www.zestycrops.com/",
    github: "",
    category: "fullstack",
    featured: true,
    platform: "",
    role: "Full-Stack Developer",
  },
  {
    id: 11,
    title: "MegaRail – Western Railways ID Card Generator",
    description:
      "An employee ID card generator for Western Railways with bulk card creation, QR codes, branded templates, and print-ready output. Built as a fast internal tool and deployed on Vercel.",
    image: "https://image.thum.io/get/width/1200/https://megarail.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    demo: "https://megarail.vercel.app/",
    github: "",
    category: "fullstack",
    featured: true,
    platform: "",
    role: "Product Engineer",
  },
  {
    id: 12,
    title: "Junto",
    description:
      "A trust-based social coordination app for discovering, joining, hosting, and repeating high-intent local plans. Junto is designed around reliability, gated access, contextual coordination, and real-world participation.",
    image: "/junto/junto-intro.png",
    tags: ["React Native", "Social App", "Trust Systems", "Product Strategy", "Founder"],
    demo: "",
    github: "",
    category: "social",
    featured: true,
    platform: "mobile",
    role: "Founder & Builder",
    imageMode: "cover",
  },
];

function MovaraaPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#fff8ed] p-4 text-[#24140d]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,20,13,0.04)_1px,transparent_1px),linear-gradient(rgba(36,20,13,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="relative flex h-full flex-col justify-between rounded-[1.4rem] border border-[#ead9c6] bg-[#fff8ed]/90 p-4 shadow-[0_24px_70px_-45px_rgba(255,79,31,0.8)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff5122] text-lg font-black text-white">
              ~
            </div>
            <p className="text-xl font-black tracking-[-0.05em]">Movaraa</p>
          </div>
          <span className="rounded-full bg-[#24140d] px-3 py-1.5 text-xs font-bold text-white">
            Live
          </span>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#7c6b5c]">
            Movement platform
          </p>
          <h4 className="mt-3 text-4xl font-black leading-[0.9] tracking-[-0.06em]">
            Move with grace
            <span className="block italic text-[#ff5122]">Explore Services</span>
          </h4>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-[#ead9c6] pt-3">
          {["5+ Programs", "Live + Hybrid", "IST Friendly"].map((item) => (
            <div key={item} className="rounded-xl bg-white/70 p-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7c6b5c]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const spotlightProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4 rounded-full bg-foreground px-4 py-2 text-background">
            Selected Work
          </Badge>
          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
            Less case-study overload.
            <span className="block italic gradient-text">More proof of taste.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground md:text-lg md:leading-7">
            Founder ventures and shipped products across marketplaces, movement
            platforms, internal tools, social apps, and full-stack commerce.
          </p>
        </motion.div>

        <div className="mobile-rail mb-8 md:flex md:flex-wrap md:justify-center md:overflow-visible">
          {["equal cards", "live products", "no fake case-study noise", "taste receipts"].map((item, index) => (
            <span
              key={item}
              className={`mobile-rail-card rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.18em] md:min-w-0 ${
                index % 2 === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-accent bg-accent text-accent-foreground"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[1.6rem] border border-emerald-500/20 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(240,253,250,0.95))] p-3 shadow-[0_24px_80px_-32px_rgba(16,185,129,0.45)] md:rounded-[2rem] md:p-4 dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),linear-gradient(135deg,_rgba(10,18,17,0.98),_rgba(8,30,24,0.9))]"
        >
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-40" />
          <div className="grid gap-6 overflow-hidden rounded-[1.25rem] border border-white/40 bg-background/70 p-4 backdrop-blur sm:p-5 md:gap-8 md:rounded-[1.5rem] md:grid-cols-[1.15fr_0.85fr] md:p-8">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full border-0 bg-emerald-500 text-white">
                    Co-Founder Venture
                  </Badge>
                  <Badge variant="outline" className="rounded-full border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                    {spotlightProject.role}
                  </Badge>
                </div>
                <h3 className="mt-5 max-w-xl text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-5xl">
                  {spotlightProject.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg">
                  {spotlightProject.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {spotlightProject.stats?.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700/80 dark:text-emerald-300/80">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="flex w-full items-center gap-2 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-muted-foreground sm:w-auto sm:rounded-full sm:py-2">
                  <Store className="h-4 w-4 text-emerald-500" />
                  Curated seller marketplace
                </div>
                <div className="flex w-full items-center gap-2 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-muted-foreground sm:w-auto sm:rounded-full sm:py-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  Trusted and verified shopping
                </div>
                <div className="flex w-full items-center gap-2 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-muted-foreground sm:w-auto sm:rounded-full sm:py-2">
                  <Layers3 className="h-4 w-4 text-emerald-500" />
                  Premium founder-led product design
                </div>
              </div>

              <p className="rounded-2xl border border-emerald-500/15 bg-background/80 p-4 text-sm leading-6 text-muted-foreground">
                {spotlightProject.highlight}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" className="rounded-full bg-emerald-600 text-white hover:bg-emerald-500" asChild>
                  <a
                    href={spotlightProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Stumble Market
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-emerald-500/30 hover:bg-emerald-500/5" asChild>
                  <a href="#contact">
                    Let&apos;s build something ambitious
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-emerald-500/25 via-transparent to-amber-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-border/70 bg-card shadow-2xl md:rounded-[1.5rem]">
                <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-muted/50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="truncate text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.24em]">
                    {spotlightProject.title}
                  </p>
                </div>
                {spotlightProject.previewMode === "live" ? (
                  <div className="relative h-[260px] w-full bg-background sm:h-[320px] md:h-[500px]">
                    <iframe
                      src={spotlightProject.demo}
                      title={`${spotlightProject.title} live preview`}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/85 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2 rounded-2xl border border-border/70 bg-background/90 px-3 py-3 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-4 sm:py-2">
                      <p className="truncate text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                        Live preview from URL
                      </p>
                      <a
                        href={spotlightProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-300"
                      >
                        Open site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <img
                    src={spotlightProject.image}
                    alt={spotlightProject.title}
                    className="h-[320px] w-full object-cover object-top md:h-[500px]"
                  />
                )}
                <div className="grid gap-3 border-t border-border/70 bg-background/90 p-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Sparkles className="h-4 w-4 text-emerald-500" />
                      What it is
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Verified second-hand commerce with fashion, home goods,
                      collectibles, trusted sellers, and polished storefront discovery.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <ShieldCheck className="h-4 w-4 text-emerald-500" />
                      Why it stands out
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      The interface makes resale feel premium and safe with
                      stronger hierarchy, credibility signals, and cleaner buyer intent paths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Card className="group h-full overflow-hidden rounded-[1.35rem] border bg-card shadow-[0_18px_55px_-42px_rgba(15,23,42,0.35)]">
                <div className="relative h-48 overflow-hidden group">
                  {"thumbnailVariant" in project && project.thumbnailVariant === "movaraa" ? (
                    <MovaraaPreview />
                  ) : project.platform === "mobile" &&
                  project.imageMode !== "cover" ? (
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
                <CardContent className="flex-grow p-5 md:p-6">
                  <div className="mb-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-black tracking-[-0.05em]">{project.title}</h3>
                    {project.role && (
                      <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-sm leading-6 text-muted-foreground">
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
              href="https://www.linkedin.com/in/karanbhatnagar29/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more of my work and founder journey <Linkedin className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
