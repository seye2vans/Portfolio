import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import seye from "../images/seye.png"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Olaleye ",
  description:
    "Learn more about Olaleye Seye, a passionate full-stack developer with expertise in React, Next.js, and modern web technologies.",
}

export default function About() {
  const experiences = [
    {
      title: "Junior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "--",
      description:
        "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting solutions for complex business requirements.",
      technologies: ["React", "Next.js", "TypeScript", "Springboot", "PostgreSQL", "React-Native"],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "--",
      description:
        "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["React", "Vue.js", "Python", "Django", "MongoDB", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "--",
      description:
        "Built responsive web applications from scratch, implemented modern UI/UX designs, and optimized applications for maximum speed and scalability.",
      technologies: ["JavaScript", "React", "Sass", "Webpack", "REST APIs"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "--",
      description: "Graduated with honors. Focused on software engineering, algorithms, and web development.",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating digital experiences that
              make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community talks.
            </p>

            <div className="flex items-center space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Available for work</span>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link href="/Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="animate-bounce-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={seye}
                alt="Olaleye seye working"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 mr-3 text-primary" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="mt-2 sm:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 mr-3 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{edu.school}</CardDescription>
                    </div>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills & Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Skills & Interests</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools & Others</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "AWS", "Git", "Figma", "Jest"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Open source contributing</li>
                  <li>• Technical writing and blogging</li>
                  <li>• UI/UX design and prototyping</li>
                  <li>• Photography and digital art</li>
                  <li>• Hiking and outdoor activities</li>
                  <li>• Learning new programming languages</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
