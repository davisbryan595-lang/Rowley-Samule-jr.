"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import QuickIntro from "@/components/quick-intro"
import BooksCarousel from "@/components/books-carousel"
import MusicSection from "@/components/music-section"
import ArtGallery from "@/components/art-gallery"
import ContactSection from "@/components/contact-section"
import FloatingButton from "@/components/floating-button"
import FloatingNotes from "@/components/floating-notes"

export default function Home() {
  useEffect(() => {
    // Cursor trail effect
    const createCursorTrail = (e: MouseEvent) => {
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      trail.style.left = e.clientX + "px"
      trail.style.top = e.clientY + "px"
      document.body.appendChild(trail)

      setTimeout(() => trail.remove(), 1000)
    }

    window.addEventListener("mousemove", createCursorTrail)
    return () => window.removeEventListener("mousemove", createCursorTrail)
  }, [])

  return (
    <main className="relative w-full bg-gradient-to-b from-primary via-[#1a1f3a] to-primary">
      <FloatingNotes />
      <Hero />
      <QuickIntro />
      <BooksCarousel />
      <MusicSection />
      <ArtGallery />
      <ContactSection />
      <FloatingButton />
    </main>
  )
}
