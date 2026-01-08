import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import PricingPreview from "@/components/PricingPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics /> 
      <HowItWorks />
      <Features />
      <Testimonials />
      <PricingPreview />
    </>
  );
}
