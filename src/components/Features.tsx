import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ThumbsUp, Zap } from "lucide-react"

const features = [
  {
    icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
    title: "Automated DM Responses",
    description: "Respond to specific keywords in DMs with AI-driven or default messages.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-purple-500" />,
    title: "Comment Interactions",
    description: "Automatically like and reply to comments on your videos.",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Streamlined Workflow",
    description: "Turn engagement into opportunities with seamless automations.",
  },
]

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-900">Key Features</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {feature.icon}
                <span>{feature.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

