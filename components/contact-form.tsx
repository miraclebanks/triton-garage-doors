"use client"

import { useState } from "react"
import { COMPANY } from "@/lib/config"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react"

const contactDetails = [
  { icon: Phone, label: "Phone", value: "Call Now", sub: "Mon–Fri 7am–5pm" },
  { icon: Mail, label: "Email", value: COMPANY.email, sub: "We respond within 24 hours" },
  { icon: MapPin, label: "Service Area", value: "Orange County, CA", sub: "Including surrounding cities" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 7am–5pm", sub: null },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [service, setService] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.message ?? "Submission failed. Please try again.")
      }
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="py-16 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-foreground">
              Request Service
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed border border-border rounded px-4 py-3 bg-card">
            Fill out the form and we'll get back to you with an estimate for your project.
          </p>
        </div>

        {/* Body */}
        <div className="py-14 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">

          {/* Contact details */}
          <div className="space-y-0 divide-y divide-border">
            {contactDetails.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex items-start gap-4 py-5">
                <div className="h-9 w-9 rounded bg-primary flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                  {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="border border-border rounded p-10 flex flex-col items-center justify-center text-center gap-4">
              <div className="h-14 w-14 rounded bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-foreground">Request Received</h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                We've received your request and will be in touch shortly with an estimate.
              </p>
              <button
                onClick={() => { setIsSubmitted(false); setService("") }}
                className="mt-2 text-xs font-bold uppercase tracking-widest text-accent hover:opacity-70 transition-opacity"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" htmlFor="firstName">
                  <Input id="firstName" name="firstName" placeholder="John" required />
                </Field>
                <Field label="Last Name" htmlFor="lastName">
                  <Input id="lastName" name="lastName" placeholder="Doe" required />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email" htmlFor="email">
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
                </Field>
              </div>

              <Field label="Service Needed" htmlFor="service">
                <Select name="service" required value={service} onValueChange={setService}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repair">Garage Door Repair</SelectItem>
                    <SelectItem value="installation">New Door Installation</SelectItem>
                    <SelectItem value="opener">Opener Services</SelectItem>
                    <SelectItem value="spring">Spring Replacement</SelectItem>
                    <SelectItem value="noise">Garage Door Making Weird Sound</SelectItem>
                    <SelectItem value="unknown">I Don&apos;t Know, Please Send Help</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field label="Service Address" htmlFor="address">
                <Input id="address" name="address" placeholder="123 Main St, City, State" required />
              </Field>

              <Field label="Describe Your Issue" htmlFor="message">
                <Textarea id="message" name="message" placeholder="Tell us what's going on with your garage door..." rows={4} />
              </Field>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting || !service}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40"
              >
                {isSubmitting ? "Submitting..." : "Request Service"}
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your service request. We never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-xs font-bold uppercase tracking-widest text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
