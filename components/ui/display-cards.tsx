"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface DisplayCard {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

interface DisplayCardsProps {
  cards: DisplayCard[];
  className?: string;
}

export function DisplayCards({ cards, className }: DisplayCardsProps) {
  return (
    <div className={cn("relative w-full max-w-md mx-auto h-[400px]", className)}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: (index - 1) * 6,
            x: (index - 1) * 20,
          }}
          whileHover={{
            y: -10,
            rotate: 0,
            scale: 1.05,
            zIndex: 50,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 p-6 rounded-[var(--radius-2xl)] cursor-pointer",
            "bg-[var(--color-surface)] border border-[var(--color-border)]",
            "shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]",
            "transition-shadow duration-300",
            card.className
          )}
          style={{ zIndex: cards.length - index }}
        >
          <div className="w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] mb-4">
            {card.icon}
          </div>
          <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            {card.description}
          </p>

          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent)]/10 to-transparent rounded-tr-[var(--radius-2xl)] pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
