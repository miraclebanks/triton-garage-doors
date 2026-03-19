import { CreditCard, Smartphone } from "lucide-react"

const methods = [
  {
    icon: Smartphone,
    name: "Zelle",
    detail: "Fast & free bank transfer",
    color: "bg-[oklch(0.45_0.20_290)]",
  },
  {
    icon: CreditCard,
    name: "Credit Card",
    detail: "Visa, Mastercard, Amex, Discover",
    color: "bg-[oklch(0.38_0.14_258)]",
  },
]

export function Payment() {
  return (
    <section className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-2">
              Easy Payment
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter uppercase text-foreground">
              We Accept
            </h2>
            <p className="mt-3 text-lg font-bold text-muted-foreground max-w-sm">
              Pay the way that works best for you. No hidden fees, no surprises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {methods.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-5 bg-card border-2 border-border rounded-xl px-7 py-5 min-w-[220px]"
              >
                <div className={`h-12 w-12 rounded-lg ${m.color} flex items-center justify-center shrink-0`}>
                  <m.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-foreground">{m.name}</p>
                  <p className="text-sm font-bold text-muted-foreground mt-0.5">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
