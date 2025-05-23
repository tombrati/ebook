import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate the request
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Add the subscriber to your email marketing platform (e.g., Mailchimp, ConvertKit)
    // 2. Store the lead in your database
    // 3. Trigger an email with the download link

    console.log("New subscriber:", { email, name })

    // For demo purposes, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: "Subscription successful",
      // In a real implementation, you might include a download URL or token
      // downloadUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/download/ai-side-hustles?token=xyz`
    })
  } catch (error) {
    console.error("Error in subscribe API:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}
