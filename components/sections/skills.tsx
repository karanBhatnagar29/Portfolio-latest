"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Server, Wrench, PenTool } from "lucide-react"

const frontendSkills = [
  { name: "HTML5/CSS3", level: 95, icon: "html" },
  { name: "JavaScript", level: 92, icon: "javascript" },
  { name: "TypeScript", level: 90, icon: "typescript" },
  { name: "React", level: 92, icon: "react" },
  { name: "Next.js", level: 90, icon: "nextjs" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
  { name: "shadcn/ui", level: 88, icon: "shadcn" },
  { name: "Redux", level: 82, icon: "redux" },
  { name: "Vue.js", level: 70, icon: "vue" },
]

const backendSkills = [
  { name: "NestJS", level: 90, icon: "nestjs" },
  { name: "MongoDB", level: 80, icon: "mongodb" },
  { name: "PostgreSQL", level: 78, icon: "postgresql" },
  { name: "GraphQL", level: 75, icon: "graphql" },
  { name: "REST API", level: 94, icon: "api" },
]

const designSkills = [
  { name: "Figma", level: 85, icon: "figma" },
  { name: "UI Design", level: 88, icon: "ui" },
  { name: "UX Research", level: 82, icon: "ux" },
  { name: "Wireframing", level: 90, icon: "wireframe" },
  { name: "Prototyping", level: 85, icon: "prototype" },
  { name: "Design Systems", level: 78, icon: "design-system" },
  { name: "Accessibility", level: 85, icon: "accessibility" },
]

const otherSkills = [
  { name: "Git/GitHub", level: 90, icon: "git" },
  { name: "Testing", level: 78, icon: "testing" },
  { name: "Jetpack Compose", level: 85, icon: "jetpack" },
  { name: "Performance Optimization", level: 82, icon: "performance" },
  { name: "SEO", level: 75, icon: "seo" },
  { name: "Technical Writing", level: 80, icon: "writing" },
]

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
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5">
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With expertise across multiple technologies and disciplines, I bring a comprehensive skill set to every
            project, ensuring high-quality, innovative solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1">
              <TabsTrigger value="frontend" className="flex items-center gap-2 py-3">
                <Code2 className="h-4 w-4" /> Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2 py-3">
                <Server className="h-4 w-4" /> Backend
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2 py-3">
                <PenTool className="h-4 w-4" /> Design
              </TabsTrigger>
              <TabsTrigger value="other" className="flex items-center gap-2 py-3">
                <Wrench className="h-4 w-4" /> Other
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

          <TabsContent value="design">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {designSkills.map((skill, index) => (
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
                                ;(e.target as HTMLImageElement).src = "/icons/pen-tool.svg"
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

          <TabsContent value="other">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {otherSkills.map((skill, index) => (
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
                                ;(e.target as HTMLImageElement).src = "/icons/wrench.svg"
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
        </Tabs>
      </div>
    </section>
  )
}
