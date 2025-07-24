import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react"
import { projects } from "@/data/projects"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Olaleye Seye`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
              <Badge variant="secondary">Web Application</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{project.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {project.liveUrl && (
                <Button size="lg" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-bounce-in">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  This project was built to solve the problem of managing tasks efficiently in a team environment. The
                  application provides a clean, intuitive interface for creating, assigning, and tracking tasks across
                  different projects and team members.
                </p>

                <h3>Key Features</h3>
                <ul>
                  <li>Real-time collaboration with team members</li>
                  <li>Drag-and-drop task management</li>
                  <li>Advanced filtering and search capabilities</li>
                  <li>Customizable project boards and workflows</li>
                  <li>Integration with popular tools like Slack and GitHub</li>
                  <li>Comprehensive reporting and analytics</li>
                </ul>

                <h3>Technical Implementation</h3>
                <p>
                  The frontend is built with React and Next.js, utilizing TypeScript for type safety and better
                  developer experience. The UI is crafted with Tailwind CSS and shadcn/ui components for a consistent
                  and modern design system.
                </p>

                <p>
                  The backend leverages Node.js with Express, connected to a PostgreSQL database for reliable data
                  persistence. Real-time features are implemented using Socket.io for instant updates across all
                  connected clients.
                </p>

                <h3>Challenges & Solutions</h3>
                <p>
                  One of the main challenges was implementing real-time collaboration without conflicts when multiple
                  users edit the same data simultaneously. This was solved by implementing operational transformation
                  algorithms and optimistic UI updates.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">3 months</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <User className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="font-medium">Full-Stack Developer</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">Web Application</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Backend</p>
                    <div className="flex flex-wrap gap-1">
                      {["Node.js", "Express", "PostgreSQL", "Socket.io"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Tools</p>
                    <div className="flex flex-wrap gap-1">
                      {["Docker", "AWS", "GitHub Actions"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card key={relatedProject.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{relatedProject.title}</CardTitle>
                    <CardDescription>{relatedProject.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/projects/${relatedProject.id}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
