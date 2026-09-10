"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, ShieldCheck, Clock, X, AlertCircle, CreditCard , ChevronLeft, ChevronRight} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_MSG = "Hola, me gustaría cotizar un paquete de Full Day para Colegio en Los Andes.";

const BENEFICIOS = [
  "Uso exclusivo de áreas verdes y deportivas",
  "Piscina con supervisión constante",
  "Almuerzo nutritivo y bebida para estudiantes",
  "Espacios seguros y cerrados perimetralmente",
  "Canchas de fútbol y vóley",
  "Zona de descanso para profesores y padres"
];

const ITINERARIO = [
  { time: "09:00 AM", title: "Llegada y Bienvenida", desc: "Recepción de estudiantes y asignación de áreas." },
  { time: "10:00 AM", title: "Mañana Deportiva", desc: "Juegos, dinámicas al aire libre y uso de canchas." },
  { time: "12:30 PM", title: "Almuerzo de Confraternidad", desc: "Menú especial diseñado para los jóvenes." },
  { time: "02:00 PM", title: "Tarde de Piscina", desc: "Diversión acuática con monitoreo constante." },
  { time: "04:30 PM", title: "Despedida", desc: "Foto grupal y fin del evento." }
];

const GALLERY_MEDIA = [
  { type: "image", src: "/images/events/fullday_colegios/f_day_cole3.webp" },
  { type: "image", src: "/images/events/fullday_colegios/f_day_cole4.webp" },
  { type: "image", src: "/images/events/fullday_colegios/f_day_cole5.webp" }
];

