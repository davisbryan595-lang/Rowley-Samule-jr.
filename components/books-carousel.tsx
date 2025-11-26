"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Book {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}

const books: Book[] = [
  {
    id: 1,
    title: "Wind of Expression",
    subtitle: "Poetry that flows like the wind",
    image: "/poetry-book-cover-wind-expression-flowing-pages-ar.jpg",
    link: "https://www.amazon.com/stores/author/B019HQ5IX6",
  },
  {
    id: 2,
    title: "Stained Glass Window",
    subtitle: "Stories through colored light",
    image: "/poetry-book-cover-wind-expression-flowing-pages-ar.jpg",
    link: "https://www.amazon.com/stores/author/B019HQ5IX6",
  },
  {
    id: 3,
    title: "Moving Forward",
    subtitle: "A journey of transformation",
    image: "/poetry-book-cover-wind-expression-flowing-pages-ar.jpg",
    link: "https://www.amazon.com/stores/author/B019HQ5IX6",
  },
  {
    id: 4,
    title: "The Star Maker II",
    subtitle: "Coming Soon",
    image: "/poetry-book-cover-wind-expression-flowing-pages-ar.jpg",
    link: "https://www.amazon.com/stores/author/B019HQ5IX6",
  },
]

export default function BooksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="books" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center text-foreground mb-4">
          My Books
        </h2>
        <p className="text-center text-secondary mb-16 text-lg">Discover stories, poetry, and wisdom that inspire</p>

        {/* Carousel */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Books display */}
          <div className="w-full flex items-center justify-center gap-8 overflow-hidden">
            {books.map((book, idx) => {
              const distance = Math.abs(idx - currentIndex)
              const isVisible = distance <= 1
              const isCenter = idx === currentIndex

              return (
                <div
                  key={book.id}
                  className={`transition-all duration-500 flex flex-col items-center ${
                    isCenter
                      ? "scale-100 opacity-100"
                      : isVisible
                        ? "scale-75 opacity-50"
                        : "scale-50 opacity-0 absolute"
                  }`}
                >
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-lg blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="relative w-72 h-96 object-cover rounded-lg shadow-2xl group-hover:shadow-accent/50 group-hover:shadow-2xl transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mt-6 text-center">{book.title}</h3>
                  <p className="text-secondary text-center mt-2">{book.subtitle}</p>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-4 px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:scale-110 hover:bg-accent/90 transition-all duration-300">
                      Buy on Amazon →
                    </Button>
                  </a>
                </div>
              )
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {books.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-accent" : "w-2 bg-secondary hover:bg-accent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
