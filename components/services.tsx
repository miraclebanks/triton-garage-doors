import { Settings, DoorOpen, Gauge, Cog, AlertTriangle } from "lucide-react"

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
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="py-16 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-foreground">
              Our Services
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            From a broken spring to a full new door — we handle it all, on time and on budget.
          </p>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group grid grid-cols-[3rem_1fr] lg:grid-cols-[6rem_1fr_1fr] gap-6 lg:gap-12 py-8 border-b border-border hover:bg-secondary/30 transition-colors px-2 -mx-2"
            >
              {/* Number */}
              <div className="flex items-start pt-1">
                <span className="text-xs font-bold text-accent/60 tabular-nums tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title + icon */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-10 w-10 rounded bg-primary flex items-center justify-center group-hover:bg-accent/90 transition-colors mt-0.5">
                  <service.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-foreground uppercase leading-tight mt-1.5">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm col-start-2 lg:col-start-3 lg:mt-1.5 pl-14 lg:pl-0">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom padding */}
        <div className="py-8" />
      </div>
    </section>
  )
}
