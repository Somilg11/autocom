import { CheckCircle } from "lucide-react"

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
    <section className="container mx-auto px-4 py-16 bg-purple-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-900">Comprehensive Features</h2>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

