"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FullDay() {
  const adultIncludes = [
    "Acceso libre a las instalaciones",
    "Uso de todas las piscinas",
    "Áreas deportivas y recreativas",
    "Vale de S/20 para el restaurante",
  ];

  const childIncludes = [
    "Acceso libre a las instalaciones",
    "Uso de piscinas infantiles",
    "Juegos y áreas para niños",
    "Vale de S/20 para el restaurante",
  ];

  return (
    <section id="fullday" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero/hero-1.png"
          alt="Full Day en Los Andes"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSection variant="fadeUp">
            <span className="font-inter text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-semibold block mb-4">
              Pasa el Día con Nosotros
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
              Experiencia Full Day
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-8 rounded-full" />
            <p className="text-white/70 max-w-2xl mx-auto font-inter font-light text-sm md:text-base tracking-wide leading-relaxed">
              Desconéctate de la ciudad y disfruta de un día completo en nuestras instalaciones rodeadas de naturaleza, piscinas y exquisita gastronomía.
            </p>
          </AnimatedSection>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          
          {/* Tarjeta Adulto */}
          <AnimatedSection variant="fadeUp" delay={0.2} className="flex-1">
            <div className="h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:bg-white/15 transition-colors duration-500">
              
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold/50 to-gold" />

              <div className="text-center mb-8 pt-4">
                <h3 className="font-playfair text-2xl text-white font-medium mb-2">Adulto</h3>
                <p className="font-inter text-xs uppercase tracking-widest text-white/50 mb-6">A partir de 12 años</p>
                
                <div className="flex justify-center items-end gap-1 text-gold mb-2">
                  <span className="text-2xl font-light mb-1">S/</span>
                  <span className="text-6xl font-playfair font-medium leading-none">50</span>
                </div>
                
                {/* Breakdown */}
                <div className="inline-flex flex-col items-center gap-1 bg-black/20 rounded-xl px-4 py-3 mt-4">
                  <div className="flex items-center gap-4 text-xs font-inter text-white/70">
                    <span>Ingreso: <strong className="text-white">S/ 30</strong></span>
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    <span>Consumo: <strong className="text-white">S/ 20</strong></span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {adultIncludes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-inter font-light text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'Full Day' } }))}
                className="w-full flex justify-center items-center gap-2 bg-gold hover:bg-gold-light text-forest py-4 rounded-xl font-inter text-[11px] uppercase tracking-[0.2em] font-bold transition-all shadow-lg hover:shadow-gold/20"
              >
                Solicitar Reserva
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>

          {/* Tarjeta Niño */}
          <AnimatedSection variant="fadeUp" delay={0.4} className="flex-1">
            <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
              
              <div className="text-center mb-8 pt-4">
                <h3 className="font-playfair text-2xl text-white font-medium mb-2">Niño</h3>
                <p className="font-inter text-xs uppercase tracking-widest text-white/50 mb-6">De 3 a 11 años</p>
                
                <div className="flex justify-center items-end gap-1 text-white/90 mb-2">
                  <span className="text-2xl font-light mb-1">S/</span>
                  <span className="text-6xl font-playfair font-medium leading-none">40</span>
                </div>
                
                {/* Breakdown */}
                <div className="inline-flex flex-col items-center gap-1 bg-black/20 rounded-xl px-4 py-3 mt-4">
                  <div className="flex items-center gap-4 text-xs font-inter text-white/60">
                    <span>Ingreso: <strong className="text-white/90">S/ 20</strong></span>
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                    <span>Consumo: <strong className="text-white/90">S/ 20</strong></span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {childIncludes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                    <span className="font-inter font-light text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'Full Day' } }))}
                className="w-full flex justify-center items-center gap-2 border border-white/20 hover:border-gold hover:bg-gold/10 text-white py-4 rounded-xl font-inter text-[11px] uppercase tracking-[0.2em] font-bold transition-all"
              >
                Solicitar Reserva
              </button>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
