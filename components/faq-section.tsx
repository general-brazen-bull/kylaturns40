import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    category: "Basics",
    questions: [
      {
        q: "When is the celebration?",
        a: "May 18-21, 2026. The main celebration is on May 20th.",
      },
      {
        q: "Where are the main venues?",
        a: "Events will be held at Kyla's home, GoodCo (965 Granville St), The Marina (1601 Bayshore Dr) for the yacht charter, and various restaurants around Vancouver.",
      },
      {
        q: "Do I need to RSVP?",
        a: "Yes! Please RSVP as soon as possible, especially for the steakhouse dinner and yacht charter as seating is limited.",
      },
      {
        q: "Should I bring a gift?",
        a: "No gifts necessary! Your presence is the best present. All events are paid for.",
      },
    ],
  },
  {
    category: "Accommodation & Travel",
    questions: [
      {
        q: "Is there a group hotel rate?",
        a: "No group rate, but we've listed several recommended hotels at various price points. You can also book through AirBNB or VRBO.",
      },
      {
        q: "What's the best way to get around?",
        a: "Vancouver is very walkable downtown. Use Uber, SkyTrain, or walk between venues. Most hotels are near SkyTrain stations.",
      },
      {
        q: "How far is the airport?",
        a: "YVR (Vancouver International Airport) is approximately 25 minutes from downtown Vancouver.",
      },
    ],
  },
  {
    category: "Events & Dress Code",
    questions: [
      {
        q: "What should I wear?",
        a: "Tiki Tacky for the welcome party (costume contest!), smart casual for the steakhouse, and dressy attire for the yacht charter. Other events are casual.",
      },
      {
        q: "Are children welcome?",
        a: "Yes, children are welcome at all events except the distillery brunch on May 21st.",
      },
      {
        q: "Can I attend just some of the events?",
        a: "Come for as much or as little as you'd like. Just let us know in your RSVP which events you'll attend.",
      },
    ],
  },
  {
    category: "Weather & Local Info",
    questions: [
      {
        q: "What's the weather like in May?",
        a: "Vancouver in May is typically 15-20°C (59-68°F) and can be rainy. Bring a light jacket and layers.",
      },
      {
        q: "What if it rains?",
        a: "Most events are indoors or have rain contingency plans. The yacht charter operates rain or shine!",
      },
    ],
  },
  {
    category: "Schedule & Logistics",
    questions: [
      {
        q: "Will there be a detailed schedule?",
        a: "Yes! A digital itinerary with addresses and timing will be shared closer to the event.",
      },
      {
        q: "Is transportation provided?",
        a: "Transportation will be provided for some events. Details will be shared with confirmed guests.",
      },
      {
        q: "Where can I park?",
        a: "Parking varies by venue. Most downtown locations have paid parking nearby. Hotels typically offer guest parking.",
      },
    ],
  },
  {
    category: "Food & Drink",
    questions: [
      {
        q: "I have dietary restrictions. Can you accommodate?",
        a: "Yes! Please note any allergies or dietary restrictions in your RSVP and we'll do our best to accommodate.",
      },
      {
        q: "Will there be alcohol at events?",
        a: "Yes, most events will have alcohol available. Non-alcoholic options will also be provided.",
      },
      {
        q: "Can I bring my own alcohol?",
        a: "Outside alcohol is not permitted at licensed venues (restaurants, yacht, distillery).",
      },
    ],
  },
  {
    category: "Social Media & Photos",
    questions: [
      {
        q: "Can I post photos on social media?",
        a: "Yes! Use the hashtag #kylaturns40. Please be mindful of others and check before posting photos with other guests.",
      },
      {
        q: "Will there be a photographer?",
        a: "We'll have photographers at key events. Candid photos are encouraged!",
      },
      {
        q: 'Is this an "unplugged" celebration?',
        a: "Not at all! We want you to capture and share the memories. Just be present too!",
      },
    ],
  },
  {
    category: "Activities & Themes",
    questions: [
      {
        q: "What's the tiki theme about?",
        a: "The welcome party on May 18th is Tiki themed with tiki cocktails and a costume contest. Get creative with your tropical attire!",
      },
      {
        q: "Are there other themed events?",
        a: "Only the welcome party has a specific theme. Other events are more traditional celebration style.",
      },
      {
        q: "Can I bring my pet?",
        a: "Unfortunately, pets cannot attend the events due to venue restrictions.",
      },
    ],
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-br from-[var(--ivory)] to-[var(--blush)]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--black)] mb-4">FAQs</h2>
          <div className="gold-divider max-w-xs mx-auto mb-6" />
          <p className="text-lg text-[var(--black)]/70 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the celebration
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-2xl font-semibold text-[var(--gold)] mb-4">{section.category}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`${idx}-${qIdx}`}
                    className="border-2 border-[var(--gold)]/20 rounded-lg px-6 bg-white hover:border-[var(--gold)] transition-colors"
                  >
                    <AccordionTrigger className="hover:text-[var(--gold)] font-semibold text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--black)]/70 leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
