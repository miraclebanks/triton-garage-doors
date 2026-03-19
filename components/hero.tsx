import { ArrowRight, PhoneCall, Star } from "lucide-react"
import { COMPANY } from "@/lib/config"

const stats = [
  { value: "8+", label: "Years in OC" },
  { value: "5,000+", label: "Jobs Completed" },
  { value: "4.9★", label: "Star Rating" },
  { value: "OC", label: "Family Owned" },
]

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">

      {/* Background texture lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 80px)",
      }} />

      {/* Orange accent bar left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-32">

        {/* Eyebrow */}
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">
          Orange County, CA · Est. 2016
        </p>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.9] uppercase">
          Garage
          <br />
          <span className="text-accent">Door</span>
          <br />
          Experts.
        </h1>

        {/* Divider */}
        <div className="mt-10 mb-8 h-px w-24 bg-accent" />

        {/* Subtext + CTAs side by side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
          <p className="text-xl lg:text-2xl font-bold text-primary-foreground/60 max-w-md leading-relaxed">
            Repair, installation, and opener services across Orange County.
            Certified techs, upfront pricing, satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:mb-0.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-3.5 rounded hover:bg-accent/90 transition-colors text-base uppercase tracking-wide"
            >
              Request Service
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded hover:bg-white/90 transition-colors text-base uppercase tracking-wide"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>

        {/* Star rating */}
        <div className="mt-6 flex items-center gap-2 text-sm text-accent">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
            ))}
          </div>
          <span>Rated 4.9/5 · 500+ reviews</span>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-accent">{s.value}</div>
              <div className="text-xs text-primary-foreground/50 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal bottom edge */}
      <div className="h-12 bg-background" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
    </section>
  )
}
