"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What do I need to prepare for a garage door repair or installation?",
    answer:
      "We always request that any items, (furniture, cars, workout equipment, bikes, storage, etc.) be moved completely out or away from the door if possible. Most repairs require our technicians to have access to the entirety of the door and tracks. In most cases like a broken spring you may be unable to do this, if this is the case please let us know so that we can anticipate and plan accordingly when coming to the job.",
  },
  {
    question: "How quickly can you respond to a service call?",
    answer:
      "For most repairs we can schedule an appointment within 1–2 business days. We'll always give you an estimated arrival window so you're not left waiting.",
  },
  {
    question: "How much does a garage door repair typically cost?",
    answer:
      "Costs will vary depending on the type of repair needed, but will be discussed either in person or over the phone prior to the start of the job. We usually have an idea or know exactly the cost based on the conversation or information provided prior. Anything once we are on-site will be discussed on a case by case basis and nothing will ever be added on without the approval of the homeowner first.",
  },
  {
    question: "How long does a spring replacement take?",
    answer:
      "Most spring replacements take 1–2 hours. Torsion springs (above the door) are slightly more involved than extension springs (along the sides), but our technicians will be able to assess what spring size is needed either over the phone or from a single picture so we can complete the job in a single visit in most cases.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Most new installs of hinges, springs, cables, rollers, etc. come with a 3-year warranty from us and for motors we provide a 3-year warranty as well as whatever warranty is provided by the manufacturer. New garage doors come with a 5-year warranty. Most repairs do not come with a warranty, but in specific cases they can.",
  },
  {
    question: "Can you repair any brand of garage door opener?",
    answer:
      "While we service all major brands of garage door openers, if the unit is too old we may not be able to get the parts required to repair it. It is specific to the issue the motor is having, if it is a belt or chain those can usually be replaced. However, if it is a motherboard or an internal component then we may not be able to find the associated part. If this is the case then the next step forward is to upgrade to a new unit.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Orange County, CA and surrounding cities. Call us or use the contact form to confirm coverage in your specific city and we'll let you know right away.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "For most repairs, yes. We'll need access to the garage and may have questions for you along the way. Just let us know your situation when you book and we will be able to accommodate you.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="pb-12 border-b border-primary-foreground/10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Got Questions</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase text-primary-foreground">
              FAQ
            </h2>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed border border-primary-foreground/20 rounded px-4 py-3 bg-primary-foreground/5 max-w-xs">
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
                <div className="pb-6 text-xl font-semibold text-primary-foreground/70 leading-relaxed">
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
