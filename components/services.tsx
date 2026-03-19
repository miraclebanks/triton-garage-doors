import { Settings, DoorOpen, Gauge, Cog, AlertTriangle, Zap } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Garage Door Repair",
    description:
      "Fast and reliable repairs for all types of garage doors. We fix springs, cables, rollers, and more.",
  },
  {
    icon: DoorOpen,
    title: "New Door Installation",
    description:
      "Professional installation of residential and commercial garage doors from leading brands.",
  },
  {
    icon: Gauge,
    title: "Opener Services",
    description:
      "Installation, repair, and maintenance of garage door openers including smart home integration.",
  },
  {
    icon: Cog,
    title: "Spring Replacement",
    description:
      "Expert replacement of torsion and extension springs with high-quality, durable parts.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description:
      "24/7 emergency service for urgent garage door issues. We're here when you need us most.",
  },
  {
    icon: Zap,
    title: "Maintenance Plans",
    description:
      "Regular maintenance to extend the life of your garage door and prevent costly repairs.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Comprehensive garage door solutions for residential and commercial
            properties. Quality service you can depend on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-accent/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
