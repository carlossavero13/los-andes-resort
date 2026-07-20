"use client";

import { MapPin, Navigation, MessageCircle, Car, Map as MapIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  GOOGLE_MAPS_EMBED,
  GOOGLE_MAPS_URL,
  RESORT_ADDRESS,
} from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 md:py-32 bg-forest relative overflow-hidden">
      
      {/* Elementos decorativos oscuros */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Encuéntranos" title="Ubicación" light />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-16">
          <AnimatedSection variant="fadeLeft">
            <div className="p-2 md:p-3 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div className="overflow-hidden rounded-[2rem] relative aspect-square lg:aspect-[4/5] bg-black">
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  loading="lazy"
                  allowFullScreen
                  title="Ubicación Los Andes Club Resort"
                  className="grayscale-[0.4] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1000ms]"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-gold/30 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_rgba(196,162,101,1)]" />
                  <span className="font-inter text-[10px] font-medium text-white uppercase tracking-[0.3em]">
                    Abierto Hoy
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection variant="fadeRight" className="lg:py-8">
            <h3 className="font-playfair text-3xl md:text-5xl font-light text-white mb-12 leading-tight">
              Tu escape está <br/><span className="italic text-gold">más cerca de lo que crees</span>
            </h3>
            
            <div className="flex items-start gap-6 mb-10">
              <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shadow-inner">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-inter text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2 font-medium">
                  Dirección
                </h4>
                <span className="text-white/90 font-playfair text-xl md:text-2xl font-light">
                  {RESORT_ADDRESS}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-12 pb-12 border-b border-gold/20">
              <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shadow-inner">
                <Car className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-inter text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3 font-medium">
                  Cómo Llegar desde Lima
                </h4>
                <p className="text-white/70 font-inter font-light text-sm md:text-base leading-relaxed">
                  Toma la Panamericana Sur y desvía hacia Cieneguilla. El trayecto 
                  es de aproximadamente 1 hora. El camino está 
                  totalmente asfaltado y señalizado. Contamos con <strong className="text-gold font-medium">estacionamiento 
                  privado y vigilado</strong> para tu total tranquilidad.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-gold text-forest px-8 py-4 rounded-xl font-inter font-semibold text-[10px] tracking-[0.25em] uppercase hover:bg-white transition-all shadow-[0_10px_30px_rgba(196,162,101,0.2)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
              >
                <MapIcon className="w-4 h-4" />
                Google Maps
              </a>
              
              <a
                href="https://waze.com/ul?q=Club%20Resort%20Los%20Andes%20Cieneguilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-gold/30 text-white hover:bg-gold/10 px-8 py-4 rounded-xl font-inter font-medium text-[10px] tracking-[0.25em] uppercase transition-all"
              >
                <Navigation className="w-4 h-4 text-gold" />
                Waze
              </a>

              <a
                href={getWhatsAppUrl("Hola, me gustaría saber cómo llegar a Los Andes Club Resort")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 text-gold/70 hover:text-gold px-8 py-4 font-inter font-medium text-[10px] tracking-[0.25em] uppercase transition-all underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
              >
                <MessageCircle className="w-4 h-4" />
                Preguntar por WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
