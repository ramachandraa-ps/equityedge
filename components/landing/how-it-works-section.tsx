"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, LineChart, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Plasma } from "@/components/ui/plasma";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search Any Company",
    description: "Look up any listed Indian company and get instant access to fundamentals that matter.",
    color: "var(--color-accent)",
    bgColor: "var(--color-accent-subtle)",
    link: "/company/search",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn Key Metrics",
    description: "Understand P/E, ROE, and Debt-to-Equity with plain English explanations.",
    color: "var(--color-blue-600)",
    bgColor: "rgba(59, 130, 246, 0.15)",
    link: "/company/search",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Analyze Trends",
    description: "See 5-year revenue, profit, and cash flow trends. Spot red flags early.",
    color: "var(--color-success)",
    bgColor: "var(--color-success-light)",
    link: "/market-statistics",
  },
  {
    number: "04",
    icon: Bot,
    title: "Ask AI Assistant",
    description: "Get complex concepts explained in simple terms. It teaches, never recommends.",
    color: "var(--color-info)",
    bgColor: "var(--color-info-light)",
    link: "/ai-assistant",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      {/* Subtle background pattern */}
      {/* Plasma background */}
      <div className="absolute inset-0 opacity-30">
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-sm font-medium mb-4">
            Your Learning Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            How EquityEdge Works
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Four simple steps to transform from a tip-follower to a confident, informed investor.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={step.link}>
                  <div className="relative h-full p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden">
                    {/* Step number watermark */}
                    <span
                      className="absolute -top-4 -right-2 text-[120px] font-black leading-none opacity-[0.03] select-none pointer-events-none"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>

                    {/* Content */}
                    <div className="relative z-10 flex gap-4">
                      {/* Icon */}
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-xs font-bold tracking-wider"
                            style={{ color: step.color }}
                          >
                            STEP {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Connection line decoration for desktop */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
