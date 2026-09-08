"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart, Music, GlassWater, Utensils, PartyPopper, Speaker, BedDouble, CreditCard, AlertCircle, CheckCircle2, Mail, Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_MSG = "Hola, estoy planificando mi boda y me gustaría recibir más información sobre el Paquete Los Andes.";

const INCLUSIONES = [
  "Alquiler de local",
  "DJ y Equipo de Sonido",
  "Show de Hora loca",
  "Maestro de Ceremonias",
  "Toldo decorativo",
  "10 mesas para 10 personas",
  "Decoración de flores para mesas",
  "Alquiler de menajería",
  "Bocaditos (3 tipos)",
  "Catering (Entrada, Fondo, Bebida)",
  "5 mozos",
  "Barra libre por 3 horas",
  "Alquiler de habitaciones",
  "Área de estacionamiento"
];

const HABITACIONES = [
  "Matrimonial Suite Junior",
  "Junior Ejecutiva",
  "Matrimonial Estándar",
  "Doble Superior",
  "Doble Suite Junior",
  "Doble Estándar",
  "Familiar"
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

export default function MatrimoniosPage() {
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
        <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <Image
              src="/images/events/matrimonio/matri1.webp"
              alt="Bodas y Matrimonios en Los Andes"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#FDFBF7]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-20 text-center">
            <AnimatedSection variant="fadeUp" className="max-w-4xl mx-auto flex flex-col items-center">
              <Heart className="w-12 h-12 text-gold mb-6 animate-pulse" strokeWidth={1.5} />
              <h1 className="font-playfair text-5xl sm:text-6xl md:text-8xl text-white font-medium leading-[1.1] mb-6 drop-shadow-2xl">
                Bodas y <span className="italic font-light text-gold-light">Matrimonios</span>
              </h1>
              <p className="font-inter text-white/90 text-lg md:text-2xl font-light tracking-wide drop-shadow-lg">
                El Sí, acepto... de tus sueños
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRO: FELICIDADES */}
        <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection variant="fadeRight" className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/images/events/matrimonio/matri2.webp" alt="Pareja de novios" fill className="object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeLeft" className="order-1 lg:order-2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-[2px] bg-gold" />
                <span className="text-gold text-sm font-inter tracking-[0.3em] uppercase font-bold">
                  ¡Felicidades!
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-forest font-light leading-tight">
                Vas a casarte
              </h2>
              <div className="text-forest/70 font-light text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Este es uno de los momentos más emocionantes e importantes de tu vida, y <strong>Los Andes - Restaurant & Bungalows</strong> tiene todo lo que necesitas para que tu boda sea tan hermosa y fácil como imaginas.
                </p>
                <p>
                  Desde el lugar perfecto al menú perfecto, encontrarás fantásticas alternativas a bordo. Nuestros paquetes de bodas inclusivos dejan espacio para la personalización y para toques personales especiales, de modo que el pastel, las flores, la música y más dependen de ti.
                </p>
                <p>
                  Contarás con un apoyo en la planificación de tu boda que te mostrará cada maravillosa posibilidad. Así que cuando subas a bordo, listo para casarte, podrás disfrutar libremente de tu día especial y tus invitados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-forest/5 mt-4">
                <p className="font-inter text-forest/90 font-medium mb-4">Estamos ansiosos por compartir esta ocasión especial contigo.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:eventos@restaurantlosandes.com.pe" className="flex items-center gap-2 text-forest-light hover:text-gold transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    eventos@restaurantlosandes.com.pe
                  </a>
                  <a href={getWhatsAppUrl(WHATSAPP_MSG)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-forest-light hover:text-gold transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    924 899 204
                  </a>
                </div>
              </div>
              
              <p className="font-playfair italic text-xl text-forest/60 mt-4">
                Saludos cordiales,<br/>Tu equipo de bodas Los Andes
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* EL PAQUETE LOS ANDES (FULL WIDTH) */}
        <section className="bg-forest relative overflow-hidden py-24 md:py-32">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimatedSection variant="fadeUp" className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
                Paquete de Bodas <span className="text-gold font-medium italic">Los Andes</span>
              </h2>
              <p className="font-inter text-white/80 max-w-2xl mx-auto text-lg font-light">
                Todo lo que necesitas es amor. Y todo lo que deseas es la boda de tus sueños. De formal a divertida, de íntima a sin límites, nuestro paquete facilita personalizar tus votos a una perfección inolvidable.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {INCLUSIONES.map((item, idx) => (
                <AnimatedSection key={idx} variant="fadeUp" className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                  <span className="font-inter text-white/90 font-medium">{item}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* DETALLES DEL PAQUETE (BENTO GRID STYLE) */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
          <AnimatedSection variant="fadeUp" className="text-center mb-20">
            <span className="text-gold text-sm font-inter tracking-[0.3em] uppercase font-bold block mb-4">Experiencia Completa</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest font-light">¿Qué incluye tu gran día?</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CATERING */}
            <AnimatedSection variant="fadeUp" className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-forest/5 flex flex-col h-full hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-forest/5 rounded-2xl flex items-center justify-center mb-6 text-forest">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="font-playfair text-3xl text-forest mb-4">Catering de Primera</h3>
              <p className="text-forest/70 font-light mb-8">
                Que tus invitados disfruten de la mejor comida, preparada de forma tradicional con chefs de la zona, que se encargarán de entregar la mejor experiencia culinaria.
              </p>
              
              <div className="space-y-6 mt-auto">
                <div>
                  <h4 className="font-bold text-gold text-sm uppercase tracking-widest mb-3">Entradas (Elige 1)</h4>
                  <ul className="space-y-2">
                    {ENTRADAS.map((item, i) => <li key={i} className="text-forest/80 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"/> {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gold text-sm uppercase tracking-widest mb-3">Platos de Fondo (Elige 1)</h4>
                  <ul className="space-y-2">
                    {FONDOS.map((item, i) => <li key={i} className="text-forest/80 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full shrink-0"/> {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gold text-sm uppercase tracking-widest mb-3">Bebidas</h4>
                  <p className="text-forest/80 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"/> Inka Cola o Coca Cola de 300 ml.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* CÓCTELES */}
            <AnimatedSection variant="fadeUp" className="bg-forest text-white rounded-[2rem] p-8 md:p-10 shadow-lg relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-gold">
                  <GlassWater className="w-7 h-7" />
                </div>
                <h3 className="font-playfair text-3xl mb-4">Barra Libre & Cócteles</h3>
                <p className="text-white/80 font-light mb-8">
                  En nuestra barra libre, ofrecemos diversos tragos preparados al momento por nuestros bartenders, para darles un cóctel al punto deseado durante 3 horas.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {COCTELES.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* HORA LOCA */}
            <AnimatedSection variant="fadeUp" className="bg-gold/10 rounded-[2rem] p-8 md:p-10 shadow-sm border border-gold/20 flex flex-col">
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 text-forest">
                <PartyPopper className="w-7 h-7" />
              </div>
              <h3 className="font-playfair text-3xl text-forest mb-4">Show Hora Loca</h3>
              <p className="text-forest/70 font-light mb-6">
                El momento más divertido de la ceremonia, donde podrás conseguir las fotos más increíbles pasando un momento alegre al lado de tus invitados.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full"/> Show completo de 1 hora</li>
                <li className="flex items-center gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full"/> Personajes temáticos</li>
                <li className="flex items-center gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full"/> Mix variado de temas musicales</li>
                <li className="flex items-center gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full"/> Accesorios para invitados</li>
                <li className="flex items-center gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full"/> Bombardas, matracas y papel picado</li>
              </ul>
            </AnimatedSection>

            {/* SONIDO */}
            <AnimatedSection variant="fadeUp" className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-forest/5 flex flex-col">
              <div className="w-14 h-14 bg-forest/5 rounded-2xl flex items-center justify-center mb-6 text-forest">
                <Speaker className="w-7 h-7" />
              </div>
              <h3 className="font-playfair text-3xl text-forest mb-4">Audio Profesional</h3>
              <p className="text-forest/70 font-light mb-6">
                La mejor calidad de sonido traerá un ambiente más entretenido. Disfruta con DJ o grupo en vivo con nuestros equipos profesionales JBL.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"/> 2 altavoces autoamplificados JBL PRX 915 de 15”</li>
                <li className="flex items-start gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"/> 2 altavoces de 2 vías con Subwoofer 1x18” JBL PRX918XLF</li>
                <li className="flex items-start gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"/> Consola de control de audio de 24 canales</li>
                <li className="flex items-start gap-3 text-forest/80"><div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"/> 2 micrófonos dinámicos con parantes</li>
              </ul>
            </AnimatedSection>

            {/* HABITACIONES (Full Width) */}
            <AnimatedSection variant="fadeUp" className="md:col-span-2 bg-[#f4ebd9] rounded-[2rem] p-8 md:p-12 shadow-sm border border-gold/30 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center mb-6 text-forest">
                  <BedDouble className="w-7 h-7" />
                </div>
                <h3 className="font-playfair text-3xl text-forest mb-4">Alquiler de Habitaciones</h3>
                <p className="text-forest/70 font-light mb-6">
                  Descansa y prepárate en la comodidad de nuestras instalaciones. El paquete incluye el acceso a nuestro inventario de habitaciones para ti y tus invitados más cercanos.
                </p>
                <Link href="/#habitaciones" className="text-forest font-bold text-sm uppercase tracking-widest border-b border-forest pb-1 hover:text-gold hover:border-gold transition-colors">
                  Ver fotos de habitaciones →
                </Link>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HABITACIONES.map((hab, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl text-forest/80 text-sm font-medium flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    {hab}
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </section>

        {/* INVERSIÓN Y TÉRMINOS */}
        <section className="py-24 bg-white border-t border-forest/10">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* PRICING CARD */}
            <AnimatedSection variant="fadeUp" className="bg-forest text-white rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden mb-16">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <span className="text-gold text-sm font-inter tracking-[0.4em] uppercase font-bold mb-4 block">Inversión</span>
                <h3 className="font-playfair text-4xl md:text-5xl mb-6">Paquete Los Andes</h3>
                <div className="flex items-center justify-center gap-2 mb-8">
                  <span className="text-2xl font-light text-white/70">S/.</span>
                  <span className="text-6xl md:text-7xl font-playfair font-medium">21 999</span>
                </div>
                <p className="text-white/60 text-sm uppercase tracking-widest mb-10">* Precio incluye IGV</p>
                
                <a 
                  href={getWhatsAppUrl(WHATSAPP_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold text-forest px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1"
                >
                  Reservar mi fecha
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </AnimatedSection>

            {/* TÉRMINOS Y PAGOS */}
            <div className="grid md:grid-cols-2 gap-12">
              
              <AnimatedSection variant="fadeRight" className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-gold" />
                  <h4 className="font-playfair text-2xl text-forest">Importante</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-forest/70 font-light text-sm md:text-base leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-forest/20 rounded-full shrink-0 mt-2" />
                    Cotización válida por 30 días.
                  </li>
                  <li className="flex gap-3 text-forest/70 font-light text-sm md:text-base leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-forest/20 rounded-full shrink-0 mt-2" />
                    En caso de modificación de fecha del evento, tendrá un costo del 10% del monto total del evento, y se reprogramará según disponibilidad.
                  </li>
                  <li className="flex gap-3 text-forest/70 font-light text-sm md:text-base leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-forest/20 rounded-full shrink-0 mt-2" />
                    En caso de cancelación del evento, se cobrará el monto total del evento y no habrá devolución de dinero.
                  </li>
                  <li className="flex gap-3 text-forest/70 font-light text-sm md:text-base leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-forest/20 rounded-full shrink-0 mt-2" />
                    El cliente será responsable del mal uso o negligencia de las áreas de nuestras instalaciones.
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection variant="fadeLeft" className="bg-[#FDFBF7] p-8 rounded-3xl border border-forest/10 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-gold" />
                  <h4 className="font-playfair text-2xl text-forest">Métodos de Pago</h4>
                </div>
                <p className="text-forest/70 font-light text-sm md:text-base mb-6">
                  Se aceptan pagos en efectivo o transferencia vía BCP. Ofrecemos facilidades de pago en cuotas de máximo 5 fechas.
                </p>
                
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-forest/5 space-y-4">
                  <div>
                    <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-1">Cuenta BCP Soles</p>
                    <p className="font-inter font-medium text-forest text-lg tracking-wider">1939621614018</p>
                  </div>
                  <div>
                    <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-1">Cuenta Interbancaria (CCI)</p>
                    <p className="font-inter font-medium text-forest text-lg tracking-wider">00219300962161401814</p>
                  </div>
                  <div className="pt-2 border-t border-forest/5">
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
