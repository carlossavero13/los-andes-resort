"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cake, Utensils, Check, AlertCircle, CreditCard, Sparkles, GlassWater, X, PartyPopper, MapPin, Users , ChevronLeft, ChevronRight} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_MSG = "Hola, me gustaría cotizar una celebración/cumpleaños en Los Andes.";

const INCLUSIONES = [
  "Paquetes de comida y catering a partir de 15 personas (Buffet, Parrilla, Infantil)",
  "Servicios integrales: Decoración, toldos, música y asistencia durante el evento",
  "Espacios amplios que brindamos: Áreas verdes, terrazas y zonas de piscina",
  "Opción de espacio propio y totalmente personalizado según la temática",
  "Barra de cócteles y bebidas refrescantes",
  "Flexibilidad para incorporar shows infantiles y animaciones"
];

const TIPOS_EVENTOS = [
  { icon: <Cake className="w-6 h-6 text-gold" />, title: "Cumpleaños", desc: "Celebra un año más rodeado de amigos y naturaleza, con música y barra exclusiva." },
  { icon: <PartyPopper className="w-6 h-6 text-gold" />, title: "Fiestas y Shows Infantiles", desc: "Espacios seguros y amplios ideales para shows infantiles, juegos inflables y mucha diversión." },
  { icon: <Sparkles className="w-6 h-6 text-gold" />, title: "Aniversarios y Despedidas", desc: "Veladas románticas o celebraciones a lo grande en ambientes íntimos y exclusivos." },
];

const GALLERY_MEDIA = [
  { type: "image", src: "/images/events/cumple/cumple.webp" }
];

export default function CelebracionesPage() {
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
              src="/images/events/cumple/cumple.webp"
              alt="Celebraciones en Los Andes"
              fill
              className="object-cover object-center opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-[#FDFBF7]" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/60 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 mt-20">
            <AnimatedSection variant="fadeRight" className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full">
                <PartyPopper className="w-4 h-4 text-gold" />
                <span className="text-white text-xs font-inter tracking-[0.3em] uppercase font-bold drop-shadow-md">
                  Momentos Inolvidables
                </span>
              </div>
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-[1.1] mb-8 drop-shadow-2xl">
                Celebraciones <br/><span className="italic font-light text-gold">& Eventos</span>
              </h1>
              <p className="font-inter text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl drop-shadow-lg lg:mx-0 mx-auto">
                Desde shows infantiles hasta grandes fiestas y aniversarios. Diseñamos espacios propios y personalizados para que cada celebración sea única.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* TIPOS DE EVENTOS */}
        <section className="py-24 bg-[#FDFBF7] relative">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection variant="fadeUp" className="text-center mb-16">
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Personalización</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light">Para Cada Ocasión</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {TIPOS_EVENTOS.map((evento, idx) => (
                <AnimatedSection key={idx} variant="fadeUp" delay={idx * 0.1}>
                  <div className="bg-white p-10 rounded-[2rem] border border-forest/5 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      {evento.icon}
                    </div>
                    <h3 className="font-playfair text-2xl text-forest mb-4">{evento.title}</h3>
                    <p className="font-inter text-forest/70 font-light leading-relaxed">{evento.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ESPACIOS Y SERVICIOS QUE BRINDAMOS */}
        <section className="py-24 bg-white border-y border-forest/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection variant="fadeRight">
                <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Servicios y Espacios</span>
                <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light leading-tight mb-8">
                  Diseñamos tu celebración a medida
                </h2>
                <p className="font-inter text-forest/70 font-light text-lg leading-relaxed mb-10 text-justify">
                  Contamos con los espacios que brindamos ideales para ti, o si lo prefieres, preparamos un espacio propio y personalizado según la temática de tu evento. Ofrecemos paquetes completos de comidas a partir de 15 personas.
                </p>
                <div className="space-y-4">
                  {INCLUSIONES.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-5 h-5 text-gold" />
                      </div>
                      <span className="font-inter text-forest/90 font-medium leading-relaxed pt-2">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeLeft">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/events/corporativo/corp2.webp"
                    alt="Servicios y Catering"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <Users className="w-8 h-8 text-gold mb-4" />
                    <h3 className="font-playfair text-3xl mb-2">Paquetes para Grupos</h3>
                    <p className="font-inter font-light text-white/80 text-sm">Organizamos el catering y los servicios que brindamos para grupos de 15 a más personas.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* GALERÍA MULTIMEDIA */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection variant="fadeUp" className="text-center mb-16">
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Galería</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light">Momentos de Alegría</h2>
            </AnimatedSection>
            
            <div className="relative group">
  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 md:hidden pointer-events-none flex items-center justify-start">
    <ChevronLeft className="w-6 h-6 text-forest/70 ml-1 drop-shadow-md" />
  </div>
  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 md:hidden pointer-events-none flex items-center justify-end">
    <ChevronRight className="w-6 h-6 text-forest/70 mr-1 drop-shadow-md" />
  </div>
  <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {GALLERY_MEDIA.slice(0, 4).map((media, idx) => (
                <AnimatedSection 
                  key={idx} 
                  variant="fadeUp" 
                  className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-full relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-[4/5]"
                  onClick={() => setIsGalleryOpen(true)}
                >
                  {media.type === 'video' ? (
                    <video 
                      src={media.src} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <Image 
                      src={media.src} 
                      alt={`Celebraciones ${idx}`} 
                      width={600} 
                      height={800} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
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
                Ver todas las fotos
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
              
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Empieza a Planificar</span>
              <h3 className="font-playfair text-4xl md:text-5xl mb-8 leading-tight">Haz de tu celebración algo inolvidable</h3>
              
              <p className="text-white/70 text-lg font-light mb-12 max-w-2xl mx-auto border-b border-white/10 pb-12">
                Escríbenos contándonos el motivo de tu celebración, si deseas show infantil y la cantidad de invitados para armarte un paquete especial a tu medida.
              </p>
              
              <a 
                href={getWhatsAppUrl(WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-forest px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                Cotizar Celebración
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
                    Cotización válida por <strong>30 días</strong>. Reserva de fecha asegurada con el abono del 50%.
                  </li>
                  <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
                    Nuestros paquetes gastronómicos aplican a partir de <strong>15 personas</strong>.
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mt-16">
                {GALLERY_MEDIA.map((media, idx) => (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="relative rounded-2xl overflow-hidden aspect-[4/5]"
                  >
                    {media.type === 'video' ? (
                      <video 
                        src={media.src} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image 
                        src={media.src} 
                        alt={`Celebraciones Full ${idx}`} 
                        width={800} 
                        height={1000} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
