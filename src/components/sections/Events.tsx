"use client";

import {
  Cake,
  Heart,
  Building2,
  Megaphone,
  Users,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Events() {
  const events = [
    {
      title: "Cumpleaños",
      icon: Cake,
      desc: "Celebra tu día especial en un entorno natural con piscinas, áreas verdes y atención personalizada para ti y tus invitados.",
    },
    {
      title: "Matrimonios",
      icon: Heart,
      desc: "Un escenario de ensueño para el día más importante de tu vida, rodeado de hermosos jardines y elegancia rústica.",
    },
    {
      title: "Eventos Corporativos",
      icon: Building2,
      desc: "Espacios versátiles e inspiradores para team buildings, reuniones empresariales y eventos de integración.",
    },
    {
      title: "Promociones",
      icon: Megaphone,
      desc: "Aprovecha nuestras promociones especiales y paquetes diseñados para temporadas, fechas festivas y grupos.",
    },
    {
      title: "Reuniones Familiares",
      icon: Users,
      desc: "El lugar ideal para reunir a toda la familia, desde los más pequeños hasta los abuelos, y crear recuerdos invaluables.",
    },
  ];

  return (
    <section id="eventos" className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-forest/5">
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <SectionHeading
          subtitle="Celebra con Nosotros"
          title="Eventos Especiales"
        />

        <p className="text-forest/60 text-center max-w-2xl mx-auto mb-24 font-inter font-light text-sm md:text-base tracking-wide leading-relaxed">
          El escenario perfecto para tus celebraciones más importantes. Ofrecemos
          espacios rodeados de naturaleza, gastronomía de primer nivel y un 
          servicio impecable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => {
            const Icon = event.icon;
            
            // To make 5 items look good in a 3-col grid, center the last two
            const isLastRow = index >= 3;

            return (
              <AnimatedSection
                key={event.title}
                variant="fadeUp"
                delay={index * 0.1}
                className={`group bg-light-bg border border-gold/20 rounded-2xl p-10 hover:border-gold/40 hover:bg-white hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(196,162,101,0.1)] transition-all duration-700 flex flex-col h-full relative overflow-hidden ${
                  isLastRow && index === 3 ? "lg:col-start-1 lg:translate-x-1/2" : ""
                } ${
                  isLastRow && index === 4 ? "lg:col-start-2 lg:translate-x-1/2" : ""
                }`}
              >
                {/* Glow sutil al fondo de la tarjeta */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-[40px] group-hover:bg-gold/10 transition-colors duration-700" />

                <div className="mb-10 text-gold/80 group-hover:text-gold transition-all duration-700 transform group-hover:scale-110 origin-left">
                  <Icon
                    className="w-12 h-12"
                    strokeWidth={1}
                  />
                </div>

                <h3 className="font-playfair text-2xl md:text-3xl font-light text-forest mb-4">
                  {event.title}
                </h3>

                <p className="text-forest/70 text-sm leading-relaxed font-inter font-light tracking-wide flex-1 mb-10">
                  {event.desc}
                </p>

                <div className="w-12 h-[1px] bg-gold/30 mb-8 transition-all duration-700 group-hover:w-full group-hover:bg-gold/60" />

                <a
                  href={getWhatsAppUrl(
                    `Hola, me gustaría cotizar un evento de ${event.title} en Los Andes Club Resort`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-4 text-forest font-inter font-medium text-[10px] md:text-xs tracking-[0.3em] uppercase hover:text-white transition-colors mt-auto group/btn border border-gold/40 px-6 py-4 rounded-xl hover:bg-gold hover:border-gold"
                >
                  Cotizar
                  <div className="w-6 h-6 rounded-full bg-forest/5 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                    <ArrowRight className="w-3 h-3 text-forest group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-500" />
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
