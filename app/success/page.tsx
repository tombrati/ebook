"use client"

import Link from "next/link"
import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ecommerce } from "@/lib/analytics"

// Create a client component that uses useSearchParams
function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get("session_id")
  const [hasTracked, setHasTracked] = useState(false)

  useEffect(() => {
    // Only track the purchase once
    if (sessionId && !hasTracked) {
      // In a real implementation, you would fetch the order details from your database
      // For now, we'll use mock data
      ecommerce.purchase({
        id: sessionId,
        revenue: 39.99, // This would be the actual amount from your database
        items: [
          {
            id: "premium",
            name: "AI Beginner's Guide - Premium Edition",
            price: 39.99,
          },
        ],
      })
      setHasTracked(true)
    }
  }, [sessionId, hasTracked])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-2xl py-12">
        <div className="bg-card rounded-lg shadow-lg p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Thank You for Your Purchase!</h1>
          <p className="text-xl text-muted-foreground">
            Your order has been successfully processed and your ebook is on its way to your inbox.
          </p>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4">What happens next?</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-medium">1.</span>
                <span>
                  You'll receive an email with download instructions within the next 5 minutes. (Please check your spam
                  folder if you don't see it)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">2.</span>
                <span>
                  The email will contain a secure link to download your ebook and any bonus materials included in your
                  purchase.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">3.</span>
                <span>
                  If you don't receive the email, you can contact Aurimas directly and provide your order details.
                </span>
              </li>
            </ul>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Need Help?</Link>
            </Button>
          </div>

          <div className="pt-6 border-t mt-6">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>Check your email for download instructions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main page component with Suspense
export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
