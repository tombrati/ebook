import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SamplePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">Aurimas Povilaitis</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/#expertise" className="text-sm font-medium hover:underline underline-offset-4">
              Expertise
            </Link>
            <Link href="/#book" className="text-sm font-medium hover:underline underline-offset-4">
              Book
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-[200px] h-[280px] shadow-lg rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=280&width=200"
                alt="AI Beginner's Guide Ebook Cover"
                width={200}
                height={280}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h1 className="text-3xl font-bold">Free Sample Chapter</h1>
            <p className="text-muted-foreground">
              Get a taste of what's inside my AI Beginner's Guide to Making Money with this free sample chapter. Learn
              the basics of AI technology and how you can leverage it to create income streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gap-2" asChild>
                <a href="/files/sample-chapter.pdf" download>
                  Download Sample <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">Get the Full Book</Link>
              </Button>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What's Inside the Sample</CardTitle>
            <CardDescription>This free sample includes the first chapter of my comprehensive guide</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Introduction to AI for Beginners</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Understanding AI Without Technical Jargon</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>The AI Tools Everyone Should Know About</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Preview of Money-Making Strategies</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-xl font-medium mb-4">Want the Full Guide?</h2>
          <p className="mb-4">My complete AI Beginner's Guide to Making Money includes:</p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>15+ detailed AI money-making strategies</span>
            </li>
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Step-by-step implementation guides</span>
            </li>
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Real-world case studies and success stories</span>
            </li>
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Templates and resources to get started immediately</span>
            </li>
          </ul>

          <Button size="lg" asChild>
            <Link href="/pricing">Get the Full Book</Link>
          </Button>
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
