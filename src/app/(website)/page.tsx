
import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import FeaturesList from "@/components/FeaturesList"
import HowItWorks from "@/components/HowItWorks"
import Benefits from "@/components/Benefits"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import  Testimonials  from '@/components/Testimonials';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
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
