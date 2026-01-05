"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGradientBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative p-[2px] overflow-hidden rounded-[var(--radius-2xl)]", containerClassName)}>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--color-amber-gold), var(--color-muted-teal), var(--color-amber-gold))",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <div
        className={cn(
          "relative bg-[var(--color-canvas)] rounded-[calc(var(--radius-2xl)-2px)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
