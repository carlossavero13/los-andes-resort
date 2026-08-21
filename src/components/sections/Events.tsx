"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Cake,
  Heart,
  Building2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);

  const events = [
    {
      title: "Eventos Corporativos",
      icon: Building2,
      desc: "Espacios versátiles e inspiradores para team buildings, reuniones empresariales y eventos de integración.",
      image: "/images/events/ev1.png"
    },
    {
      title: "Full Day Colegios",
      icon: GraduationCap,
      desc: "Programas diseñados para colegios con actividades recreativas, áreas verdes y seguridad garantizada para los estudiantes.",
      image: "/images/events/ev2.png"
    },
    {
      title: "Matrimonios",
      icon: Heart,
      desc: "Un escenario de ensueño para el día más importante de tu vida, rodeado de hermosos jardines y elegancia rústica.",
      image: "/images/events/ev3.png"
    },
    {
      title: "Cumpleaños",
      icon: Cake,
      desc: "Celebra tu día especial en un entorno natural con piscinas, áreas verdes y atención personalizada para ti y tus invitados.",
      image: "/images/hero/hero-1.png"
    },
  ];

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16 md:mt-24">
          
          {/* Lista Interactiva (Acordeón) */}
          <AnimatedSection variant="fadeRight" className="flex flex-col gap-2 md:gap-4">
            {events.map((event, index) => {
              const isActive = activeIndex === index;
              const Icon = event.icon;
              return (
                <div 
                  key={event.title}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer border-l-[3px] transition-all duration-500 pl-6 md:pl-8 py-4 md:py-6 ${
                    isActive ? "border-[#722F37] bg-forest/[0.03]" : "border-forest/10 hover:border-forest/30 hover:bg-forest/[0.01]"
                  }`}
                >
                  <div className="flex items-center gap-5 mb-2">
                    <Icon 
                      className={`w-6 h-6 transition-colors duration-500 ${isActive ? "text-[#722F37]" : "text-forest/40"}`} 
                      strokeWidth={1.5} 
                    />
                    <h3 className={`font-playfair text-2xl md:text-3xl lg:text-4xl transition-colors duration-500 font-light ${isActive ? "text-forest" : "text-forest/40"}`}>
                      {event.title}
                    </h3>
                  </div>
                  
                  <div className={`grid transition-all duration-500 overflow-hidden ${isActive ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-6" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-forest/70 font-inter font-light text-sm md:text-base leading-relaxed mb-6 md:mb-8 pr-4">
                        {event.desc}
                      </p>
                      
                      {/* En móvil, mostrar la imagen debajo del texto cuando está activo */}
                      <div className="lg:hidden relative h-64 w-full rounded-2xl overflow-hidden mb-8 border border-forest/10 shadow-lg">
                         <Image
                           src={event.image}
                           alt={event.title}
                           fill
                           className="object-cover"
                         />
                      </div>

                      <a
                        href={getWhatsAppUrl(`Hola, me gustaría cotizar un evento de ${event.title} en Los Andes Club Resort`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-gold hover:text-[#722F37] font-inter text-xs md:text-sm tracking-[0.2em] uppercase font-semibold transition-colors"
                      >
                        Cotizar Evento
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>

          {/* Imagen Dinámica (Desktop) */}
          <AnimatedSection variant="fadeLeft" className="hidden lg:block h-[650px] relative rounded-[2rem] overflow-hidden shadow-2xl border border-forest/5">
            {events.map((event, index) => (
              <Image
                key={event.image}
                src={event.image}
                alt={event.title}
                fill
                quality={90}
                className={`object-cover transition-all duration-1000 ${
                  activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                }`}
              />
            ))}
            {/* Gradiente sutil para darle más dramatismo y contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            
            {/* Texto flotante en la imagen */}
            <div className="absolute bottom-10 left-10 right-10">
               <h4 className="font-playfair text-3xl text-white mb-2">
                 {events[activeIndex].title}
               </h4>
               <p className="font-inter text-white/70 text-sm font-light">
                 Hacemos tus momentos inolvidables.
               </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
