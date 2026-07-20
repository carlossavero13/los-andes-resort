"use client";

import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Restaurant() {
  return (
    <section id="restaurante" className="py-24 md:py-32 bg-forest relative overflow-hidden">
      
      {/* Fondo elegante */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <SectionHeading
          subtitle="Experiencia Gastronómica"
          title="Restaurante"
          light
        />

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-20">
          
          {/* Images Collage (Editorial Style) */}
          <AnimatedSection variant="fadeLeft" className="relative h-[450px] lg:h-[600px] w-full hidden md:block">
            {/* Foto Principal (Fondo Derecha) */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gold/20">
              <Image 
                src="/images/restaurant/res1.png" 
                alt="Restaurante Los Andes - Interior" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-[3000ms] opacity-80"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Foto Secundaria (Frente Izquierda) */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[50%] overflow-hidden rounded-2xl bg-forest p-2 z-10 shadow-2xl border border-gold/30">
              <div className="relative w-full h-full overflow-hidden rounded-xl border border-gold/10">
                <Image 
                  src="/images/restaurant/res2.png" 
                  alt="Platos del restaurante" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-[3000ms]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Versión móvil de la foto */}
          <div className="md:hidden relative h-[400px] w-full overflow-hidden rounded-2xl border border-gold/20 shadow-2xl">
            <Image 
              src="/images/restaurant/res1.png" 
              alt="Restaurante Los Andes" 
              fill 
              sizes="100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <AnimatedSection variant="fadeRight">
            <span className="text-gold/80 font-inter tracking-[0.4em] uppercase text-[10px] font-light mb-6 block">
              Sabor Local & Tradición
            </span>
            <h3 className="font-playfair text-4xl md:text-5xl text-white mb-8 font-light leading-tight drop-shadow-lg">
              Sabores que complementan tu descanso
            </h3>
            
            <div className="space-y-6 font-inter font-light text-white/70 leading-relaxed text-sm md:text-base tracking-wide">
              <p>
                Nuestro restaurante ofrece una experiencia gastronómica que 
                eleva tu estadía. Seleccionamos ingredientes frescos y locales, 
                preparados con dedicación por nuestro equipo culinario.
              </p>
              <p>
                Desde la clásica <span className="italic text-gold">Trucha Frita</span> o nuestra tradicional <span className="italic text-gold">Pachamanca a la Piedra</span>, 
                hasta opciones internacionales contemporáneas; nuestra carta está diseñada 
                para deleitar todos los paladares en un ambiente campestre inigualable.
              </p>
            </div>

            {/* Highlight Box Premium */}
            <div className="mt-16 bg-gold/10 border border-gold/30 rounded-2xl p-8 relative group hover:bg-gold/15 transition-colors duration-500">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5 flex-shrink-0">
                  <UtensilsCrossed className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-gold text-lg md:text-xl font-light italic mb-2">
                    Beneficio Exclusivo Full Day
                  </h4>
                  <p className="font-inter font-light text-white/80 text-xs md:text-sm tracking-wide">
                    Tu entrada Full Day incluye un vale de consumo de S/20.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
