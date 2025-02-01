"use client"
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { MessageCircle, ThumbsUp, Zap } from "lucide-react";

const features = [
  {
    icon: <MessageCircle/>, 
    title: "Automated DM Responses",
    description: "Respond to specific keywords in DMs with AI-driven or default messages.",
  },
  {
    icon: <ThumbsUp/>, 
    title: "Comment Interactions",
    description: "Automatically like and reply to comments on your videos.",
  },
  {
    icon: <Zap />, 
    title: "Streamlined Workflow",
    description: "Turn engagement into opportunities with seamless automations.",
  },
];

export default function MagicCardFeatures() {
  const { theme } = useTheme();

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Key Features</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <MagicCard
            key={index}
            className="cursor-pointer flex flex-col items-center justify-center text-xl p-6 shadow-2xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex items-center text-sm gap-2 mb-2">{feature.icon}<span>{feature.title}</span></div>
            <p className="text-sm">{feature.description}</p>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}
