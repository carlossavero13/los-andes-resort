"use client";

import Image from "next/image";
import { ArrowRight, Palmtree, Waves, Medal, Castle, ChefHat, Flower2, Compass, PawPrint } from "lucide-react";
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
            <div className="relative aspect-[4/3] md:aspect-[4/5] lg:h-[700px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl">
              <Image 
                src="/images/hero/hero-1.png" // O cualquier otra imagen bonita de exteriores/piscina
                alt="Piscina Full Day en Los Andes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                quality={90}
              />
              
              {/* Etiqueta flotante 10 a 5 */}
              <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-xl border border-white flex flex-col gap-0.5 md:gap-1">
                <span className="font-playfair text-lg md:text-2xl text-forest font-medium">De 10:00 AM</span>
                <span className="font-inter text-[10px] md:text-xs text-forest/60 uppercase tracking-widest font-semibold">a 5:00 PM</span>
              </div>

              {/* Etiqueta flotante Pet Friendly */}
              <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-white/95 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 rounded-full shadow-xl border border-[#722F37]/10 flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
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

            {/* Nota Cuatrimotos */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-8 md:mb-10 flex items-start gap-4 shadow-sm">
              <div className="bg-[#722F37] text-white p-2 md:p-2.5 rounded-lg flex-shrink-0 mt-0.5">
                <Compass className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} /> 
              </div>
              <div>
                <h5 className="font-playfair text-[#722F37] font-semibold text-base md:text-lg mb-1">¡Suma aventura a tu día!</h5>
                <p className="font-inter text-forest/80 text-xs md:text-sm font-light leading-relaxed">
                  Pregunta por nuestro servicio de alquiler de <span className="font-medium text-forest">Cuatrimotos</span> para recorrer Cieneguilla. <span className="text-[#722F37]/70 text-[10px] md:text-xs block mt-0.5 uppercase tracking-wider">(Actividad con costo adicional)</span>
                </p>
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
