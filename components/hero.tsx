import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, PhoneCall } from "lucide-react"
import { COMPANY } from "@/lib/config"

const stats = [
  { value: "8+", label: "Years Serving OC" },
  { value: "5,000+", label: "Jobs Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "OC", label: "Local & Family Owned" },
]

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Accent bar at top */}
      <div className="h-1 bg-accent w-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-sm bg-accent/10 border border-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Serving Orange County
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl leading-[1.05] text-balance">
              Garage Door
              <br />
              <span className="text-accent">Repair &amp;</span>
              <br />
              Installation
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-lg">
              Triton Garage Doors delivers fast, reliable service across Orange County.
              Certified techs, upfront pricing, and a satisfaction guarantee on every job.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#contact">
                  Request Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href={`tel:${COMPANY.phoneTel}`}>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>Rated 4.9/5 based on 500+ reviews</span>
            </div>
          </div>

          {/* Right: stats panel */}
          <div className="relative">
            <div className="rounded-2xl bg-primary text-primary-foreground p-8 lg:p-10 shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-6">
                Why Triton
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-accent pl-4">
                    <div className="text-3xl font-extrabold text-accent">{s.value}</div>
                    <div className="text-sm text-primary-foreground/70 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/10 space-y-3 text-sm text-primary-foreground/80">
                {[
                  "Certified, experienced technicians",
                  "No hidden fees — upfront pricing always",
                  "All major brands serviced",
                  "Parts & labor guaranteed",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative accent square */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-accent/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
