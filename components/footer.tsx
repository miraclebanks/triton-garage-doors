import Link from "next/link"
import { COMPANY } from "@/lib/config"

const links = ["Services", "About", "Reviews", "FAQ", "Contact"]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="py-14 border-b border-primary-foreground/10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 flex items-center justify-center rounded bg-accent">
                <svg className="h-5 w-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Triton <span className="text-[oklch(0.72_0.08_52)]">Garage Doors</span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm max-w-sm leading-relaxed">
              Garage door repair and installation across Orange County, CA. Trusted by homeowners for over 8 years.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-accent/90 transition-colors rounded self-end"
          >
            Book Service
          </Link>
        </div>

        {/* Bottom row */}
        <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {links.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Contact + copyright */}
          <div className="flex flex-col sm:items-end gap-1 text-xs text-primary-foreground/40">
            <span>{COMPANY.phone} · {COMPANY.email}</span>
            <span>&copy; {new Date().getFullYear()} Triton Garage Doors. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
