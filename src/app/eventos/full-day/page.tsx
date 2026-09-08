"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, GraduationCap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getWhatsAppUrl } from "@/lib/utils";

const EVENT_DATA = {
  title: "Full Day para Colegios",
  subtitle: "Aventuras seguras e inolvidables",
  description: "Programas especialmente diseñados para instituciones educativas. Ofrecemos un entorno completamente cerrado y seguro donde los estudiantes podrán disfrutar de actividades recreativas, deportivas y de integración, siempre en contacto con la naturaleza.",
  benefits: ["Piscinas y juegos inflables", "Canchas deportivas", "Menús diseñados para niños/jóvenes", "Supervisión y zonas seguras"],
  images: [
    "/images/events/fullday_colegios/f_day_cole2.webp",
    "/images/events/fullday_colegios/f_day_cole1.webp",
    "/images/events/fullday_colegios/f_day_cole3.webp",
    "/images/events/fullday_colegios/f_day_cole4.webp",
    "/images/events/fullday_colegios/f_day_cole5.webp"
  ],
  whatsappMsg: "Hola, me gustaría información sobre el paquete Full Day para Colegios."
};

const isVideo = (url: string) => url.toLowerCase().endsWith('.mov') || url.toLowerCase().endsWith('.mp4');

export default function FullDayPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen relative overflow-hidden font-inter">
        <Navbar />
        <WhatsAppFloat />
        <ScrollToTop />

        {/* BOTÓN VOLVER */}
        <div className="absolute top-32 md:top-40 left-0 right-0 z-[70] w-full max-w-7xl mx-auto px-6 pointer-events-none">
          <Link 
            href="/#eventos"
            className="pointer-events-auto inline-flex items-center gap-2 text-white hover:text-gold transition-colors duration-300 font-inter text-xs md:text-sm uppercase tracking-[0.2em] font-semibold group bg-black/20 hover:bg-black/40 backdrop-blur-sm px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 w-max"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            Volver a eventos
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <Image
              src={EVENT_DATA.images[0]}
              alt="Hero Evento"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-20">
            <AnimatedSection variant="fadeUp" className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs md:text-sm font-inter tracking-[0.4em] uppercase font-bold drop-shadow-md">
                  Celebraciones Memorables
                </span>
              </div>
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6 drop-shadow-2xl">
                {EVENT_DATA.title}
              </h1>
              <p className="font-inter text-white/90 text-sm md:text-lg font-light leading-relaxed max-w-2xl drop-shadow-lg">
                {EVENT_DATA.subtitle}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <div className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-6">
          <section className="relative">
            <div className="flex flex-col gap-10 lg:gap-16 lg:items-start lg:flex-row">
              
              {/* TEXT CONTENT */}
              <AnimatedSection variant="fadeRight" className="w-full lg:w-5/12 flex flex-col justify-center lg:sticky lg:top-32">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white shadow-xl border border-forest/5 flex items-center justify-center shrink-0 -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <GraduationCap strokeWidth={1.2} className="w-7 h-7 md:w-10 md:h-10 text-[#722F37]" />
                  </div>
                  <div>
                    <span className="block text-gold text-[10px] md:text-xs font-inter uppercase tracking-[0.2em] font-bold mb-1.5 md:mb-2">
                      {EVENT_DATA.subtitle}
                    </span>
                    <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-forest font-light leading-tight">
                      {EVENT_DATA.title}
                    </h2>
                  </div>
                </div>

                <p className="font-inter text-forest/70 font-light text-base md:text-lg leading-relaxed mb-8 md:mb-10 text-justify md:text-left">
                  {EVENT_DATA.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10 md:mb-12">
                  {EVENT_DATA.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1 flex items-center justify-center shrink-0 relative">
                         <div className="absolute inset-0 bg-gold/20 rounded-full scale-0 group-hover/item:scale-150 transition-transform duration-300" />
                         <Check className="w-[18px] h-[18px] text-gold relative z-10" strokeWidth={2.5} />
                      </div>
                      <span className="font-inter text-sm md:text-[15px] text-forest/80 font-medium leading-relaxed group-hover/item:text-forest transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={getWhatsAppUrl(EVENT_DATA.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full md:w-max items-center justify-center gap-3 bg-forest hover:bg-forest-light text-white px-8 py-4 md:py-5 rounded-full font-inter text-sm md:text-base font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  Cotizar este evento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </AnimatedSection>

              {/* IMAGES GALLERY */}
              <AnimatedSection variant="fadeLeft" className="w-full lg:w-7/12">
                {EVENT_DATA.images.length === 1 ? (
                  <div className="relative w-full aspect-[4/3] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-forest/5 group lg:sticky lg:top-32">
                    {isVideo(EVENT_DATA.images[0]) ? (
                      <video src={EVENT_DATA.images[0]} autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />
                    ) : (
                      <Image src={EVENT_DATA.images[0]} alt={EVENT_DATA.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />
                    )}
                  </div>
                ) : (
                  <>
                    {/* Mobile View */}
                    <div className="flex lg:hidden overflow-x-auto gap-4 snap-x snap-mandatory pb-6 pt-2 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                      {EVENT_DATA.images.map((img, i) => (
                        <div key={i} className="relative w-[85vw] sm:w-[60vw] shrink-0 aspect-[4/3] snap-center rounded-3xl overflow-hidden shadow-lg border border-forest/5">
                          {isVideo(img) ? (
                            <video src={img} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                          ) : (
                            <Image src={img} alt={`${EVENT_DATA.title} ${i + 1}`} fill className="object-cover" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6 w-full auto-rows-[250px]">
                      {EVENT_DATA.images.map((img, i) => {
                        const isTall = i % 3 === 0;
                        return (
                          <div key={i} className={`relative w-full rounded-3xl overflow-hidden shadow-lg group border border-forest/5 ${isTall ? "row-span-2" : "row-span-1"}`}>
                            {isVideo(img) ? (
                              <video src={img} autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
                            ) : (
                              <Image src={img} alt={`${EVENT_DATA.title} foto ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                            )}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </AnimatedSection>

            </div>
          </section>
        </div>

        <Footer />
    </div>
  );
}
