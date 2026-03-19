import { Settings, DoorOpen, Gauge, Cog, AlertTriangle, Zap } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Garage Door Repair",
    description:
      "Fast, reliable repairs for springs, cables, rollers, panels, and tracks. Most repairs completed same day.",
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
    title: "Emergency Repairs",
    description:
      "Stuck door at midnight? We offer 24/7 emergency dispatch across Orange County — no extra weekend fee.",
  },
  {
    icon: Zap,
    title: "Maintenance Plans",
    description:
      "Scheduled tune-ups that catch problems early, lubricate moving parts, and extend door lifespan by years.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header — left-aligned */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
            What We Do
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Services We Offer
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            From a broken spring to a full new door — our certified technicians handle it all,
            on time and on budget.
          </p>
        </div>

        {/* Service grid — 2 columns with numbered accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden shadow-sm">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group flex gap-5 p-7 bg-background hover:bg-secondary/40 transition-colors"
            >
              <div className="shrink-0 flex flex-col items-center gap-3">
                <span className="text-xs font-bold text-accent/50 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
