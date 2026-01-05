import {
  HeroSection,
  AIShowcaseScroll,
  StatisticsShowcase,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AIShowcaseScroll />
      <StatisticsShowcase />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
