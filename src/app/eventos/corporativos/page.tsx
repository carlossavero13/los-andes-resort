"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, MapPin, Trophy, Utensils, Users, Wine, Check, AlertCircle, CreditCard, Mail, Phone, Music, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_MSG = "Hola, me gustaría cotizar un evento corporativo en Los Andes.";

const AMBIENTES = [
  "Ingreso con camino entre vegetación",
  "Amplias áreas verdes (10,000 m2)",
  "Piscina con jacuzzi e isla con bar",
  "Terraza frente a la piscina con vista panorámica",
  "Zona de bosque con mesas de madera",
  "Zona de comedor en jardín",
  "2 cascadas (piscina y zona de bungalows)",
  "Amplia zona de estacionamiento",
  "Zona de juegos"
];

const CATERING = [
  "Pollo a la parrila, arroz blanco y ensalada con legumbres",
  "Pollo a la caja china, acompañado de papas y ensalada",
  "Chancho a la caja china, con papas y zarza criolla",
  "Buffet criollo / parrillero",
  "Pachamanca"
];

const BEBIDAS = [
  "Champagne Santiago Queirolo Primado",
  "Vino tinto Santiago Quierolo",
  "Jarras de agua de mesa",
  "Jarras de gaseosa"
];

const MENAJE = [
  "Copas de champagne",
  "Copas de vino",
  "Vasos para agua y gaseosa",
  "Jarras para agua",
  "Vajilla completa",
  "Cuchillos y tenedores hoteleros"
];

const PERSONAL = [
  "5 mozos profesionales",
  "Chef ejecutivo",
  "Ayudantes de cocina",
  "Filmación profesional",
  "Maitré"
];

const GYMKANAS_INCLUYE = [
  "Animador profesional",
  "Producción de juegos",
  "DJ y Sonido",
  "Hora Loca",
  "Materiales completos para juegos"
];

const GYMKANAS_JUEGOS = [
  "Pasa la pelota", "Rueda gigante", "Botella flotante", "Carrera loca", 
  "Chapa tu punto", "Pasa el hula", "Saca polo", "Vuela vuela", 
  "Chapa tu globo", "Lleva naranjas", "Play back", "La loca carrera", 
  "Gorditos bonitos", "Juegos con skies", "Cinco pies", "Juego del anillo", 
  "Arma el canal", "Encostalados", "Canta y gana", "Bailetón", "Jala soga", 
  "Botella borracha", "Glotones", "La bandeja", "Teléfono malogrado", 
  "Pasa la esponja", "Vaso en la cabeza", "Tres en raya"
];

const GALLERY_MEDIA = [
  { type: "image", src: "/images/events/corporativo/corp1.webp" },
  { type: "video", src: "/videos/video_corp.MOV" },
  { type: "image", src: "/images/events/corporativo/corp4.webp" },
  { type: "image", src: "/images/events/corporativo/corp5.webp" },
  { type: "image", src: "/images/events/corporativo/corp6.webp" },
  { type: "image", src: "/images/events/corporativo/corp7.webp" },
  { type: "image", src: "/images/events/corporativo/corp8.webp" },
  { type: "image", src: "/images/events/corporativo/corp9.webp" },
  { type: "image", src: "/images/events/corporativo/corp10.webp" },
  { type: "image", src: "/images/events/corporativo/corp11.webp" },
  { type: "image", src: "/images/events/corporativo/corp12.webp" },
  { type: "image", src: "/images/events/corporativo/corp13.webp" },
];

