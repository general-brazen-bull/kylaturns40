"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const events = [
  "May 18 - Welcome Party (5 PM)",
  "May 19 - Brunch (11 AM)",
  "May 19 - Steakhouse Dinner (6 PM)",
  "May 20 - Birthday Party at GoodCo (2 PM - 6 PM)",
  "May 20 - Luxury Yacht Charter (7 PM - 11 PM)",
  "May 21 - Hangover Brunch & Toast (10 AM)",
  "May 21 - Sushi Dinner (6 PM)",
]

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "df59dfc9-0bfd-4557-9c98-1b4d2f9df51e") // ✅ your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()
    setLoading(false)

    if (data.success) {
      setSubmitted(true)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
      e.currentTarget.reset()
    } else {
      alert("Something went wrong. Please try again later.")
      console.error("Web3Forms error:", data)
    }
  }

  return (
    <section id="rsvp" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                backgroundColor: ["var(--gold)", "var(--blush)", "var(--ivory)"][Math.floor(Math.random() * 3)],
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-3xl mx-auto relative z-0">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--black)] mb-4">RSVP</h2>
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p className="text-lg text-[var(--black)]/70 max-w-2xl mx-auto leading-relaxed">
            Let us know if you'll be joining the celebration — we can't wait to see you!
          </p>
        </div>

        {!submitted ? (
          <Card className="border-2 border-[var(--gold)]/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[var(--gold)]/10 to-[var(--blush)]/10">
              <CardTitle className="font-serif text-2xl text-[var(--black)]">Celebration RSVP</CardTitle>
              <CardDescription>Please fill out all fields so we can plan accordingly</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="(123) 456-7890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guest">Bringing a guest?</Label>
                  <Input id="guest" name="guest" placeholder="Guest name and age (if yes)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="children">Bringing children?</Label>
                  <Input id="children" name="children" placeholder="How many and their ages (if yes)" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="arrival">Arrival Date</Label>
                    <Input id="arrival" name="arrival" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departure">Departure Date</Label>
                    <Input id="departure" name="departure" type="date" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Which events will you attend? *</Label>
                  <div className="space-y-3 pl-2">
                    {events.map((event, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Checkbox id={`event-${idx}`} name="events" value={event} />
                        <label htmlFor={`event-${idx}`} className="text-sm leading-relaxed cursor-pointer">
                          {event}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accessibility">Accessibility Needs</Label>
                  <Textarea
                    id="accessibility"
                    name="accessibility"
                    placeholder="Any accessibility requirements we should know about?"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietary">Allergies or Dietary Restrictions</Label>
                  <Textarea
                    id="dietary"
                    name="dietary"
                    placeholder="Please list any allergies or dietary restrictions"
                    rows={3}
                  />
                </div>

                <div className="space-y-3 p-4 bg-gradient-to-r from-[var(--gold)]/10 to-[var(--blush)]/10 rounded-lg border-2 border-[var(--gold)]/20">
                  <div className="flex items-start gap-3">
                    <Checkbox id="promise" name="promise" required />
                    <label htmlFor="promise" className="text-sm font-medium leading-relaxed cursor-pointer">
                      Do you solemnly swear to have the best time ever? *
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--black)] font-semibold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  {loading ? "Sending..." : "Submit RSVP"}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-[var(--gold)] shadow-xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--blush)]/20">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="font-serif text-4xl font-bold text-[var(--black)] mb-4">See you in Vancouver!</h3>
              <p className="text-lg text-[var(--black)]/70 mb-6">
                Your RSVP has been received. We can't wait to celebrate with you!
              </p>
              <p className="text-sm text-[var(--black)]/60">
                You'll receive a confirmation email shortly with more details.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
