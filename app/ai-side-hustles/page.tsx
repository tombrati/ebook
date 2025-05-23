import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import LeadCaptureForm from "./lead-capture-form"

export default function AISideHustlesPage() {
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
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  <span>Free Limited-Time Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Discover 7 Proven AI Side Hustles You Can Start Today
                </h1>
                <p className="text-xl text-muted-foreground">Your roadmap to turning AI into real income in 2025</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Only available for free until {formattedDate} at midnight</span>
                </div>
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

        {/* Pain & Agitation Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              <div className="bg-muted rounded-lg p-6 border-l-4 border-primary">
                <h2 className="text-2xl font-bold mb-4">Does this sound familiar?</h2>
                <p className="text-lg mb-4">
                  You're tired of watching others make money online… while you're stuck in the same place.
                </p>
                <p className="text-lg">
                  You've seen the hype around AI, but it all feels overwhelming, too complex, or like it's not for
                  people like you. Meanwhile, others are using free tools to earn income from home, automate their side
                  gigs, and even quit their jobs.
                </p>
              </div>

              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-primary text-primary-foreground p-8 flex items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">The Solution You've Been Waiting For</h2>
                      <p className="opacity-90">
                        We created a simple guide to show you exactly how to get started with AI even if you've never
                        touched a chatbot or used a design tool.
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Inside, you'll discover:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>7 real side hustles that regular people are using to earn money in 2025</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>No fluff. No fake promises. Just clear, step-by-step examples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Tools you can use right now (many of them free)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Real examples of people making $500-$2,000/month with these methods</span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn Inside</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SideHustleCard
                number="01"
                title="AI Content Creation"
                description="Learn how to create blog posts, articles, and social media content that ranks and converts - without writing a single word yourself."
              />
              <SideHustleCard
                number="02"
                title="AI Image Generation"
                description="Discover how to create stunning visuals for clients or products without any design skills or expensive software."
              />
              <SideHustleCard
                number="03"
                title="AI Research Assistant"
                description="Find out how to offer specialized research services that save clients hours of time while paying you premium rates."
              />
              <SideHustleCard
                number="04"
                title="AI Prompt Engineering"
                description="Learn this in-demand skill that companies are willing to pay top dollar for - even to complete beginners."
              />
              <SideHustleCard
                number="05"
                title="AI-Powered Freelancing"
                description="Discover how to 10x your productivity and earnings on platforms like Upwork and Fiverr using AI tools."
              />
              <SideHustleCard
                number="06"
                title="AI Product Creation"
                description="Create digital products like templates, guides, and courses with AI that generate passive income while you sleep."
              />
              <div className="md:col-span-2">
                <SideHustleCard
                  number="07"
                  title="The Secret Bonus Side Hustle"
                  description="This under-the-radar opportunity is helping complete beginners earn $1,000+ per month with minimal competition. Available only in the guide."
                  featured={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Real Results From Real People</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic">
                      "I was skeptical about AI, but this guide made it so simple. I started the content creation side
                      hustle and made $650 in my first month working just evenings and weekends."
                    </blockquote>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="font-medium">Michael T.</div>
                    <div className="text-sm text-muted-foreground">Marketing Specialist</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic">
                      "As a stay-at-home mom, I needed something flexible. The AI image generation side hustle was
                      perfect. I'm now making around $1,200/month creating images for small businesses."
                    </blockquote>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="font-medium">Sarah L.</div>
                    <div className="text-sm text-muted-foreground">Stay-at-home Parent</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container max-w-4xl">
            <div className="text-center space-y-6 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">Start Your AI Side Hustle Journey Today</h2>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Start small. Start smart. Start now. This is your roadmap to turning AI into real income.
              </p>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Only available for free until {formattedDate} at midnight</span>
              </div>
            </div>

            <Card className="max-w-xl mx-auto overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 bg-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Get Your Free Guide Now</h3>
                      <p className="text-muted-foreground">Enter your email to receive the guide instantly</p>
                    </div>
                  </div>
                  <LeadCaptureForm />
                </div>
                <div className="bg-muted p-4 text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Mail className="h-4 w-4" />
                    <span>We respect your privacy. Unsubscribe at any time.</span>
                  </div>
                  <p>After Sunday at midnight, this guide will only be available as part of the paid book package.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Is this guide really free?</h3>
                <p>
                  Yes, the guide is completely free until Sunday at midnight. After that, it will only be available as
                  part of the paid book package.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Do I need technical skills to use these AI side hustles?</h3>
                <p>
                  Not at all! The guide is specifically designed for beginners with no technical background. All the
                  methods use simple, user-friendly tools with step-by-step instructions.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">How soon can I start making money?</h3>
                <p>
                  Many of our readers start implementing these side hustles within days of reading the guide. While
                  results vary, some have reported earning their first income within 1-2 weeks of consistent effort.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Will these methods still work in 2025?</h3>
                <p>
                  We've specifically selected AI side hustles that have staying power and aren't just temporary trends.
                  These opportunities are growing in demand and will continue to be valuable for years to come.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Don't Miss This Opportunity</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              The AI revolution is happening now. Will you watch from the sidelines, or start benefiting today?
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="#get-guide">
                Get My Free AI Side Hustle Guide <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Only available for free until {formattedDate} at midnight
            </p>
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

function SideHustleCard({ number, title, description, featured = false }) {
  return (
    <Card className={`h-full overflow-hidden ${featured ? "border-primary" : ""}`}>
      <div className={`p-6 ${featured ? "bg-primary/5" : ""}`}>
        <div className="flex items-start gap-4">
          <div className={`text-3xl font-bold ${featured ? "text-primary" : "text-muted-foreground"}`}>{number}</div>
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
