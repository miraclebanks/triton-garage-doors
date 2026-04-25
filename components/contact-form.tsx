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

const TIME_OPTIONS = [
  { value: "8am",  label: "8:00 AM" },
  { value: "9am",  label: "9:00 AM" },
  { value: "10am", label: "10:00 AM" },
  { value: "11am", label: "11:00 AM" },
  { value: "12pm", label: "12:00 PM" },
  { value: "1pm",  label: "1:00 PM" },
  { value: "2pm",  label: "2:00 PM" },
  { value: "3pm",  label: "3:00 PM" },
  { value: "4pm",  label: "4:00 PM" },
  { value: "5pm",  label: "5:00 PM" },
]

function timeIndex(label: string) {
  return TIME_OPTIONS.findIndex((t) => t.label === label)
}

function validToOptions(from: string) {
  const idx = timeIndex(from)
  return idx === -1 ? TIME_OPTIONS : TIME_OPTIONS.slice(idx + 1)
}

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
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [sameTime, setSameTime] = useState(true)
  const [sharedFrom, setSharedFrom] = useState("")
  const [sharedTo, setSharedTo] = useState("")
  const [dayTimes, setDayTimes] = useState<Record<string, { from: string; to: string }>>({})
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  function validate(field: string, value: string): string {
    switch (field) {
      case "firstName": return value ? "" : "First name is required."
      case "lastName":  return value ? "" : "Last name is required."
      case "email":     return !value ? "Email is required." : !EMAIL_RE.test(value) ? "Please enter a valid email address." : ""
      case "phone":     return !value ? "Phone number is required." : !PHONE_RE.test(value) ? "Please enter a valid US phone number." : ""
      case "service":   return value ? "" : "Please select a service."
      case "address":   return value.length >= 3 ? "" : "Address is required."
      case "city":      return value ? "" : "City is required."
      case "state":     return value.length >= 2 ? "" : "State is required."
      case "zip":       return !value ? "ZIP code is required." : !/^\d{5}(-\d{4})?$/.test(value) ? "Please enter a valid ZIP code." : ""
      case "message":   return value ? "" : "Please describe your issue."
      default:          return ""
    }
  }

  function touchField(field: string, value: string) {
    const msg = validate(field, value)
    setFieldErrors((prev) => msg ? { ...prev, [field]: msg } : (() => { const n = { ...prev }; delete n[field]; return n })())
  }

  function clearFieldError(field: string) {
    setFieldErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
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
      city: (form.elements.namedItem("city") as HTMLInputElement).value.trim(),
      state: (form.elements.namedItem("state") as HTMLInputElement).value.trim(),
      zip: (form.elements.namedItem("zip") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      availability: selectedDays.length > 0
        ? sameTime
          ? `${selectedDays.join(", ")}${sharedFrom && sharedTo ? ` · ${sharedFrom}–${sharedTo}` : ""}`
          : selectedDays
              .map((d) => {
                const t = dayTimes[d]
                return t?.from && t?.to ? `${d}: ${t.from}–${t.to}` : d
              })
              .join(", ")
        : "",
    }

    // Validate all fields up front
    const errors: Record<string, string> = {}
    for (const key of ["firstName", "lastName", "email", "phone", "service", "address", "city", "state", "zip", "message"] as const) {
      const msg = validate(key, fields[key])
      if (msg) errors[key] = msg
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setIsSubmitting(false)
      return
    }

    // Address validation via OpenStreetMap
    const fullAddress = `${fields.address}, ${fields.city}, ${fields.state} ${fields.zip}`
    const addressValid = await checkAddressExists(fullAddress)
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
                onClick={() => { setIsSubmitted(false); setService(""); setSelectedDays([]); setSameTime(true); setSharedFrom(""); setSharedTo(""); setDayTimes({}) }}
                className="mt-2 text-xs font-bold uppercase tracking-widest text-accent hover:opacity-70 transition-opacity"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <p className="text-xs text-muted-foreground">Fields marked <span className="text-destructive font-bold">*</span> are required.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" htmlFor="firstName" error={fieldErrors.firstName}>
                  <Input
                    id="firstName" name="firstName" placeholder="John" required
                    onChange={() => clearFieldError("firstName")}
                    onBlur={(e) => touchField("firstName", e.target.value.trim())}
                    className={fieldErrors.firstName ? "border-destructive" : ""}
                  />
                </Field>
                <Field label="Last Name" htmlFor="lastName" error={fieldErrors.lastName}>
                  <Input
                    id="lastName" name="lastName" placeholder="Doe" required
                    onChange={() => clearFieldError("lastName")}
                    onBlur={(e) => touchField("lastName", e.target.value.trim())}
                    className={fieldErrors.lastName ? "border-destructive" : ""}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email" htmlFor="email" error={fieldErrors.email}>
                  <Input
                    id="email" name="email" type="email"
                    placeholder="john@example.com" required
                    onChange={() => clearFieldError("email")}
                    onBlur={(e) => touchField("email", e.target.value.trim())}
                    className={fieldErrors.email ? "border-destructive" : ""}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone" error={fieldErrors.phone}>
                  <Input
                    id="phone" name="phone" type="tel"
                    placeholder="(555) 000-0000" required
                    onChange={() => clearFieldError("phone")}
                    onBlur={(e) => touchField("phone", e.target.value.trim())}
                    className={fieldErrors.phone ? "border-destructive" : ""}
                  />
                </Field>
              </div>

              <Field label="Service Needed" htmlFor="service" error={fieldErrors.service}>
                <Select
                  name="service" required value={service}
                  onValueChange={(v) => { setService(v); touchField("service", v) }}
                >
                  <SelectTrigger id="service" className={fieldErrors.service ? "border-destructive" : ""}>
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

              <Field label="Address Line 1" htmlFor="address" error={fieldErrors.address}>
                <Input
                  id="address" name="address"
                  placeholder="123 Main St" required
                  onChange={() => clearFieldError("address")}
                  onBlur={(e) => touchField("address", e.target.value.trim())}
                  className={fieldErrors.address ? "border-destructive" : ""}
                />
              </Field>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Field label="City" htmlFor="city" error={fieldErrors.city}>
                  <Input
                    id="city" name="city"
                    placeholder="Irvine" required
                    onChange={() => clearFieldError("city")}
                    onBlur={(e) => touchField("city", e.target.value.trim())}
                    className={fieldErrors.city ? "border-destructive" : ""}
                  />
                </Field>
                <Field label="State" htmlFor="state" error={fieldErrors.state}>
                  <Input
                    id="state" name="state"
                    placeholder="CA" required maxLength={2}
                    onChange={() => clearFieldError("state")}
                    onBlur={(e) => touchField("state", e.target.value.trim())}
                    className={fieldErrors.state ? "border-destructive" : ""}
                  />
                </Field>
                <Field label="ZIP Code" htmlFor="zip" error={fieldErrors.zip}>
                  <Input
                    id="zip" name="zip"
                    placeholder="92602" required
                    onChange={() => clearFieldError("zip")}
                    onBlur={(e) => touchField("zip", e.target.value.trim())}
                    className={`col-span-2 sm:col-span-1 ${fieldErrors.zip ? "border-destructive" : ""}`}
                  />
                </Field>
              </div>

              {/* Availability */}
              <div className="border border-border rounded p-4 space-y-4 bg-card">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground">Availability</p>

                {/* Day picker */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-bold">Select days that work for you</p>
                  <div className="flex flex-wrap gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => {
                      const active = selectedDays.includes(day)
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() =>
                            setSelectedDays((prev) =>
                              active ? prev.filter((d) => d !== day) : [...prev, day]
                            )
                          }
                          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded border transition-colors ${
                            active
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                          }`}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Same time checkbox — only show once at least one day is selected */}
                {selectedDays.length > 0 && (
                  <label className="flex items-center gap-2 cursor-pointer w-fit">
                    <input
                      type="checkbox"
                      checked={sameTime}
                      onChange={(e) => setSameTime(e.target.checked)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-xs font-bold text-foreground">Same time for all selected days</span>
                  </label>
                )}

                {/* Shared time range */}
                {selectedDays.length > 0 && sameTime && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-bold">Preferred time window</p>
                    <div className="flex items-center gap-3">
                      <Select
                        value={sharedFrom}
                        onValueChange={(v) => {
                          setSharedFrom(v)
                          if (sharedTo && timeIndex(sharedTo) <= timeIndex(v)) setSharedTo("")
                        }}
                      >
                        <SelectTrigger className="w-36">
                          <SelectValue placeholder="From" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIME_OPTIONS.map((t) => (
                            <SelectItem key={t.value} value={t.label}>{t.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span className="text-xs font-bold text-muted-foreground">to</span>
                      <Select value={sharedTo} onValueChange={setSharedTo}>
                        <SelectTrigger className="w-36">
                          <SelectValue placeholder="To" />
                        </SelectTrigger>
                        <SelectContent>
                          {validToOptions(sharedFrom).map((t) => (
                            <SelectItem key={t.value} value={t.label}>{t.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Per-day time ranges */}
                {selectedDays.length > 0 && !sameTime && (
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground font-bold">Set a time window for each day</p>
                    {selectedDays.map((day) => {
                      const from = dayTimes[day]?.from ?? ""
                      const to = dayTimes[day]?.to ?? ""
                      const set = (key: "from" | "to", val: string) =>
                        setDayTimes((prev) => ({ ...prev, [day]: { ...prev[day], [key]: val } }))
                      return (
                        <div key={day} className="flex items-center gap-3">
                          <span className="text-xs font-extrabold uppercase tracking-widest text-foreground w-8 shrink-0">{day}</span>
                          <Select
                            value={from}
                            onValueChange={(v) => {
                              set("from", v)
                              if (to && timeIndex(to) <= timeIndex(v))
                                setDayTimes((prev) => ({ ...prev, [day]: { from: v, to: "" } }))
                            }}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="From" />
                            </SelectTrigger>
                            <SelectContent>
                              {TIME_OPTIONS.map((t) => (
                                <SelectItem key={t.value} value={t.label}>{t.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <span className="text-xs font-bold text-muted-foreground">to</span>
                          <Select value={to} onValueChange={(v) => set("to", v)}>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="To" />
                            </SelectTrigger>
                            <SelectContent>
                              {validToOptions(from).map((t) => (
                                <SelectItem key={t.value} value={t.label}>{t.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <Field label="Describe Your Issue" htmlFor="message" error={fieldErrors.message}>
                <Textarea
                  id="message" name="message"
                  placeholder="Tell us what's going on with your garage door..." rows={4} required
                  onChange={() => clearFieldError("message")}
                  onBlur={(e) => touchField("message", e.target.value.trim())}
                  className={fieldErrors.message ? "border-destructive" : ""}
                />
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
        {label}<span className="text-destructive ml-0.5">*</span>
      </label>
      {children}
      {error && <p className="text-xs text-destructive font-bold">{error}</p>}
    </div>
  )
}
