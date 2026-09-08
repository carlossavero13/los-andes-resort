"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

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
    image: "/images/events/fullday_colegios/f_day_cole2.webp",
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

        {/* GRID DE CATEGORÍAS DE EVENTOS */}
        <AnimatedSection variant="fadeUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {EVENT_CATEGORIES.map((event) => (
              <Link
                key={event.id}
                href={event.href}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Imagen de fondo */}
                <Image 
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Overlay oscuro con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Contenido inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl text-white font-medium leading-tight mb-4">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gold text-xs font-inter uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Ver más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
