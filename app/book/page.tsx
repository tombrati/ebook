import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"

export default function BookPage() {
  const chapters = [
    {
      number: 1,
      title: "Introduction to AI and Money Generation",
      sections: [
        "Understanding AI and Its Impact on Finance",
        "The Intersection of AI Technology and Income Generation",
        "Exploring the Need for an AI Money Guide",
      ],
    },
    {
      number: 2,
      title: "AI in Traditional Job Markets",
      sections: [
        "Reshaping Job Roles with AI Technologies",
        "Enhancing Productivity in Traditional Careers",
        "Navigating Job Security in an AI-Driven World",
      ],
    },
    {
      number: 3,
      title: "AI-Driven Side Hustles",
      sections: [
        "Identifying Profitable AI-Based Side Projects",
        "Managing Time and Resources for Side Hustles",
        "Case Studies of Successful AI-Driven Side Hustles",
      ],
    },
    {
      number: 4,
      title: "Investment Opportunities in AI",
      sections: [
        "Understanding AI Startups and Market Trends",
        "Evaluating Stocks and ETFs Related to AI",
        "Risks and Rewards of AI Investments",
      ],
    },
    {
      number: 5,
      title: "Building AI Solutions for Business",
      sections: [
        "Identifying Business Problems Suitable for AI",
        "Developing Custom AI Solutions: A Step-by-Step Guide",
        "Monetizing AI Solutions for Business Clients",
      ],
    },
    {
      number: 6,
      title: "Freelancing with AI Skills",
      sections: [
        "Essential AI Skills for Freelancers",
        "Platforms and Portfolios: Finding Work",
        "Pricing Your Services and Negotiating Contracts",
      ],
    },
    {
      number: 7,
      title: "Passive Income through AI Automation",
      sections: [
        "Creating Automated Income Streams with AI Tools",
        "Exploring Affiliate Marketing and AI",
        "Long-Term Sustainability of Automated Income",
      ],
    },
    {
      number: 8,
      title: "Marketing and AI",
      sections: [
        "Leveraging AI for Digital Marketing Strategies",
        "Personalization and Customer Insights with AI",
        "Measuring ROI of AI-Driven Marketing Campaigns",
      ],
    },
    {
      number: 9,
      title: "Navigating Ethical Considerations in AI Money Making",
      sections: [
        "Understanding the Ethical Implications of AI in Business",
        "Data Privacy and Security Concerns",
        "Transparent AI Practices and Customer Trust",
      ],
    },
    {
      number: 10,
      title: "AI Tools and Resources for Entrepreneurs",
      sections: [
        "Top AI Tools for Financial Analysis and Decision Making",
        "Automation Tools to Streamline Business Operations",
        "Resources for Learning and Developing AI Competencies",
      ],
    },
    {
      number: 11,
      title: "Case Studies of AI Success Stories",
      sections: [
        "Exploring Companies that Successfully Implemented AI",
        "Individual Success Stories: From Idea to Implementation",
        "Lessons Learned from Failures in AI Ventures",
      ],
    },
    {
      number: 12,
      title: "Scaling Your AI Money-Making Venture",
      sections: [
        "Strategies for Growth and Expansion",
        "Establishing Partnerships and Alliances",
        "Managing Scale: Operational Challenges and Solutions",
      ],
    },
    {
      number: 13,
      title: "Future Trends in AI and Money Generation",
      sections: [
        "Predicting the Next Big Innovations in AI",
        "Preparing for Shifts in Job Markets with AI Advances",
        "How to Adapt to Changing Financial Landscapes",
      ],
    },
    {
      number: 14,
      title: "Resources for Continuous Learning and Development",
      sections: [
        "Best Online Courses and Certifications for AI Skills",
        "Networking and Professional Communities in AI",
        "Books and Publications for Staying Informed",
      ],
    },
    {
      number: 15,
      title: "Conclusion and Future Steps",
      sections: [
        "Recap of Key Concepts in the AI Money Guide",
        "Setting Your Financial Goals with AI Knowledge",
        "Action Plan for Implementing AI Strategies",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">AI Money Guide</h1>
                <p className="text-xl text-muted-foreground">
                  Your comprehensive guide to leveraging artificial intelligence for financial success. From side
                  hustles to investment strategies, discover proven methods to generate income with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2" asChild>
                    <Link href="/pricing">
                      Get the Complete Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <Link href="/sample">
                      Read Sample Chapter <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] shadow-2xl rounded-md overflow-hidden transform rotate-3 transition-transform hover:rotate-0">
                  <Image
                    src="/placeholder.svg?height=420&width=320"
                    alt="AI Money Guide Book Cover"
                    width={320}
                    height={420}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">AI Money Guide</h3>
                      <p className="text-sm opacity-90">15 Chapters • 200+ Pages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Table of Contents</h2>
              <p className="text-xl text-muted-foreground">
                Explore 15 comprehensive chapters covering every aspect of making money with AI
              </p>
            </div>

            <div className="space-y-4">
              {chapters.map((chapter) => (
                <Card key={chapter.number} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {chapter.number}
                      </span>
                      {chapter.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {chapter.sections.map((section, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">({index + 1})</span>
                          <span>{section}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16 bg-muted">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
              <p className="text-xl text-muted-foreground">
                Master the skills and strategies needed to succeed in the AI economy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Fundamentals</h3>
                <p className="text-muted-foreground">
                  Understand AI technology and its impact on finance, from basic concepts to advanced applications.
                </p>
              </Card>

              <Card className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Side Hustle Strategies</h3>
                <p className="text-muted-foreground">
                  Discover profitable AI-driven side projects and learn how to manage time and resources effectively.
                </p>
              </Card>

              <Card className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Investment Opportunities</h3>
                <p className="text-muted-foreground">
                  Learn to evaluate AI startups, stocks, and ETFs while understanding risks and rewards.
                </p>
              </Card>

              <Card className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Solutions</h3>
                <p className="text-muted-foreground">
                  Build and monetize custom AI solutions for business clients with step-by-step guidance.
                </p>
              </Card>

              <Card className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Freelancing Success</h3>
                <p className="text-muted-foreground">
                  Master essential AI skills for freelancers and learn effective pricing and negotiation strategies.
                </p>
              </Card>

              <Card className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passive Income</h3>
                <p className="text-muted-foreground">
                  Create automated income streams using AI tools and explore sustainable revenue models.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Making Money with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get the complete AI Money Guide and start implementing these proven strategies today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link href="/pricing">
                  Get the Complete Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/sample">Read Sample Chapter</Link>
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm opacity-80">30-day money-back guarantee. No questions asked.</p>
            </div>
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
