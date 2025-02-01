import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-900">Effortless Instagram Engagement</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-700">
        Slide is a conversational marketing platform that turns your Instagram engagement into opportunities.
      </p>
      <Button size="lg" className="animate-pulse">
        Start Engaging <ArrowRight className="ml-2" />
      </Button>
    </section>
  )
}

