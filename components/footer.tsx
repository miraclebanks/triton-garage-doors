import Link from "next/link"
import { COMPANY } from "@/lib/config"

const links = ["Services", "About", /* "Reviews", */ "FAQ", "Contact"]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="py-14 border-b border-primary-foreground/10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">

          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.svg" alt="Triton Garage Doors" className="h-10" style={{ width: "auto" }} />
            </div>
            <p className="text-primary-foreground/50 text-sm max-w-sm leading-relaxed">
              Garage door repair and installation across Orange County, CA. Trusted by homeowners for over 8 years.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-accent/90 transition-colors rounded self-end"
          >
            Book Service
          </a>
        </div>

        {/* Bottom row */}
        <div className="pt-8 pb-24 sm:pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {links.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Contact + copyright */}
          <div className="flex flex-col sm:items-end gap-1 text-sm font-bold text-primary-foreground/40">
            <span>{COMPANY.email}</span>
            <span>&copy; {new Date().getFullYear()} Triton Garage Doors. All rights reserved.</span>
            <a
              href="https://www.linkedin.com/in/miraclebanks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/25 hover:text-primary-foreground/50 transition-colors font-normal text-xs"
            >
              Powered by Miracles♥
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
