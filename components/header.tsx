"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { COMPANY } from "@/lib/config"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-primary text-primary-foreground transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-12" : "h-16"}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`flex items-center justify-center rounded bg-accent transition-all duration-300 ${scrolled ? "h-7 w-7" : "h-9 w-9"}`}>
              <svg className={`text-accent-foreground transition-all duration-300 ${scrolled ? "h-4 w-4" : "h-5 w-5"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className={`font-extrabold tracking-tight transition-all duration-300 ${scrolled ? "text-base" : "text-lg"}`}>
              Triton <span className="text-[oklch(0.88_0.08_240)]">Garage Doors</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={`items-center gap-8 ${scrolled ? "hidden" : "hidden md:flex"}`}>
            {["Services", "About", "Reviews", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[1.05rem] font-bold text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={scrolled ? "hidden" : "hidden md:flex items-center gap-3"}>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="bg-white text-primary text-[1.05rem] font-bold px-4 py-2 rounded hover:bg-white/90 transition-colors"
            >
              Call Now
            </a>
            <Link
              href="#contact"
              className="bg-accent text-accent-foreground text-[1.05rem] font-bold px-4 py-2 rounded hover:bg-accent/90 transition-colors"
            >
              Book Service
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`p-2 text-primary-foreground ${scrolled ? "block" : "md:hidden"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-4">
              {["Services", "About", "Reviews", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[1.05rem] font-bold text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-fit bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded hover:bg-accent/90 transition-colors"
              >
                Book Service
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
