import { CreditCard, Smartphone, Building2 } from "lucide-react"

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
{
    icon: Building2,
    name: "Debit Card",
    detail: "All major debit cards",
    color: "bg-[oklch(0.40_0.12_220)]",
  },
]

export function Payment() {
  return (
    <section className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-2">
              Easy Payment
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter uppercase text-foreground">
              We Accept
            </h2>
            <p className="mt-3 text-lg font-bold text-muted-foreground max-w-sm">
              Pay the way that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {methods.map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center text-center gap-2 bg-card border-2 border-border rounded-xl px-3 py-5 h-full"
              >
                <div className={`h-12 w-12 rounded-lg ${m.color} flex items-center justify-center shrink-0`}>
                  <m.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-base lg:text-lg font-extrabold text-foreground leading-tight">{m.name}</p>
                <p className="text-xs lg:text-sm font-bold text-muted-foreground leading-snug">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
