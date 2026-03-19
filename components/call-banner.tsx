"use client"

import { Phone } from "lucide-react"
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
      className={`sticky z-40 bg-accent text-accent-foreground shadow-md transition-all duration-300 ${
        scrolled ? "top-12" : "top-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 gap-4">
          <span className="text-xl font-extrabold tracking-wide">
            Call Now
          </span>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="flex items-center gap-3 bg-accent-foreground text-accent font-bold rounded-lg px-5 py-2 text-lg tracking-wide hover:bg-accent-foreground/90 transition-colors shrink-0 shadow"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
