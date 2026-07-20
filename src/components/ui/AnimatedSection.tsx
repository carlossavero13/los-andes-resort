"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as animations from "@/lib/animations";

type VariantName = "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn" | "zoomIn" | "slideUp";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: VariantName;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variantMap = {
    fadeUp: animations.fadeUp,
    fadeLeft: animations.fadeLeft,
    fadeRight: animations.fadeRight,
    fadeIn: animations.fadeIn,
    zoomIn: animations.zoomIn,
    slideUp: animations.slideUp,
  };

  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
