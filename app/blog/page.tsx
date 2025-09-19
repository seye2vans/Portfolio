import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Olaleye Seye",
  description:
    "Read the latest articles and insights about web development, programming, and technology with Olaleye Seye.",
}

const blogPosts = [
  {
    id: "getting-started-with-nextjs-14",
    title: "Getting Started with Next.js 14: A Complete Guide",
    excerpt:
      "Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.",
    author: "Olaleye Seye",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Tutorial",
    tags: ["Next.js", "React", "JavaScript"],
    image: "https://res.cloudinary.com/dp6dv2jct/image/upload/v1758307715/React_Logo_SVG_txulrd.svg",
    featured: true,
    youtubeUrl: "https://youtu.be/ZVnjOPwW4ZA?si=nzVbp9K8p8O4GezU",
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    excerpt:
      "Discover essential TypeScript patterns and practices that will make your React applications more robust and maintainable.",
    author: "John Seye",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "Best Practices",
    tags: ["TypeScript", "React", "JavaScript"],
    image: "https://res.cloudinary.com/dp6dv2jct/image/upload/v1758307715/React_Logo_SVG_txulrd.svg",
    featured: false,
    youtubeUrl: "https://youtu.be/FknaQpe9Y5s?si=gG4FDVeiPYNgZwC7",
  },
  {
    id: "building-scalable-apis",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn how to design and build scalable REST APIs using Node.js, Express, and modern development practices.",
    content: "Full article content here...",
    author: "John Seye",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API"],
    image: "https://res.cloudinary.com/dp6dv2jct/image/upload/v1758307971/What-is-an-API_hsi5fr.png",
    featured: false,
    youtubeUrl: "https://www.youtube.com/live/RDM-nk5f4SE?si=0IbQ1qrSgOljXxoC",
  },
  {
    id: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases for each layout method.",
    author: "John Seye",
    publishedAt: "2023-12-28",
    readTime: "7 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Frontend"],
    image: "https://res.cloudinary.com/dp6dv2jct/image/upload/v1758308031/css-CfW5UZaa_ehg0ph.svg",
    featured: false,
    youtubeUrl: "https://youtu.be/41ZBkZUVApc?si=dlhOz2wBnKnAs00A",
  },
  {
    id: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    excerpt:
      "Explore advanced techniques to optimize your React applications for better performance and user experience.",
    author: "John Seye",
    publishedAt: "2023-12-20",
    readTime: "12 min read",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    image: "https://res.cloudinary.com/dp6dv2jct/image/upload/v1758307715/React_Logo_SVG_txulrd.svg",
    featured: true,
    youtubeUrl: "https://youtu.be/CaShN6mCJB0?si=vZE0NbJljvo7ZpdU",
  },
  {
    id: "modern-javascript-features",
    title: "Modern JavaScript Features You Should Know",
    excerpt:
      "Stay up-to-date with the latest JavaScript features and how they can improve your development workflow.",
    author: "John Seye",
    publishedAt: "2023-12-15",
    readTime: "9 min read",
    category: "JavaScript",
    tags: ["JavaScript", "ES2023", "Modern JS"],
    image: "https://res.cloudinary.com/dp6dv2jct/image/upload/v1758308084/JavaScript-Tutorial_oais8y.svg",
    featured: false,
    youtubeUrl: "https://youtu.be/lkIFF4maKMU?si=irM4ximGfR851qBY",
  },
]

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, programming, and the latest technologies I'm
            exploring.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10 w-full sm:w-80" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="cursor-pointer">
                All
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Tutorial
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Best Practices
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                JavaScript
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                React
              </Badge>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={post.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                      <Badge variant="secondary" className="absolute top-4 right-4">
                        {post.category}
                      </Badge>
                    </div>

                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link
                key={post.id}
                href={post.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {post.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
