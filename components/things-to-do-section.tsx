"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Trees, Building2, Trophy, Dices, ShoppingBag, UtensilsCrossed } from "lucide-react"

const highlights = [
  {
    name: "Tojo's Sushi",
    category: "Sushi",
    icon: "🍱",
  },
  {
    name: "The Eatery",
    category: "Japanese",
    icon: "🍜",
  },
  {
    name: "Gyu-Kaku Japanese BBQ",
    category: "BBQ",
    icon: "🔥",
  },
  {
    name: "Elisa Steakhouse",
    category: "Steakhouse",
    icon: "🥩",
  },
  {
    name: "Black + Blue",
    category: "Steakhouse",
    icon: "🍷",
  },
  {
    name: "Fanny Bay Oyster House",
    category: "Seafood",
    icon: "🦪",
  },
  {
    name: "The Shameful Tiki Lounge",
    category: "Cocktails",
    icon: "🍹",
  },
  {
    name: "Score on Davie",
    category: "Sports Bar",
    icon: "⚽",
  },
]

const restaurants = {
  Sushi: ["Tojo's", "Miku", "Minami", "Sushi Bar Maumi", "Octopus Garden"],
  Vietnamese: ["Phnom Penh", "Anh and Chi", "Lunch Lady", "Bao Bei"],
  Burgers: ["The Burger's Priest", "Vera's Burger Shack", "Five Guys", "White Spot"],
  "Vegan/Vegetarian": ["The Acorn", "Heirloom", "Meet on Main", "Virtuous Pie"],
  "Fried Chicken": ["Juke", "Downlow Chicken", "Hi-Five Chicken", "Duffin's Donuts"],
  "Pub Food": ["The Pint", "Steamworks", "Mahony & Sons", "The Blarney Stone"],
  Seafood: ["Blue Water Cafe", "Fanny Bay", "The Sandbar", "Ancora"],
  "Fine Dining": ["Hawksworth", "Boulevard", "Botanist", "Nightingale"],
  "Cocktail Bars": ["The Shameful Tiki", "Keefer Bar", "The Diamond", "Pourhouse"],
  Steakhouses: ["Elisa", "Black + Blue", "Gotham", "Hy's"],
  Brunch: ["Medina Cafe", "Jam Cafe", "Cafe Medina", "The Templeton"],
  Chinese: ["Bao Bei", "Kirin", "Dynasty", "Sun Sui Wah"],
  "Dim Sum": ["Sun Sui Wah", "Kirin", "Dynasty", "Pink Pearl"],
  Ramen: ["Jinya", "Hokkaido Ramen Santouka", "Marutama", "Kintaro"],
}

