"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, Sparkles } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // ✅ Generate sparkles only after hydration (client-side)
  const [sparkles, setSparkles] = useState<{ left: string; top: string; delay: string }[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }))
    setSparkles(generated)
  }, [])

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-br from-[var(--black)] to-[var(--black)]/90 text-white overflow-hidden">
      {/* Sparkle background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[var(--gold)] rounded-full sparkle"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-[var(--gold)] mx-auto mb-4" />
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Can't wait to celebrate with you!
          </h3>
          <p className="text-2xl text-[var(--gold)] font-semibold mb-2">#KylaTurns40</p>
          <p className="text-[var(--blush)] text-sm">May 18–21, 2026 • Vancouver, BC</p>
        </div>

        <div className="gold-divider max-w-md mx-auto mb-8" />

        <div className="space-y-2 text-sm text-white/70 mb-8">
          <p>© 2026 Kyla Turns 40</p>
          <p>Presented by Brazen Bull Creative</p>
        </div>

        <Button
          onClick={scrollToTop}
          size="lg"
          className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--black)] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <ArrowUp className="w-5 h-5 mr-2" />
          Back to Top
        </Button>
      </div>
    </footer>
  )
}
