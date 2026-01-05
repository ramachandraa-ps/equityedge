import {
  HeroSection,
  AIShowcaseScroll,
  StatisticsShowcase,
  HowItWorksSection,

  CTASection,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AIShowcaseScroll />
      <StatisticsShowcase />
      <HowItWorksSection />

      <CTASection />
    </>
  );
}
