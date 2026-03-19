"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"

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
    <section id="contact" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get a Free Quote
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Fill out the form below and we'll get back to you within 24 hours with
            a detailed estimate for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri 7am-7pm, Sat 8am-5pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@progarage.com</p>
                  <p className="text-sm text-muted-foreground">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Service Area</h3>
                  <p className="text-muted-foreground">
                    Serving Orange County, CA
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Including surrounding cities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Emergency Service</h3>
                  <p className="text-muted-foreground">24/7 Available</p>
                  <p className="text-sm text-muted-foreground">
                    For urgent garage door issues
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {isSubmitted ? (
              <div className="rounded-xl bg-background border border-border p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We've received your request and will contact you within 24 hours
                  with a free quote.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false)
                    setService("")
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl bg-background border border-border p-6 sm:p-8 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-foreground"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-foreground"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-foreground"
                  >
                    Service Needed
                  </label>
                  <Select
                    name="service"
                    required
                    value={service}
                    onValueChange={setService}
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Garage Door Repair</SelectItem>
                      <SelectItem value="installation">
                        New Door Installation
                      </SelectItem>
                      <SelectItem value="opener">Opener Services</SelectItem>
                      <SelectItem value="spring">Spring Replacement</SelectItem>
                      <SelectItem value="emergency">Emergency Repair</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="address"
                    className="text-sm font-medium text-foreground"
                  >
                    Service Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="123 Main St, City, State"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Describe Your Issue
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe the problem you're experiencing with your garage door..."
                    rows={4}
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting || !service}
                >
                  {isSubmitting ? "Submitting..." : "Get Free Quote"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to be contacted about your
                  service request. We respect your privacy and never share your
                  information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
