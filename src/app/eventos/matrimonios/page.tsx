"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, GlassWater, Utensils, PartyPopper, Speaker, BedDouble, CreditCard, AlertCircle, Check, Mail, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_MSG = "Hola, estoy planificando mi boda y me gustaría recibir más información sobre el Paquete Los Andes.";

const INCLUSIONES = [
  "Alquiler de local", "DJ y Equipo de Sonido", "Show de Hora loca", "Maestro de Ceremonias",
  "Toldo decorativo", "10 mesas para 10 personas", "Decoración de flores para mesas", 
  "Alquiler de menajería", "Bocaditos (3 tipos)", "Catering (Entrada, Fondo, Bebida)", 
  "5 mozos", "Barra libre por 3 horas", "Alquiler de habitaciones", "Área de estacionamiento"
];

const HABITACIONES = [
  "Matrimonial Suite Junior", "Junior Ejecutiva", "Matrimonial Estándar", 
  "Doble Superior", "Doble Suite Junior", "Doble Estándar", "Familiar"
];

const ENTRADAS = ["Tamal verde con zarza criolla", "Papa a la huancaína"];
const FONDOS = [
  "Asado acompañado con legumbres, ensalada blanca y arroz con choclo",
  "Pollo a la parrilla, arroz blanco y ensalada con legumbres",
  "Pollo a la caja china, acompañado de papas y ensalada",
  "Chancho a la caja china, con papas y zarza criolla",
  "Buffet criollo / parrillero",
  "Pachamanca"
];
const COCTELES = ["Pisco Sour", "Chilcanos", "Mojitos", "Cuba Libre", "Gaseosas", "Agua"];

const GALLERY_MEDIA = [
  { type: "image", src: "/images/events/matrimonio/matri1.webp" },
  { type: "image", src: "/images/events/matrimonio/matri2.webp" },
  { type: "image", src: "/images/events/matrimonio/matri3.webp" },
  { type: "image", src: "/images/events/matrimonio/matri4.webp" }
];

const HORA_LOCA = ["Show completo de 1 hora", "Personajes temáticos", "Mix variado de temas musicales", "Accesorios para invitados", "Bombardas, matracas y papel picado"];
const SONIDO = ["2 altavoces autoamplificados JBL PRX 915 de 15”", "2 altavoces con Subwoofer 1x18” JBL PRX918XLF", "Consola de control de audio de 24 canales", "2 micrófonos dinámicos con parantes"];

