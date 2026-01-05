"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingDown, Clock, Wallet, MessageCircleWarning } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MorphingPopover } from "@/components/ui/morphing-popover";

const statistics = [
  {
    value: 89,
    suffix: "%",
    label: "of retail traders lose money in F&O",
    icon: <TrendingDown className="w-6 h-6" />,
    color: "var(--color-error)",
    description: "SEBI's study reveals the harsh reality of derivative trading for retail investors.",
  },
  {
    value: 15,
    suffix: " days",
    label: "average holding period",
    icon: <Clock className="w-6 h-6" />,
    color: "var(--color-warning)",
    description: "Compare this to the recommended 3+ years for building real wealth.",
  },
  {
    value: 1.8,
    suffix: "L Cr",
    prefix: "₹",
    label: "lost by retail traders (FY23)",
    icon: <Wallet className="w-6 h-6" />,
    color: "var(--color-error)",
    description: "Real savings—retirement funds, education money—lost to speculation.",
  },
  {
    value: 70,
    suffix: "%",
    label: "trade within 24hrs of receiving tips",
    icon: <MessageCircleWarning className="w-6 h-6" />,
    color: "var(--color-warning)",
    description: "Tips create urgency that bypasses rational analysis.",
  },
];

export function StatisticsShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[var(--color-deep-navy)] to-[var(--color-slate-blue)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-amber-gold)]/10 text-[var(--color-amber-gold)] text-sm font-medium mb-4">
            The Reality Check
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-warm-white)] mb-4">
            Numbers That Should Make You Think
          </h2>
          <p className="text-lg text-[var(--color-warm-white)]/70 max-w-2xl mx-auto">
            Before you follow another tip, understand what&apos;s really happening in Indian markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MorphingPopover
                trigger={
                  <div className="group relative p-6 rounded-[var(--radius-2xl)] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full">
                    <div
                      className="w-12 h-12 rounded-[var(--radius-xl)] flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                    >
                      {stat.icon}
                    </div>

                    <div className="mb-2">
                      <span className="text-4xl lg:text-5xl font-extrabold text-[var(--color-warm-white)]">
                        {stat.prefix}
                        <NumberTicker
                          value={stat.value}
                          decimalPlaces={stat.value < 10 ? 1 : 0}
                          delay={0.3 + index * 0.1}
                        />
                        {stat.suffix}
                      </span>
                    </div>

                    <p className="text-[var(--color-warm-white)]/70 text-sm leading-relaxed">
                      {stat.label}
                    </p>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-[var(--color-amber-gold)]">Click to learn more</span>
                    </div>
                  </div>
                }
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                    >
                      {stat.icon}
                    </div>
                    <h4 className="font-bold text-[var(--color-deep-navy)]">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </h4>
                  </div>
                  <p className="text-[var(--color-cool-gray)] leading-relaxed">
                    {stat.description}
                  </p>
                  <Link
                    href="/market-statistics"
                    className="inline-flex items-center gap-1 text-[var(--color-muted-teal)] text-sm font-medium hover:gap-2 transition-all"
                  >
                    Learn why this matters <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </MorphingPopover>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/market-statistics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-amber-gold)] text-[var(--color-deep-navy)] font-semibold hover:bg-[var(--color-warm-amber)] transition-colors group"
          >
            See Full Market Analysis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
