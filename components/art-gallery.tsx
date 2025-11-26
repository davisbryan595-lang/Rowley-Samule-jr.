"use client"

interface ArtWork {
  id: number
  image: string
  title: string
}

const artworks: ArtWork[] = [
  {
    id: 1,
    title: "Expression 1",
    image: "/abstract-art-painting-colorful-creative-modern.jpg",
  },
  {
    id: 2,
    title: "Expression 2",
    image: "/artistic-illustration-creative-canvas-abstract-des.jpg",
  },
  {
    id: 3,
    title: "Expression 3",
    image: "/visual-art-painting-beautiful-creative-artwork.jpg",
  },
  {
    id: 4,
    title: "Expression 4",
    image: "/gallery-art-modern-creative-illustration-visual.jpg",
  },
  {
    id: 5,
    title: "Expression 5",
    image: "/artistic-canvas-painting-contemporary-creative-art.jpg",
  },
  {
    id: 6,
    title: "Expression 6",
    image: "/abstract-art-design-creative-visual-masterpiece.jpg",
  },
  {
    id: 7,
    title: "Expression 7",
    image: "/colorful-painting-artistic-expression-creative-wor.jpg",
  },
  {
    id: 8,
    title: "Expression 8",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ArtGallery() {
  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center text-foreground mb-4">
          Art & Visual Works
        </h2>
        <p className="text-center text-secondary mb-16 text-lg">A visual journey through creativity and imagination</p>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((art, idx) => (
            <div
              key={art.id}
              className={`group cursor-pointer relative overflow-hidden rounded-lg h-80 ${
                idx % 4 === 0 ? "sm:col-span-2 sm:row-span-2 h-full" : ""
              } hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300`}
            >
              <img
                src={art.image || "/placeholder.svg"}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-lg font-semibold text-foreground">{art.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
