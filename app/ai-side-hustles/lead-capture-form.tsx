"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { trackFormSubmission } from "@/lib/analytics"

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate email
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    trackFormSubmission("AI Side Hustles Lead Form")

    try {
      // In a real implementation, you would send this data to your API
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, name }),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      trackFormSubmission("AI Side Hustles Lead Form Success")

      // Redirect to thank you page with download
      setTimeout(() => {
        window.location.href = "/ai-side-hustles/thank-you"
      }, 2000)

      // In a real implementation, you would redirect to a thank you page or trigger a download
      // window.location.href = '/thank-you?download=ai-side-hustles'
    } catch (err) {
      setError("Something went wrong. Please try again.")
      trackFormSubmission("AI Side Hustles Lead Form Error", false)
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return null
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Your First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Get My Free AI Side Hustle Guide"
        )}
      </Button>
    </form>
  )
}
