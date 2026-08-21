"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Check, Maximize2, Coffee, ArrowLeft, ArrowRight, BedDouble, Waves, Activity, Refrigerator, Droplets, Wifi, Maximize, Bath, TreePine, Car, Snowflake, ConciergeBell, Sparkles, Tv, SprayCan, Sun } from "lucide-react";
import { useLenis } from 'lenis/react';
import { cn } from "@/lib/utils";

import { Room } from "@/types";

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  const lenis = useLenis();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getAmenityIcon = (amenity: string) => {
    const a = amenity.toLowerCase();
    if (a.includes("cama")) return BedDouble;
    if (a.includes("piscina")) return Waves;
    if (a.includes("fútbol") || a.includes("juegos")) return Activity;
    if (a.includes("desayuno")) return Coffee;
    if (a.includes("friobar") || a.includes("cafetera")) return Refrigerator;
    if (a.includes("agua caliente")) return Droplets;
    if (a.includes("wifi")) return Wifi;
    if (a.includes("área") || a.includes("medición") || a.includes("metros")) return Maximize;
    if (a.includes("toalla") || a.includes("jacuzzi")) return Bath;
    if (a.includes("verde") || a.includes("naturaleza")) return TreePine;
    if (a.includes("estacionamiento")) return Car;
    if (a.includes("aire acondicionado")) return Snowflake;
    if (a.includes("servicio") || a.includes("habitaciones disponible")) return ConciergeBell;
    if (a.includes("limpieza")) return Sparkles;
    if (a.includes("televisión") || a.includes("tv")) return Tv;
    if (a.includes("aseo") || a.includes("artículos")) return SprayCan;
    if (a.includes("terraza")) return Sun;
    return Check;
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
            <div 
              className="flex-1 overflow-y-auto overscroll-contain custom-scrollbar bg-[#FDFBF7] pb-24 md:pb-0"
              data-lenis-prevent="true"
            >
              {/* TÍTULO PRINCIPAL (Arriba de todo) */}
              <div className="max-w-[1500px] w-full mx-auto px-5 pt-14 md:px-10 md:pt-12 md:pb-2 flex flex-col items-start gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="border border-forest/20 text-forest text-[9px] uppercase tracking-[0.3em] px-3 py-1.5 font-medium rounded-sm">
                    {room.category === 'hotel' ? 'Hotel' : 'Cabaña'}
                  </span>
                  {room.featured && (
                    <span className="bg-forest text-white border border-forest text-[9px] uppercase tracking-[0.3em] px-3 py-1.5 font-medium rounded-sm">
                      Destacada
                    </span>
                  )}
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-forest leading-tight">
                  {room.name}
                </h2>
              </div>

              <div className="max-w-[1500px] w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-16 p-6 md:p-10 pt-6 md:pt-6">
                {/* Columna Izquierda (Galería + Detalles) */}
                <div className="w-full md:w-[60%] flex flex-col">
                  
                  {/* GALERÍA DE IMÁGENES (Main + Thumbnails) */}
                  <div className="w-full flex flex-col gap-3 mb-8">
                    {/* Main Image */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden group shadow-sm bg-forest/5">
                      <Image 
                        src={room.images[activeImageIndex]} 
                        alt={room.name} 
                        fill 
                        className="object-cover transition-opacity duration-500" 
                        priority
                      />
                      
                      {/* Arrows */}
                      {room.images.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length); 
                            }}
                            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/40 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-forest shadow-md border border-white/50 transition-all hover:scale-105 z-10"
                          >
                            <ArrowLeft size={18} strokeWidth={2} className="md:w-6 md:h-6" />
                          </button>
                          <button 
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              setActiveImageIndex((prev) => (prev + 1) % room.images.length); 
                            }}
                            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/40 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-forest shadow-md border border-white/50 transition-all hover:scale-105 z-10"
                          >
                            <ArrowRight size={18} strokeWidth={2} className="md:w-6 md:h-6" />
                          </button>

                          {/* Dots */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                            {room.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setActiveImageIndex(idx); }}
                                className={cn(
                                  "w-2 h-2 rounded-full transition-all shadow-sm",
                                  activeImageIndex === idx ? "bg-white scale-125" : "bg-white/60 hover:bg-white/90"
                                )}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Thumbnails (Solo Desktop) */}
                    {room.images.length > 1 && (
                      <div className="hidden md:flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar mt-1">
                        {room.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={cn(
                              "relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300",
                              activeImageIndex === idx 
                                ? "border-2 border-gold ring-2 ring-gold/20 opacity-100 shadow-md" 
                                : "border border-transparent opacity-50 hover:opacity-100 grayscale-[30%] hover:grayscale-0"
                            )}
                          >
                            <Image 
                              src={img} 
                              alt={`${room.name} thumbnail ${idx + 1}`} 
                              fill 
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Highlights Rápidos */}
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-10">
                    <div className="flex items-center gap-2 md:gap-3 border border-forest/10 rounded-lg py-2.5 px-3 md:py-3 md:px-4 w-max bg-white/50 backdrop-blur-sm">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-forest/70" strokeWidth={1.5} />
                      <p className="font-inter font-medium text-forest text-[9px] md:text-[11px] uppercase tracking-widest">{room.capacity} huéspedes</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 border border-forest/10 rounded-lg py-2.5 px-3 md:py-3 md:px-4 w-max bg-white/50 backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-forest/70" strokeWidth={1.5} />
                      <p className="font-inter font-medium text-forest text-[9px] md:text-[11px] uppercase tracking-widest">Espacio amplio</p>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha (Tarjeta Flotante Sticky y Título en Desktop) */}
                <div className="w-full md:w-[40%] flex flex-col pt-0">

                  {/* Descripción (Movida aquí) */}
                  <div className="hidden md:block mb-8">
                    <h3 className="font-playfair text-xl md:text-2xl font-light text-forest mb-3">Sobre este alojamiento</h3>
                    <p className="font-inter font-light text-forest/80 leading-relaxed text-sm tracking-wide">
                      {room.description}
                    </p>
                  </div>

                  {/* Descripción en Móvil (Visible solo en móvil, antes de la tarjeta) */}
                  <div className="md:hidden mb-6 mt-4">
                    <h3 className="font-playfair text-2xl font-light text-forest mb-3">Sobre este alojamiento</h3>
                    <p className="font-inter font-light text-forest/80 leading-relaxed text-sm tracking-wide">
                      {room.description}
                    </p>
                  </div>

                  {/* Amenities Section */}
                  <div className="mb-10">
                    <h3 className="font-playfair text-xl md:text-2xl font-light text-forest mb-6">Servicios de Habitación</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-10">
                      {roomFeatures.map((amenity, idx) => {
                        const Icon = getAmenityIcon(amenity);
                        return (
                          <div key={idx} className="flex items-center gap-4 text-forest/90">
                            <Icon size={20} strokeWidth={1.5} className="text-forest/60 shrink-0" />
                            <span className="font-inter text-sm font-light tracking-wide leading-snug">
                              {amenity}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <h3 className="font-playfair text-xl md:text-2xl font-light text-forest mb-6 border-t border-forest/10 pt-10">Incluido en tu estadía</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                      {resortFeatures.map((amenity, idx) => {
                        const Icon = getAmenityIcon(amenity);
                        return (
                          <div key={idx} className="flex items-center gap-4 text-forest/90">
                            <Icon size={20} strokeWidth={1.5} className="text-gold shrink-0" />
                            <span className="font-inter text-sm font-light tracking-wide leading-snug">
                              {amenity}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="hidden md:block sticky top-6 bg-white border border-forest/10 rounded-xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-2 md:mt-0">
                    <div className="mb-6 border-b border-forest/5 pb-6">
                      {room.price && (
                        <div className="flex items-start gap-1">
                          <span className="text-sm text-forest/50 font-inter mt-1.5">S/</span>
                          <span className="font-playfair text-4xl md:text-5xl font-light text-forest">{room.price.toFixed(0)}</span>
                          <span className="text-forest/40 text-[10px] uppercase tracking-widest ml-2 mt-auto mb-1.5">/ noche</span>
                        </div>
                      )}
                    </div>

                    {/* Simple Guest Info - No Dates */}
                    <div className="border border-forest/10 rounded-lg overflow-hidden mb-6 bg-forest/[0.02]">
                      <div className="p-4 flex items-center gap-4">
                        <div className="bg-forest/5 p-3 rounded-full text-forest">
                          <Users size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-forest/50 mb-1">Capacidad Sugerida</p>
                          <p className="text-sm font-inter text-forest">{room.capacity} huéspedes</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        setTimeout(() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: room.name } })), 300);
                      }}
                      className="w-full flex items-center justify-center gap-3 bg-[#A67B5B] hover:bg-[#8e694e] text-white py-4 rounded-lg font-inter font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Reservar ahora
                    </button>
                    
                    <p className="text-center text-[10px] text-forest/40 mt-4 font-inter uppercase tracking-wider">
                      Confirmación Inmediata
                    </p>
                  </div>
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
