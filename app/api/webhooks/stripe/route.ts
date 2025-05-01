import { NextResponse } from "next/server"
import Stripe from "stripe"
import { headers } from "next/headers"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// This is your Stripe webhook secret for testing your endpoint locally.
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const signature = headers().get("Stripe-Signature") as string

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret!)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error"
      console.log(`❌ Error message: ${errorMessage}`)
      return NextResponse.json({ error: `Webhook Error: ${errorMessage}` }, { status: 400 })
    }

    // Handle the event
    console.log(`✅ Success: ${event.id}`)

    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSession = event.data.object as Stripe.Checkout.Session

        // Save order to database
        await saveOrder({
          sessionId: checkoutSession.id,
          customerId: checkoutSession.customer as string,
          customerEmail: checkoutSession.customer_details?.email as string,
          amount: checkoutSession.amount_total as number,
          paymentStatus: checkoutSession.payment_status,
          productId: checkoutSession.metadata?.productId || "",
          productName: checkoutSession.metadata?.productName || "",
        })

        // Send confirmation email with download link
        if (checkoutSession.customer_details?.email) {
          await sendOrderConfirmationEmail({
            email: checkoutSession.customer_details.email,
            sessionId: checkoutSession.id,
            productName: checkoutSession.metadata?.productName || "AI Beginner's Guide",
          })
        }

        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "An error occurred while processing the webhook" }, { status: 500 })
  }
}

// Mock functions for database operations and email sending
// In a real implementation, these would connect to your database and email service
async function saveOrder(orderData: any) {
  console.log("Saving order to database:", orderData)
  // In a real implementation, you would save this to your database
  return true
}

async function sendOrderConfirmationEmail(data: { email: string; sessionId: string; productName: string }) {
  console.log("Sending confirmation email to:", data.email)
  // In a real implementation, you would use an email service like SendGrid, Mailgun, etc.
  // The email would include a link to download the ebook, like:
  // `${process.env.NEXT_PUBLIC_SITE_URL}/download/${data.sessionId}`
  return true
}
