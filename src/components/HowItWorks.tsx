import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const steps = [
  "Connect your Instagram account to Slide",
  "Set up keyword triggers for DM responses",
  "Configure comment interaction preferences",
  "Let Slide handle your engagement automatically",
  "Focus on creating great content and growing your business",
]

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-900">How Slide Works</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Simple 5-Step Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg"
            alt="Slide dashboard mockup"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

