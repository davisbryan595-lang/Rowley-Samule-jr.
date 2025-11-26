"use client"

import { useEffect, useState } from "react"

interface FloatingNote {
  id: number
  delay: number
  left: number
  duration: number
}

export default function FloatingNotes() {
  const [notes, setNotes] = useState<FloatingNote[]>([])

  useEffect(() => {
    const newNotes: FloatingNote[] = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      delay: i * 2,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 10,
    }))
    setNotes(newNotes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {notes.map((note) => (
        <div
          key={note.id}
          className="absolute animate-float-up text-accent opacity-20 text-4xl"
          style={{
            left: `${note.left}%`,
            bottom: "-50px",
            animation: `float-up ${note.duration}s linear infinite`,
            animationDelay: `${note.delay}s`,
          }}
        >
          ♪
        </div>
      ))}
    </div>
  )
}
