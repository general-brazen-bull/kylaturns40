"use client"

import { useEffect, useState } from "react"

const TARGET = new Date("2026-05-18T17:00:00-07:00")

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | undefined>(undefined)

  useEffect(() => {
    setTime(getTimeLeft())
    const t = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(t)
  }, [])

  // Don't render anything until client has mounted — prevents hydration mismatch
  if (time === undefined) {
    return <div className="py-12 px-4 bg-[var(--black)]" style={{ minHeight: "160px" }} />
  }

  if (time === null) {
    return (
      <div className="text-center py-6 bg-[var(--black)]">
        <p className="font-serif text-3xl text-[var(--gold)]">The party has started! 🎉</p>
      </div>
    )
  }

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ]

  return (
    <div className="py-12 px-4 bg-[var(--black)]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif text-3xl text-[var(--gold)] tracking-widest mb-6 opacity-80">
          Until the Welcome Party
        </p>
        <div className="flex justify-center gap-4 md:gap-8">
          {units.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-serif text-5xl md:text-7xl font-bold text-white tabular-nums leading-none">
                {pad(value)}
              </span>
              <span className="mt-3 text-xs uppercase tracking-widest text-[var(--gold)]/100 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-white/70 text-sm tracking-wide">
          May 18, 2026 · 5:00 PM · Vancouver, BC
        </p>
      </div>
    </div>
  )
}