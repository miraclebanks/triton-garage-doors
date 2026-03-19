import { Phone } from "lucide-react"
import { COMPANY } from "@/lib/config"

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-accent text-accent-foreground shadow-lg border-t border-accent-foreground/10">
      <a
        href={`tel:${COMPANY.phoneTel}`}
        className="flex items-center justify-center gap-3 py-4 text-lg font-extrabold tracking-wide active:opacity-80"
      >
        <Phone className="h-5 w-5" />
        Call {COMPANY.phone}
      </a>
    </div>
  )
}