export function ThingsToDoSection() {
  return (
    <section id="things-to-do" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--black)] mb-4">
            Things to Do in Vancouver
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p className="text-lg text-[var(--black)]/70 max-w-2xl mx-auto leading-relaxed">
            Nature meets city — west-coast vibes, multicultural food, and walkable neighbourhoods.
          </p>
        </div>

        {/* Dining Highlights */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl font-semibold text-[var(--black)] mb-6 text-center">Top Dining Picks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((place, idx) => (
              <Card
                key={idx}
                className="border-2 border-[var(--gold)]/20 hover:border-[var(--gold)] transition-colors text-center"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-2">{place.icon}</div>
                  <h4 className="font-semibold text-[var(--black)] text-sm mb-1">{place.name}</h4>
                  <p className="text-xs text-[var(--black)]/60">{place.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="outdoor"
            className="border-2 border-[var(--gold)]/20 rounded-lg px-6 bg-gradient-to-r from-[var(--ivory)] to-white"
          >
            <AccordionTrigger className="hover:text-[var(--gold)] text-lg font-serif font-semibold">
              <div className="flex items-center gap-3">
                <Trees className="w-5 h-5 text-[var(--gold)]" />
                Outdoor Attractions
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[var(--black)]/70 leading-relaxed">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Stanley Park Seawall</strong> – Bike or walk the scenic waterfront path
                </li>
                <li>
                  <strong>Vancouver Aquarium</strong> – Marine life exhibits and conservation center
                </li>
                <li>
                  <strong>Granville Island Market</strong> – Artisan shops, food stalls, and waterfront views
                </li>
                <li>
                  <strong>Gastown and Steam Clock</strong> – Historic district with cobblestone streets
                </li>
                <li>
                  <strong>Queen Elizabeth Park</strong> – Beautiful gardens and city views
                </li>
                <li>
                  <strong>VanDusen Botanical Garden</strong> – Hedge maze and greenhouse
                </li>
                <li>
                  <strong>Capilano Suspension Bridge</strong> – 30 min from downtown, pricey but classic
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="museums"
            className="border-2 border-[var(--gold)]/20 rounded-lg px-6 bg-gradient-to-r from-[var(--ivory)] to-white"
          >
            <AccordionTrigger className="hover:text-[var(--gold)] text-lg font-serif font-semibold">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[var(--gold)]" />
                Museums and Galleries
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[var(--black)]/70 leading-relaxed">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Vancouver Art Gallery</strong> – Contemporary and historical art exhibitions
                </li>
                <li>
                  <strong>Science World</strong> – IMAX theater and interactive science exhibits
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="sports"
            className="border-2 border-[var(--gold)]/20 rounded-lg px-6 bg-gradient-to-r from-[var(--ivory)] to-white"
          >
            <AccordionTrigger className="hover:text-[var(--gold)] text-lg font-serif font-semibold">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-[var(--gold)]" />
                Live Sports
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[var(--black)]/70 leading-relaxed">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Whitecaps Soccer</strong> – MLS team at BC Place
                </li>
                <li>
                  <strong>Canadians Baseball</strong> – Minor league games
                </li>
                <li>
                  <strong>Warriors Lacrosse</strong> – Professional lacrosse
                </li>
                <li className="text-sm italic">Tickets available through Kyla</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="casinos"
            className="border-2 border-[var(--gold)]/20 rounded-lg px-6 bg-gradient-to-r from-[var(--ivory)] to-white"
          >
            <AccordionTrigger className="hover:text-[var(--gold)] text-lg font-serif font-semibold">
              <div className="flex items-center gap-3">
                <Dices className="w-5 h-5 text-[var(--gold)]" />
                Casinos
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[var(--black)]/70 leading-relaxed">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Hard Rock Coquitlam</strong> – Entertainment and gaming
                </li>
                <li>
                  <strong>River Rock Richmond</strong> – Biggest casino in the area
                </li>
                <li>
                  <strong>Parq Downtown</strong> – Liveliest atmosphere, walkable location
                </li>
                <li>
                  <strong>Grand Villa Burnaby</strong> – Local favorite
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="markets"
            className="border-2 border-[var(--gold)]/20 rounded-lg px-6 bg-gradient-to-r from-[var(--ivory)] to-white"
          >
            <AccordionTrigger className="hover:text-[var(--gold)] text-lg font-serif font-semibold">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[var(--gold)]" />
                Markets
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[var(--black)]/70 leading-relaxed">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Granville Island</strong> – Artisan market and food hall
                </li>
                <li>
                  <strong>Richmond Night Market</strong> – Asian street food and vendors
                </li>
                <li>
                  <strong>New Westminster Quay</strong> – Waterfront market
                </li>
                <li>
                  <strong>Lonsdale Quay</strong> – North Vancouver market with city views
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="restaurants"
            className="border-2 border-[var(--gold)]/20 rounded-lg px-6 bg-gradient-to-r from-[var(--ivory)] to-white"
          >
            <AccordionTrigger className="hover:text-[var(--gold)] text-lg font-serif font-semibold">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="w-5 h-5 text-[var(--gold)]" />
                Restaurant Categories
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(restaurants).map(([category, places]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="font-semibold text-[var(--gold)]">{category}</h4>
                    <ul className="text-sm text-[var(--black)]/70 space-y-1">
                      {places.map((place, idx) => (
                        <li key={idx}>• {place}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
