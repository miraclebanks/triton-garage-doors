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
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt="Triton Garage Doors"
              className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className={`items-center gap-8 ${scrolled ? "hidden" : "hidden md:flex"}`}>
            {["Services", "About", /* "Reviews", */ "Contact"].map((item) => (
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
            <a
              href="#contact"
              className="bg-accent text-accent-foreground text-[1.05rem] font-bold px-4 py-2 rounded hover:bg-accent/90 transition-colors"
            >
              Book Service
            </a>
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
              {["Services", "About", /* "Reviews", */ "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[1.05rem] font-bold text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-fit bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded hover:bg-accent/90 transition-colors"
              >
                Book Service
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
