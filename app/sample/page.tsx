import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"

export default function SamplePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-[200px] h-[280px] shadow-lg rounded-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/80 to-transparent z-10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src="/images/aurimas-profile.png"
                    alt="Aurimas Povilaitis"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=280&width=200"
                alt="AI Money Guide Book Cover"
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
              Get a taste of what's inside the AI Money Guide with this free sample from Chapter 1. Learn the
              fundamentals of AI technology and how you can leverage it to create income streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gap-2" asChild>
                <a href="/files/ai-money-guide-sample.pdf" download>
                  Download Sample <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">Get the Full Book</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Sample Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Chapter 1: Introduction to AI and Money Generation</CardTitle>
            <CardDescription>Understanding AI and Its Impact on Finance</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              Artificial Intelligence, or AI, fundamentally represents the capability of machines to mimic human
              cognitive functions. This includes learning from experience, recognizing patterns, and making decisions
              based on data. At its core, AI operates on principles such as machine learning, where algorithms are
              trained to improve their performance as they are exposed to more data, and natural language processing,
              which enables machines to understand and interpret human language. Understanding these principles is
              essential because they underline how AI functions and evolves, making it incredibly powerful in various
              sectors, including finance.
            </p>

            <p>
              The finance sector is experiencing a dramatic transformation due to AI technologies. Financial
              institutions are increasingly leveraging AI for tasks such as risk assessment, fraud detection, and
              automated trading. For instance, machine learning algorithms analyze vast amounts of transactional data to
              identify unusual patterns that may indicate fraudulent activity, allowing companies to act quickly and
              mitigate potential losses. Moreover, AI enhances decision-making by providing more accurate forecasts and
              insights derived from complex data analyses that humans alone may find difficult to interpret. This
              empowers financial analysts and managers to make informed strategic decisions more efficiently, ensuring
              that they can respond to market changes with greater agility and accuracy.
            </p>

            <p>
              As you engage with AI and its applications in finance, consider how you might integrate these technologies
              into your own financial strategies. Staying informed about advancements in AI can provide you with
              opportunities to capitalize on trends in the market. Embracing AI-driven tools, whether for investment
              analysis or financial planning, can provide a significant edge, ultimately helping you optimize your
              financial outcomes and achieve your monetary goals.
            </p>

            <h3>The Intersection of AI Technology and Income Generation</h3>

            <p>
              Artificial intelligence has fundamentally changed the landscape of income generation across various
              sectors. In healthcare, for instance, AI applications can streamline processes, improve diagnostics, and
              optimize treatment plans. Telehealth platforms are incorporating AI-driven virtual assistants that reduce
              operational costs and enhance patient engagement. Similarly, in finance, AI algorithms analyze vast
              datasets to predict market trends, assess risks, and automate trading strategies, creating opportunities
              for individuals and firms to capitalize on more informed decision-making.
            </p>

            <div className="bg-muted p-6 rounded-lg my-6">
              <h4 className="font-bold mb-2">💡 Key Takeaway</h4>
              <p className="mb-0">
                The integration of AI technology with entrepreneurial endeavors creates a powerful synergy that can
                drive innovation and profitability. Startups and small businesses can harness AI tools to automate
                routine tasks, freeing up time and resources for strategic initiatives.
              </p>
            </div>

            <p>
              <em>
                This is just a small preview of Chapter 1. The complete guide contains 15 comprehensive chapters with
                over 200 pages of actionable strategies, case studies, and step-by-step implementation guides.
              </em>
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What's Inside the Complete Guide</CardTitle>
            <CardDescription>
              The full AI Money Guide includes all 15 chapters covering every aspect of making money with AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>15 comprehensive chapters with over 200 pages of content</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Detailed strategies for AI-driven side hustles and passive income</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Investment guidance for AI stocks, ETFs, and startups</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Step-by-step guides for building and monetizing AI solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Real-world case studies and success stories</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <span>Tools, resources, and continuous learning recommendations</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-xl font-medium mb-4">Ready for the Complete Guide?</h2>
          <p className="mb-4">
            The AI Money Guide provides everything you need to start making money with artificial intelligence:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>15 detailed chapters covering every aspect of AI monetization</span>
            </li>
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Practical implementation guides and actionable strategies</span>
            </li>
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Real case studies from successful AI entrepreneurs</span>
            </li>
            <li className="flex gap-2">
              <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Tools and resources to get started immediately</span>
            </li>
          </ul>

          <Button size="lg" asChild>
            <Link href="/pricing">Get the Complete Guide</Link>
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
