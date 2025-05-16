"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer",
    company: "Altura Labz",
    logo: "/aLabz_logo.jpeg",
    location: "WFH",
    type: "Full-time",
    duration: "Jan 2025 - Present",
    description: [
      "Developed internal Admin Panel using Next.js Tailwind CSS and Shadcn for managing customer data and workflows. ",
      "Built modular Agency Panel with real-time dashboards and reusable components. ",
      "Mentored a team of 5 junior developers, conducting code reviews and implementing best practices that improved code quality and reduced bugs by 35%",
      "Collaborated with product and design teams to create intuitive user interfaces, resulting in a 20% improvement in user satisfaction scores",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Nest.js",
      "Tailwind CSS",
      "Shadcn",
      "MongoDB",
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
    <section id="experience" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold section-title mx-auto">
            Experience & Education
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            My professional journey, educational background, and notable
            achievements
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger
              value="work"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Briefcase className="mr-2 h-4 w-4" /> Work Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
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
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover"
                >
                  <Card>
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="md:w-64 p-6 border-r bg-muted/30 hidden md:block">
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4 border">
                                <img
                                  src={
                                    job.logo ||
                                    `/placeholder.svg?height=64&width=64&query=${job.company} logo`
                                  }
                                  alt={job.company}
                                  className="w-10 h-10 rounded-full"
                                />
                              </div>
                              <h4 className="font-medium">{job.company}</h4>
                              <p className="text-sm text-muted-foreground">
                                {job.location}
                              </p>
                              <Badge variant="outline" className="mt-2">
                                {job.duration}
                              </Badge>
                              <Badge variant="secondary" className="mt-2 ml-2">
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          <div className="md:hidden flex items-center mb-4">
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
                              <div className="flex flex-wrap gap-2 mt-1">
                                <Badge variant="outline">{job.duration}</Badge>
                                <Badge variant="secondary">{job.type}</Badge>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-xl font-medium mb-4">
                            {job.title}
                          </h3>

                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            {job.description.map((item, i) => (
                              <li key={i} className="text-muted-foreground">
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="rounded-full"
                              >
                                {skill}
                              </Badge>
                            ))}
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
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover"
                >
                  <Card>
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
                        <div className="flex-1 p-6">
                          <div className="md:hidden flex items-center mb-4">
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
                              <div className="flex flex-wrap gap-2 mt-1">
                                <Badge variant="outline">{edu.duration}</Badge>
                                <Badge variant="secondary">
                                  GPA: {edu.gpa}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-xl font-medium mb-4">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            {edu.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-medium mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="text-muted-foreground">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">
                              Relevant Coursework:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course) => (
                                <Badge
                                  key={course}
                                  variant="secondary"
                                  className="rounded-full"
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
