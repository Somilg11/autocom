import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    title: "Save Time",
    description: "Automate repetitive tasks and focus on what matters most.",
  },
  {
    title: "Increase Engagement",
    description: "Respond quickly and consistently to boost audience interaction.",
  },
  {
    title: "Grow Your Audience",
    description: "Turn casual followers into loyal fans with personalized interactions.",
  },
  {
    title: "Boost Conversions",
    description: "Convert engagement into leads and sales more effectively.",
  },
]

export default function Benefits() {
  return (
    <section className="container mx-auto px-4 py-16 bg-purple-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-900">Benefits of Using Slide</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

