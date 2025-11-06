"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import BlurText from "@/components/TextAnimations/BlurText/BlurText.jsx"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // ✅ Fix: generate sparkles only on the client
  const [sparkles, setSparkles] = useState<{ left: string; top: string; delay: string }[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }))
    setSparkles(generated)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--ivory)] via-[var(--blush)] to-[var(--gold)]"
    >
      {/* Sparkle background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[var(--gold)] rounded-full sparkle"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 shimmer opacity-30" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border-2 border-[var(--gold)]">
          <Sparkles className="w-5 h-5 text-[var(--gold)]" />
          <span className="text-sm font-medium text-[var(--black)]">
            May 18–21, 2026 • Vancouver, BC
          </span>
        </div>

        {/* Animated Heading */}
        <BlurText
  text="The Kyla Turns 40 Experience"
  delay={250} // slower stagger between words (300ms)
  stepDuration={0.7} // smoother word fade duration
  animateBy="words"
  direction="top"
  className="font-serif text-6xl md:text-8xl font-bold text-[var(--black)] text-balance lg:text-9xl mb-6 text-center justify-center"
/>

        <p className="text-xl md:text-2xl text-[var(--black)]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join me for a few unforgettable days of fun, laughter, and memories in beautiful Vancouver.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("rsvp")}
            className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--black)] font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            RSVP Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("itinerary")}
            className="bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-[var(--gold)] text-[var(--black)] font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            View Itinerary
          </Button>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float">
          <div className="w-6 h-10 border-2 border-[var(--gold)] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[var(--gold)] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
