"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, LineChart, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Plasma } from "@/components/ui/plasma";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search Any Company",
    description: "Look up any listed Indian company and get instant access to fundamentals that matter.",
    // color: "#2563eb", // blue-600
    canvasColors: [[59, 130, 246]], // blue
    link: "/company/search",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn Key Metrics",
    description: "Understand P/E, ROE, and Debt-to-Equity with plain English explanations.",
    // color: "#a855f7", // purple-500
    canvasColors: [[168, 85, 247]], // purple
    link: "/company/search",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Analyze Trends",
    description: "See 5-year revenue, profit, and cash flow trends. Spot red flags early.",
    // color: "#10b981", // emerald-500
    canvasColors: [[16, 185, 129]], // emerald
    link: "/market-statistics",
  },
  {
    number: "04",
    icon: Bot,
    title: "Ask AI Assistant",
    description: "Get complex concepts explained in simple terms. It teaches, never recommends.",
    // color: "#f97316", // orange-500
    canvasColors: [[249, 115, 22]], // orange
    link: "/ai-assistant",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden antialiased">
      {/* Plasma background covering the entire section */}
      <div className="absolute inset-0 z-0">
        <Plasma
          color="#3b82f6" // Brighter blue
          speed={0.5}
          direction="forward"
          scale={1.2}
          opacity={0.6}
          mouseInteractive={true}
        />
        {/* Lighter overlay to show plasma */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
              Your Learning Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Master the Markets <br className="hidden md:block" /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">EquityEdge</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              We've simplified the path from beginner to pro. Follow these steps to build your confidence and portfolio.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={step.link} className="block h-full">
                  <CardSpotlight className="h-full flex flex-col justify-between p-8 bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-colors group cursor-pointer">
                    <div className="relative z-20">
                      <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-neutral-700 transition-colors">
                        <Icon className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                      </div>

                      <div className="mb-4">
                        <span className="text-sm font-mono text-neutral-500 mb-2 block">0{index + 1}</span>
                        <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-20 mt-6 flex items-center text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* Custom reveal colors per card if supported by CardSpotlight/CanvasReveal, 
                            currently CardSpotlight has hardcoded colors or takes a prop? 
                            Let's check CardSpotlight definition I made. 
                            It takes 'radius', 'color' (for slotlight), but CanvasReveal colors are inside it.
                            I should pass children to CardSpotlight that ARE the CanvasReveal for customizability, 
                            OR modify CardSpotlight to accept colors.
                            
                            Wait, my previous CardSpotlight implementation has CanvasRevealEffect HARDCODED inside it.
                            I should probably update CardSpotlight to accept 'canvasRevealColors' prop or similar,
                            OR I can stick to the blue/purple generic one I made which looks good on dark.
                            
                            For now, I'll stick to the implementation I wrote which has a nice generic reveal.
                        */}
                  </CardSpotlight>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