export default function MatrimoniosPage() {
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
              src="/images/events/matrimonio/matri1.webp"
              alt="Bodas y Matrimonios en Los Andes"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
            {/* Degradado arreglado: más transparente al centro y oscuro en los bordes para lectura, sin parches blancos */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-20 text-center">
            <AnimatedSection variant="fadeUp" className="max-w-4xl mx-auto flex flex-col items-center">
              <span className="text-gold text-xs md:text-sm font-inter tracking-[0.5em] uppercase font-bold mb-6 block">
                Los Andes Club Resort
              </span>
              <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white font-medium leading-[1] mb-8 drop-shadow-2xl">
                Bodas y <br />
                <span className="italic font-light text-gold-light">Matrimonios</span>
              </h1>
              <p className="font-inter text-white/90 text-xl md:text-2xl font-light tracking-widest uppercase drop-shadow-lg">
                El Sí, acepto... de tus sueños
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRO: FELICIDADES (Modern Editorial Layout) */}
        <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <AnimatedSection variant="fadeRight" className="lg:col-span-5 relative">
              {/* Estilo moderno: foto en forma de arco (arch design) */}
              <div className="relative aspect-[3/4] w-[90%] md:w-[80%] mx-auto lg:ml-0 rounded-t-full overflow-hidden shadow-2xl ring-8 ring-[#FDFBF7] z-10">
                <Image src="/images/events/matrimonio/matri2.webp" alt="Pareja de novios" fill className="object-cover" />
              </div>
              {/* Círculo flotante decorativo */}
              <div className="absolute -bottom-10 -right-4 lg:-right-12 w-48 h-48 bg-forest rounded-full p-6 flex flex-col items-center justify-center text-center z-20 shadow-2xl border border-gold/20">
                <Heart className="w-8 h-8 text-gold mb-2" />
                <p className="text-gold font-playfair italic text-lg leading-tight">Tu final feliz<br/>empieza aquí</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeLeft" className="lg:col-span-7 flex flex-col gap-8 relative">
              <div className="absolute -top-20 -left-10 text-[10rem] md:text-[14rem] text-gold/5 font-playfair leading-none select-none pointer-events-none">
                Sí.
              </div>
              
              <div>
                <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">¡Felicidades!</h2>
                <h3 className="font-playfair text-5xl md:text-6xl text-forest font-light leading-tight">
                  Vas a casarte
                </h3>
              </div>
              
              <div className="text-forest/70 font-light text-lg leading-relaxed space-y-6">
                <p>
                  Este es uno de los momentos más emocionantes e importantes de tu vida, y <strong className="text-forest font-medium">Los Andes - Restaurant & Bungalows</strong> tiene todo lo que necesitas para que tu boda sea tan hermosa y fácil como imaginas.
                </p>
                <p>
                  Desde el lugar perfecto al menú perfecto, encontrarás fantásticas alternativas a bordo. Nuestros paquetes de bodas inclusivos dejan espacio para la personalización y para toques personales especiales, de modo que el pastel, las flores, la música y más dependen de ti.
                </p>
                <p>
                  Contarás con un apoyo en la planificación de tu boda que te mostrará cada maravillosa posibilidad. Así que cuando subas a bordo, listo para casarte, podrás disfrutar libremente de tu día especial y tus invitados.
                </p>
              </div>

              <div className="border-t border-forest/10 pt-8 mt-4">
                <p className="font-playfair italic text-2xl text-forest mb-6">
                  Estamos ansiosos por compartir esta ocasión especial contigo.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="mailto:eventos@restaurantlosandes.com.pe" className="flex items-center gap-3 text-forest hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                    <span className="text-sm tracking-wide">eventos@restaurantlosandes.com.pe</span>
                  </a>
                  <a href={getWhatsAppUrl(WHATSAPP_MSG)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                    <span className="text-sm tracking-wide">924 899 204</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* EL PAQUETE LOS ANDES (Sticky Scroll Layout) */}
        <section className="bg-forest relative py-24 md:py-32 px-6">
          <div className="absolute inset-0 bg-[url('/images/events/matrimonio/matri3.webp')] bg-cover bg-center opacity-5 mix-blend-overlay" />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
            <AnimatedSection variant="fadeRight" className="lg:col-span-5 lg:sticky lg:top-32 h-max">
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold block mb-4">Servicio Integral</span>
              <h2 className="font-playfair text-5xl md:text-6xl text-white font-light mb-8">
                Paquete <br/><span className="text-gold italic">Los Andes</span>
              </h2>
              <p className="font-inter text-white/70 text-lg font-light leading-relaxed mb-8">
                Celebra esta fecha importante en un ambiente mágico, rodeado de vegetación, lejos del bullicio de la ciudad. Con nuestro paquete completo, asegura que tu mayor preocupación, sea vivir un día perfecto.
              </p>
              <div className="w-20 h-[1px] bg-gold/50" />
            </AnimatedSection>

            <AnimatedSection variant="fadeLeft" className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {INCLUSIONES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 border-b border-white/10 pb-4 group">
                    <Check className="w-5 h-5 text-gold mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="font-inter text-white/90 text-lg font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </section>

        {/* DETALLES DE LA EXPERIENCIA (Diseño Minimalista) */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
          
          {/* CATERING & BARRA (Fila 1) */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection variant="fadeUp">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-playfair text-5xl italic opacity-50">01</span>
                <h3 className="font-playfair text-4xl text-forest">Experiencia Culinaria</h3>
              </div>
              <p className="text-forest/70 font-light text-lg mb-8">
                Que tus invitados disfruten de la mejor comida, preparada de forma tradicional con chefs de la zona.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-forest uppercase tracking-widest text-sm mb-4 border-b border-forest/10 pb-2 flex items-center gap-2"><Utensils className="w-4 h-4 text-gold"/> Entradas (Elige 1)</h4>
                  <ul className="space-y-3">
                    {ENTRADAS.map((item, i) => <li key={i} className="text-forest/80 font-light flex gap-3"><span className="text-gold">•</span> {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-forest uppercase tracking-widest text-sm mb-4 border-b border-forest/10 pb-2">Platos de Fondo (Elige 1)</h4>
                  <ul className="space-y-3">
                    {FONDOS.map((item, i) => <li key={i} className="text-forest/80 font-light flex gap-3"><span className="text-gold">•</span> {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-forest uppercase tracking-widest text-sm mb-4 border-b border-forest/10 pb-2">Bebida</h4>
                  <p className="text-forest/80 font-light flex gap-3"><span className="text-gold">•</span> Inka Cola o Coca Cola de 300 ml.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" className="lg:mt-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-playfair text-5xl italic opacity-50">02</span>
                <h3 className="font-playfair text-4xl text-forest">Barra Libre</h3>
              </div>
              <p className="text-forest/70 font-light text-lg mb-8">
                Ofrecemos diversos tragos preparados al momento por nuestros bartenders durante 3 horas.
              </p>
              
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gold/10 relative">
                <GlassWater className="absolute top-8 right-8 w-16 h-16 text-gold/10" />
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                  {COCTELES.map((item, i) => (
                    <li key={i} className="text-forest/90 text-lg font-playfair italic flex items-center gap-3 border-b border-forest/5 pb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* DIVERSIÓN Y AUDIO (Fila 2) */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 pt-12 border-t border-forest/10">
            <AnimatedSection variant="fadeUp">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-playfair text-5xl italic opacity-50">03</span>
                <h3 className="font-playfair text-4xl text-forest">Show Hora Loca</h3>
              </div>
              <p className="text-forest/70 font-light text-lg mb-8">
                El momento más divertido de la ceremonia, festejando este día tan importante con mucha energía.
              </p>
              <ul className="space-y-4">
                {HORA_LOCA.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-forest/80 bg-white px-6 py-4 rounded-xl border border-forest/5 shadow-sm">
                    <PartyPopper className="w-5 h-5 text-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" className="lg:mt-24">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-playfair text-5xl italic opacity-50">04</span>
                <h3 className="font-playfair text-4xl text-forest">Audio Profesional</h3>
              </div>
              <p className="text-forest/70 font-light text-lg mb-8">
                La mejor calidad de sonido para un ambiente entretenido. Disfruta con DJ o grupo en vivo con nuestros equipos JBL.
              </p>
              <ul className="space-y-4">
                {SONIDO.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-forest/80 bg-white px-6 py-4 rounded-xl border border-forest/5 shadow-sm">
                    <Speaker className="w-5 h-5 text-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* HABITACIONES */}
          <AnimatedSection variant="fadeUp" className="bg-[#f4ebd9] rounded-[3rem] p-10 md:p-16 border border-gold/20 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <BedDouble className="w-12 h-12 text-forest mb-6" />
              <h3 className="font-playfair text-4xl text-forest mb-4">Hospedaje Incluido</h3>
              <p className="text-forest/70 font-light text-lg mb-8">
                Descansa y prepárate en la comodidad de nuestras instalaciones. El paquete incluye habitaciones para ti y tus invitados.
              </p>
              <Link href="/#habitaciones" className="inline-flex items-center gap-2 text-forest font-bold text-sm uppercase tracking-widest border-b border-forest pb-1 hover:text-gold hover:border-gold transition-colors">
                Nuestras Habitaciones <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 w-full">
              {HABITACIONES.map((hab, i) => (
                <div key={i} className="bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl text-forest/90 font-medium border border-white">
                  {hab}
                </div>
              ))}
            </div>
          </AnimatedSection>

        </section>

        {/* GALERÍA MULTIMEDIA */}
        <section className="py-24 bg-[#FDFBF7] border-t border-forest/10">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection variant="fadeUp" className="text-center mb-16">
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Galería</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light">Momentos Mágicos</h2>
            </AnimatedSection>
            
            <div className="columns-1 sm:columns-2 gap-6 space-y-6">
              {GALLERY_MEDIA.map((media, idx) => (
                <AnimatedSection key={idx} variant="fadeUp" className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg group">
                  <Image 
                    src={media.src} 
                    alt={`Bodas y Matrimonios ${idx}`} 
                    width={600} 
                    height={800} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* INVERSIÓN Y TÉRMINOS (Diseño Editorial) */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Tarjeta de Precio */}
            <AnimatedSection variant="fadeUp" className="max-w-4xl mx-auto bg-forest text-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gold/20 text-center relative mb-20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent" />
              
              <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Inversión</span>
              <h3 className="font-playfair text-5xl md:text-6xl mb-12">Paquete Los Andes</h3>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-3xl md:text-4xl font-light text-gold">S/.</span>
                <span className="text-7xl md:text-9xl font-playfair font-medium tracking-tight">21 999</span>
              </div>
              <p className="text-white/50 text-sm uppercase tracking-widest mb-12 border-b border-white/10 pb-12 max-w-sm mx-auto">
                * Precio incluye IGV
              </p>
              
              <a 
                href={getWhatsAppUrl(WHATSAPP_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-forest px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                Reservar mi fecha
                <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>

            {/* Términos y Pagos (Columnas Limpias) */}
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
    </div>
  );
}
