"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { ecommerce } from "@/lib/analytics"

interface CheckoutButtonProps {
  priceId: string
  productId?: string
  productName?: string
  price?: number
  children: React.ReactNode
  className?: string
}

export default function CheckoutButton({
  priceId,
  productId = "default",
  productName = "AI Beginner's Guide",
  price = 0,
  children,
  className,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setIsLoading(true)

    // Track begin checkout event
    ecommerce.beginCheckout({
      id: productId,
      name: productName,
      price: price,
    })

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          metadata: {
            productId,
            productName,
          },
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/pricing`,
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      } else {
        console.error("No checkout URL returned")
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleCheckout} disabled={isLoading} className={className}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
