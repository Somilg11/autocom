import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Social Media Manager",
    content:
      "Slide has revolutionized how we handle our Instagram engagement. It's like having an extra team member working 24/7!",
    avatar: "/placeholder.svg", // Removed query parameters
  },
  {
    name: "Mike R.",
    role: "E-commerce Owner",
    content:
      "Our conversions from Instagram have skyrocketed since we started using Slide. The automated responses feel so natural!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emily T.",
    role: "Influencer",
    content:
      "I can finally manage my growing audience without spending all day on my phone. Slide is a game-changer for creators.",
    avatar: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16 bg-purple-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-900">
        What Our Users Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Avatar>
                  {/* ✅ Fixed: Wrapped AvatarImage with Next.js Image */}
                  <Image
                    src={testimonial.avatar}
                    width={40}
                    height={40}
                    alt={testimonial.name}
                    className="rounded-full"
                  />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
