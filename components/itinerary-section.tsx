import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, AlertCircle } from "lucide-react"

const events = [
  {
    date: "May 18",
    day: "Monday",
    items: [
      {
        time: "5 PM",
        title: "Welcome Party",
        location: "Kyla's House",
        description: "Tiki theme, tiki cocktails, costume contest",
        icon: "🌺",
      },
    ],
  },
  {
    date: "May 19",
    day: "Tuesday",
    items: [
      {
        time: "11 AM",
        title: "Brunch",
        location: "Location TBD",
        description: "",
        icon: "🥂",
      },
      {
        time: "6 PM",
        title: "Steakhouse Dinner",
        location: "Location TBD",
        description: "RSVP early as seating is limited",
        icon: "🥩",
        alert: true,
      },
    ],
  },
  {
    date: "May 20",
    day: "Wednesday",
    items: [
      {
        time: "2 PM - 6 PM",
        title: "Birthday Party",
        location: "GoodCo (965 Granville St)",
        description: "",
        icon: "🎉",
      },
      {
        time: "7 PM - 11 PM",
        title: "Luxury Yacht Charter",
        location: "The Marina (1601 Bayshore Dr)",
        description: "DO NOT BE LATE",
        icon: "🛥️",
        alert: true,
      },
    ],
  },
  {
    date: "May 21",
    day: "Thursday",
    items: [
      {
        time: "10 AM",
        title: "Hangover Brunch & Paul's Birthday Toast",
        location: "Deep Blue Distilleries",
        description: "",
        icon: "🍳",
      },
      {
        time: "6 PM",
        title: "Sushi Dinner",
        location: "Location TBD",
        description: "",
        icon: "🍣",
      },
    ],
  },
]

export function ItinerarySection() {
  return (
    <section id="itinerary" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--black)] mb-4">
            Birthday Week Itinerary
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p className="text-lg text-[var(--black)]/70 max-w-2xl mx-auto leading-relaxed">
            You're welcome to come for as much or as little of the birthday week as you'd like. The main celebration
            will be <span className="font-semibold text-[var(--gold)]">May 20, 2026</span>.
          </p>
        </div>

        <div className="space-y-8">
          {events.map((day, idx) => (
            <Card
              key={idx}
              className="border-2 border-[var(--gold)]/20 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-r from-[var(--gold)]/10 to-[var(--blush)]/10 border-b-2 border-[var(--gold)]/20">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center w-20 h-20 bg-[var(--gold)] rounded-xl text-[var(--black)]">
                    <span className="text-sm font-medium">{day.day}</span>
                    <span className="text-2xl font-bold">{day.date.split(" ")[1]}</span>
                  </div>
                  <CardTitle className="font-serif text-3xl text-[var(--black)]">{day.date}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {day.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-[var(--ivory)] to-white hover:from-[var(--blush)]/10 hover:to-[var(--gold)]/10 transition-colors"
                    >
                      <div className="text-4xl flex-shrink-0">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-serif text-xl font-semibold text-[var(--black)]">{item.title}</h3>
                          <div className="flex items-center gap-1 text-[var(--gold)] font-medium whitespace-nowrap">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{item.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[var(--black)]/60 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        {item.description && (
                          <div
                            className={`flex items-start gap-2 text-sm ${item.alert ? "text-[var(--gold)] font-semibold" : "text-[var(--black)]/70"}`}
                          >
                            {item.alert && <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                            <span>{item.description}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
