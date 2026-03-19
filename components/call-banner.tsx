"use client"

import { Phone, Mail, Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { COMPANY } from "@/lib/config"
import { useState, useEffect } from "react"

export function CallBanner() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`sticky z-40 bg-secondary border-b border-border shadow-sm transition-all duration-300 ${
        scrolled ? "top-12" : "top-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Trust signals */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-secondary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" />
              4.9 Rating · 500+ Reviews
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Serving Orange County
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Mon–Fri 7am–5pm
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center gap-2 bg-accent text-accent-foreground font-bold rounded-lg px-5 py-2 text-base tracking-wide hover:bg-accent/90 transition-colors shadow"
            >
              <Phone className="h-4 w-4 shrink-0" />
              Call Now
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 bg-card border-2 border-border text-foreground font-bold rounded-lg px-5 py-2 text-base tracking-wide hover:border-accent hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4 shrink-0" />
              Email Us
            </a>
          </div>

          {/* Right: 8+ years */}
          <div className="hidden lg:block text-sm font-medium text-secondary-foreground/70 text-right">
            8+ Years in Orange County
          </div>

        </div>
      </div>
    </div>
  )
}
