"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary pt-32 sm:pt-40 pb-20"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div
        className={`relative z-10 flex flex-col items-center justify-center gap-8 px-4 sm:px-6 text-center transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Logo with animation */}
        <div className="animate-pulse-gold mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2F588aaefea86d4f63b4a5ebc49f6bc013?format=webp&width=800"
            alt="The Works of Rowley Samuels Jr."
            className="w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground tracking-tight leading-tight">
          ROWLEY SAMUELS JR.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-secondary max-w-2xl font-light tracking-wide">
          Author • Poet • Songwriter • Storyteller
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Button
            onClick={() => scrollToSection("books")}
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            Explore My Books ↓
          </Button>
          <Button
            onClick={() => scrollToSection("music")}
            className="px-8 py-3 border-2 border-accent text-accent font-semibold text-lg rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
          >
            Listen to My Songs ↓
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
