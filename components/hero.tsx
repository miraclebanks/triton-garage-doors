import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Wrench } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Same-Day Service Available
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Expert Garage Door
            <br />
            Repair & Installation
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional garage door services you can trust. From quick repairs to full
            installations, our certified technicians deliver quality workmanship with a
            satisfaction guarantee.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#contact">
                Request Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="#services">View Our Services</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Fast Response</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Same-day service available
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Licensed & Insured</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fully certified professionals
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Wrench className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground">Quality Parts</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Premium materials used
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
