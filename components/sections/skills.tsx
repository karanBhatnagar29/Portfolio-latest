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
  { name: "Bun.js", level: 78, icon: "bun" },
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5"
          >
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With expertise across multiple technologies and disciplines, I bring
            a comprehensive skill set to every project, ensuring high-quality,
            innovative solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1">
              <TabsTrigger
                value="frontend"
                className="flex items-center gap-2 py-3"
              >
                <Code2 className="h-4 w-4" /> Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="flex items-center gap-2 py-3"
              >
                <Server className="h-4 w-4" /> Backend
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="flex items-center gap-2 py-3"
              >
                <Smartphone className="h-4 w-4" /> Mobile
              </TabsTrigger>
              <TabsTrigger
                value="aidevops"
                className="flex items-center gap-2 py-3"
              >
                <Wrench className="h-4 w-4" /> AI & DevOps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {/* <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                            <img
                              src={`/icons/${skill.icon}.svg`}
                              alt={skill.name}
                              className="w-5 h-5"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).src = "/icons/code.svg"
                              }}
                            />
                          </div> */}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {backendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {/* <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                            <img
                              src={`/icons/${skill.icon}.svg`}
                              alt={skill.name}
                              className="w-5 h-5"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).src = "/icons/server.svg"
                              }}
                            />
                          </div> */}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mobile">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {mobileSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aidevops">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {aiDevOpsSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
