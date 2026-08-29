"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Palmtree, Waves, Medal, Castle, ChefHat, Flower2, Compass, PawPrint, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";

const FULLDAY_IMAGES = [
  "/images/gallery/piscina (2).jpeg",
  "/images/gallery/cuatrimoto_1.webp",
  "/images/gallery/cuatrimoto_2.webp",
  "/images/gallery/vista.jpeg",
  "/images/gallery/piscina (3).jpeg",
  "/images/areas/areaverde.png",
  "/images/areas/j_inflables.png"
];

export default function FullDay() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextImage = () => scrollToImage((currentImageIndex + 1) % FULLDAY_IMAGES.length);
  const prevImage = () => scrollToImage((currentImageIndex - 1 + FULLDAY_IMAGES.length) % FULLDAY_IMAGES.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % FULLDAY_IMAGES.length;
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ left: next * scrollRef.current.clientWidth, behavior: 'smooth' });
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index !== currentImageIndex) {
      setCurrentImageIndex(index);
    }
  };

  const fullDayIncludes = [
    { text: "Acceso libre a todas las instalaciones", icon: Palmtree },
    { text: "Uso de piscinas para adultos y niños", icon: Waves },
    { text: "Áreas deportivas y canchas", icon: Medal },
    { text: "Juegos infantiles y recreativos", icon: Castle },
    { text: "Vale de consumo para el restaurante", icon: ChefHat },
    { text: "Hermosas áreas verdes y jardines", icon: Flower2 },
  ];

  return (
    <section id="fullday" className="py-24 md:py-32 bg-white relative overflow-hidden z-20">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Carrusel de Imagen */}
          <AnimatedSection variant="fadeRight" className="order-2 lg:order-1 min-w-0">
            <div className="relative aspect-[4/3] md:aspect-[4/5] lg:h-[700px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl group">
              
              {/* Contenedor escroleable swipe */}
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide hide-scrollbar relative"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {FULLDAY_IMAGES.map((src, index) => (
                  <div key={src} className="w-full h-full flex-shrink-0 snap-center relative">
                    <Image 
                      src={src}
                      alt={`Full Day en Los Andes ${index + 1}`}
                      fill
                      className="object-cover"
                      quality={100}
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              {/* Botones de Navegación del Carrusel */}
              <div className="absolute inset-0 flex items-center justify-between p-4 z-20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button 
                  onClick={prevImage}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/50 transition-colors shadow-lg pointer-events-auto"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/50 transition-colors shadow-lg pointer-events-auto"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Indicadores de página (dots) */}
              <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
                {FULLDAY_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToImage(idx)}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50 w-2 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              
              {/* Etiqueta flotante 9:30 a 5 */}
              <div className="absolute bottom-12 md:bottom-20 left-4 md:left-10 bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-xl border border-white flex flex-col gap-0.5 md:gap-1 z-30">
                <span className="font-playfair text-lg md:text-2xl text-forest font-medium">De 9:30 AM</span>
                <span className="font-inter text-[10px] md:text-xs text-forest/60 uppercase tracking-widest font-semibold">a 5:00 PM</span>
              </div>

              {/* Etiqueta flotante Pet Friendly */}
              <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-white/95 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 rounded-full shadow-xl border border-[#722F37]/10 flex items-center gap-2 transform hover:scale-105 transition-transform duration-300 z-30">
                <PawPrint className="text-[#722F37] w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                <span className="font-inter font-bold text-forest text-[10px] md:text-sm tracking-wide">100% Pet Friendly</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Columna Derecha: Contenido */}
          <AnimatedSection variant="fadeLeft" className="order-1 lg:order-2 flex flex-col pt-6 md:pt-0">
            <SectionHeading 
              subtitle="Pasa el día con nosotros" 
              title="Experiencia Full Day" 
              centered={false} 
            />
            
            <p className="text-forest/70 font-inter font-light text-sm md:text-lg leading-relaxed mb-8 md:mb-10 mt-4 md:mt-6 max-w-lg">
              Desconéctate de la ciudad y disfruta de un día completo en nuestras instalaciones rodeadas de naturaleza, piscinas y exquisita gastronomía. Todo lo que necesitas para un día inolvidable con tu familia.
            </p>

            <h4 className="font-playfair text-lg md:text-2xl text-forest font-medium mb-5 md:mb-6">¿Qué incluye?</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-7 gap-x-8 mb-8 md:mb-12">
              {fullDayIncludes.map((item, i) => {
                const Icon = item.icon;
                return (
                <div key={i} className="flex items-center gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-[10px] bg-[#722F37]/5 border border-[#722F37]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-[#722F37]" strokeWidth={1.5} />
                  </div>
                  <span className="font-inter font-light text-forest/90 text-sm md:text-[15px] leading-snug md:leading-relaxed">
                    {item.text}
                  </span>
                </div>
              )})}
            </div>

            {/* Nota Cuatrimotos (Diseño Moderno) */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white to-[#722F37]/[0.03] border border-[#722F37]/15 rounded-2xl p-6 md:p-7 mb-8 md:mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-[0_8px_30px_rgba(114,47,55,0.06)] transition-all duration-300">
              
              {/* Icono de fondo decorativo */}
              <Compass className="absolute -right-4 -bottom-4 w-32 h-32 text-[#722F37]/[0.04] rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 ease-out" strokeWidth={1} />

              <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(114,47,55,0.08)] border border-[#722F37]/10 group-hover:scale-110 transition-transform duration-500">
                  <Compass className="w-5 h-5 text-[#722F37]" strokeWidth={1.5} /> 
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-2 mb-2.5">
                    <h5 className="font-playfair text-[#722F37] font-medium text-xl md:text-2xl tracking-wide">
                      ¡Suma aventura a tu día!
                    </h5>
                    <span className="inline-flex w-max bg-[#722F37]/5 border border-[#722F37]/10 text-[#722F37] px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold">
                      Costo Adicional
                    </span>
                  </div>
                  <p className="font-inter text-forest/80 text-sm font-light leading-relaxed max-w-[95%]">
                    Pregunta por nuestro exclusivo servicio de alquiler de <strong className="font-semibold text-[#722F37]">Cuatrimotos</strong> y recorre los paisajes de Cieneguilla para vivir una experiencia inolvidable.
                  </p>
                </div>

              </div>
            </div>

            <div>
              <a 
                href={getWhatsAppUrl("Hola, me gustaría solicitar información y hacer una reserva para un Full Day")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex justify-center items-center gap-3 md:gap-4 bg-forest hover:bg-forest/90 text-gold px-8 md:px-10 py-4 md:py-5 rounded-xl font-inter text-[11px] md:text-sm uppercase tracking-[0.2em] font-bold transition-all shadow-[0_10px_30px_rgba(24,44,37,0.15)] hover:shadow-[0_10px_30px_rgba(24,44,37,0.25)] hover:-translate-y-1"
              >
                Solicitar Reserva
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
