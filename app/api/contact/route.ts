import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"
import { COMPANY } from "@/lib/config"

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  address: z.string().min(1, "Service address is required"),
  message: z.string().optional(),
})

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    await transporter.sendMail({
      from: `"${COMPANY.name}" <${process.env.GMAIL_USER}>`,
      to: COMPANY.notificationEmail,
      replyTo: data.email,
      subject: `New Service Request – ${data.service}`,
      html: `
        <h2 style="font-family:sans-serif;">New Service Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.firstName} ${data.lastName}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">Service</td><td style="padding:8px;">${data.service}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Address</td><td style="padding:8px;">${data.address}</td></tr>
          ${data.message ? `<tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${data.message}</td></tr>` : ""}
        </table>
      `,
    })

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
