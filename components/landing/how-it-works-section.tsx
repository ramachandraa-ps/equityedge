"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, LineChart, Bot, CheckCircle2 } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextShimmer } from "@/components/ui/text-shimmer";

const steps = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Search Any Company",
    description: "Look up any listed Indian company. We'll show you the fundamentals that matter, not the noise.",
    className: "md:col-span-3",
    header: (
      <div className="relative h-32 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-soft-teal)] to-[var(--color-surface-subtle)] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, var(--color-muted-teal) 50%, transparent 100%)`,
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative px-5 py-2.5 rounded-full bg-[var(--color-canvas)] shadow-lg border border-[var(--color-surface-muted)] flex items-center gap-2">
          <Search className="w-4 h-4 text-[var(--color-cool-gray)]" />
          <span className="text-sm text-[var(--color-deep-navy)]">Search &quot;Reliance&quot;...</span>
        </div>
      </div>
    ),
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Learn Key Metrics",
    description: "Understand P/E, ROE, Debt-to-Equity with plain English explanations.",
    className: "md:col-span-2",
    header: (
      <div className="h-32 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-amber-gold)]/20 to-[var(--color-surface-subtle)] flex items-center justify-center p-3">
        <div className="space-y-1.5 w-full">
          {["P/E Ratio", "Return on Equity", "Debt-to-Equity"].map((metric, i) => (
            <motion.div
              key={metric}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[var(--color-canvas)]/80 backdrop-blur"
            >
              <span className="text-xs font-medium text-[var(--color-deep-navy)]">{metric}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" />
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Analyze Trends",
    description: "See 5-year revenue, profit, and cash flow trends. Spot red flags early.",
    className: "md:col-span-2",
    header: (
      <div className="h-32 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-muted-teal)]/10 to-[var(--color-surface-subtle)] flex items-center justify-center p-3">
        <svg viewBox="0 0 200 80" className="w-full h-full">
          <motion.path
            d="M 10,60 Q 50,40 80,50 T 130,35 T 190,20"
            fill="none"
            stroke="var(--color-muted-teal)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.path
            d="M 10,70 Q 50,65 80,60 T 130,50 T 190,45"
            fill="none"
            stroke="var(--color-amber-gold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      </div>
    ),
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Ask Our AI Assistant",
    description: "Have questions? Our AI explains complex concepts in simple terms.",
    className: "md:col-span-3",
    header: (
      <div className="h-32 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-slate-blue)]/5 to-[var(--color-surface-subtle)] flex items-end p-3">
        <div className="w-full space-y-1.5">
          <div className="flex justify-end">
            <div className="px-3 py-1.5 rounded-2xl rounded-br-sm bg-[var(--color-muted-teal)] text-white text-xs max-w-[160px]">
              What does high P/E ratio mean?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="px-3 py-1.5 rounded-2xl rounded-bl-sm bg-[var(--color-surface-muted)] text-[var(--color-deep-navy)] text-xs max-w-[220px]">
              <TextShimmer shimmerWidth={50} as="span">
                A high P/E suggests investors expect strong future growth...
              </TextShimmer>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-soft-teal)] text-[var(--color-muted-teal)] text-sm font-medium mb-4">
            Your Learning Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-deep-navy)] mb-4">
            How EquityEdge Works
          </h2>
          <p className="text-lg text-[var(--color-cool-gray)] max-w-2xl mx-auto">
            Four simple steps to transform from a tip-follower to a confident, informed investor.
          </p>
        </motion.div>

        <BentoGrid className="md:auto-rows-[220px]">
          {steps.map((step, index) => (
            <BentoGridItem
              key={index}
              title={step.title}
              description={step.description}
              header={step.header}
              icon={step.icon}
              className={step.className}
              index={index}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
