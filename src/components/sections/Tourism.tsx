"use client";

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
    image: "/images/tourism/ruinas.jpg",
    icon: Map,
  },
  {
    id: "rio",
    title: "El Río y Pueblos del Valle",
    description: "Conecta con el Río Lurín y visita pueblos pintorescos río arriba como Nieve Nieve y Antioquía, famosos por sus fachadas de colores.",
    distance: "A 15 - 30 min",
    image: "/images/tourism/rio.jpg",
    icon: Mountain,
  },
  {
    id: "plaza",
    title: "Plaza y Gastronomía",
    description: "Cieneguilla es famosa por sus restaurantes campestres. Disfruta de la mejor pachamanca y pasea por su tradicional plaza principal.",
    distance: "A 5 min (2.5 km)",
    image: "/images/tourism/plaza.jpg",
    icon: UtensilsCrossed,
  }
];

export default function Tourism() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {TOURIST_SPOTS.map((spot, index) => {
            const Icon = spot.icon;
            return (
              <AnimatedSection 
                key={spot.id} 
                variant="fadeUp" 
                delay={0.2 + (index * 0.15)}
                className="group relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white border border-forest/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-[450px]"
              >
                {/* Image Section */}
                <div className="relative w-full h-[55%] overflow-hidden">
                  <Image 
                    src={spot.image}
                    alt={spot.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white group-hover:bg-[#722F37] group-hover:border-[#722F37] group-hover:text-gold transition-colors duration-500">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1 bg-white relative">
                  {/* Distance Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-gold/10 text-[#722F37] px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase mb-3 w-fit">
                    {spot.distance}
                  </div>
                  
                  <h3 className="font-playfair text-2xl text-forest mb-3 font-medium group-hover:text-[#722F37] transition-colors duration-300">
                    {spot.title}
                  </h3>
                  <p className="font-inter text-sm text-forest/70 font-light leading-relaxed flex-1">
                    {spot.description}
                  </p>
                  
                  {/* Elegant decorative line */}
                  <div className="w-10 h-[1px] bg-gold mt-6 group-hover:w-full transition-all duration-700 ease-in-out opacity-60" />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
