"use client"

import { Phone } from "lucide-react"
import { COMPANY } from "@/lib/config"

export function CallBanner() {
  return (
    <div className="sticky top-16 z-40 bg-accent text-accent-foreground shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 gap-4">
          <span className="hidden sm:block text-sm font-medium opacity-90">
            Serving Orange County — 24/7 Emergency Service Available
          </span>
          <span className="sm:hidden text-sm font-medium opacity-90">
            24/7 Emergency Service
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
