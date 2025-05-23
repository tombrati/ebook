"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle } from "lucide-react"

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

      // In a real implementation, you would redirect to a thank you page or trigger a download
      // window.location.href = '/thank-you?download=ai-side-hustles'
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-2">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-medium">Success!</h3>
        <p className="text-muted-foreground">
          Your guide is on its way to your inbox. Check your email in the next few minutes.
        </p>
        <p className="text-sm text-muted-foreground mt-4">(If you don't see it, please check your spam folder)</p>
      </div>
    )
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
