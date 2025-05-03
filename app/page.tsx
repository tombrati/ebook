import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, DollarSign, Lightbulb, Star, CheckCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import NewsletterSignup from "@/components/newsletter-signup"
import TestimonialCard from "@/components/testimonial-card"
import SiteHeader from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Aurimas Povilaitis</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                AI Expert & Author helping beginners leverage artificial intelligence to create sustainable income
                streams
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/pricing">
                    Get My Book <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/sample">Read Sample Chapter</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 200+ readers</span>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] rounded-lg overflow-hidden">
                <Image
                  src="/images/aurimas-profile.png"
                  alt="Aurimas Povilaitis"
                  width={320}
                  height={420}
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/images/aurimas-profile.png"
                    alt="Aurimas Povilaitis"
                    width={256}
                    height={256}
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-muted-foreground">
                  With over 5 years of experience in AI and digital entrepreneurship, I've helped hundreds of beginners
                  navigate the complex world of artificial intelligence and turn it into profitable ventures. My mission
                  is to demystify AI technology and make it accessible to everyone, regardless of technical background.
                </p>
                <p className="text-muted-foreground">
                  After working with major tech companies and startups in the AI space, I realized that many people were
                  being left behind in the AI revolution. That's why I decided to focus on creating practical,
                  actionable resources that help beginners leverage AI technology to create income streams and build
                  businesses.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>AI Expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Published Author</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Digital Entrepreneur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Areas where I can help you succeed with artificial intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExpertiseCard
                icon={<Lightbulb className="h-8 w-8 text-primary" />}
                title="AI for Beginners"
                description="I specialize in making AI accessible to complete beginners, explaining complex concepts in simple terms anyone can understand."
              />
              <ExpertiseCard
                icon={<DollarSign className="h-8 w-8 text-primary" />}
                title="AI Monetization"
                description="Learn proven strategies to generate income using AI tools, from freelancing to building automated systems and passive income streams."
              />
              <ExpertiseCard
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                title="Practical Implementation"
                description="I focus on actionable advice and step-by-step guides that you can implement immediately, even with no technical background."
              />
            </div>
          </div>
        </section>

        {/* Book Section */}
        <section id="book" className="py-20 bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 flex justify-center">
                <div className="relative w-[240px] h-[320px] shadow-2xl rounded-md overflow-hidden transform rotate-3 transition-transform hover:rotate-0">
                  <Image
                    src="/placeholder.svg?height=320&width=240"
                    alt="AI Beginner's Guide Ebook Cover"
                    width={240}
                    height={320}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">AI Beginner's Guide to Making Money</h2>
                <p className="text-muted-foreground">
                  My comprehensive guide that takes you from complete beginner to confidently using AI to generate
                  income. No technical background required.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>15+ proven AI monetization strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Step-by-step implementation guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Real-world case studies and success stories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Templates and resources to get started immediately</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gap-2" asChild>
                    <Link href="/pricing">
                      Get the Book <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sample">Read Sample Chapter</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured In Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-center text-xl font-medium mb-8">Featured In</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Replace with actual logos */}
              <div className="h-8 w-32 bg-muted-foreground/20 rounded"></div>
              <div className="h-8 w-32 bg-muted-foreground/20 rounded"></div>
              <div className="h-8 w-32 bg-muted-foreground/20 rounded"></div>
              <div className="h-8 w-32 bg-muted-foreground/20 rounded"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What My Readers Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Success stories from people who have applied my methods
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Aurimas's guide completely changed how I approach my online business. I've implemented just two strategies from the book and already seeing results."
                author="Michael T."
                role="Digital Entrepreneur"
                rating={5}
              />
              <TestimonialCard
                quote="As someone with zero technical background, I was worried AI would be too complex. Aurimas breaks everything down perfectly for beginners."
                author="Sarah L."
                role="Content Creator"
                rating={5}
              />
              <TestimonialCard
                quote="The step-by-step instructions made it easy to follow along. I'm now making an extra $1,200 monthly using the AI freelancing strategy."
                author="David K."
                role="Marketing Consultant"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Speaking & Events Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Speaking & Events</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join me at upcoming events or book me for your next conference
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI for Entrepreneurs Conference</CardTitle>
                  <CardDescription>New York, NY • June 15-17, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Keynote: "AI Monetization Strategies for 2023"</h3>
                      <p className="text-muted-foreground mt-1">
                        I'll be sharing the latest AI tools and strategies that entrepreneurs can use to create new
                        income streams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Digital Business Summit</CardTitle>
                  <CardDescription>Virtual Event • July 8, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Workshop: "Building Your First AI Business"</h3>
                      <p className="text-muted-foreground mt-1">
                        A hands-on workshop where I'll guide participants through creating their first AI-powered
                        business model.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="gap-2">
                See All Events <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your AI Journey?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Get my complete guide and start implementing these strategies today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/pricing">
                  Get the Book Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm opacity-80">30-day money-back guarantee. No questions asked.</p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl">
            <NewsletterSignup />
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

function ExpertiseCard({ icon, title, description }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
