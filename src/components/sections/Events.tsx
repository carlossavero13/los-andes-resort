"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const EVENT_CATEGORIES = [
  {
    id: "matrimonios",
    title: "Bodas y Matrimonios",
    href: "/eventos/matrimonios",
    image: "/images/events/matrimonio/matri1.webp",
  },
  {
    id: "fullday",
    title: "Full Day Colegios",
    href: "/eventos/full-day",
    image: "/images/events/fullday_colegios/f_day_cole3.webp",
  },
  {
    id: "corporativo",
    title: "Eventos Corporativos",
    href: "/eventos/corporativos",
    image: "/images/events/corporativo/corp3.webp",
  },
  {
    id: "cumpleanos",
    title: "Celebraciones",
    href: "/eventos/celebraciones",
    image: "/images/events/cumple/cumple.webp",
  }
];

export default function Events() {
  const [activeEventId, setActiveEventId] = useState(EVENT_CATEGORIES[0].id);
  const activeEvent = EVENT_CATEGORIES.find(e => e.id === activeEventId) || EVENT_CATEGORIES[0];

  return (
    <section id="eventos" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16 md:mb-24">
          <SectionHeading
            subtitle="Celebra con Nosotros"
            title="Eventos Especiales"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* LADO IZQUIERDO: Menú Elegante */}
          <AnimatedSection variant="fadeRight" className="lg:col-span-5 flex flex-col gap-2 md:gap-4">
            {EVENT_CATEGORIES.map((event) => {
              const isActive = activeEventId === event.id;
              
              return (
                <button
                  key={event.id}
                  onClick={() => setActiveEventId(event.id)}
                  className="group relative text-left py-4 pl-6 md:pl-8 pr-4 transition-all duration-500 overflow-hidden rounded-r-2xl"
                >
                  {/* Línea dorada activa */}
                  <div 
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ease-out", 
                      isActive 
                        ? "bg-gold scale-y-100 opacity-100" 
                        : "bg-forest/20 scale-y-50 opacity-0 group-hover:opacity-100 group-hover:scale-y-75"
                    )} 
                  />
                  
                  {/* Fondo sutil activo */}
                  <div 
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    )}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <h3 
                      className={cn(
                        "font-playfair text-xl md:text-2xl lg:text-3xl transition-all duration-500 tracking-tight", 
                        isActive 
                          ? "text-gray-900 font-medium translate-x-2" 
                          : "text-gray-400 font-light group-hover:text-gray-600 group-hover:translate-x-1"
                      )}
                    >
                      {event.title}
                    </h3>
                    <Sparkles 
                      className={cn(
                        "w-4 h-4 md:w-5 md:h-5 text-gold transition-all duration-500",
                        isActive ? "opacity-100 rotate-12 scale-100" : "opacity-0 -rotate-45 scale-50"
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </AnimatedSection>

          {/* LADO DERECHO: Imagen Interactiva + Botón */}
          <AnimatedSection variant="fadeLeft" className="lg:col-span-7 flex flex-col gap-8 mt-8 lg:mt-0 items-center">
            
            {/* Contenedor de la Imagen con Marco Blanco */}
            <Link href={activeEvent.href} className="relative w-[90%] md:w-[85%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-[8px] ring-white bg-white group cursor-pointer">
              
              {/* Crossfade de imágenes superpuestas */}
              {EVENT_CATEGORIES.map((event) => (
                <Image 
                  key={event.id}
                  src={event.image}
                  alt={event.title}
                  fill
                  priority={event.id === 'matrimonios'}
                  className={cn(
                    "object-cover transition-all duration-1000 ease-in-out group-hover:scale-105",
                    activeEventId === event.id ? "opacity-100 z-10" : "opacity-0 z-0 scale-110"
                  )}
                />
              ))}
              
              {/* Overlay sutil al hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-20" />
            </Link>
            
            {/* Botón Dinámico Separado */}
            <Link 
              href={activeEvent.href}
              className="inline-flex items-center gap-3 bg-[#722F37] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em] shadow-lg hover:shadow-2xl hover:bg-[#5a252b] transition-all duration-300 hover:-translate-y-1 group/btn"
            >
              Ver más y galería
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>

          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
