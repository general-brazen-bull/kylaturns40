import { Nav } from "@/components/nav"    
import { HeroSection } from "@/components/hero-section"
import { Countdown } from "@/components/countdown"
import { ItinerarySection } from "@/components/itinerary-section"
import { AccommodationsSection } from "@/components/accommodations-section"
import { ThingsToDoSection } from "@/components/things-to-do-section"
import { FAQSection } from "@/components/faq-section"
import { RSVPSection } from "@/components/rsvp-section"
import { Footer } from "@/components/footer"


export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />    
      <HeroSection />
      <Countdown />
      <ItinerarySection />
      <AccommodationsSection />
      <ThingsToDoSection />
      <FAQSection />
      <RSVPSection />
      <Footer />
    </main>
  )
}
