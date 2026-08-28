"use client";

import Image from "next/image";
import { Leaf, Sun, Coffee } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -z-10 clip-path-slant shadow-2xl opacity-50" />
      <div className="absolute -left-32 top-40 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Sobre Nosotros"
          title="Nuestra Historia"
        />

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-16 md:mt-24">
          
          <AnimatedSection variant="fadeRight" className="order-2 md:order-1">
            <span className="flex items-center gap-4 text-gold font-inter tracking-[0.4em] uppercase text-[10px] md:text-xs font-medium mb-6">
              <span className="w-8 h-[1px] bg-gold" /> Esencia Los Andes
            </span>
            <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest mb-8 font-light leading-tight">
              Donde la naturaleza <br/><span className="italic text-[#722F37]">abraza tu descanso</span>
            </h3>
            
            <div className="space-y-6 font-inter font-light text-forest/70 leading-relaxed text-sm md:text-base tracking-wide relative">
              {/* Decorative line on the left */}
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold/50 to-transparent -ml-6 hidden md:block" />
              
              <p>
                Enclavado en el corazón del hermoso valle de Cieneguilla, nuestro resort nace como un oasis
                de tranquilidad. Aquí, cada amanecer te recibe con el canto de las aves, el sol radiante
                todo el año y la brisa fresca de las montañas.
              </p>
              <p>
                Diseñado exclusivamente para familias y parejas que buscan escapar de la ciudad, ofrecemos un 
                equilibrio perfecto entre el encanto rústico del campo y el máximo confort de un club privado.
              </p>
            </div>
            
            {/* Pequeños Highlights */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-10 border-t border-forest/10 pt-8">
              <div className="flex flex-col gap-2">
                <Sun className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <span className="font-playfair text-lg md:text-xl text-forest">Sol</span>
                <span className="font-inter text-[9px] md:text-xs text-forest/50 uppercase tracking-widest">Todo el año</span>
              </div>
              <div className="flex flex-col gap-2">
                <Leaf className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <span className="font-playfair text-lg md:text-xl text-forest">Naturaleza</span>
                <span className="font-inter text-[9px] md:text-xs text-forest/50 uppercase tracking-widest">Aire puro</span>
              </div>
              <div className="flex flex-col gap-2">
                <Coffee className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <span className="font-playfair text-lg md:text-xl text-forest">Confort</span>
                <span className="font-inter text-[9px] md:text-xs text-forest/50 uppercase tracking-widest">Relajación</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Images Collage */}
          <AnimatedSection variant="fadeLeft" className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full order-1 md:order-2 group">
            
            {/* Elemento decorativo circular de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border border-gold/20 animate-spin-slow pointer-events-none" />

            {/* Imagen Principal (Arriba Izquierda) */}
            <div className="absolute top-0 left-0 w-[75%] h-[75%] overflow-hidden rounded-3xl shadow-2xl z-10 group-hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute inset-0 bg-black/10 z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
              <Image 
                src="/images/gallery/vista.jpeg" 
                alt="Vista panorámica Los Andes" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
              />
            </div>
            
            {/* Imagen Secundaria (Abajo Derecha) */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-white p-2 sm:p-3 rounded-2xl z-20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-700">
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image 
                  src="/images/gallery/danza.jpeg" 
                  alt="Danzas y tradiciones" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Sello / Badge flotante */}
            <div className="absolute -top-4 -right-2 md:top-10 md:-right-6 z-30 w-20 h-20 md:w-24 md:h-24 bg-forest rounded-full flex items-center justify-center text-center p-2 shadow-xl border-4 border-white animate-bounce-slow">
              <span className="text-white font-inter text-[8px] md:text-[10px] uppercase tracking-widest leading-tight">
                El <br/><span className="text-gold font-playfair text-base md:text-lg italic capitalize">Mejor</span><br/> Clima
              </span>
            </div>
          </AnimatedSection>
          
        </div>

      </div>
      
      {/* CSS adicional */}
      <style dangerouslySetInnerHTML={{__html: `
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-bounce-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}
