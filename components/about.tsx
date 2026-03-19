import { CheckCircle2 } from "lucide-react"

const features = [
  "Over 8 years of industry experience",
  "Certified, experienced technicians",
  "Transparent pricing with no hidden fees",
  "Satisfaction guarantee on all work",
  "Prompt scheduling and reliable arrival windows",
  "Wide selection of quality parts and doors",
]

const stats = [
  { value: "8+", label: "Years in OC" },
  { value: "5,000+", label: "Jobs Done" },
  { value: "98%", label: "Satisfaction" },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Stat bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-16 rounded-xl bg-primary text-primary-foreground p-5 sm:p-8 text-center divide-x divide-primary-foreground/10">
          {stats.map((s) => (
            <div key={s.label} className="px-2 sm:px-4">
              <div className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-accent leading-tight">{s.value}</div>
              <div className="text-xs sm:text-base font-bold text-primary-foreground/60 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-foreground">
              Why Choose Triton
            </h2>
            <p className="mt-4 text-muted-foreground text-lg font-bold leading-relaxed">
              For over 8 years, Triton Garage Doors has been the go-to choice for garage
              door services across Orange County. Our certified technicians show up on time,
              give you a straight price before starting, and don't leave until the job is
              done right.
            </p>
            <p className="mt-4 text-muted-foreground text-lg font-bold leading-relaxed">
              We only use premium, manufacturer-approved parts and stand behind every
              repair with a full satisfaction guarantee. No pressure. No runaround.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 bg-card border border-border rounded-lg px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-lg font-bold text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
