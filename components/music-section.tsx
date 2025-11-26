"use client"

interface Song {
  id: number
  title: string
  thumbnail: string
  link: string
}

const songs: Song[] = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "https://img.youtube.com/vi/7inAZH9ZjAQ/maxresdefault.jpg",
    link: "https://youtu.be/7inAZH9ZjAQ?si=bpuF96bu4Y4vUsd0",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "https://img.youtube.com/vi/arlXYjpoEo4/maxresdefault.jpg",
    link: "https://youtu.be/arlXYjpoEo4?si=gkj8FjQRfAf6AxSD",
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: "https://img.youtube.com/vi/Nor8yCBeTtY/maxresdefault.jpg",
    link: "https://youtu.be/Nor8yCBeTtY?si=KMqIXwIdh7ATRwiq",
  },
]

export default function MusicSection() {
  return (
    <section id="music" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center text-foreground mb-4">
          Music & Lyrics
        </h2>
        <p className="text-center text-secondary mb-16 text-lg">
          Watch my performances and discover my musical journey
        </p>

        {/* Collaboration banner */}
        <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border-2 border-accent rounded-lg p-8 mb-16 text-center">
          <p className="text-xl text-foreground font-semibold">
            🎵 Seeking musicians & producers to set my lyrics to music
          </p>
          <p className="text-secondary mt-2">Let's collaborate and create something extraordinary together!</p>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song) => (
            <a
              key={song.id}
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer bg-secondary/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 h-40 border border-secondary/40 relative"
            >
              <img
                src={song.thumbnail || "/placeholder.svg"}
                alt={song.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <svg
                  className="w-16 h-16 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
