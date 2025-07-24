import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects - Olaleye Seye",
  description:
    "Explore the portfolio of projects by Olaleye Seye, featuring web applications, mobile apps, and open-source contributions.",
}

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a collection of projects I've worked on, ranging from web applications to mobile apps and open-source
            contributions.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search projects..." className="pl-10 w-full sm:w-80" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="cursor-pointer">
                All
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Web App
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Mobile
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Open Source
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                UI/UX
              </Badge>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
