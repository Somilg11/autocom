import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { RetroGrid } from "./ui/retro-grid"

export default function CTA() {
  return (
    <>
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <section className="container mx-auto text-center tracking-tighter">
      <h2 className="text-3xl font-bold mb-2">Ready to Slide into Effortless Engagement?</h2>
      <p className="text-xl mb-4 max-w-2xl mx-auto">
        Join thousands of businesses and creators who are transforming their Instagram presence with Slide.
      </p>
      <Button size="lg" className="font-bold">
        Get Started Now <ArrowRight className="ml-2" />
      </Button>
    </section>
 
      <RetroGrid />
    </div>
    
    </>
  )
}

