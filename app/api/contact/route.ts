import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  address: z.string().min(1, "Service address is required"),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Log the submission (replace with your email/CRM integration)
    console.log("[Contact Form Submission]", {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // TODO: Add email sending here, e.g.:
    // await sendEmail({ to: "info@progarage.com", subject: "New Quote Request", data })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      )
    }
    console.error("[Contact Form Error]", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