export default function FullDayPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    if (isGalleryOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isGalleryOpen]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen relative overflow-hidden font-inter selection:bg-gold/30 selection:text-forest">
        <Navbar />
        <WhatsAppFloat />
        <ScrollToTop />

        {/* Botón Volver */}
        <div className="absolute top-28 lg:top-36 left-4 md:left-12 z-50">
          <Link 
            href="/#eventos"
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 md:px-5 py-2.5 rounded-full text-white font-inter text-xs tracking-widest uppercase border border-white/20 hover:bg-white hover:text-forest transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            Volver
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0 bg-forest">
            <Image
              src="/images/events/fullday_colegios/f_day_cole3.webp"
              alt="Full Day Colegios Los Andes"
              fill
              className="object-cover object-center opacity-70"
              priority
            />
            {/* Gradiente estilo editorial */}
            <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-[#FDFBF7]" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/60 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 mt-20">
            <AnimatedSection variant="fadeRight" className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full">
                <GraduationCap className="w-4 h-4 text-gold" />
                <span className="text-white text-xs font-inter tracking-[0.3em] uppercase font-bold drop-shadow-md">
                  Aventura & Seguridad
                </span>
              </div>
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-[1.1] mb-8 drop-shadow-2xl">
                Full Day <br/><span className="italic font-light text-gold">Colegios</span>
              </h1>
              <p className="font-inter text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl drop-shadow-lg lg:mx-0 mx-auto">
                Un entorno natural y cerrado, ideal para la integración de los estudiantes con total seguridad y diversión garantizada.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRO Y BENEFICIOS */}
        <section className="py-24 bg-[#FDFBF7] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              <AnimatedSection variant="fadeRight" className="lg:col-span-5">
                <div className="sticky top-32">
                  <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Seguridad Primero</span>
                  <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light leading-tight mb-8">
                    La Excursión Perfecta cerca de Lima
                  </h2>
                  <p className="font-inter text-forest/70 font-light text-lg leading-relaxed mb-10 text-justify">
                    A solo 40 minutos de Lima, en Cieneguilla, ofrecemos instalaciones 100% perimetradas donde los escolares pueden disfrutar de piscinas, áreas verdes y juegos con total libertad, mientras los profesores y padres tienen la tranquilidad de un espacio seguro.
                  </p>
                  
                  <div className="space-y-4">
                    {BENEFICIOS.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-gold" />
                        </div>
                        <span className="font-inter text-forest/90 font-medium text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeLeft" className="lg:col-span-7">
                <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-forest/5">
                  <div className="flex items-center gap-4 mb-8 border-b border-forest/10 pb-6">
                    <Clock className="w-8 h-8 text-gold" />
                    <h3 className="font-playfair text-3xl text-forest">Itinerario Sugerido</h3>
                  </div>
                  
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-forest/10 before:to-transparent">
                    {ITINERARIO.map((step, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-gold text-forest shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <span className="font-bold text-sm">{(idx + 1).toString().padStart(2, '0')}</span>
                        </div>
                        
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#FDFBF7] p-6 rounded-2xl border border-forest/5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                          <span className="text-gold font-bold text-xs uppercase tracking-widest mb-2 block">{step.time}</span>
                          <h4 className="font-playfair text-xl text-forest mb-2">{step.title}</h4>
                          <p className="font-inter text-forest/70 text-sm leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* GALERÍA MULTIMEDIA */}
        <section className="py-24 bg-[#FDFBF7] border-t border-forest/10">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection variant="fadeUp" className="text-center mb-16">
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Galería</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light">Diversión Asegurada</h2>
            </AnimatedSection>
            
            <div className="relative group">
  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 md:hidden pointer-events-none flex items-center justify-start">
    <ChevronLeft className="w-6 h-6 text-forest/70 ml-1 drop-shadow-md" />
  </div>
  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 md:hidden pointer-events-none flex items-center justify-end">
    <ChevronRight className="w-6 h-6 text-forest/70 mr-1 drop-shadow-md" />
  </div>
  <div className="flex overflow-x-auto snap-x snap-mandatory md:block md:columns-2 lg:columns-3 gap-4 md:gap-6 pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {GALLERY_MEDIA.slice(0, 5).map((media, idx) => (
                <AnimatedSection 
                  key={idx} 
                  variant="fadeUp" 
                  className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-auto md:w-full break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer mb-0 md:mb-6"
                  onClick={() => setIsGalleryOpen(true)}
                >
                  <Image 
                    src={media.src} 
                    alt={`Full Day Colegios ${idx}`} 
                    width={600} 
                    height={800} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white font-inter text-sm tracking-widest font-medium">
                      VER
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            
  </div>
</div>
<div className="flex justify-center mt-12">
              <button 
                onClick={() => setIsGalleryOpen(true)}
                className="bg-forest text-white px-8 py-3.5 rounded-full font-inter text-xs tracking-[0.2em] uppercase font-bold shadow-xl hover:bg-gold hover:-translate-y-1 transition-all duration-300"
              >
                Ver todas las fotos ({GALLERY_MEDIA.length})
              </button>
            </div>
          </div>
        </section>

        {/* CTA Y TÉRMINOS */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Tarjeta de Cotización */}
            <AnimatedSection variant="fadeUp" className="max-w-4xl mx-auto bg-forest text-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gold/20 text-center relative mb-20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent" />
              
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Descuentos Grupales</span>
              <h3 className="font-playfair text-4xl md:text-5xl mb-8 leading-tight">Planifica el paseo de tu colegio</h3>
              
              <p className="text-white/70 text-lg font-light mb-12 max-w-2xl mx-auto border-b border-white/10 pb-12">
                Consulta por nuestras tarifas especiales para grupos de más de 30 estudiantes. Nos adaptamos a los requerimientos de cada institución educativa.
              </p>
              
              <a 
                href={getWhatsAppUrl(WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-forest px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                Cotizar Excursión
                <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>

            {/* Términos y Pagos */}
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 pt-12 border-t border-forest/10">
              <AnimatedSection variant="fadeRight">
                <div className="flex items-center gap-3 mb-8">
                  <AlertCircle className="w-6 h-6 text-gold" />
                  <h4 className="font-playfair text-3xl text-forest">Términos Importantes</h4>
                </div>
                <ul className="space-y-6">
                  <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
                    Cotización válida por <strong>30 días</strong>. Se requiere un adulto responsable (profesor/padre) por cada 10 estudiantes.
                  </li>
                  <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
                    Prohibido el ingreso de bebidas alcohólicas al evento escolar.
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection variant="fadeLeft">
                <div className="flex items-center gap-3 mb-8">
                  <CreditCard className="w-6 h-6 text-gold" />
                  <h4 className="font-playfair text-3xl text-forest">Métodos de Pago</h4>
                </div>
                <div className="bg-[#FDFBF7] p-8 rounded-[2rem] border border-forest/10 space-y-6">
                  <div>
                    <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-2">Cuenta BCP Soles</p>
                    <p className="font-playfair italic text-forest text-2xl">1939 6216 14018</p>
                  </div>
                  <div>
                    <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-2">Cuenta Interbancaria (CCI)</p>
                    <p className="font-playfair italic text-forest text-2xl">002 193 0096 2161 4018 14</p>
                  </div>
                  <div className="pt-4 border-t border-forest/10">
                    <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-1">Titular</p>
                    <p className="font-inter font-medium text-forest">Los Andes Hotel Resort SAC</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />

        {/* Modal de Galería Full Screen */}
        <AnimatePresence>
          {isGalleryOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 z-[9999] bg-black overflow-y-auto"
              data-lenis-prevent
            >
              <div className="sticky top-0 z-[10000] flex justify-end p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <button 
                  onClick={() => setIsGalleryOpen(false)} 
                  className="text-white/70 hover:text-white p-3 rounded-full bg-black/40 backdrop-blur-md transition-colors pointer-events-auto"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 -mt-16">
                {GALLERY_MEDIA.map((media, idx) => (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="break-inside-avoid relative rounded-2xl overflow-hidden"
                  >
                    <Image 
                      src={media.src} 
                      alt={`Full Day Colegios Full ${idx}`} 
                      width={800} 
                      height={1000} 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
