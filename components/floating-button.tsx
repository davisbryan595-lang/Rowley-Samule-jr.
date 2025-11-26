"use client"

import { Phone } from "lucide-react"

export default function FloatingButton() {
  return (
    <a
      href="tel:724-982-8886"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-accent text-accent-foreground font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-accent/50 hover:scale-110 transition-all duration-300 group"
    >
      <Phone className="w-5 h-5 group-hover:animate-bounce" />
      <span className="hidden sm:inline">Call: 724-982-8886</span>
    </a>
  )
}
