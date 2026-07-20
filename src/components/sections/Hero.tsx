"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroReveal } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";

const heroImages = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 bg-forest-dark overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Los Andes Club Resort"
            fill
            sizes="100vw"
            priority={index === 0}
            quality={100}
            className={cn(
              "object-cover transition-opacity duration-[4000ms] ease-in-out scale-105",
              currentImage === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        {/* Enhanced dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent z-10" />
      </div>


      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center text-white mt-16">
        <motion.div
          variants={heroReveal}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <span className="inline-block text-white/60 font-inter font-light tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] md:text-xs mb-8">
              Bienvenidos a Los Andes
            </span>
          </AnimatedSection>
          
          <AnimatedSection variant="zoomIn" delay={0.4}>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-[90px] text-white leading-tight mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] flex flex-col items-center">
              <span className="font-light tracking-wide">Un Refugio</span>
              <span className="italic font-extralight text-white/90 mt-2">exclusivo</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.6}>
            <p className="font-inter font-light text-white/70 text-sm md:text-base lg:text-lg mb-12 max-w-lg mx-auto leading-relaxed tracking-wide">
              Tu escape perfecto entre la naturaleza y el confort.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.8}>
            <div className="flex justify-center">
              <a 
                href="#fullday"
                className="group relative flex items-center justify-center px-12 md:px-16 py-4 md:py-5 font-inter font-light text-[10px] md:text-xs uppercase tracking-[0.4em] text-white transition-all overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/60 hover:bg-white/10"
              >
                <span className="relative z-10 transition-transform duration-700 group-hover:scale-105">Descubrir</span>
              </a>
            </div>
          </AnimatedSection>
        </motion.div>
      </div>

      {/* Scroll Indicator (Solo en Móviles) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer md:hidden"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={() => document.getElementById("fullday")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-6 h-6 text-white/70" />
        <span className="text-white/60 text-[10px] tracking-[0.2em] font-inter">
          EXPLORAR
        </span>
      </motion.div>

    </section>
  );
}
