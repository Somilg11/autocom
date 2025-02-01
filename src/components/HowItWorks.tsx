"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import { Beamwork } from "./Beamwork";

const steps = [
  "Connect your Instagram account to Slide",
  "Set up keyword triggers for DM responses",
  "Configure comment interaction preferences",
  "Let Slide handle your engagement automatically",
  "Focus on creating great content and growing your business",
];

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-16 overflow-auto text-xs md:text-base">
      <h2 className="text-3xl font-bold mb-8 text-center">How Autocom Works?</h2>
      <div className="grid md:grid-cols-2">
      <Terminal>
  {steps.map((step, index) => (
    <TypingAnimation key={index} delay={index * 1000} className="text-green-500">
      {`> ${step}`}
    </TypingAnimation>
  ))}
</Terminal>

        <div className="relative h-64 md:h-full">
          <Beamwork />
        </div>
      </div>
    </section>
  );
}