"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const EVENT_CATEGORIES = [
  {
    id: "matrimonios",
    title: "Bodas y Matrimonios",
    description: "Celebra tu día especial en nuestras amplias áreas verdes. Ofrecemos espacios románticos y atención personalizada.",
    images: [
      "/images/events/matrimonio/matri1.webp",
      "/images/events/matrimonio/matri2.webp",
      "/images/events/matrimonio/matri3.webp"
    ],
  },
  {
    id: "fullday",
    title: "Full Day Colegios",
    description: "Días llenos de diversión y actividades recreativas en piscina y áreas deportivas, ideal para grupos y promociones.",
    images: [
      "/images/events/fullday_colegios/f_day_cole2.webp",
      "/images/events/fullday_colegios/f_day_cole3.webp",
      "/images/events/fullday_colegios/f_day_cole1.webp"
    ],
  },
  {
    id: "corporativo",
    title: "Eventos Corporativos",
    description: "Espacios y equipamiento perfecto para conferencias, dinámicas de Team Building y celebraciones empresariales.",
    images: [
      "/images/events/corporativo/corp3.webp",
      "/images/events/corporativo/corp2.webp",
      "/images/events/corporativo/corp6.webp"
    ],
  },
  {
    id: "cumpleanos",
    title: "Celebraciones",
    description: "Organiza cumpleaños y reuniones memorables en un ambiente festivo rodeado de naturaleza.",
    images: [
      "/images/events/cumple/cumple.webp"
    ],
  }
];

export default function Events() {
  const [activeEventId, setActiveEventId] = useState(EVENT_CATEGORIES[0].id);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const activeEvent = EVENT_CATEGORIES.find(e => e.id === activeEventId) || EVENT_CATEGORIES[0];

  // Resetear el scroll cuando cambias de categoría
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeEventId]);

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: "smooth" });
    }
  };

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
          <AnimatedSection variant="fadeUp" className="max-w-2xl mx-auto mt-6">
            <p className="font-inter text-forest/70 font-light text-base leading-relaxed">
              Descubre nuestros espacios diseñados exclusivamente para ti. Desde románticas bodas campestres hasta dinámicos Full Days.
            </p>
          </AnimatedSection>
        </div>

        {/* MODERN TABBED LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* LADO IZQUIERDO: Menú Elegante */}
          <AnimatedSection variant="fadeRight" className="lg:col-span-5 flex flex-col gap-2 md:gap-4">
            {EVENT_CATEGORIES.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEventId(event.id)}
                className="group relative text-left py-4 pl-6 md:pl-8 pr-4 transition-all duration-500 overflow-hidden rounded-r-2xl"
              >
                {/* Indicador animado de estado activo */}
                <div 
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ease-out", 
                    activeEventId === event.id 
                      ? "bg-gold scale-y-100 opacity-100" 
                      : "bg-forest/20 scale-y-50 opacity-0 group-hover:opacity-100 group-hover:scale-y-75"
                  )} 
                />
                
                {/* Fondo sutil activo */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent transition-opacity duration-500",
                    activeEventId === event.id ? "opacity-100" : "opacity-0"
                  )}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <h3 
                    className={cn(
                      "font-playfair text-xl md:text-2xl lg:text-3xl transition-all duration-500 tracking-tight", 
                      activeEventId === event.id 
                        ? "text-gray-900 font-medium translate-x-2" 
                        : "text-gray-400 font-light group-hover:text-gray-600 group-hover:translate-x-1"
                    )}
                  >
                    {event.title}
                  </h3>
                  <Sparkles 
                    className={cn(
                      "w-4 h-4 md:w-5 md:h-5 text-gold transition-all duration-500",
                      activeEventId === event.id ? "opacity-100 rotate-12 scale-100" : "opacity-0 -rotate-45 scale-50"
                    )}
                  />
                </div>
              </button>
            ))}
          </AnimatedSection>

          {/* LADO DERECHO: Imagen con Slider + Botón Separado */}
          <AnimatedSection variant="fadeLeft" className="lg:col-span-7 flex flex-col gap-6 mt-8 lg:mt-0">
            
            {/* Contenedor de Imagen Slider */}
            <div className="group relative w-[85%] mx-auto aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-[8px] ring-white bg-gray-100">
              
              <div 
                ref={sliderRef}
                className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {activeEvent.images.map((img, index) => (
                  <div key={`${activeEvent.id}-${index}`} className="relative min-w-full h-full snap-center shrink-0 group/slide">
                    <Image 
                      src={img}
                      alt={`${activeEvent.title} - Foto ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover/slide:scale-110"
                    />
                    
                    {/* Overlay oscuro mejorado (Gradient + leve Blur) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] pointer-events-none" />
                    
                    {/* Texto que aparece en Hover con márgenes de seguridad para las flechas */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-16 md:px-24 py-8 text-center opacity-0 group-hover/slide:opacity-100 transition-all duration-500 translate-y-4 group-hover/slide:translate-y-0 pointer-events-none">
                      <div className="w-10 h-1 bg-gold mb-5 md:mb-6 rounded-full shadow-lg" />
                      <p className="font-inter text-white text-sm md:text-lg font-light leading-relaxed drop-shadow-lg max-w-sm md:max-w-md">
                        {activeEvent.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Flechas de Navegación */}
              {activeEvent.images.length > 1 && (
                <>
                  <button 
                    onClick={scrollPrev}
                    className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110 shadow-xl"
                    aria-label="Anterior foto"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <button 
                    onClick={scrollNext}
                    className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110 shadow-xl"
                    aria-label="Siguiente foto"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>

                  {/* Indicador de Deslizar en Móviles (solo visible en dispositivos táctiles) */}
                  <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 text-white/90 z-10 pointer-events-none">
                    <ChevronLeft className="w-3 h-3" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Desliza</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </>
              )}
            </div>
            
            {/* Botón Separado y Centrado debajo de la imagen */}
            <div className="flex justify-center mt-2">
              <Link 
                href="/eventos"
                className="inline-flex items-center gap-2 bg-[#722F37] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-[#5a252b] transition-all hover:scale-105 active:scale-95 group/btn"
              >
                Ver más y galería
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
