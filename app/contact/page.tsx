"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Mail, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)

    // In a real implementation, you would send the form data to your server
    // const formData = new FormData(e.currentTarget)
    // await fetch('/api/contact', { method: 'POST', body: formData })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">Aurimas Povilaitis</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/#expertise" className="text-sm font-medium hover:underline underline-offset-4">
              Expertise
            </Link>
            <Link href="/#book" className="text-sm font-medium hover:underline underline-offset-4">
              Book
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Contact Aurimas</CardTitle>
              <CardDescription className="text-lg">
                Have questions about my book, speaking engagements, or need assistance? I'm here to help!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-medium">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll personally get back to you within 24-48 hours.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              )}

              <div className="mt-8 pt-8 border-t space-y-6">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium">Email Me Directly</h3>
                  <p className="text-muted-foreground mt-1">
                    For urgent inquiries, you can email me at{" "}
                    <a href="mailto:aurimas@example.com" className="text-primary hover:underline">
                      aurimas@example.com
                    </a>
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium">Book a Consultation</h3>
                  <p className="text-muted-foreground mt-1">
                    Schedule a 1-on-1 consultation to discuss your AI strategy
                  </p>
                  <Button variant="outline" className="mt-4">
                    Book a Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="border-t py-8 bg-muted mt-12">
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
