import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can you respond to a service call?",
    answer:
      "We offer same-day service for most repairs and are available 24/7 for emergencies. For non-urgent jobs, we can typically schedule an appointment within 1–2 business days. We'll always give you an estimated arrival window so you're not left waiting.",
  },
  {
    question: "How much does a garage door repair typically cost?",
    answer:
      "Costs vary depending on the type of repair needed. Minor fixes like sensor alignment or remote reprogramming can start around $75–$100, while spring replacements typically run $150–$350. Full door installations range widely based on the door style and material. We always provide a free, no-obligation quote before any work begins.",
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
      "No — operating a garage door with a broken spring is dangerous and can cause further damage to the opener, cables, and door panels. If you suspect a broken spring, stop using the door immediately and call us. We offer emergency same-day service for exactly this situation.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Orange County, CA and surrounding cities. Call us or use the contact form to confirm coverage in your specific city — we'll let you know right away if we can get to you.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "For most repairs, yes — we'll need access to the garage and may have questions for you along the way. However, for routine maintenance visits on existing plans, some customers make alternative arrangements. Just let us know your situation when you book.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Got questions? We've answered the most common ones below. Don't see
            yours? Give us a call or send us a message.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="rounded-xl bg-background border border-border px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
