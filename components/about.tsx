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
    <section id="about" className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Stat bar */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-px mb-16 rounded-xl bg-primary-foreground/10 overflow-hidden text-center pb-2 sm:pb-0">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary px-6 py-6 sm:py-8 flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0">
              <div className="text-3xl sm:text-5xl font-extrabold text-accent w-32 sm:w-auto text-left sm:text-center">{s.value}</div>
              <div className="text-sm sm:text-base font-bold text-primary-foreground/60 sm:mt-1">{s.label}</div>
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
