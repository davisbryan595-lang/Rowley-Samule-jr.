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
    title: "My First Song",
    thumbnail: "/music-video-thumbnail-musician-singer-recording.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Lyrical Journey",
    thumbnail: "/music-video-thumbnail-songwriter-performance-stage.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Harmony",
    thumbnail: "/music-video-thumbnail-concert-live-performance.jpg",
    link: "#",
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

        {/* YouTube embed placeholder and song cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* YouTube placeholder */}
          <div className="flex items-center justify-center bg-secondary/20 rounded-lg h-96 overflow-hidden group cursor-pointer border border-secondary/30">
            <div className="relative w-full h-full bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.175h-15.23c-2.3 0-4.165 1.865-4.165 4.165v9.12c0 2.3 1.865 4.165 4.165 4.165h15.23c2.3 0 4.165-1.865 4.165-4.165v-9.12c0-2.3-1.865-4.165-4.165-4.165zm-8.34 10.995v-6.66l5.73 3.33-5.73 3.33z" />
                  </svg>
                  <p className="text-foreground font-semibold">Watch on YouTube</p>
                </div>
              </div>
            </div>
          </div>

          {/* Songs grid */}
          <div className="space-y-6">
            {songs.map((song) => (
              <div
                key={song.id}
                className="group cursor-pointer bg-secondary/20 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 border border-secondary/30"
              >
                <div className="flex gap-4">
                  <img
                    src={song.thumbnail || "/placeholder.svg"}
                    alt={song.title}
                    className="w-24 h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-secondary text-sm mt-1">Music Video</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All songs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song) => (
            <div
              key={song.id}
              className="group cursor-pointer bg-secondary/20 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 h-40 border border-secondary/30"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
