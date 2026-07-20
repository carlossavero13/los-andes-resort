"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className={cn(
        "mb-16",
        centered ? "text-center mx-auto" : "",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "font-inter text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-6 font-light",
            light ? "text-white/60" : "text-forest/60"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-playfair text-4xl md:text-5xl lg:text-6xl font-light tracking-tight",
          light ? "text-white" : "text-forest"
        )}
      >
        {title}
      </h2>
    </motion.div>
  );
}
