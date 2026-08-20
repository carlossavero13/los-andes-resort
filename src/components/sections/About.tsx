"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function About() {
  const stats = [
    { value: 3, prefix: "+", suffix: "", label: "Años de Tradición" },
    { value: 5, prefix: "", suffix: "k+", label: "Familias Felices" },
    { value: 100, prefix: "", suffix: "%", label: "Desconexión Total" },
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Elementos Decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 -z-10 clip-path-slant shadow-2xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Nuestra Historia"
          title="Un Refugio de Naturaleza"
        />

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-20">
          
          <AnimatedSection variant="fadeRight" className="order-2 md:order-1">
            <span className="text-gold font-inter tracking-[0.4em] uppercase text-[10px] md:text-xs font-medium mb-6 block">
              Esencia Los Andes
            </span>
            <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest mb-10 font-light leading-tight">
              Donde la naturaleza <br/><span className="italic text-forest/70">abraza tu descanso</span>
            </h3>
            
            <div className="space-y-6 font-inter font-light text-forest/70 leading-relaxed text-sm md:text-base tracking-wide">
              <p>
                Enclavado en el corazón del hermoso valle de Cieneguilla, nuestro resort nace como un oasis
                de tranquilidad. Aquí, cada amanecer te recibe con el canto de las aves, el sol radiante
                todo el año y la brisa fresca de las montañas.
              </p>
              <p>
                Diseñado exclusivamente para familias y parejas que buscan escapar de la ciudad, ofrecemos un 
                equilibrio perfecto entre el encanto rústico del campo y el máximo confort de un club privado.
              </p>
              <p>
                Cada detalle ha sido pensado para que el tiempo se detenga: desde nuestras inmensas áreas verdes, 
                hasta el cálido servicio de nuestro equipo. En <span className="italic text-forest">Los Andes Club Resort</span>, no solo vienes a hospedarte; 
                vienes a crear recuerdos que durarán toda la vida.
              </p>
            </div>
            
            <div className="mt-14">
               <Image src="/images/los_andes_logo.png" alt="Logo Los Andes" width={100} height={50} className="opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 object-contain" />
            </div>
          </AnimatedSection>

          {/* Images Collage (Editorial Style) */}
          <AnimatedSection variant="fadeLeft" className="relative h-[500px] lg:h-[650px] w-full order-1 md:order-2 hidden md:block">
            <div className="absolute top-0 left-0 w-[75%] h-[65%] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gold/30 z-10">
              <Image 
                src="/images/hero/hero-1.png" 
                alt="Piscina Los Andes" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-[3000ms]"
              />
            </div>
            
            {/* Foto Inferior Derecha */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[55%] overflow-hidden rounded-2xl bg-white p-3 z-20 shadow-2xl border border-gold/20">
              <div className="relative w-full h-full overflow-hidden rounded-xl border border-gold/10">
                <Image 
                  src="/images/areas/areaverde.png" 
                  alt="Áreas verdes Los Andes" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-[3000ms]"
                />
              </div>
            </div>
          </AnimatedSection>
          
          {/* Versión móvil de la foto */}
          <div className="md:hidden relative h-[300px] w-full rounded-[2rem] overflow-hidden shadow-xl order-1 mb-8">
            <Image 
              src="/images/areas/areaverde.png" 
              alt="Jardines Los Andes" 
              fill 
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-forest/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                variant="slideUp"
                delay={index * 0.1}
                className="text-center group"
              >
                <div className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-forest mb-4 group-hover:text-gold transition-colors duration-500">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={1.5} />
                </div>
                <div className="font-inter text-[10px] md:text-xs text-forest/50 uppercase tracking-[0.4em] font-medium">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      
      {/* Estilo local para el fondo inclinado */}
      <style dangerouslySetInnerHTML={{__html: `
        .clip-path-slant {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
      `}} />
    </section>
  );
}
