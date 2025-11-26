"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interest: "Books",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-center text-secondary mb-16 text-lg">
          Reach out for collaborations, inquiries, or just to say hello
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 rounded-lg p-8">
            <div>
              <label className="block text-foreground font-semibold mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-primary border-2 border-secondary rounded-lg text-foreground placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-primary border-2 border-secondary rounded-lg text-foreground placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">I'm interested in:</label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-3 bg-primary border-2 border-secondary rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option>Books</option>
                <option>Music Collaboration</option>
                <option>General Inquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-primary border-2 border-secondary rounded-lg text-foreground placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              Send Message
            </Button>
          </form>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-foreground">Contact Information</h3>
              <p className="text-secondary">Get in touch through any of these channels:</p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold">Email</p>
                  <a
                    href="mailto:samuelsrowley@gmail.com"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    samuelsrowley@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold">Phone</p>
                  <div className="space-y-1">
                    <a href="tel:724-347-3069" className="block text-secondary hover:text-accent transition-colors">
                      Home: 724-347-3069
                    </a>
                    <a href="tel:724-982-8886" className="block text-secondary hover:text-accent transition-colors">
                      Cell: 724-982-8886
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <p className="text-secondary">Farrell / Hermitage, PA</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="border-t border-secondary/30 pt-8">
              <p className="text-foreground font-semibold mb-4">Find me on:</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-secondary/20 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  📚 Amazon Author
                </a>
                <a
                  href="#"
                  className="p-3 bg-secondary/20 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  📺 YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-secondary/30 pt-8">
          <p className="text-secondary">
            © 2025 Rowley Samuels Jr. All rights reserved. | The Works of Rowley Samuels Jr. Author Company
          </p>
        </div>
      </div>
    </section>
  )
}
