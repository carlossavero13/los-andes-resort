"use client";

import Image from "next/image";
import { ArrowRight, Palmtree, Waves, Medal, Castle, ChefHat, Flower2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FullDay() {
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
          
          {/* Columna Izquierda: Imagen */}
          <AnimatedSection variant="fadeRight" className="order-2 lg:order-1">
            <div className="relative aspect-square md:aspect-[4/5] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero/hero-1.png" // O cualquier otra imagen bonita de exteriores/piscina
                alt="Piscina Full Day en Los Andes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                quality={90}
              />
              
              {/* Etiqueta flotante */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white flex flex-col gap-1">
                <span className="font-playfair text-xl md:text-2xl text-forest font-medium">De 10:00 AM</span>
                <span className="font-inter text-xs text-forest/60 uppercase tracking-widest font-semibold">a 5:00 PM</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Columna Derecha: Contenido */}
          <AnimatedSection variant="fadeLeft" className="order-1 lg:order-2 flex flex-col">
            <SectionHeading 
              subtitle="Pasa el día con nosotros" 
              title="Experiencia Full Day" 
              centered={false} 
            />
            
            <p className="text-forest/70 font-inter font-light text-base md:text-lg leading-relaxed mb-10 mt-6 max-w-lg">
              Desconéctate de la ciudad y disfruta de un día completo en nuestras instalaciones rodeadas de naturaleza, piscinas y exquisita gastronomía. Todo lo que necesitas para un día inolvidable con tu familia.
            </p>

            <h4 className="font-playfair text-xl md:text-2xl text-forest font-medium mb-6">¿Qué incluye?</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-8 mb-12">
              {fullDayIncludes.map((item, i) => {
                const Icon = item.icon;
                return (
                <div key={i} className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-[10px] bg-[#722F37]/5 border border-[#722F37]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#722F37]" strokeWidth={1.2} />
                  </div>
                  <span className="font-inter font-light text-forest/90 text-[15px] leading-relaxed">
                    {item.text}
                  </span>
                </div>
              )})}
            </div>

            <div>
              <a 
                href={getWhatsAppUrl("Hola, me gustaría solicitar información y hacer una reserva para un Full Day")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-4 bg-forest hover:bg-forest/90 text-gold px-10 py-5 rounded-xl font-inter text-xs md:text-sm uppercase tracking-[0.2em] font-medium transition-all shadow-[0_10px_30px_rgba(24,44,37,0.15)] hover:shadow-[0_10px_30px_rgba(24,44,37,0.25)] hover:-translate-y-1"
              >
                Solicitar Reserva
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
