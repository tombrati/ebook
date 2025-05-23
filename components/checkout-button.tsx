"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { ecommerce } from "@/lib/analytics"
import { event } from "@/lib/analytics"

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

    // Track product view first (in case they haven't viewed the product page)
    ecommerce.viewItem({
      id: productId,
      name: productName,
      price: price,
    })

    // Track begin checkout event with more details
    ecommerce.beginCheckout({
      id: productId,
      name: productName,
      price: price,
    })

    // Track custom event for checkout button click
    event("checkout_button_click", {
      category: "Ecommerce",
      label: productName,
      value: price,
      product_id: productId,
      product_name: productName,
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
          successUrl: `${window.location.origin}/success?product=${encodeURIComponent(productName)}&price=${price}`,
          cancelUrl: `${window.location.origin}/pricing?checkout_abandoned=true&product=${encodeURIComponent(productName)}`,
        }),
      })

      const { url } = await response.json()

      if (url) {
        // Track checkout progression
        event("checkout_progression", {
          category: "Ecommerce",
          label: "Redirecting to payment",
          product_id: productId,
          product_name: productName,
        })

        window.location.href = url
      } else {
        console.error("No checkout URL returned")
        setIsLoading(false)

        // Track checkout error
        event("checkout_error", {
          category: "Ecommerce",
          label: "No checkout URL returned",
          product_id: productId,
          product_name: productName,
        })
      }
    } catch (error) {
      console.error("Error during checkout:", error)
      setIsLoading(false)

      // Track checkout error
      event("checkout_error", {
        category: "Ecommerce",
        label: "API error",
        product_id: productId,
        product_name: productName,
        error: error.message,
      })
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
