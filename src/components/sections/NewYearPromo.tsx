"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/utils";

export default function NewYearPromo() {
  const whatsappUrl = getWhatsAppUrl(
    "¡Hola! Quisiera más información y reservar la Promoción Especial de Año Nuevo 2027 en Los Andes Club Resort."
  );

  return (
    <section
      id="promocion-ano-nuevo"
      className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden border-b border-forest/5"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-forest/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          subtitle="Promoción Especial"
          title="Año Nuevo 2027"
        />

        {/* Promotional Banner / Image container */}
        <AnimatedSection variant="zoomIn" className="mt-8 md:mt-12">
          <div className="relative max-w-5xl mx-auto group">
            {/* Subtle glow border behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-forest/10 to-gold/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-black/5 border border-gold/20">
              {/* Desktop Image */}
              <div className="hidden md:block w-full">
                <Image
                  src="/images/promociones/ano-nuevo-2027-desktop.webp"
                  alt="Promoción Especial Año Nuevo 2027 - Los Andes Club Resort"
                  width={1672}
                  height={941}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  sizes="(min-width: 1024px) 1120px, 100vw"
                />
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden w-full">
                <Image
                  src="/images/promociones/ano-nuevo-2027-mobile.webp"
                  alt="Promoción Especial Año Nuevo 2027 - Los Andes Club Resort"
                  width={1024}
                  height={1280}
                  priority
                  className="w-full max-w-md mx-auto h-auto object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#581e1d] hover:bg-[#7A3533] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Consultar Promoción por WhatsApp</span>
            </a>
            <span className="text-xs uppercase tracking-widest text-forest/60 font-medium">
              Cupos limitados
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
