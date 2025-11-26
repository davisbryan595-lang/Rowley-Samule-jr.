"use client"

export default function QuickIntro() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 animate-slide-in">
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed font-light">
            Pennsylvania author and musician sharing life through poetry, fiction, and song. Creator of{" "}
            <span className="text-accent font-semibold">Wind of Expression</span>,{" "}
            <span className="text-accent font-semibold">Stained Glass Window</span>,{" "}
            <span className="text-accent font-semibold">Moving Forward</span>, and the upcoming{" "}
            <span className="text-accent font-semibold">The Star Maker II</span>.
          </p>
          <p className="text-lg text-secondary font-light">
            Seeking collaborators to bring my lyrics to life and create something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  )
}
