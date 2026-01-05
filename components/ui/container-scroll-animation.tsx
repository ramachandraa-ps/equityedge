"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

interface ContainerScrollProps {
  children: ReactNode;
  titleComponent?: ReactNode;
  className?: string;
}

export function ContainerScroll({
  children,
  titleComponent,
  className,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-start py-20",
        className
      )}
    >
      {titleComponent && (
        <motion.div
          style={{ translateY, opacity }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          {titleComponent}
        </motion.div>
      )}

      <motion.div
        style={{
          scale: scaleDimensions,
          rotateX: rotate,
        }}
        className="w-full max-w-6xl mx-auto perspective-1000"
      >
        <div className="relative rounded-[var(--radius-2xl)] overflow-hidden shadow-2xl border border-[var(--color-surface-muted)] bg-[var(--color-canvas)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
