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
  { icon: Phone, label: "Phone", value: "Call Now", href: `tel:${COMPANY.phoneTel}`, sub: "Mon–Fri 7am–5pm" },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}`, sub: "We respond within 24 hours" },
  { icon: MapPin, label: "Service Area", value: "Orange County, CA", href: null, sub: "Including surrounding cities" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 7am–5pm", href: null, sub: null },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?1?\s*[-.]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

async function checkAddressExists(address: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1&countrycodes=us`,
      { headers: { "User-Agent": "TritonGarageDoorsContactForm/1.0" } }
    )
    const results = await res.json()
    return Array.isArray(results) && results.length > 0
  } catch {
    // If the API fails, don't block submission
    return true
  }
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [service, setService] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  function setFieldError(field: string, msg: string) {
    setFieldErrors((prev) => ({ ...prev, [field]: msg }))
  }
  function clearFieldError(field: string) {
    setFieldErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const fields = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value.trim(),
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      service,
      address: (form.elements.namedItem("address") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    }

    // Client-side validation
    const errors: Record<string, string> = {}

    if (!EMAIL_RE.test(fields.email))
      errors.email = "Please enter a valid email address."

    if (!PHONE_RE.test(fields.phone))
      errors.phone = "Please enter a valid US phone number."

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsSubmitting(false)
      return
    }

    // Address validation via OpenStreetMap
    const addressValid = await checkAddressExists(fields.address)
    if (!addressValid) {
      setFieldErrors({ address: "We couldn't verify this address. Please check it and try again." })
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.message ?? "Submission failed. Please try again.")
      }
      setIsSubmitted(true)
      setFieldErrors({})
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="pb-12 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
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
            {contactDetails.map(({ icon: Icon, label, value, href, sub }) => {
              const Wrapper = href ? "a" : "div"
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className={`flex items-start gap-4 py-5 rounded-lg transition-colors ${href ? "cursor-pointer hover:bg-secondary px-3 -mx-3 group" : ""}`}
                >
                  <div className={`h-9 w-9 rounded bg-primary flex items-center justify-center shrink-0 transition-colors ${href ? "group-hover:bg-accent" : ""}`}>
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">{label}</p>
                    <p className={`text-sm font-semibold transition-colors ${href ? "text-foreground group-hover:text-accent" : "text-foreground"}`}>{value}</p>
                    {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
                  </div>
                </Wrapper>
              )
            })}
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
                <Field label="Email" htmlFor="email" error={fieldErrors.email}>
                  <Input
                    id="email" name="email" type="email"
                    placeholder="john@example.com" required
                    onChange={() => clearFieldError("email")}
                    className={fieldErrors.email ? "border-destructive" : ""}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone" error={fieldErrors.phone}>
                  <Input
                    id="phone" name="phone" type="tel"
                    placeholder="(555) 000-0000" required
                    onChange={() => clearFieldError("phone")}
                    className={fieldErrors.phone ? "border-destructive" : ""}
                  />
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

              <Field label="Service Address" htmlFor="address" error={fieldErrors.address}>
                <Input
                  id="address" name="address"
                  placeholder="123 Main St, City, State" required
                  onChange={() => clearFieldError("address")}
                  className={fieldErrors.address ? "border-destructive" : ""}
                />
              </Field>

              <Field label="Describe Your Issue" htmlFor="message">
                <Textarea id="message" name="message" placeholder="Tell us what's going on with your garage door..." rows={4} />
              </Field>

              {error && <p className="text-sm text-destructive font-bold">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting || !service}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40"
              >
                {isSubmitting ? "Verifying & Submitting..." : "Request Service"}
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

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-xs font-bold uppercase tracking-widest text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-destructive font-bold">{error}</p>}
    </div>
  )
}
