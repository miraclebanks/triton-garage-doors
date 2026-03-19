"use client"

import { useState } from "react"
import { Settings, DoorOpen, Gauge, Cog, AlertTriangle, ChevronDown } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Garage Door Repair",
    description:
      "Fast, reliable repairs for springs, cables, rollers, panels, and tracks. Most repairs completed in a single visit.",
  },
  {
    icon: DoorOpen,
    title: "New Door Installation",
    description:
      "Full installation of residential and commercial garage doors from top brands, measured and fitted to perfection.",
  },
  {
    icon: Gauge,
    title: "Opener Services",
    description:
      "Installation, repair, and smart-home integration of garage door openers from LiftMaster, Chamberlain, and more.",
  },
  {
    icon: Cog,
    title: "Spring Replacement",
    description:
      "Expert torsion and extension spring replacement using high-cycle, durable parts backed by a lifetime warranty.",
  },
  {
    icon: AlertTriangle,
    title: "Panel & Track Repair",
    description:
      "Dented panels, bent tracks, or misaligned doors? We restore your door to proper operation and appearance.",
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="pb-12 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-foreground">
              Our Services
            </h2>
          </div>
          <p className="text-muted-foreground text-lg font-bold leading-relaxed border border-border rounded px-4 py-3 bg-card max-w-xs">
            From a broken spring to a full new door, we handle it all, on time and on budget.
          </p>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={service.title}
                className="group border-b border-border hover:bg-secondary/30 transition-colors px-2 -mx-2"
              >
                {/* Mobile: tappable header + collapsible description */}
                <button
                  className="sm:hidden w-full flex items-center gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-xs font-bold text-accent/60 tabular-nums w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="shrink-0 h-8 w-8 rounded bg-primary flex items-center justify-center">
                    <service.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="flex-1 text-xs font-extrabold tracking-tight text-foreground uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    {service.title}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-accent shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile: collapsible description */}
                {isOpen && (
                  <p className="sm:hidden text-muted-foreground leading-relaxed text-lg font-bold pb-5 pl-[4.5rem]">
                    {service.description}
                  </p>
                )}

                {/* Desktop: always-visible 3-col row */}
                <div className="hidden sm:grid sm:grid-cols-[6rem_1fr_1fr] sm:gap-12 py-8">
                  <div className="flex items-start pt-1">
                    <span className="text-sm font-bold text-accent/60 tabular-nums tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-10 w-10 rounded bg-primary flex items-center justify-center group-hover:bg-accent/90 transition-colors mt-0.5">
                      <service.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground uppercase leading-tight mt-1.5">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg font-bold mt-1.5">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
