import { Ripple } from "./ui/ripple";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function Hero() {
  return (
    <>
      
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Effortless Instagram Engagement</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto tracking-tighter">
        Slide is a conversational marketing platform that turns your Instagram engagement into opportunities.
      </p>
      {/* <Button className="text-sm tracking-tight">
        start engaging <ArrowRight className="ml-2" />
      </Button> */}
      <InteractiveHoverButton>Get Started</InteractiveHoverButton>
    </section>
    <Ripple />
    </>
  )
}

