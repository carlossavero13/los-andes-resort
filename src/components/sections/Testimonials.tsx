"use client";

import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-forest relative overflow-hidden border-t border-forest-dark">
      
      {/* Subtle luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            subtitle="Experiencias Reales"
            title="Lo que dicen nuestros huéspedes"
            light
          />
        </AnimatedSection>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 
          Mobile: Contenedor flexible con scroll horizontal (swipe)
          Desktop: Grilla estática de 3 columnas
        */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 custom-scrollbar">
          {TESTIMONIALS.map((testimonial, index) => {
            // Hacemos que en Desktop (grilla de 3) los últimos elementos se centren si sobran
            const isLastRow = index >= 3;
            
            return (
              <AnimatedSection
                key={testimonial.id}
                variant="fadeUp"
                delay={index * 0.1}
                className={`w-[85vw] md:w-auto flex-shrink-0 snap-center bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-2xl p-8 md:p-12 relative flex flex-col group transition-all duration-700 hover:border-[#722F37]/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] ${
                  isLastRow && index === 3 ? "lg:col-start-1 lg:translate-x-1/2" : ""
                } ${
                  isLastRow && index === 4 ? "lg:col-start-2 lg:translate-x-1/2" : ""
                }`}
              >
                <div className="absolute top-8 right-8 text-[#722F37]/5 group-hover:text-[#722F37]/10 transition-all duration-700 transform group-hover:scale-110">
                  <Quote size={50} strokeWidth={1} />
                </div>

                <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-gold fill-current"
                    />
                  ))}
                </div>

                <p className="text-[#722F37] font-playfair text-lg md:text-xl font-medium leading-relaxed mb-10 flex-1 relative z-10 italic">
                  &quot;{testimonial.comment}&quot;
                </p>

                <div className="w-16 h-[1px] bg-[#722F37]/10 mb-8 transition-all duration-700 group-hover:w-full group-hover:bg-gold/50" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-full border border-[#722F37]/20 flex items-center justify-center font-playfair font-medium text-[#722F37] text-lg bg-[#722F37]/5 shadow-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-[#722F37] text-[10px] md:text-[11px] uppercase tracking-[0.25em]">
                      {testimonial.name}
                    </h4>
                    <span className="font-inter text-[#722F37]/50 text-[9px] tracking-[0.3em] uppercase block mt-1 font-semibold">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
      
      {/* Estilos para ocultar la barra de scroll en móviles pero permitir el swipe */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
