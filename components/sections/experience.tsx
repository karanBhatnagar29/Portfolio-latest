"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const workExperience = [
  {
    id: 1,
    title: "Full-Stack & Mobile Developer",
    company: "AlturaLabz",
    logo: "/aLabz_logo.jpeg",
    location: "WFH",
    type: "Full-time",
    duration: "Jan 2025 - Present",
    summary:
      "Building admin systems, APIs, React Native apps, and AI-powered product surfaces across production workflows.",
    description: [
      "Admin panels, RBAC backend systems, NestJS monorepo architecture, REST APIs, and data-heavy dashboard optimization.",
      "React Native delivery across backend-integrated apps, PDF editing workflows, and AI-powered learning/problem-solving products.",
      "AI-driven web platform work, including dynamic UI generation from user prompts and performance improvements with caching and Zustand.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "React Native",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "MongoDB",
      "REST APIs",
      "RBAC",
    ],
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Lachoo Memorial College of Science and Technology",
    logo: "/lachoo_logo.jpg",
    location: "Rajasthan, India",
    duration: "2020-2022",
    gpa: "7.8/10",
    description:
      "Specialized in advanced web technologies and distributed systems. Completed thesis on optimizing microservice architectures for high-traffic web applications.",
    courses: [
      "Advanced Algorithms",
      "Distributed Systems",
      "Cloud Computing",
      "Machine Learning",
      "Software Engineering",
    ],
    achievements: [
      "Academic certificates",
      "Final year project(similiar to present porter)",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "Lachoo Memorial College of Science and Technology",
    logo: "/lachoo_logo.jpg",
    location: "Rajasthan, India",
    duration: "2017-2020",
    gpa: "8/10",
    description:
      "Graduated with honors. Focused on software engineering and web technologies.",
    courses: [
      "Data Structures and Algorithms",
      "Web Programming",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
    ],
    achievements: [
      // "Undergraduate Research Opportunity Program",
      // "Hackathon Winner",
      // "Teaching Assistant for Web Programming",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14"
        >
          <Badge className="mb-4 rounded-full bg-accent px-4 py-2 text-accent-foreground">
            Receipt Check
          </Badge>
          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
            Proof I can sit inside a team
            <span className="block italic gradient-text">and still ship with taste.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground md:text-lg md:leading-7">
            Work history, education, and the practical context behind the
            product decisions.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full max-w-5xl mx-auto">
          <TabsList className="mb-8 grid w-full grid-cols-2 rounded-[1rem] border border-border bg-background/80 p-1 md:mb-12">
            <TabsTrigger
              value="work"
              className="rounded-[0.8rem] px-3 text-xs font-black data-[state=active]:bg-foreground data-[state=active]:text-background sm:text-sm"
            >
              <Briefcase className="mr-2 h-4 w-4" /> Work Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="rounded-[0.8rem] px-3 text-xs font-black data-[state=active]:bg-foreground data-[state=active]:text-background sm:text-sm"
            >
              <GraduationCap className="mr-2 h-4 w-4" /> Education
            </TabsTrigger>
            {/* <TabsTrigger
              value="awards"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Award className="mr-2 h-4 w-4" /> Awards
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="work">
            <div className="space-y-6 md:space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover"
                >
                  <Card className="overflow-hidden rounded-[1.5rem] border bg-card shadow-[0_24px_70px_-52px_rgba(15,23,42,0.45)]">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="hidden border-r bg-foreground p-6 text-background md:block md:w-64">
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="mx-auto mb-4 flex h-16 w-16 rotate-[-4deg] items-center justify-center rounded-[1rem] border border-background/20 bg-background">
                                <img
                                  src={
                                    job.logo ||
                                    `/placeholder.svg?height=64&width=64&query=${job.company} logo`
                                  }
                                  alt={job.company}
                                  className="h-10 w-10 rounded-full"
                                />
                              </div>
                              <h4 className="font-black">{job.company}</h4>
                              <p className="text-sm text-background/60">
                                {job.location}
                              </p>
                              <Badge className="mt-3 rounded-full bg-background text-foreground">
                                {job.duration}
                              </Badge>
                              <Badge variant="outline" className="ml-2 mt-3 rounded-full border-background/20 text-background">
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 p-4 sm:p-5 md:p-6">
                          <div className="mb-4 flex items-center md:hidden">
                            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mr-4 border">
                              <img
                                src={
                                  job.logo ||
                                  `/placeholder.svg?height=48&width=48&query=${job.company} logo`
                                }
                                alt={job.company}
                                className="w-8 h-8 rounded-full"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">{job.company}</h4>
                              <div className="mt-1 flex flex-wrap gap-2">
                                <Badge variant="outline">{job.duration}</Badge>
                                <Badge variant="secondary">{job.type}</Badge>
                              </div>
                            </div>
                          </div>

                          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                            <div>
                              <h3 className="text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                                {job.title}
                              </h3>
                              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                                {job.summary}
                              </p>
                            </div>
                            <Badge className="w-fit rounded-full bg-accent text-accent-foreground">
                              Production work
                            </Badge>
                          </div>

                          <ul className="mb-5 grid gap-3 lg:grid-cols-3">
                            {job.description.map((item, i) => (
                              <li key={i} className="rounded-[1rem] border border-border/70 bg-muted/25 px-4 py-3 text-sm leading-6 text-muted-foreground">
                                <span className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-foreground/60">
                                  0{i + 1}
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {job.skills.slice(0, 8).map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="rounded-full font-bold"
                              >
                                {skill}
                              </Badge>
                            ))}
                            {job.skills.length > 8 && (
                              <Badge variant="outline" className="rounded-full font-bold">
                                +{job.skills.length - 8} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover"
                >
                  <Card className="overflow-hidden rounded-[1.5rem] border bg-card shadow-[0_24px_70px_-52px_rgba(15,23,42,0.45)]">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="md:w-64 p-6 border-r bg-muted/30 hidden md:block">
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4 border">
                                <img
                                  src={
                                    edu.logo ||
                                    `/placeholder.svg?height=64&width=64&query=${edu.institution} logo`
                                  }
                                  alt={edu.institution}
                                  className="w-10 h-10 rounded-full"
                                />
                              </div>
                              <h4 className="font-medium">{edu.institution}</h4>
                              <p className="text-sm text-muted-foreground">
                                {edu.location}
                              </p>
                              <Badge variant="outline" className="mt-2">
                                {edu.duration}
                              </Badge>
                              <Badge variant="secondary" className="mt-2 ml-2">
                                GPA: {edu.gpa}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 p-4 sm:p-5 md:p-6">
                          <div className="mb-4 flex items-center md:hidden">
                            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mr-4 border">
                              <img
                                src={
                                  edu.logo ||
                                  `/placeholder.svg?height=48&width=48&query=${edu.institution} logo`
                                }
                                alt={edu.institution}
                                className="w-8 h-8 rounded-full"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">{edu.institution}</h4>
                              <div className="mt-1 flex flex-wrap gap-2">
                                <Badge variant="outline">{edu.duration}</Badge>
                                <Badge variant="secondary">
                                  GPA: {edu.gpa}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <h3 className="mb-4 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            {edu.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="mb-2 font-black">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="rounded-[1rem] border border-border/70 bg-muted/25 px-4 py-3 text-sm leading-6 text-muted-foreground">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="mb-2 font-black">
                              Relevant Coursework:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course) => (
                                <Badge
                                  key={course}
                                  variant="secondary"
                                  className="rounded-full font-bold"
                                >
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* <TabsContent value="awards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover"
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-primary/10">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{award.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {award.organization} • {award.year}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{award.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent> */}
        </Tabs>
      </div>
    </section>
  );
}
