"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Events() {
  return (
    <section id="eventos" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <SectionHeading
          subtitle="Celebra con Nosotros"
          title="Eventos Especiales"
        />

        <div className="mt-16 md:mt-24 flex flex-col items-center">
          
          <AnimatedSection variant="fadeUp" className="max-w-3xl text-center mb-16">
            <p className="font-inter text-forest/70 font-light text-base md:text-xl leading-relaxed mb-8">
              Convierte tus celebraciones en momentos inolvidables. Desde románticas bodas campestres hasta dinámicos Full Days para colegios y corporativos. Descubre nuestros espacios diseñados exclusivamente para ti.
            </p>
            
            <Link 
              href="/eventos"
              className="inline-flex items-center gap-3 bg-forest text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-inter text-sm md:text-base font-semibold shadow-xl hover:shadow-2xl hover:bg-forest-light hover:-translate-y-1 transition-all duration-300 group"
            >
              Explorar Portafolio de Eventos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* Galería Collage Visual Rápida (Teaser) */}
          <AnimatedSection variant="fadeUp" delay={0.2} className="w-full relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 md:gap-4 md:px-10">
              
              <div className="col-span-1 h-full flex flex-col gap-2 md:gap-4 pt-10">
                <Link href="/eventos#matrimonios" className="relative w-full h-[60%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer block">
                  <Image src="/images/events/matrimonio/matri1.webp" alt="Matrimonio" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-playfair text-white text-lg md:text-3xl drop-shadow-md">Matrimonios</span>
                  </div>
                </Link>
                <Link href="/eventos#fullday" className="relative w-full h-[40%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer block">
                  <Image src="/images/events/fullday_colegios/f_day_cole2.webp" alt="Full Day" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-playfair text-white text-base md:text-2xl text-center drop-shadow-md px-2 leading-tight">Full Day<br/>Colegios</span>
                  </div>
                </Link>
              </div>

              <Link href="/eventos#corporativo" className="col-span-1 h-full relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group z-10 scale-110 cursor-pointer block">
                <Image src="/images/events/corporativo/corp3.webp" alt="Eventos Corporativos" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="font-playfair text-white text-2xl md:text-3xl mb-1 drop-shadow-md text-center">Corporativo</span>
                   <div className="flex items-center gap-2 text-white/90">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span className="font-inter text-[10px] md:text-xs tracking-wider uppercase">Descubre Más</span>
                   </div>
                </div>
              </Link>

              <div className="col-span-1 h-full flex flex-col gap-2 md:gap-4 pb-10">
                <Link href="/eventos#cumpleanos" className="relative w-full h-[40%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer block">
                  <Image src="/images/events/cumple/cumple.webp" alt="Cumpleaños" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-playfair text-white text-base md:text-2xl drop-shadow-md text-center px-2">Cumpleaños</span>
                  </div>
                </Link>
                <Link href="/eventos#corporativo" className="relative w-full h-[60%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer block">
                  <Image src="/images/events/corporativo/corp6.webp" alt="Integración" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-playfair text-white text-lg md:text-3xl drop-shadow-md text-center px-2">Team Building</span>
                  </div>
                </Link>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
