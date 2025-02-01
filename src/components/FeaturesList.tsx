import { CheckCircle } from "lucide-react"
import { BorderBeam } from "./ui/border-beam"

const features = [
  "Keyword-triggered DM responses",
  "AI-powered conversation flow",
  "Automated comment likes and replies",
  "Engagement analytics dashboard",
  "Custom automation rules",
  "Integration with popular CRM tools",
]

export default function FeaturesList() {
  return (
    <>
    <h2 className="text-3xl font-bold mb-8 mt-10 text-center">Comprehensive Features</h2>
    
    <div className="relative flex h-[300px] w-2/3 mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Border Beam
      </span> */}
      <section className="container mx-auto px-4 py-4">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-xs md:text-base">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
    </>
  )
}

