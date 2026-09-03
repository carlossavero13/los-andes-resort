"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Check, Maximize2, Coffee, ArrowLeft, ArrowRight } from "lucide-react";
import { useLenis } from 'lenis/react';
import { cn } from "@/lib/utils";
import { getAmenityIcon } from "@/lib/amenity-icons";

import { Room } from "@/types";

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  const lenis = useLenis();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  // Prevenir scroll de fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      // Prevent sync state update warning
      setTimeout(() => setActiveImageIndex(0), 0);
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen, lenis]);

  if (!room) return null;

  const resortKeywords = ['desayuno', 'piscina', 'fútbol', 'juegos', 'verdes', 'estacionamiento'];
  const roomFeatures = room.amenities.filter(a => !resortKeywords.some(k => a.toLowerCase().includes(k)));
  const resortFeatures = room.amenities.filter(a => resortKeywords.some(k => a.toLowerCase().includes(k)));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro desenfocado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-md"
            data-lenis-prevent="true"
          />
          {/* Contenedor del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] max-w-[1500px] h-[98vh] md:h-[95vh] bg-[#FDFBF7] z-[101] rounded-sm shadow-2xl overflow-hidden flex flex-col"
            data-lenis-prevent="true"
          >
            {/* BOTÓN CERRAR */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[120] bg-white/80 backdrop-blur-md text-forest hover:bg-white shadow-lg p-2.5 rounded-full transition-transform hover:scale-105"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* CONTENIDO DEL MODAL */}
            {/* CONTENIDO DEL MODAL: Infografía (Split Screen) */}
            <div 
              className="flex-1 flex flex-col md:flex-row h-full w-full bg-[#FDFBF7] overflow-y-auto md:overflow-hidden pb-24 md:pb-0"
              data-lenis-prevent="true"
            >
              
              {/* IZQUIERDA: Galería a pantalla completa (55%) */}
              <div className="w-full md:w-[55%] h-[40vh] md:h-full relative bg-black flex-shrink-0 group">
                <div 
                  ref={scrollRef}
                  className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide hide-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  onScroll={(e) => {
                    const el = e.currentTarget;
                    const idx = Math.round(el.scrollLeft / el.clientWidth);
                    if (idx !== activeImageIndex) setActiveImageIndex(idx);
                  }}
                >
                  {room.images.map((img, i) => (
                    <div key={i} className="w-full h-full flex-shrink-0 snap-center relative">
                      <Image 
                        src={img} 
                        alt={room.name} 
                        fill 
                        className="object-cover transition-opacity duration-700 opacity-90 group-hover:opacity-100" 
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Controles de Galería (Desktop) */}
                {room.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        const next = (activeImageIndex - 1 + room.images.length) % room.images.length;
                        scrollToImage(next);
                      }}
                      className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/90 backdrop-blur-md rounded-full items-center justify-center text-white hover:text-forest shadow-lg border border-white/30 transition-all hover:scale-105 z-10"
                    >
                      <ArrowLeft size={20} strokeWidth={2} />
                    </button>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        const next = (activeImageIndex + 1) % room.images.length;
                        scrollToImage(next);
                      }}
                      className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/90 backdrop-blur-md rounded-full items-center justify-center text-white hover:text-forest shadow-lg border border-white/30 transition-all hover:scale-105 z-10"
                    >
                      <ArrowRight size={20} strokeWidth={2} />
                    </button>

                    {/* Dots / Thumbnails flotantes en la parte inferior */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 pointer-events-none md:pointer-events-auto">
                      {room.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            scrollToImage(idx); 
                          }}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all pointer-events-auto",
                            activeImageIndex === idx ? "bg-white scale-125 w-4" : "bg-white/50 hover:bg-white/90"
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* DERECHA: Información compacta (45%) */}
              <div className="w-full md:w-[45%] h-full flex flex-col p-6 md:p-8 lg:p-12 md:overflow-y-auto custom-scrollbar relative">
                
                {/* Header (Tags + Title) */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="border border-forest/20 text-forest text-[8px] lg:text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 font-semibold rounded-sm">
                      {room.category === 'hotel' ? 'Hotel' : 'Cabaña'}
                    </span>
                    {room.featured && (
                      <span className="bg-forest text-white border border-forest text-[8px] lg:text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 font-semibold rounded-sm">
                        Destacada
                      </span>
                    )}
                  </div>
                  <h2 className="font-playfair text-3xl lg:text-5xl font-light text-forest leading-tight">
                    {room.name}
                  </h2>
                </div>

                {/* Price (Top right or below title) */}
                {room.price && (
                  <div className="flex items-end gap-1 border-b border-forest/10 pb-5 mb-5">
                    <span className="text-sm lg:text-base text-forest/50 font-inter mb-1.5">S/</span>
                    <span className="font-playfair text-4xl lg:text-5xl font-light text-forest">{room.price.toFixed(0)}</span>
                    <span className="text-forest/40 text-[9px] lg:text-[10px] uppercase tracking-widest ml-1 mb-2">/ noche</span>
                  </div>
                )}

                {/* Quick Highlights */}
                <div className="flex gap-3 mb-5">
                  <div className="flex items-center gap-2 bg-forest/5 rounded-lg py-2 px-3">
                    <Users className="w-4 h-4 text-forest/70" strokeWidth={1.5} />
                    <p className="font-inter font-semibold text-forest text-[9px] uppercase tracking-widest">{room.capacity} huéspedes</p>
                  </div>
                  <div className="flex items-center gap-2 bg-forest/5 rounded-lg py-2 px-3">
                    <Maximize2 className="w-4 h-4 text-forest/70" strokeWidth={1.5} />
                    <p className="font-inter font-semibold text-forest text-[9px] uppercase tracking-widest">Amplio</p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter font-light text-forest/80 text-xs lg:text-sm leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Amenities Split (Minimalist List) */}
                <div className="flex-1 flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2 pb-2">
                  <div>
                    <h3 className="font-playfair text-base lg:text-lg font-medium text-forest mb-2">Servicios de Habitación</h3>
                    <div className="grid grid-cols-2 gap-x-6 md:gap-x-10">
                      {roomFeatures.map((amenity, idx) => {
                        const Icon = getAmenityIcon(amenity);
                        return (
                          <div key={idx} className="flex items-center gap-3 py-3 md:py-3.5 border-b border-forest/10">
                            <Icon size={16} strokeWidth={1.5} className="text-[#A67B5B] shrink-0" />
                            <span className="font-inter text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-medium text-[#5c4a3d]">
                              {amenity}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-playfair text-base lg:text-lg font-medium text-forest mb-2 pt-2">Incluido en tu estadía</h3>
                    <div className="grid grid-cols-2 gap-x-6 md:gap-x-10">
                      {resortFeatures.map((amenity, idx) => {
                        const Icon = getAmenityIcon(amenity);
                        return (
                          <div key={idx} className="flex items-center gap-3 py-3 md:py-3.5 border-b border-forest/10">
                            <Icon size={16} strokeWidth={1.5} className="text-gold shrink-0" />
                            <span className="font-inter text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-medium text-[#5c4a3d]">
                              {amenity}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Booking Button */}
                <div className="mt-8 pt-6 border-t border-forest/10 flex flex-col gap-3 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: room.name } })), 300);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#A67B5B] hover:bg-[#8e694e] text-white py-4 rounded-xl font-inter font-bold uppercase tracking-[0.2em] text-[10px] lg:text-[11px] transition-all shadow-md hover:-translate-y-0.5"
                  >
                    Reservar Esta Habitación
                  </button>
                  <p className="text-center text-[9px] text-forest/40 font-inter uppercase tracking-[0.2em]">
                    Confirmación Inmediata vía WhatsApp
                  </p>
                </div>

              </div>
            </div>

            {/* Mobile Sticky Booking Bar */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-forest/10 p-4 px-5 flex items-center justify-between z-[110] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] rounded-b-sm">
              <div className="flex flex-col">
                <span className="text-[9px] text-forest/50 uppercase tracking-[0.2em] font-bold mb-0.5">Precio</span>
                {room.price && (
                  <div className="flex items-end gap-1">
                    <span className="text-xs text-forest/70 font-inter mb-1">S/</span>
                    <span className="font-playfair text-2xl font-light text-forest">{room.price.toFixed(0)}</span>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: room.name } })), 300);
                }}
                className="bg-[#A67B5B] hover:bg-[#8e694e] text-white px-8 py-3.5 rounded-lg font-inter font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-md active:scale-95"
              >
                Reservar
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
