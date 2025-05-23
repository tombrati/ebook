import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import LeadCaptureForm from "../ai-side-hustles/lead-capture-form"

export default function LandingPage() {
  // Calculate the end date for the offer (next Sunday at midnight)
  const today = new Date()
  const daysUntilSunday = 7 - today.getDay()
  const nextSunday = new Date(today)
  nextSunday.setDate(today.getDate() + daysUntilSunday)
  nextSunday.setHours(23, 59, 59, 0)

  const formattedDate = nextSunday.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Discover 7 Proven AI Side Hustles You Can Start Today
                </h1>
                <p className="text-xl text-muted-foreground">
                  You're tired of watching others make money online… while you're stuck in the same place. You've seen
                  the hype around AI, but it all feels overwhelming, too complex, or like it's not for people like you.
                </p>
                <p className="text-xl text-muted-foreground">
                  Meanwhile, others are using free tools to earn income from home, automate their side gigs, and even
                  quit their jobs.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] shadow-2xl rounded-md overflow-hidden transform rotate-3 transition-transform hover:rotate-0">
                  <Image
                    src="/placeholder.svg?height=420&width=320"
                    alt="7 Proven AI Side Hustles Guide"
                    width={320}
                    height={420}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">7 Proven AI Side Hustles</h3>
                      <p className="text-sm opacity-90">Your 2025 Guide to AI Income</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p>
                We created a simple guide to show you exactly how to get started with AI even if you've never touched a
                chatbot or used a design tool. Inside, you'll find 7 real side hustles that regular people are using to
                earn money in 2025.
              </p>
              <p>
                No fluff. No fake promises. Just clear, step-by-step examples and tools you can use right now. Start
                small. Start smart. Start now.
              </p>
              <p className="font-medium">This is your roadmap to turning AI into real income.</p>
            </div>

            {/* CTA Section */}
            <div className="mt-12">
              <Card className="max-w-xl mx-auto overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Download className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Get Your Free Guide Now</h3>
                        <p className="text-muted-foreground">Enter your email to receive the guide instantly</p>
                      </div>
                    </div>
                    <LeadCaptureForm />
                  </div>
                  <div className="bg-muted p-4 text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>
                        Only available for free until {formattedDate} at midnight – download it now before it's gone.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional CTA */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get your free guide today and discover how you can start making money with AI.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="#top">
                Get My Free AI Side Hustle Guide <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

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
