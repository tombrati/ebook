import Link from "next/link"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CheckoutButton from "@/components/checkout-button"
import SiteHeader from "@/components/site-header"

export default function PricingPage() {
  // Define the pricing plans
  const plans = [
    {
      id: "basic",
      name: "Basic Edition",
      price: "$19.99",
      priceValue: 19.99,
      description: "Perfect for beginners looking to start their AI journey",
      priceId: "price_basic", // Replace with your actual Stripe price ID
      features: [
        "Complete AI Beginner's Guide Ebook (PDF)",
        "15+ Money-Making Strategies",
        "Basic Implementation Guides",
        "30-Day Money-Back Guarantee",
      ],
    },
    {
      id: "premium",
      name: "Premium Edition",
      price: "$39.99",
      priceValue: 39.99,
      description: "Our most popular option with additional resources",
      priceId: "price_premium", // Replace with your actual Stripe price ID
      featured: true,
      features: [
        "Everything in Basic Edition",
        "Video Tutorials (2+ hours)",
        "Templates & Prompt Library",
        "Case Studies of Successful AI Entrepreneurs",
        "60-Day Money-Back Guarantee",
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate Edition",
      price: "$69.99",
      priceValue: 69.99,
      description: "Complete package for serious AI entrepreneurs",
      priceId: "price_ultimate", // Replace with your actual Stripe price ID
      features: [
        "Everything in Premium Edition",
        "1-on-1 Email Consultation with Aurimas",
        "Advanced AI Monetization Strategies",
        "Private Community Access",
        "Lifetime Updates",
        "90-Day Money-Back Guarantee",
      ],
    },
  ]

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      <div className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight">Choose Your Edition</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect package for your AI journey and start making money with artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.featured
                  ? "border-primary shadow-lg relative before:absolute before:inset-0 before:-z-10 before:m-[-2px] before:rounded-[inherit] before:bg-gradient-to-r before:from-primary before:to-primary/70"
                  : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> one-time payment</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <CheckoutButton
                  priceId={plan.priceId}
                  productId={plan.id}
                  productName={plan.name}
                  price={plan.priceValue}
                  className={`w-full ${plan.featured ? "bg-primary text-primary-foreground" : ""}`}
                >
                  Get {plan.name}
                </CheckoutButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold">100% Satisfaction Guaranteed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you're not completely satisfied with your purchase, I offer a money-back guarantee. No questions asked.
          </p>
          <div className="pt-4">
            <Link href="/" className="text-primary hover:underline">
              Return to homepage
            </Link>
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
