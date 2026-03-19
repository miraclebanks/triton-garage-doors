"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How quickly can you respond to a service call?",
    answer:
      "For most repairs we can schedule an appointment within 1–2 business days. We'll always give you an estimated arrival window so you're not left waiting.",
  },
  {
    question: "How much does a garage door repair typically cost?",
    answer:
      "Costs vary depending on the type of repair needed. Minor fixes like sensor alignment or remote reprogramming can start around $75–$100, while spring replacements typically run $150–$350. Full door installations range widely based on the door style and material. We always provide a no-obligation estimate before any work begins.",
  },
  {
    question: "How long does a spring replacement take?",
    answer:
      "Most spring replacements take 1–2 hours. Torsion springs (above the door) are slightly more involved than extension springs (along the sides), but our technicians carry a wide inventory of springs so we can complete the job in a single visit in most cases.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Yes. All labor comes with a 90-day workmanship warranty. Parts are covered by the manufacturer's warranty, which typically ranges from 1 year to lifetime depending on the component. We'll explain the specific warranty for your repair before we start.",
  },
  {
    question: "Can you repair any brand of garage door opener?",
    answer:
      "We service all major brands including LiftMaster, Chamberlain, Genie, Craftsman, Ryobi, and more. Whether you need a repair, battery replacement, remote reprogramming, or a full upgrade to a Wi-Fi–enabled smart opener, we've got you covered.",
  },
  {
    question: "Is it safe to use my garage door if a spring is broken?",
    answer:
      "No — operating a garage door with a broken spring is dangerous and can cause further damage to the opener, cables, and door panels. If you suspect a broken spring, stop using the door immediately and give us a call.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Orange County, CA and surrounding cities. Call us or use the contact form to confirm coverage in your specific city — we'll let you know right away if we can get to you.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "For most repairs, yes — we'll need access to the garage and may have questions for you along the way. Just let us know your situation when you book.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="py-16 border-b border-primary-foreground/10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Got Questions</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-primary-foreground">
              FAQ
            </h2>
          </div>
          <p className="text-primary-foreground/50 max-w-xs text-sm leading-relaxed">
            Don't see your question? Give us a call and we'll answer it directly.
          </p>
        </div>

        {/* FAQ rows */}
        <div className="pb-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-primary-foreground/10">
              <button
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-bold text-accent/50 tabular-nums tracking-widest shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-bold uppercase tracking-tight text-primary-foreground group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                </div>
                <span className="shrink-0 h-6 w-6 rounded border border-primary-foreground/20 flex items-center justify-center mt-0.5">
                  {open === i
                    ? <Minus className="h-3.5 w-3.5 text-accent" />
                    : <Plus className="h-3.5 w-3.5 text-primary-foreground/60" />
                  }
                </span>
              </button>

              {open === i && (
                <div className="pl-10 pb-6 text-sm font-semibold text-primary-foreground/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
