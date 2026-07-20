"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import RoomModal from "@/components/ui/RoomModal";
import { ROOMS } from "@/lib/constants";
import { Room } from "@/types";

export default function Rooms() {
  const [activeTab, setActiveTab] = useState<'hotel' | 'cabana'>('hotel');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const displayedRooms = ROOMS.filter(r => r.category === activeTab);

  return (
    <section id="habitaciones" className="py-24 md:py-32 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Descanso Premium"
          title="Nuestras Habitaciones"
        />

        <p className="text-forest/60 text-center max-w-2xl mx-auto mb-24 font-inter font-light text-sm md:text-base tracking-[0.05em] leading-relaxed">
          Elige la experiencia que mejor se adapte a ti: la elegancia rústica de nuestras Cabañas o la exclusividad moderna de nuestra Zona Hotel.
        </p>

        {/* Tabs / Toggle - Luxurious Pill */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center bg-forest/5 p-1.5 rounded-full border border-forest/10">
            <div 
              className="absolute h-[calc(100%-12px)] top-[6px] rounded-full bg-white shadow-md transition-all duration-500 ease-out"
              style={{
                width: 'calc(50% - 6px)',
                left: activeTab === 'hotel' ? '6px' : 'calc(50%)',
              }}
            />
            
            <button
              onClick={() => setActiveTab('hotel')}
              className={`relative z-10 w-40 md:w-48 py-3.5 font-inter text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
                activeTab === 'hotel' 
                  ? 'text-forest font-semibold' 
                  : 'text-forest/50 hover:text-forest/80'
              }`}
            >
              Zona Hotel
            </button>
            <button
              onClick={() => setActiveTab('cabana')}
              className={`relative z-10 w-40 md:w-48 py-3.5 font-inter text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
                activeTab === 'cabana' 
                  ? 'text-forest font-semibold' 
                  : 'text-forest/50 hover:text-forest/80'
              }`}
            >
              Zona Cabañas
            </button>
          </div>
        </div>

        {/* Room Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`gap-6 md:gap-8 ${
                displayedRooms.length === 1
                  ? "flex justify-center max-w-md mx-auto w-full"
                  : displayedRooms.length === 2
                  ? "grid md:grid-cols-2 max-w-5xl mx-auto"
                  : "grid md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {displayedRooms.map((room) => (
                <div 
                  key={room.id}
                  className="group relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  onClick={() => setSelectedRoom(room)}
                >
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  {room.featured && (
                    <div className="absolute top-5 right-5 z-20">
                      <span className="bg-gold/90 backdrop-blur-sm text-forest text-[9px] font-inter uppercase tracking-[0.3em] px-4 py-2 font-bold shadow-lg rounded-sm">
                        Más Solicitada
                      </span>
                    </div>
                  )}

                  {/* Content Container */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex justify-between items-end mb-4">
                      <div className="pr-2">
                        <h3 className="font-playfair text-2xl md:text-3xl text-white mb-2 font-light group-hover:text-gold transition-colors duration-500">
                          {room.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] font-inter uppercase tracking-[0.2em] text-white/70">
                          <Users size={12} className="text-gold" />
                          <span>Hasta {room.capacity} personas</span>
                        </div>
                      </div>
                      
                      {room.price && (
                        <div className="text-right flex-shrink-0">
                          <p className="text-[8px] font-inter uppercase tracking-[0.3em] text-white/50 mb-1">Desde</p>
                          <div className="flex items-start justify-end gap-1">
                            <span className="text-xs text-gold font-inter mt-1">S/</span>
                            <span className="font-playfair text-3xl font-medium text-white">{room.price.toFixed(0)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Thin separator */}
                    <div className="w-full h-[1px] bg-white/20 mb-4" />

                    {/* Footer / CTA */}
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                        Explorar Detalles
                      </span>
                      <div className="relative w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center group-hover:bg-gold transition-all duration-500 overflow-hidden">
                        <ArrowRight size={14} className="text-gold group-hover:text-forest absolute transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-500" />
                        <ArrowRight size={14} className="text-gold group-hover:text-forest absolute transform translate-x-0 group-hover:translate-x-6 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <RoomModal 
        room={selectedRoom} 
        isOpen={!!selectedRoom} 
        onClose={() => setSelectedRoom(null)} 
      />
    </section>
  );
}
