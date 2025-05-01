"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    setIsSubmitted(true)
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl">Join My Newsletter</CardTitle>
        <CardDescription className="text-base">
          Get weekly AI tips, exclusive strategies, and updates on my latest content and events.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className="text-center py-4 space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium">Thanks for subscribing!</h3>
            <p className="text-muted-foreground">Check your inbox for a confirmation email and exclusive AI tips.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
