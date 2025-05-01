"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-2xl py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-muted-foreground mb-8">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()}>Try again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
