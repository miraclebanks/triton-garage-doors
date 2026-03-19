import { Header } from "@/components/header"
import { CallBanner } from "@/components/call-banner"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CallBanner />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
