"use client";

import { useState } from "react";
import Image from "next/image";
import { Map, Mountain, UtensilsCrossed, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const TOURIST_SPOTS = [
  {
    id: "ruinas",
    title: "Huaycán de Cieneguilla",
    description: "Zona arqueológica y centro administrativo Inca (Qhapaq Ñan). Descubre la historia antigua del valle con su clásica arquitectura de barro.",
    distance: "A 10 min (4 km)",
    image: "/images/tourism/huaycan_de_cieneguilla.png",
    icon: Map,
  },
  {
    id: "antioquia",
    title: "Pueblo de Antioquía",
    description: "Famoso por sus calles empedradas y coloridas casas pintadas con flores y aves. Un lugar perfecto para fotos inolvidables.",
    distance: "A 1 hora",
    image: "/images/tourism/Antioquia.jpg",
    icon: Mountain,
  },
  {
    id: "nieve",
    title: "Valle de Nieve Nieve",
    description: "Un pueblito encantador en la ruta hacia Antioquía, rodeado de campos de manzanos, membrillos y restos arqueológicos.",
    distance: "A 30 min",
    image: "/images/tourism/valle_nieve_nieve.png",
    icon: Map,
  },
  {
    id: "plaza",
    title: "Plaza de Cieneguilla",
    description: "El punto de encuentro tradicional del distrito. Ideal para una caminata relajada, disfrutar de su clima cálido y comprar artesanías.",
    distance: "A 5 min (2.5 km)",
    image: "/images/tourism/plaza_cieneguilla.png",
    icon: Mountain,
  },
  {
    id: "rio",
    title: "Ribera del Río Lurín",
    description: "El corazón natural del valle. Disfruta del sonido del agua, relájate en sus orillas y conecta con la naturaleza en estado puro.",
    distance: "A 5 min",
    image: "/images/tourism/riolurin.jpg",
    icon: Mountain,
  },
  {
    id: "comida",
    title: "Ruta Gastronómica",
    description: "Cieneguilla es el paraíso de los restaurantes campestres. Disfruta de la mejor pachamanca al pozo, chancho al palo y truchas frescas.",
    distance: "A 10 min",
    image: "/images/tourism/comida.jpg",
    icon: UtensilsCrossed,
  }
];

export default function Tourism() {
  const [activeSpot, setActiveSpot] = useState(TOURIST_SPOTS[0].id);

  return (
    <section id="turismo" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            subtitle="Explora Cieneguilla"
            title="Un Valle por Descubrir"
          />
        </AnimatedSection>
        
        <AnimatedSection variant="fadeUp" delay={0.2} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="font-inter text-forest/70 font-light leading-relaxed">
            Nuestro resort se encuentra en el corazón de Cieneguilla, rodeado de historia, 
            naturaleza y una exquisita tradición culinaria. Te invitamos a conocer lo que este hermoso valle tiene para ofrecerte.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row w-full h-[700px] lg:h-[550px] gap-2 lg:gap-4">
          {TOURIST_SPOTS.map((spot, index) => {
            const isActive = activeSpot === spot.id;
            const Icon = spot.icon;
            return (
              <AnimatedSection
                key={spot.id}
                variant="fadeUp"
                delay={0.1 * index}
                onMouseEnter={() => setActiveSpot(spot.id)}
                onClick={() => setActiveSpot(spot.id)}
                className={cn(
                  "relative overflow-hidden rounded-3xl transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group flex-shrink-0",
                  isActive 
                    ? "flex-grow-[5] basis-[250px] lg:basis-0" 
                    : "flex-grow-[1] basis-[60px] lg:basis-0"
                )}
              >
                <Image
                  src={spot.image}
                  alt={spot.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-[2000ms] ease-out",
                    isActive ? "scale-105" : "scale-100"
                  )}
                />
                
                {/* Gradiente oscuro que siempre cubre un poco para legibilidad */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700",
                  isActive ? "opacity-80" : "opacity-90 lg:opacity-60 group-hover:opacity-80"
                )} />

                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end z-10 overflow-hidden">
                  
                  {/* Vista Inactiva (Solo Desktop: Título vertical) */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 top-0 hidden lg:flex items-end justify-center pb-8 transition-opacity duration-300",
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  )}>
                    <h3 className="text-white/90 font-playfair text-xl tracking-wide whitespace-nowrap rotate-180" style={{ writingMode: 'vertical-rl' }}>
                      {spot.title}
                    </h3>
                  </div>

                  {/* Vista Inactiva (Solo Móvil: Título normal pero pequeñito) */}
                  <div className={cn(
                    "absolute bottom-4 left-4 right-4 lg:hidden transition-opacity duration-300",
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  )}>
                    <h3 className="text-white font-playfair text-base truncate">
                      {spot.title}
                    </h3>
                  </div>

                  {/* Vista Activa: Contenido Completo */}
                  <div className={cn(
                    "transition-all duration-700 ease-out flex flex-col",
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white shadow-sm">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <span className="bg-white/90 text-forest px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase shadow-md">
                        {spot.distance}
                      </span>
                    </div>
                    
                    <h3 className="font-playfair text-2xl lg:text-3xl text-white font-medium mb-2 leading-tight">
                      {spot.title}
                    </h3>
                    
                    <p className="font-inter text-sm lg:text-base text-white/80 font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                      {spot.description}
                    </p>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
