"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { UtensilsCrossed, Wine, Martini } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";

const RESTAURANT_IMAGES = [
  "/images/restaurant/res1.png",
  "/images/restaurant/res2.png",
  "/images/restaurant/res3.png",
  "/images/restaurant/res4.png"
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
    <section id="restaurante" className="py-24 md:py-32 bg-[#faf3e8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <SectionHeading 
            subtitle="Experiencia Gastronómica" 
            title="Restaurante" 
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content (Left) */}
          <AnimatedSection variant="fadeRight" className="flex flex-col">
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
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <a 
                href={getWhatsAppUrl("Hola, me gustaría ver la Carta del restaurante")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#722F37] rounded-2xl p-6 flex flex-col items-center justify-center text-white hover:bg-[#5a252b] transition-all hover:-translate-y-1 shadow-lg"
              >
                <UtensilsCrossed className="w-8 h-8 mb-3" strokeWidth={1.5} />
                <span className="font-inter font-medium underline underline-offset-4 text-sm md:text-base">Carta</span>
              </a>
              <a 
                href={getWhatsAppUrl("Hola, me gustaría ver la carta del Bar")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#722F37] rounded-2xl p-6 flex flex-col items-center justify-center text-white hover:bg-[#5a252b] transition-all hover:-translate-y-1 shadow-lg"
              >
                <Martini className="w-8 h-8 mb-3" strokeWidth={1.5} />
                <span className="font-inter font-medium underline underline-offset-4 text-sm md:text-base">Bar</span>
              </a>
              <a 
                href={getWhatsAppUrl("Hola, me gustaría ver la carta de Vinos")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#722F37] rounded-2xl p-6 flex flex-col items-center justify-center text-white hover:bg-[#5a252b] transition-all hover:-translate-y-1 shadow-lg"
              >
                <Wine className="w-8 h-8 mb-3" strokeWidth={1.5} />
                <span className="font-inter font-medium underline underline-offset-4 text-sm md:text-base">Vinos</span>
              </a>
            </div>
          </AnimatedSection>

          {/* Image Slideshow (Right) */}
          <AnimatedSection variant="fadeLeft">
            <div className="relative aspect-square md:aspect-[4/5] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-forest/5">
              {RESTAURANT_IMAGES.map((src, index) => (
                <Image 
                  key={src}
                  src={src}
                  alt={`Platillo del restaurante ${index + 1}`}
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Controles del Carrusel (Dots) */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                {RESTAURANT_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 w-2 hover:bg-white/80'
                    }`}
                    aria-label={`Ir a foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
