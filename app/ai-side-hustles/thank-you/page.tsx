"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, CheckCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import { trackDownload } from "@/lib/analytics"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your AI Side Hustle Guide is Ready!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thank you for your interest in starting your AI side hustle journey. Your guide is ready to download.
          </p>
        </div>

        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="7 Proven AI Side Hustles Guide"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">7 Proven AI Side Hustles</h2>
              <p className="mb-6 text-muted-foreground">
                Your comprehensive guide to starting and succeeding with AI side hustles in 2025.
              </p>
              <Button
                size="lg"
                className="gap-2"
                onClick={() => {
                  // Track the download
                  trackDownload("7-proven-ai-side-hustles-guide.pdf", "pdf")

                  // Create a temporary link to trigger download
                  const link = document.createElement("a")
                  link.href = "/files/ai-side-hustles-guide.pdf"
                  link.download = "7-proven-ai-side-hustles-guide.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                Download Your Guide <ArrowDown className="h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">What's Next?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Read Your Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Start by reading through the entire guide to get familiar with all 7 side hustles.
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <a href="/files/ai-side-hustles-guide.pdf" download>
                    Download Again
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Choose Your Path</h3>
                <p className="text-muted-foreground mb-4">
                  Pick the side hustle that resonates most with your skills and interests.
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link href="/blog">Read Related Articles</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Go Deeper</h3>
                <p className="text-muted-foreground mb-4">
                  For more comprehensive strategies, check out my complete AI Beginner's Guide.
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link href="/pricing">Explore Full Book</Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Want More In-Depth AI Strategies?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              The free guide is just the beginning. Get my complete AI Beginner's Guide to Making Money for
              comprehensive strategies and step-by-step implementation plans.
            </p>
            <Button size="lg" asChild>
              <Link href="/pricing">
                Get the Complete Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <footer className="border-t py-8 bg-muted mt-12">
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
