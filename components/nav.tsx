"use client"

import { useEffect, useState } from "react"

const links = [
  { label: "Itinerary", id: "itinerary" },
  { label: "Stay", id: "accommodations" },
  { label: "Explore", id: "things-to-do" },
  { label: "FAQ", id: "faq" },
  { label: "RSVP", id: "rsvp" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const hero = document.getElementById("hero")
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-black/100 backdrop-blur-md shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-center">
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                active === l.id
                  ? scrolled
                    ? "bg-[var(--gold)] text-black"
                    : "bg-black/80 text-[var(--gold)]"
                  : scrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-black/70 hover:text-black hover:bg-black/20"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}