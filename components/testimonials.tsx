import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Irvine, CA",
    rating: 5,
    text: "Triton replaced my broken spring quickly and cleanly. The technician was professional, explained everything, and had it fixed in under an hour. Highly recommend!",
    service: "Spring Replacement",
  },
  {
    name: "James T.",
    location: "Anaheim, CA",
    rating: 5,
    text: "I needed a full new door installed and these guys were amazing. The install was clean, fast, and the door looks fantastic. Great value for the quality.",
    service: "New Door Installation",
  },
  {
    name: "Linda K.",
    location: "Huntington Beach, CA",
    rating: 5,
    text: "My garage door opener stopped working and Triton got it sorted out fast. Showed up when they said they would and the price was exactly what they quoted. Will use again.",
    service: "Opener Services",
  },
  {
    name: "David R.",
    location: "Newport Beach, CA",
    rating: 5,
    text: "Had some rollers and cables replaced after my door started making noise. Quick turnaround and everything runs smooth now. Fair price too.",
    service: "Garage Door Repair",
  },
  {
    name: "Maria G.",
    location: "Santa Ana, CA",
    rating: 5,
    text: "Very honest company. They told me exactly what needed to be fixed and didn't try to upsell me on things I didn't need. Transparent pricing was a huge plus.",
    service: "Garage Door Repair",
  },
  {
    name: "Tom W.",
    location: "Fullerton, CA",
    rating: 5,
    text: "Had my opener upgraded to a smart system. Works perfectly with my phone now. The installer was knowledgeable and took the time to walk me through the app.",
    service: "Opener Services",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted"}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl font-bold text-muted-foreground text-pretty">
            Don't just take our word for it. Hear from homeowners who've
            experienced our service firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-xl bg-card border border-border p-6"
            >
              <StarRating rating={t.rating} />
              <p className="text-foreground text-lg font-bold leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground text-base">{t.name}</p>
                  <p className="text-sm font-bold text-muted-foreground">{t.location}</p>
                </div>
                <span className="text-sm text-accent font-bold bg-secondary px-2 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg font-bold">
            Rated{" "}
            <span className="font-semibold text-foreground">4.9 out of 5</span>{" "}
            based on 500+ verified reviews
          </p>
        </div>
      </div>
    </section>
  )
}
