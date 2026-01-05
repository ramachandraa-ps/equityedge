"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  title: string;
  description: string;
  header?: ReactNode;
  icon?: ReactNode;
  className?: string;
  index?: number;
}

export function BentoGridItem({
  title,
  description,
  header,
  icon,
  className,
  index = 0,
}: BentoGridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-canvas)] border border-[var(--color-surface-muted)] p-6 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-muted-teal)]/30",
        className
      )}
    >
      {header && <div className="mb-4">{header}</div>}

      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-lg)] bg-[var(--color-soft-teal)] flex items-center justify-center text-[var(--color-muted-teal)]">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-[var(--color-deep-navy)] group-hover:text-[var(--color-muted-teal)] transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-cool-gray)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-muted-teal)]/0 to-[var(--color-amber-gold)]/0 group-hover:from-[var(--color-muted-teal)]/5 group-hover:to-[var(--color-amber-gold)]/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
