import { CheckCircle2 } from "lucide-react"

const features = [
  "Over 8 years of industry experience",
  "Fully licensed and insured technicians",
  "Transparent pricing with no hidden fees",
  "Satisfaction guarantee on all work",
  "Same-day service for emergencies",
  "Wide selection of quality parts and doors",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Choose Triton Garage Doors?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
              For over 8 years, Triton Garage Doors has been the trusted choice for garage
              door services in Orange County, CA. Our team of certified technicians
              brings expertise, reliability, and a commitment to excellence to
              every job.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We understand that your garage door is an essential part of your home
              security and daily convenience. That's why we use only premium parts
              and back our work with a comprehensive satisfaction guarantee.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-foreground">8+</div>
                  <div className="text-lg text-muted-foreground mt-2">
                    Years in Orange County
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-foreground">5000+</div>
                      <div className="text-sm text-muted-foreground">Jobs Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">98%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
