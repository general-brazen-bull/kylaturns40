import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, AlertTriangle } from "lucide-react"

const hotels = [
  {
    name: "Fairmont Hotel Vancouver",
    description: "Downtown near luxury shopping (Dior, LV, Hermes). Older but upgraded; close to Skytrain.",
    price: "$$$",
    icon: "🏛️",
  },
  {
    name: "Fairmont Waterfront / Pacific Rim",
    description: "Share property at Canada Place with amazing views but expensive; Canada Line Skytrain nearby.",
    price: "$$$$",
    icon: "🌊",
  },
  {
    name: "JW Marriott / The Joseph",
    description: "Located at Parq Casino; higher-end yet more affordable than Fairmont; walkable to downtown.",
    price: "$$$",
    icon: "🎰",
  },
  {
    name: "Hampton Inn & Suites",
    description: "Across from BC Place; 10-minute walk to downtown; budget friendly.",
    price: "$$",
    icon: "🏨",
  },
  {
    name: "Wedgewood Hotel & Spa",
    description: "Best spa hotel in Vancouver; mid-range pricing.",
    price: "$$$",
    icon: "💆",
  },
  {
    name: "Rosedale on Robson",
    description: "Affordable and quiet; central and walkable.",
    price: "$$",
    icon: "🌹",
  },
]

export function AccommodationsSection() {
  return (
    <section id="accommodations" className="py-20 px-4 bg-gradient-to-br from-[var(--blush)]/20 to-[var(--ivory)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--black)] mb-4">Where to Stay</h2>
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p className="text-lg text-[var(--black)]/70 max-w-2xl mx-auto leading-relaxed">
            There are many lovely places to stay in Vancouver. You can also book through AirBNB or VRBO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hotels.map((hotel, idx) => (
            <Card
              key={idx}
              className="border-2 border-[var(--gold)]/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
            >
              <CardHeader>
                <div className="text-5xl mb-3">{hotel.icon}</div>
                <CardTitle className="font-serif text-xl text-[var(--black)]">{hotel.name}</CardTitle>
                <div className="flex items-center gap-2 text-[var(--gold)] font-semibold">
                  <DollarSign className="w-4 h-4" />
                  <span>{hotel.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--black)]/70 leading-relaxed">{hotel.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-[var(--gold)] bg-gradient-to-r from-[var(--gold)]/10 to-[var(--blush)]/10">
          <CardHeader>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-1" />
              <div>
                <CardTitle className="text-xl text-[var(--black)] mb-2">Safety Note</CardTitle>
                <CardDescription className="text-[var(--black)]/70 leading-relaxed">
                  Avoid East Hastings and Granville Entertainment District. If staying outside downtown, choose places
                  near SkyTrain stations for easy access.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
