import Link from "next/link"
import { COMPANY } from "@/lib/config"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <svg
                  className="h-6 w-6 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Triton Garage Doors</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Professional garage door repair and installation services. Trusted by
              homeowners in Orange County for over 8 years.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.email}</li>
              <li>Mon-Fri 7am-7pm</li>
              <li>Sat 8am-5pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Triton Garage Doors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
