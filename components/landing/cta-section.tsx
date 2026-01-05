"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { Particles } from "@/components/ui/particles";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-deep-navy)] via-[var(--color-slate-blue)] to-[var(--color-deep-navy)]" />
      <Particles
        className="absolute inset-0"
        quantity={40}
        staticity={40}
        color="#D4A853"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-amber-gold)]/10 border border-[var(--color-amber-gold)]/20 text-[var(--color-amber-gold)] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Start Your Learning Journey Today
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-warm-white)] mb-6">
            Ready to Stop Losing Money on Tips?
          </h2>

          <p className="text-lg text-[var(--color-warm-white)]/70 mb-10 max-w-2xl mx-auto">
            Join thousands of Indian investors who&apos;ve transformed their approach to investing.
            No subscriptions, no recommendations—just pure financial education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedGradientBorder>
              <Link href="/company/search">
                <Button size="xl" className="w-full group">
                  Search Your First Company
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedGradientBorder>

            <Link href="/ai-assistant">
              <Button
                variant="ghost"
                size="xl"
                className="text-[var(--color-warm-white)] hover:bg-white/10"
              >
                Start with Basics
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
