import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"

// Mock blog posts data
const blogPosts = [
  {
    id: "getting-started-with-ai",
    title: "Getting Started with AI: A Complete Beginner's Guide",
    excerpt:
      "Learn the basics of artificial intelligence and how you can start using it today, even with no technical background.",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Beginners",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "top-ai-tools-2023",
    title: "Top 10 AI Tools for Making Money in 2023",
    excerpt:
      "Discover the most powerful AI tools that can help you generate income, automate tasks, and build profitable businesses.",
    date: "April 28, 2023",
    readTime: "12 min read",
    category: "Tools",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "ai-freelancing-guide",
    title: "The Ultimate Guide to AI Freelancing",
    excerpt:
      "How to position yourself as an AI specialist and start earning $50-100+ per hour with in-demand AI skills.",
    date: "April 10, 2023",
    readTime: "15 min read",
    category: "Freelancing",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "passive-income-ai",
    title: "Building Passive Income Streams with AI",
    excerpt: "Step-by-step strategies for creating automated income systems powered by artificial intelligence.",
    date: "March 22, 2023",
    readTime: "10 min read",
    category: "Passive Income",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "ai-content-creation",
    title: "AI Content Creation: Quality vs. Quantity",
    excerpt: "How to use AI to create high-quality content that stands out in a world of AI-generated noise.",
    date: "March 5, 2023",
    readTime: "9 min read",
    category: "Content Creation",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "ai-ethics-beginners",
    title: "AI Ethics: What Every Beginner Should Know",
    excerpt: "Understanding the ethical considerations of using AI for business and how to use AI responsibly.",
    date: "February 18, 2023",
    readTime: "11 min read",
    category: "Ethics",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      <div className="container py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">AI Insights Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical tips, strategies, and insights on using AI to create income and build businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>

      <div className="bg-muted py-16">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-lg p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold">Want More In-Depth AI Strategies?</h2>
            <p className="text-muted-foreground">
              Get my comprehensive guide with 15+ proven AI monetization strategies and step-by-step implementation
              plans.
            </p>
            <Button size="lg" asChild>
              <Link href="/pricing">Get the Book</Link>
            </Button>
          </div>
        </div>
      </div>

      <footer className="border-t py-8 bg-muted">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold">
            <span>Aurimas Povilaitis</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aurimas Povilaitis. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