export default function CorporativosPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [showAllGames, setShowAllGames] = useState(false);

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isGalleryOpen]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen relative overflow-hidden font-inter selection:bg-gold/30 selection:text-forest">
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
        <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <Image
              src="/images/events/corporativo/corp3.webp"
              alt="Eventos Corporativos en Los Andes"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-20 text-center">
            <AnimatedSection variant="fadeUp" className="max-w-4xl mx-auto flex flex-col items-center">
              <span className="text-gold text-xs md:text-sm font-inter tracking-[0.5em] uppercase font-bold mb-6 block">
                Team Building & Conferencias
              </span>
              <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white font-medium leading-[1] mb-8 drop-shadow-2xl">
                Eventos <br />
                <span className="italic font-light text-gold-light">Corporativos</span>
              </h1>
              <p className="font-inter text-white/90 text-xl md:text-2xl font-light tracking-widest uppercase drop-shadow-lg">
                El destino perfecto para tu empresa
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRO: DESCUBRE LA EXPERIENCIA */}
        <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <AnimatedSection variant="fadeRight" className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-[90%] md:w-[80%] mx-auto lg:ml-0 rounded-t-full overflow-hidden shadow-2xl ring-8 ring-[#FDFBF7] z-10">
                <Image src="/images/events/corporativo/corp2.webp" alt="Equipo corporativo" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-4 lg:-right-12 w-48 h-48 bg-forest rounded-full p-6 flex flex-col items-center justify-center text-center z-20 shadow-2xl border border-gold/20">
                <Building2 className="w-8 h-8 text-gold mb-2" />
                <p className="text-gold font-playfair italic text-lg leading-tight">Integración y<br/>Liderazgo</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeLeft" className="lg:col-span-7 flex flex-col gap-8 relative">
              <div className="absolute -top-20 -left-10 text-[10rem] md:text-[14rem] text-gold/5 font-playfair leading-none select-none pointer-events-none">
                Éxito.
              </div>
              
              <div>
                <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Descubre la Experiencia</h2>
                <h3 className="font-playfair text-5xl md:text-6xl text-forest font-light leading-tight">
                  Más allá de la oficina
                </h3>
              </div>
              
              <div className="text-forest/70 font-light text-lg leading-relaxed space-y-6">
                <p>
                  Asegura el éxito de tu evento en nuestras instalaciones, especialmente adecuadas para concentrar a tus invitados. <strong className="text-forest font-medium">Aléjate del estrés de la ciudad</strong> y déjate envolver por la naturaleza que rodea a Los Andes.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-forest/5 flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-forest mb-1">Nuestra Ubicación</h4>
                    <p className="text-sm">Av. Nueva Toledo 206, segunda etapa, parcelación - Cieneguilla, Lima. (A cuadra y media del óvalo de Cieneguilla).</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-forest/10 pt-8 mt-4">
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="mailto:eventos@restaurantlosandes.com.pe" className="flex items-center gap-3 text-forest hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                    <span className="text-sm tracking-wide">eventos@restaurantlosandes.com.pe</span>
                  </a>
                  <div className="flex items-center gap-3 text-forest">
                    <div className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                    <span className="text-sm tracking-wide">924 899 204 &nbsp;|&nbsp; (01) 748 3726</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* AMBIENTES E INSTALACIONES (Sticky Scroll Layout) */}
        <section className="bg-forest relative py-24 md:py-32 px-6">
          <div className="absolute inset-0 bg-gold/5 opacity-50 mix-blend-overlay" />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
            <AnimatedSection variant="fadeRight" className="lg:col-span-5 lg:sticky lg:top-32 h-max">
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold block mb-4">Espacios Amplios</span>
              <h2 className="font-playfair text-5xl md:text-6xl text-white font-light mb-8">
                Instalaciones <br/><span className="text-gold italic">Premium</span>
              </h2>
              <p className="font-inter text-white/70 text-lg font-light leading-relaxed mb-8">
                Contamos con 10,000 m2 de área dedicados a brindarte un respiro al aire libre. Piscinas, cataratas, jardines y espacios adaptables para cualquier dinámica empresarial.
              </p>
              <div className="w-20 h-[1px] bg-gold/50" />
            </AnimatedSection>

            <AnimatedSection variant="fadeLeft" className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {AMBIENTES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 border-b border-white/10 pb-4 group">
                    <Check className="w-5 h-5 text-gold mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="font-inter text-white/90 text-lg font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </section>

        {/* DETALLES DEL EVENTO (Gastronomía, Personal, Team Building) */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
          
          {/* CATERING & MENAJE (Fila 1) */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection variant="fadeUp">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-playfair text-5xl italic opacity-50">01</span>
                <h3 className="font-playfair text-4xl text-forest">Catering & Bebidas</h3>
              </div>
              <p className="text-forest/70 font-light text-lg mb-8">
                Deleita a tu equipo con nuestra excelente gastronomía campestre y selección de bebidas preparadas para eventos de gran escala.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-forest uppercase tracking-widest text-sm mb-4 border-b border-forest/10 pb-2 flex items-center gap-2"><Utensils className="w-4 h-4 text-gold"/> Opciones de Menú</h4>
                  <ul className="space-y-3">
                    {CATERING.map((item, i) => <li key={i} className="text-forest/80 font-light flex gap-3"><span className="text-gold">•</span> {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-forest uppercase tracking-widest text-sm mb-4 border-b border-forest/10 pb-2 flex items-center gap-2"><Wine className="w-4 h-4 text-gold"/> Bebidas Incluidas</h4>
                  <ul className="space-y-3">
                    {BEBIDAS.map((item, i) => <li key={i} className="text-forest/80 font-light flex gap-3"><span className="text-gold">•</span> {item}</li>)}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" className="lg:mt-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-playfair text-5xl italic opacity-50">02</span>
                <h3 className="font-playfair text-4xl text-forest">Personal y Menaje</h3>
              </div>
              <p className="text-forest/70 font-light text-lg mb-8">
                Garantizamos que no te falte nada. Desde la vajilla completa hasta el equipo humano necesario para atender a todos tus invitados.
              </p>
              
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gold/10 relative mb-8">
                <Users className="absolute top-8 right-8 w-16 h-16 text-gold/10" />
                <h4 className="font-bold text-forest uppercase tracking-widest text-sm mb-6">Staff del Evento</h4>
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                  {PERSONAL.map((item, i) => (
                    <li key={i} className="text-forest/90 text-base font-playfair italic flex items-center gap-3 border-b border-forest/5 pb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2rem] border border-forest/10">
                <h4 className="font-bold text-forest uppercase tracking-widest text-sm mb-4">Menaje Completo Incluido</h4>
                <div className="flex flex-wrap gap-2">
                  {MENAJE.map((item, i) => (
                    <span key={i} className="bg-white px-4 py-2 rounded-full text-xs text-forest/80 border border-forest/5 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* TEAM BUILDING Y GYMKANAS (Fila 2 - Destacada) */}
          <AnimatedSection variant="fadeUp" className="bg-[#f4ebd9] rounded-[3rem] p-10 md:p-16 lg:p-20 border border-gold/20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Trophy className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="font-playfair text-4xl md:text-5xl text-forest mb-6">Team Building & Gymkanas</h3>
              <p className="text-forest/70 font-light text-lg">
                Fomenta el trabajo en equipo, la comunicación y el liderazgo a través de dinámicas divertidas. Nosotros nos encargamos de todo el entretenimiento.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <h4 className="font-bold text-forest uppercase tracking-widest text-sm border-b border-forest/10 pb-4">La Producción Incluye</h4>
                <ul className="space-y-4">
                  {GYMKANAS_INCLUYE.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-forest/90 font-medium">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="font-bold text-forest uppercase tracking-widest text-sm border-b border-forest/10 pb-4 mb-6">Catálogo de Dinámicas y Juegos</h4>
                <div className="flex flex-wrap gap-3">
                  {(showAllGames ? GYMKANAS_JUEGOS : GYMKANAS_JUEGOS.slice(0, 10)).map((juego, i) => (
                    <span key={i} className="bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-xl text-forest/90 font-medium border border-white text-sm hover:bg-gold hover:text-white hover:border-gold transition-colors cursor-default shadow-sm">
                      {juego}
                    </span>
                  ))}
                  {!showAllGames && (
                    <button 
                      onClick={() => setShowAllGames(true)}
                      className="bg-forest/5 backdrop-blur-sm px-5 py-2.5 rounded-xl text-forest font-bold border border-forest/10 text-sm hover:bg-forest hover:text-white transition-colors shadow-sm"
                    >
                      + {GYMKANAS_JUEGOS.length - 10} juegos más...
                    </button>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

        </section>

        {/* GALERÍA MULTIMEDIA */}
        <section className="py-24 bg-[#FDFBF7] border-t border-forest/10">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection variant="fadeUp" className="text-center mb-16">
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Galería</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light">Revive la Experiencia</h2>
            </AnimatedSection>
            
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {GALLERY_MEDIA.slice(0, 6).map((media, idx) => (
                  <AnimatedSection 
                    key={idx} 
                    variant="fadeUp" 
                    className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    onClick={() => setIsGalleryOpen(true)}
                  >
                    {media.type === 'video' ? (
                      <video 
                        src={media.src} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <Image 
                        src={media.src} 
                        alt={`Evento Corporativo ${idx}`} 
                        width={600} 
                        height={800} 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
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

        {/* INVERSIÓN Y TÉRMINOS (Diseño Editorial) */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Tarjeta de Cotización */}
            <AnimatedSection variant="fadeUp" className="max-w-4xl mx-auto bg-forest text-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gold/20 text-center relative mb-20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent" />
              
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Planificación a Medida</span>
              <h3 className="font-playfair text-4xl md:text-6xl mb-8 leading-tight">Diseñemos el evento ideal para tu equipo</h3>
              
              <p className="text-white/70 text-lg font-light mb-12 max-w-2xl mx-auto">
                Cada empresa es única. Contáctanos para enviarte un presupuesto personalizado ajustado a la cantidad de asistentes y los requerimientos específicos de tu corporación.
              </p>
              
              <a 
                href={getWhatsAppUrl(WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-forest px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                Cotizar Evento
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
                    Cotización válida por <strong>30 días</strong>.
                  </li>
                  <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
                    En caso de modificación de fecha del evento, tendrá un costo del <strong>10%</strong> del monto total del evento, y se reprogramará según disponibilidad.
                  </li>
                  <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
                    En caso de cancelación del evento, se cobrará el monto total del evento y <strong>no habrá devolución</strong> de dinero.
                  </li>
                  <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
                    El cliente será responsable del mal uso o negligencia de las áreas de nuestras instalaciones.
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection variant="fadeLeft">
                <div className="flex items-center gap-3 mb-8">
                  <CreditCard className="w-6 h-6 text-gold" />
                  <h4 className="font-playfair text-3xl text-forest">Métodos de Pago</h4>
                </div>
                <p className="text-forest/70 font-light text-base mb-8">
                  Se aceptan pagos en efectivo o transferencia vía BCP. Ofrecemos facilidades de pago en cuotas de <strong>máximo 5 fechas</strong>.
                </p>
                
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
                    {media.type === 'video' ? (
                      <video 
                        src={media.src} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      <Image 
                        src={media.src} 
                        alt={`Evento Corporativo Full ${idx}`} 
                        width={800} 
                        height={1000} 
                        className="w-full h-auto object-cover"
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
