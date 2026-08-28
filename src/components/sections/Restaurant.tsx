"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { UtensilsCrossed, Wine, Martini } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";

const RESTAURANT_IMAGES = [
  "/images/gallery/restaurante_1.png",
  "/images/gallery/restaurante_2.png",
  "/images/gallery/bar1.png",
  "/images/restaurant/res1.png",
  "/images/restaurant/res2.png",
  "/images/restaurant/res3.png"
];

export default function Restaurant() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % RESTAURANT_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="restaurante" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <SectionHeading 
            subtitle="Experiencia Gastronómica" 
            title="Restaurante" 
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content (Left) */}
          <AnimatedSection variant="fadeRight" className="flex flex-col min-w-0">
            <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#722F37] mb-8 font-light leading-tight">
              Sabores que complementan tu descanso
            </h3>
            
            <div className="space-y-6 font-inter font-light text-forest/70 leading-relaxed text-base md:text-lg mb-10 max-w-lg">
              <p>
                Nuestro restaurante ofrece una experiencia gastronómica que 
                eleva tu estadía. Seleccionamos ingredientes frescos y locales, 
                preparados con dedicación por nuestro equipo culinario.
              </p>
              <p>
                Desde la clásica <span className="italic font-medium text-[#722F37]">Trucha Frita</span> o nuestra tradicional <span className="italic font-medium text-[#722F37]">Pachamanca a la Piedra</span>, 
                hasta opciones internacionales contemporáneas; nuestra carta está diseñada 
                para deleitar todos los paladares en un ambiente campestre inigualable.
              </p>
            </div>

            {/* Menu Buttons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg w-full">
              <a 
                href={getWhatsAppUrl("Hola, me gustaría ver la Carta del restaurante")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#722F37] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-white hover:bg-[#5a252b] transition-all hover:-translate-y-1 shadow-lg"
              >
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-2 md:mb-3" strokeWidth={1.5} />
                <span className="font-inter font-medium underline underline-offset-2 md:underline-offset-4 text-[10px] sm:text-sm md:text-base">Carta</span>
              </a>
              <a 
                href={getWhatsAppUrl("Hola, me gustaría ver la carta del Bar")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#722F37] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-white hover:bg-[#5a252b] transition-all hover:-translate-y-1 shadow-lg"
              >
                <Martini className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-2 md:mb-3" strokeWidth={1.5} />
                <span className="font-inter font-medium underline underline-offset-2 md:underline-offset-4 text-[10px] sm:text-sm md:text-base">Bar</span>
              </a>
              <a 
                href={getWhatsAppUrl("Hola, me gustaría ver la carta de Vinos")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#722F37] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-white hover:bg-[#5a252b] transition-all hover:-translate-y-1 shadow-lg"
              >
                <Wine className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-2 md:mb-3" strokeWidth={1.5} />
                <span className="font-inter font-medium underline underline-offset-2 md:underline-offset-4 text-[10px] sm:text-sm md:text-base">Vinos</span>
              </a>
            </div>
          </AnimatedSection>

          {/* Premium Image Gallery (Right) */}
          <AnimatedSection variant="fadeLeft" className="w-full flex flex-col gap-4 lg:gap-6 mt-8 lg:mt-0 min-w-0">
            
            {/* Imagen Principal */}
            <div className="relative aspect-[4/3] lg:aspect-[4/5] lg:h-[520px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-forest/10 group">
              {RESTAURANT_IMAGES.map((src, index) => (
                <Image 
                  key={src}
                  src={src}
                  alt={`Platillo del restaurante ${index + 1}`}
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-all duration-1000 ${
                    index === currentImageIndex 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                />
              ))}
              {/* Degradado inferior para resaltar fotos muy claras */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Miniaturas (Thumbnails) */}
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {RESTAURANT_IMAGES.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 md:h-24 min-w-[5.5rem] md:min-w-[6.5rem] rounded-xl overflow-hidden shrink-0 snap-start transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-gold ring-offset-2 ring-offset-[#FDFBF7] shadow-lg opacity-100' 
                      : 'opacity-50 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                  aria-label={`Ir a foto ${index + 1}`}
                >
                  <Image 
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
