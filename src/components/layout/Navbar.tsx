"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useLenis } from 'lenis/react';
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TiktokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      
      // Intentamos encontrar el elemento directamente en el DOM
      const targetEl = document.querySelector(href) as HTMLElement | null;
      
      if (targetEl) {
        if (lenis) {
          // Cambiado el offset de -80 a 0 para que la cabecera cubra el padding vacío de la sección
          // y el título quede perfectamente encuadrado debajo del menú.
          lenis.scrollTo(targetEl, { offset: 0, duration: 1.5 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Fallback
        window.history.pushState(null, '', href);
        const el = document.getElementById(href.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/60 backdrop-blur-3xl shadow-sm border-b border-white/30 py-3"
            : "bg-gradient-to-b from-black/80 via-black/20 to-transparent py-6"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center relative w-full">
          
          {/* Logo (Izquierda) */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="#hero" 
              className={cn(
                "transition-transform duration-300 hover:scale-105 z-[60]",
                !isScrolled && "absolute top-0 left-4 md:left-6"
              )}
            >
              <div className={cn(
                "relative transition-all duration-500",
                isScrolled 
                  ? "w-[120px] h-[45px] md:w-[150px] md:h-[55px] brightness-0 opacity-80" 
                  : "w-[160px] h-[160px] md:w-[220px] md:h-[220px] drop-shadow-2xl"
              )}>
                <Image 
                  src="/images/los_andes_logo.png" 
                  alt="Los Andes Logo" 
                  fill
                  className={cn("object-contain", !isScrolled && "object-top")}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Enlaces (Centro Matemático Perfecto) */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-8 whitespace-nowrap z-[100]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  "font-inter text-[10px] uppercase tracking-[0.2em] relative group transition-colors",
                  isScrolled
                    ? "text-forest/70 hover:text-forest font-medium"
                    : "text-white/80 hover:text-white font-medium"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Redes y Botón Reservar (Derecha) */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-5 z-50">
            
            {/* Redes Sociales */}
            <div className={cn(
              "hidden md:flex items-center gap-3 border-r pr-4 transition-colors duration-500",
              isScrolled ? "border-forest/20" : "border-white/30"
            )}>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={cn("transition-all hover:scale-110", isScrolled ? "text-forest/60 hover:text-forest" : "text-white/80 hover:text-white")}>
                <InstagramIcon size={16} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className={cn("transition-all hover:scale-110", isScrolled ? "text-forest/60 hover:text-forest" : "text-white/80 hover:text-white")}>
                <FacebookIcon size={16} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className={cn("transition-all hover:scale-110", isScrolled ? "text-forest/60 hover:text-forest" : "text-white/80 hover:text-white")}>
                <TiktokIcon size={16} />
              </a>
            </div>

            {/* Botón Reservar */}
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: "Consulta General" } }))}
              className="hidden lg:flex items-center gap-2 bg-gold hover:bg-gold-light text-forest px-6 py-2.5 rounded-full font-inter font-semibold transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} className="text-forest" />
              Reservar
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-current"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                size={24}
                className={cn(
                  isScrolled ? "text-forest" : "text-white"
                )}
              />
            </button>
          </div>

        </div>
        
        {/* Línea de Progreso (Lujo) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Menu Overlay - Ultra Lujo */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-[#0F1115]/95 flex flex-col"
          >
            {/* Header del menú */}
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/5">
              <div className="w-[100px] relative opacity-80 brightness-0 invert">
                <Image 
                  src="/images/los_andes_logo.png" 
                  alt="Los Andes Logo" 
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 p-2 hover:text-gold transition-colors flex flex-col items-center justify-center gap-1.5"
                aria-label="Close menu"
              >
                <span className="font-inter text-[8px] uppercase tracking-[0.3em] text-white/50 mb-1">Cerrar</span>
                <X size={28} strokeWidth={1} />
              </button>
            </div>

            {/* Enlaces */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-12 gap-8 relative">
              
              {/* Elemento decorativo */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="group flex items-center gap-6"
                >
                  <span className="font-inter font-medium text-[9px] text-gold/50 tracking-[0.3em] w-4">
                    0{i + 1}
                  </span>
                  <span className="font-inter font-light text-2xl md:text-4xl text-white/90 uppercase tracking-[0.2em] group-hover:text-gold transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Footer del Menú Móvil */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-8 md:p-12 pb-12 flex flex-col gap-6"
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'Alojamiento' } })), 300);
                }}
                className="flex items-center justify-between w-full border border-gold/40 bg-gold/5 hover:bg-gold/10 text-gold px-8 py-5 rounded-none font-inter font-light uppercase tracking-[0.3em] text-[10px] transition-all group"
              >
                <span>Solicitar Reserva</span>
                <MessageCircle size={16} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </button>
              
              <div className="flex justify-between items-center mt-4">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold text-[10px] uppercase font-inter tracking-[0.2em] transition-colors">Instagram</a>
                <div className="w-1 h-1 bg-gold/30 rounded-full" />
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold text-[10px] uppercase font-inter tracking-[0.2em] transition-colors">Facebook</a>
                <div className="w-1 h-1 bg-gold/30 rounded-full" />
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold text-[10px] uppercase font-inter tracking-[0.2em] transition-colors">TikTok</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
