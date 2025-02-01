import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4 text-purple-900">Ready to Slide into Effortless Engagement?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
        Join thousands of businesses and creators who are transforming their Instagram presence with Slide.
      </p>
      <Button size="lg">
        Get Started Now <ArrowRight className="ml-2" />
      </Button>
    </section>
  )
}

