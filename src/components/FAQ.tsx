import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Autocom work with Instagram's API?",
    answer:
      "Autocom uses Instagram's official API to interact with your account safely and within the platform's guidelines.",
  },
  {
    question: "Can I customize the automated responses?",
    answer:
      "Yes, you can set up custom responses for specific keywords or use our AI-powered system to generate contextual replies.",
  },
  {
    question: "Is Autocom compliant with Instagram's terms of service?",
    answer:
      "Absolutely. We've designed Autocom to work within Instagram's rules and best practices for third-party applications.",
  },
  {
    question: "How does pricing work for Autocom?",
    answer:
      "We offer tiered pricing based on the number of Instagram accounts you manage and the volume of interactions. Check our pricing page for more details.",
  },
]

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-2">
      <h2 className="text-3xl font-bold mb-5 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

