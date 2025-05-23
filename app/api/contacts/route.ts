import { NextResponse } from "next/server"
import { addContact, getContacts } from "@/lib/contacts-store"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, source = "Unknown" } = body

    // Validate the request
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Create the contact
    const contact = addContact({
      name: name || "Unknown",
      email,
      source,
      date: new Date().toISOString(),
      status: "New",
      tags: source === "AI Side Hustles" ? ["Lead", "Free Guide"] : ["Lead"],
    })

    console.log("New contact added:", contact)

    return NextResponse.json({
      success: true,
      message: "Contact added successfully",
      contact,
    })
  } catch (error) {
    console.error("Error adding contact:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const contacts = getContacts()
    return NextResponse.json({ contacts })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "An error occurred while fetching contacts" }, { status: 500 })
  }
}
