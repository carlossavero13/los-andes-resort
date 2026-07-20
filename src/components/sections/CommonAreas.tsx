"use client";

import Image from "next/image";
import { PawPrint } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CommonAreas() {
  const categories = [
    {
      id: "relax",
      title: "Agua & Naturaleza",
      image: "/images/hero/hero-1.png",
      className: "md:col-span-2 lg:col-span-2 lg:row-span-2 h-[400px] lg:h-auto",
      items: [
        "Piscina con ingreso tipo playa (profundidad gradual hasta 1.65m)",
        "Amplias áreas verdes para picnic",
        "100% Pet Friendly en espacios abiertos"
      ]
    },
    {
      id: "services",
      title: "Gastronomía",
      image: "/images/restaurant/res1.png",
      className: "md:col-span-1 lg:col-span-1 h-[350px] md:h-[300px] lg:h-[350px]",
      items: [
        "Restaurant con vista panorámica",
        "Bar con coctelería de autor",
      ]
    },
    {
      id: "games",
      title: "Juegos de Salón",
      image: "/images/areas/j_demesa.png", 
      className: "md:col-span-1 lg:col-span-1 h-[350px] md:h-[300px] lg:h-[350px]",
      items: [
        "Mesas de Billar y Ping Pong",
        "Juego de Sapito Clásico",
        "Fútbol de Mano"
      ]
    },
    {
      id: "sports",
      title: "Deportes & Niños",
      image: "/images/areas/areaverde.png",
      className: "md:col-span-2 lg:col-span-2 h-[350px] md:h-[300px] lg:h-[350px]",
      items: [
        "Canchas de Fútbol (Grass natural) y Vóley",
        "Juegos Inflables (Fines de semana)",
        "Zona de columpios y juegos recreativos"
      ]
    },
  ];

  return (
    <section id="areas" className="py-24 md:py-32 bg-light-bg relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-forest/10 to-transparent" style={{ right: '10%' }} />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-forest/10 to-transparent" style={{ right: '90%' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
        <AnimatedSection variant="fadeUp" className="mb-16">
          <div className="text-center">
            <span className="inline-block text-forest/40 font-inter font-light tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6">
              Instalaciones Completas
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest font-light tracking-tight mb-8">
              Todo lo que Necesitas
            </h2>
          </div>
        </AnimatedSection>

        {/* Bento Grid Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16 auto-rows-min">
          {categories.map((category, index) => (
              <AnimatedSection
              key={category.id}
              variant="fadeUp"
              delay={index * 0.1}
              className={`relative rounded-3xl overflow-hidden group ${category.className} bg-white border border-forest/10 hover:border-gold/40 hover:shadow-[0_20px_40px_rgba(196,162,101,0.15)] transition-all duration-700`}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              {/* Gradiente oscuro superior e inferior para legibilidad del título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:from-black/80 md:via-black/10 opacity-90 md:opacity-0 md:group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="w-8 h-[1px] bg-gold mb-4 transform group-hover:w-12 transition-all duration-700" />
                <h3 className="font-playfair font-light text-2xl md:text-3xl text-white mb-4 md:mb-6 group-hover:-translate-y-4 md:group-hover:translate-y-0 transition-transform duration-700 drop-shadow-md">
                  {category.title}
                </h3>
                
                {/* Panel Glassmorphism (Sólo en Desktop). En móvil es texto directo elegante */}
                <div className="md:bg-white/95 md:backdrop-blur-md md:border md:border-forest/10 md:rounded-2xl md:p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-700 md:shadow-xl">
                  <ul className="space-y-3 md:space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 md:gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        <span className="font-inter font-light tracking-wide text-white/90 md:text-forest/80 text-xs md:text-sm leading-relaxed md:drop-shadow-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Highlight Banner Horario */}
        <AnimatedSection variant="fadeUp" delay={0.4} className="mt-20">
          <div className="border-t border-b border-forest/10 py-10 flex flex-col lg:flex-row items-center justify-between gap-10 bg-gradient-to-r from-transparent via-forest/[0.02] to-transparent">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
              <span className="text-[10px] font-inter uppercase tracking-[0.4em] text-forest/40">
                Horario de Atención
              </span>
              <span className="font-playfair font-light text-forest text-2xl md:text-3xl">
                Lunes a Domingo <span className="text-forest/60 italic">· 10:00 AM - 5:00 PM</span>
              </span>
            </div>

            <div className="flex items-center">
              <span className="border border-gold/30 text-gold bg-gold/5 px-8 py-3 rounded-full font-inter font-medium tracking-[0.2em] text-xs uppercase flex items-center gap-3">
                <PawPrint className="w-4 h-4" />
                Pet Friendly
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
