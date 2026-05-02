"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Wrench, Smartphone } from "lucide-react";

const frontendSkills = [
  { name: "HTML5/CSS3", level: 95, icon: "html" },
  { name: "JavaScript", level: 92, icon: "javascript" },
  { name: "TypeScript", level: 90, icon: "typescript" },
  { name: "React", level: 92, icon: "react" },
  { name: "Next.js", level: 90, icon: "nextjs" },
  { name: "React Native", level: 85, icon: "reactnative" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
  { name: "shadcn/ui", level: 88, icon: "shadcn" },
  { name: "Redux", level: 82, icon: "redux" },
  { name: "Modern JS Tooling", level: 78, icon: "tooling" },
];

const backendSkills = [
  { name: "NestJS", level: 90, icon: "nestjs" },
  { name: "Node.js", level: 88, icon: "nodejs" },
  { name: "MongoDB", level: 80, icon: "mongodb" },
  { name: "PostgreSQL", level: 78, icon: "postgresql" },
  { name: "Supabase", level: 80, icon: "supabase" },
  { name: "REST API", level: 94, icon: "api" },
  { name: "AWS EC2", level: 75, icon: "aws" },
  { name: "CI/CD Pipelines", level: 78, icon: "cicd" },
];

const mobileSkills = [
  { name: "React Native", level: 85, icon: "reactnative" },
  { name: "Expo", level: 80, icon: "expo" },
  { name: "React Navigation", level: 82, icon: "navigation" },
  { name: "Push Notifications", level: 75, icon: "notifications" },
  { name: "AsyncStorage", level: 78, icon: "storage" },
  { name: "Android Build & Deploy", level: 72, icon: "android" },
];

const aiDevOpsSkills = [
  { name: "AI-Assisted Development", level: 92, icon: "ai" },
  { name: "Prompt Engineering", level: 88, icon: "prompt" },
  { name: "AWS EC2", level: 75, icon: "aws" },
  { name: "CI/CD Pipelines", level: 78, icon: "cicd" },
  { name: "Git / GitHub", level: 90, icon: "git" },
  { name: "Docker", level: 68, icon: "docker" },
];

const stackHighlights = [
  "Next.js",
  "Supabase",
  "Modern tooling",
  "React Native",
  "NestJS",
  "shadcn/ui",
  "AI-assisted builds",
  "AWS EC2",
];

function SkillCloud({
  skills,
  tone,
}: {
  skills: typeof frontendSkills;
  tone: "primary" | "accent" | "dark";
}) {
  const toneClass =
    tone === "accent"
      ? "bg-accent text-accent-foreground border-accent"
      : tone === "dark"
        ? "bg-foreground text-background border-foreground"
        : "bg-primary text-primary-foreground border-primary";

  return (
    <Card className="overflow-hidden rounded-[1.5rem] border bg-card shadow-[0_24px_70px_-52px_rgba(15,23,42,0.45)]">
      <CardContent className="p-4 sm:p-5 md:p-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[1.1rem] border p-4 transition duration-300 hover:-translate-y-1 ${
                index % 5 === 0
                  ? toneClass
                  : "border-border/80 bg-muted/30 hover:border-foreground/20"
              }`}
            >
              <div className="absolute -right-8 -top-8 h-20 w-20 rotate-12 border border-current/10" />
              <p className="text-xs font-black uppercase tracking-[0.22em] opacity-60">
                0{(index % 9) + 1}
              </p>
              <h3 className="mt-3 text-lg font-black tracking-[-0.05em]">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-6 opacity-70">
                Used in real product builds, not parked in a keyword list.
              </p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14"
        >
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-foreground bg-foreground px-4 py-2 text-sm text-background"
          >
            Stack Mixtape
          </Badge>
          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
            The tools are serious.
            <span className="block italic gradient-text">The interface does not have to be boring.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground md:text-lg md:leading-7">
            A practical stack for shipping clean web apps, mobile experiences,
            backend systems, and AI-assisted product iterations.
          </p>
        </motion.div>

        <div className="mobile-rail mb-7 md:flex md:flex-wrap md:justify-center md:overflow-visible">
          {stackHighlights.map((item, index) => (
            <div
              key={item}
              className={`mobile-rail-card rounded-full border px-4 py-2 text-sm font-black tracking-[-0.02em] shadow-[0_18px_42px_-32px_rgba(15,23,42,0.38)] md:min-w-0 ${
                index % 3 === 0
                  ? "border-foreground bg-foreground text-background"
                  : index % 3 === 1
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-6xl mx-auto">
          <div className="mb-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TabsList className="inline-grid h-auto min-w-max grid-flow-col gap-2 rounded-full border border-border bg-background/80 p-1 md:grid md:w-full md:grid-cols-4">
              <TabsTrigger
                value="frontend"
                className="flex items-center gap-2 rounded-full px-4 py-3 text-xs font-black sm:text-sm"
              >
                <Code2 className="h-4 w-4" /> Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="flex items-center gap-2 rounded-full px-4 py-3 text-xs font-black sm:text-sm"
              >
                <Server className="h-4 w-4" /> Backend
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="flex items-center gap-2 rounded-full px-4 py-3 text-xs font-black sm:text-sm"
              >
                <Smartphone className="h-4 w-4" /> Mobile
              </TabsTrigger>
              <TabsTrigger
                value="aidevops"
                className="flex items-center gap-2 rounded-full px-4 py-3 text-xs font-black sm:text-sm"
              >
                <Wrench className="h-4 w-4" /> AI & DevOps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend">
            <SkillCloud skills={frontendSkills} tone="primary" />
          </TabsContent>

          <TabsContent value="backend">
            <SkillCloud skills={backendSkills} tone="accent" />
          </TabsContent>

          <TabsContent value="mobile">
            <SkillCloud skills={mobileSkills} tone="dark" />
          </TabsContent>

          <TabsContent value="aidevops">
            <SkillCloud skills={aiDevOpsSkills} tone="primary" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
