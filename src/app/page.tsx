
import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import FeaturesList from "@/components/FeaturesList"
import HowItWorks from "@/components/HowItWorks"
import Benefits from "@/components/Benefits"
import FAQ from "@/components/FAQ"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <Navbar />
      <Hero />
      <Features />
      <FeaturesList />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
