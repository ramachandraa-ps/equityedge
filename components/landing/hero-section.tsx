"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, BookOpen, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/ui/text-rotate";
import { DisplayCards } from "@/components/ui/display-cards";
import { Particles } from "@/components/ui/particles";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";

const rotatingTexts = [
  "Read Companies",
  "Understand Fundamentals",
  "Build Confidence",
  "Make Informed Decisions",
];

const featureCards = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Market Intelligence",
    description: "Understand why 89% of retail traders lose money and how to be different.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Company Analysis",
    description: "Learn to read financial statements like a professional investor.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Education First",
    description: "No tips, no recommendations. Just knowledge that empowers.",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-canvas)] to-[var(--color-surface)]">
      {/* Animated Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        staticity={30}
        color="#D4A853"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-amber-gold)]/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-muted-teal)]/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-soft-teal)] border border-[var(--color-muted-teal)]/20 text-[var(--color-muted-teal)] text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-muted-teal)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-muted-teal)]"></span>
              </span>
              Education-first platform for Indian investors
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-deep-navy)] leading-tight mb-4">
              Learn to{" "}
              <span className="relative inline-block">
                <TextRotate
                  texts={rotatingTexts}
                  interval={3000}
                  className="text-[var(--color-amber-gold)]"
                />
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-amber-gold)] to-[var(--color-copper-glow)] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-slate-blue)] mb-6">
              Not Tips.
            </h2>

            {/* Description */}
            <p className="text-lg text-[var(--color-cool-gray)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Stop chasing tips that lose money. Start understanding the fundamentals
              that build wealth. EquityEdge teaches you to analyze companies like
              professional investors.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnimatedGradientBorder containerClassName="w-full sm:w-auto">
                <Link href="/market-statistics" className="block">
                  <Button size="xl" className="w-full group">
                    Explore Market Statistics
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </AnimatedGradientBorder>

              <Link href="/company/search">
                <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                  Search Companies
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[var(--color-canvas)] bg-gradient-to-br from-[var(--color-muted-teal)] to-[var(--color-slate-blue)] flex items-center justify-center text-[var(--color-warm-white)] text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--color-deep-navy)]">
                  10,000+ learners
                </p>
                <p className="text-xs text-[var(--color-cool-gray)]">
                  Building financial literacy
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Display Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <DisplayCards cards={featureCards} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--color-cool-gray)]/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber-gold)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
