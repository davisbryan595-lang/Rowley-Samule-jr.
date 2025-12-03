"use client"

interface Song {
  id: number
  title: string
  description: string
  thumbnail: string
  link: string
}

const songs: Song[] = [
  {
    id: 1,
    title: "Mind Your Own Business",
    description: "Another original one from Rowley.",
    thumbnail: "https://img.youtube.com/vi/7inAZH9ZjAQ/maxresdefault.jpg",
    link: "https://youtu.be/7inAZH9ZjAQ?si=bpuF96bu4Y4vUsd0",
  },
  {
    id: 2,
    title: "Sleepless Nights",
    description: "This is a ballad that I wrote. Enjoy!",
    thumbnail: "https://img.youtube.com/vi/arlXYjpoEo4/maxresdefault.jpg",
    link: "https://youtu.be/arlXYjpoEo4?si=gkj8FjQRfAf6AxSD",
  },
  {
    id: 3,
    title: "Don't Bite the Hand",
    description: "This is an original song that I wrote. I hope that you enjoy it.",
    thumbnail: "https://img.youtube.com/vi/Nor8yCBeTtY/maxresdefault.jpg",
    link: "https://youtu.be/Nor8yCBeTtY?si=KMqIXwIdh7ATRwiq",
  },
  {
    id: 4,
    title: "Running Scared",
    description: "Filmed last week. Did some editing. Here is my newest video. \"Running Scared\" by Rowley Samuels, Jr.",
    thumbnail: "https://img.youtube.com/vi/EZLgpBKQwq4/maxresdefault.jpg",
    link: "https://youtu.be/EZLgpBKQwq4?si=2FbzfxvOT_C279DE",
  },
  {
    id: 5,
    title: "Special",
    description: "A fourth original!",
    thumbnail: "https://img.youtube.com/vi/O9yyVdcbDDw/maxresdefault.jpg",
    link: "https://youtu.be/O9yyVdcbDDw?si=c6D-zZNda3wMHn6h",
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
              className="group flex flex-col bg-secondary/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 border border-secondary/40"
            >
              <div className="relative h-40 overflow-hidden">
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
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {song.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{song.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
