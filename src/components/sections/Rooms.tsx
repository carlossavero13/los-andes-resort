"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Users, Info, MessageCircle, ChevronDown, CheckCircle2, BedDouble, Waves, Activity, Coffee, Refrigerator, Droplets, Wifi, Maximize, Bath, TreePine, Car, Snowflake, ConciergeBell, Sparkles, Tv, SprayCan, Sun } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RoomModal from "@/components/ui/RoomModal";
import { ROOMS } from "@/lib/constants";
import { Room } from "@/types";
import { cn } from "@/lib/utils";

export default function Rooms() {
  const [activeTab, setActiveTab] = useState(ROOMS[0].id);
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  const activeRoom = ROOMS.find(r => r.id === activeTab) || ROOMS[0];

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
    return CheckCircle2;
  };

  return (
    <section id="habitaciones" className="py-24 md:py-32 bg-[#FDFBF7] min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#F3EFEA] to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            subtitle="Descanso Premium"
            title="Nuestras Habitaciones"
          />
        </AnimatedSection>

        {/* =========================================
            VISTA MOBILE (ACORDEÓN) - Menor a 'lg'
            ========================================= */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="block lg:hidden mt-12 w-full border-t border-forest/20">
          {ROOMS.map((room) => {
            const isActive = activeTab === room.id;
            return (
              <div key={room.id} className="border-b border-forest/20">
                <button
                  onClick={() => setActiveTab(isActive ? '' : room.id)}
                  className="w-full flex justify-between items-center py-5 md:py-6 px-2 group"
                >
                  <span className={cn(
                    "font-playfair text-xl md:text-2xl text-left transition-colors duration-300 font-medium",
                    isActive ? "text-forest" : "text-forest/70 group-hover:text-forest"
                  )}>
                    {room.name}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "text-forest/50 transition-transform duration-300",
                      isActive && "rotate-180 text-forest"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-2 flex flex-col gap-6">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={room.images[0]}
                            alt={room.name}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        
                        <div>
                          <p className="font-inter text-forest/80 font-light leading-relaxed text-sm mb-5">
                            {room.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            <span className="flex items-center gap-1.5 bg-gold/10 text-forest/90 px-3 py-1.5 rounded-md font-inter text-[10px] font-medium uppercase tracking-wider">
                                <Users size={12} className="text-gold" />
                                {room.capacity} Personas
                            </span>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-playfair text-lg text-forest mb-4 border-b border-forest/10 pb-2">Servicios de Habitación</h4>
                            <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 mb-6">
                              {room.amenities.filter(a => !['desayuno', 'piscina', 'fútbol', 'juegos', 'verdes', 'estacionamiento'].some(k => a.toLowerCase().includes(k))).map((amenity, idx) => {
                                const Icon = getAmenityIcon(amenity);
                                return (
                                  <div key={idx} className="flex items-center gap-2.5 border-b border-forest/[0.06] pb-2">
                                    <Icon size={14} strokeWidth={1.5} className="text-[#722F37]/80 shrink-0" />
                                    <span className="font-inter text-[9px] uppercase tracking-[0.1em] text-forest/70 font-medium truncate">{amenity}</span>
                                  </div>
                                );
                              })}
                            </div>
                            
                            <h4 className="font-playfair text-lg text-forest mb-4 border-b border-forest/10 pb-2 pt-2">Incluido en tu estadía</h4>
                            <div className="grid grid-cols-2 gap-y-3.5 gap-x-4">
                              {room.amenities.filter(a => ['desayuno', 'piscina', 'fútbol', 'juegos', 'verdes', 'estacionamiento'].some(k => a.toLowerCase().includes(k))).map((amenity, idx) => {
                                const Icon = getAmenityIcon(amenity);
                                return (
                                  <div key={idx} className="flex items-center gap-2.5 border-b border-forest/[0.06] pb-2">
                                    <Icon size={14} strokeWidth={1.5} className="text-gold shrink-0" />
                                    <span className="font-inter text-[9px] uppercase tracking-[0.1em] text-forest/70 font-medium truncate">{amenity}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-6 border-t border-forest/10 pt-6">
                            <div>
                              <span className="block text-[9px] font-inter uppercase tracking-[0.2em] text-forest/50">Desde</span>
                              <div className="flex items-start">
                                <span className="text-sm font-medium text-gold mt-0.5 mr-0.5">S/</span>
                                <span className="text-3xl font-playfair font-medium text-forest">{room.price ? room.price.toFixed(0) : "0"}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 w-full">
                            <button
                              onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: room.name } }))}
                              className="flex w-full items-center justify-center gap-2 bg-forest text-white px-6 py-3.5 rounded-full font-inter text-sm font-medium shadow-md hover:bg-forest-light transition-colors"
                            >
                              <MessageCircle size={16} className="text-gold" />
                              Reservar
                            </button>
                            
                            <button
                              onClick={() => setSelectedRoomModal(room)}
                              className="flex w-full items-center justify-center gap-2 bg-white text-forest border border-forest/20 px-6 py-3.5 rounded-full font-inter text-sm font-medium shadow-sm hover:bg-light-bg transition-colors"
                            >
                              <Info size={16} className="text-forest/60" />
                              Ver Detalles
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatedSection>


        {/* =========================================
            VISTA DESKTOP (TABS MODERNOS) - 'lg' en adelante
            ========================================= */}
        <div ref={desktopRef} className="hidden lg:block mt-8">
          
          {/* Segmented Control Tabs */}
          <AnimatedSection variant="fadeUp" delay={0.1} className="flex justify-center mb-16 relative z-20">
            <div className="inline-flex flex-wrap justify-center items-center bg-white/60 backdrop-blur-md p-1.5 rounded-full shadow-sm border border-black/5">
              {ROOMS.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setActiveTab(room.id)}
                  className={cn(
                    "relative px-6 py-3 font-inter text-sm transition-all duration-500 rounded-full z-10",
                    activeTab === room.id
                      ? "text-white font-semibold"
                      : "text-forest/60 hover:text-forest font-medium"
                  )}
                >
                  {room.name}
                  {activeTab === room.id && (
                    <motion.div
                      layoutId="activePillDesktop"
                      className="absolute inset-0 bg-forest rounded-full shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.2} className="relative w-full flex items-center py-6 lg:py-8 min-h-[400px] xl:min-h-[480px]">
            
            {/* Background Image Container (Right 65%) */}
            <div className="absolute right-0 top-0 bottom-0 w-[65%] rounded-3xl overflow-hidden shadow-2xl bg-forest/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoom.id}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-[-15%] w-[130%] h-[130%]"
                  style={{ y: useTransform(useScroll({ target: desktopRef, offset: ["start end", "end start"] }).scrollYProgress, [0, 1], ["0%", "15%"]) }}
                >
                  <Image
                    src={activeRoom.images[0]}
                    alt={activeRoom.name}
                    fill
                    sizes="75vw"
                    className="object-cover"
                    priority
                  />
                  {/* Subtle gradient overlay to make image look premium */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/50 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Foreground Content Card (Left overlapping) */}
            <div className="relative z-20 w-[60%] lg:w-[45%] xl:w-[40%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoom.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="bg-white/95 backdrop-blur-xl p-8 xl:p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-white/50"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-gold" />
                    <span className="text-[9px] font-inter uppercase tracking-[0.3em] text-gold font-bold">
                      {activeRoom.category === 'hotel' ? 'Zona Hotel' : 'Cabaña Exclusiva'}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-3xl xl:text-4xl text-forest font-semibold mb-4 leading-tight">
                    {activeRoom.name}
                  </h3>
                  
                  <p className="font-inter text-forest/80 font-light leading-relaxed mb-6 text-sm xl:text-base">
                    {activeRoom.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-3.5 mb-8">
                    <div className="flex items-center gap-3 border-b border-forest/[0.06] pb-2.5">
                      <Users size={14} className="text-gold shrink-0" strokeWidth={1.5} />
                      <span className="font-inter text-[9.5px] xl:text-[10.5px] uppercase tracking-[0.15em] text-forest/70 font-medium">
                        Max {activeRoom.capacity} Pax
                      </span>
                    </div>
                    {activeRoom.amenities.slice(0, 5).map((amenity, idx) => {
                      const Icon = getAmenityIcon(amenity);
                      return (
                        <div key={idx} className="flex items-center gap-3 border-b border-forest/[0.06] pb-2.5">
                          <Icon size={14} className="text-[#722F37]/80 shrink-0" strokeWidth={1.5} />
                          <span className="font-inter text-[9.5px] xl:text-[10.5px] uppercase tracking-[0.15em] text-forest/70 font-medium truncate">
                            {amenity}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Price and Buttons */}
                  <div className="mt-auto flex flex-col gap-6 border-t border-forest/10 pt-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-[9px] font-inter uppercase tracking-[0.2em] text-forest/50 mb-0.5">Desde</span>
                        <div className="flex items-start">
                          <span className="text-sm font-medium text-gold mt-1 mr-1">S/</span>
                          <span className="text-4xl font-playfair font-semibold text-forest">{activeRoom.price ? activeRoom.price.toFixed(0) : "0"}</span>
                          <span className="text-[10px] text-forest/50 font-inter ml-1.5 self-end mb-1.5">/ noche</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: activeRoom.name } }))}
                        className="flex-1 flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-white px-4 py-3 rounded-full font-inter text-xs font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <MessageCircle size={14} className="text-gold" />
                        Reservar
                      </button>
                      
                      <button
                        onClick={() => setSelectedRoomModal(activeRoom)}
                        className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-forest/5 text-forest border border-forest/20 px-4 py-3 rounded-full font-inter text-xs font-medium transition-all shadow-sm hover:shadow-md"
                      >
                        <Info size={14} className="text-forest/60" />
                        Detalles
                      </button>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </AnimatedSection>
        </div>

      </div>

      <RoomModal 
        room={selectedRoomModal} 
        isOpen={!!selectedRoomModal} 
        onClose={() => setSelectedRoomModal(null)} 
      />
    </section>
  );
}
