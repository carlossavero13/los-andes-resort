"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, BedDouble, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

import Image from "next/image";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    service: "Cabaña - Matrimonial Estándar",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.service) {
        setFormData(prev => ({ ...prev, service: customEvent.detail.service }));
      }
      setIsOpen(true);
    };

    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, me gustaría consultar disponibilidad.\n\n*Servicio:* ${formData.service}\n*Llegada:* ${formData.checkIn}\n*Salida:* ${formData.checkOut}\n*Personas:* ${formData.guests}\n\nQuedo a la espera de su respuesta.`;
    window.open(getWhatsAppUrl(message), "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row"
          >
            {/* Left Side - Image (Hidden on mobile) */}
            <div className="hidden md:block md:w-5/12 relative bg-black">
              <Image 
                src="/images/rooms/hmatrisjunior1.png"
                alt="Los Andes Resort"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-8 right-8 text-white">
                <div className="w-10 h-[1px] bg-gold mb-4" />
                <h4 className="font-playfair text-3xl font-light leading-tight mb-2">
                  Tu refugio <br/><span className="italic text-gold">te espera</span>
                </h4>
                <p className="font-inter font-light text-xs tracking-widest uppercase text-white/60">
                  Cieneguilla, Lima
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-7/12 p-8 md:p-12 relative bg-[#FAFAFA]">
              
              {/* Botón Cerrar */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-forest/40 hover:text-forest transition-colors"
                type="button"
                aria-label="Cerrar"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              {/* Header */}
              <div className="mb-10">
                <h3 className="font-playfair text-3xl font-bold text-forest mb-2">
                  Solicitar Reserva
                </h3>
                <p className="font-inter font-light text-forest/60 text-sm">
                  Confirma tus fechas y te atenderemos personalmente vía WhatsApp.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Servicio */}
                <div className="relative group">
                  <label className="block font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-forest/50 mb-2 transition-colors group-focus-within:text-gold">
                    Experiencia Deseada
                  </label>
                  <div className="flex items-center gap-3 border-b border-forest/20 pb-2 group-focus-within:border-gold transition-colors">
                    <BedDouble size={18} className="text-forest/40 group-focus-within:text-gold transition-colors" />
                    <select 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-transparent text-forest font-playfair text-lg focus:outline-none cursor-pointer appearance-none"
                    >
                      <optgroup label="Zona Hotel (Suites)" className="font-inter text-xs uppercase tracking-widest text-forest/50">
                        <option value="Hotel - Matrimonial Suite Junior" className="font-playfair text-base">Matrimonial Suite Junior</option>
                        <option value="Hotel - Doble Suite Junior" className="font-playfair text-base">Doble Suite Junior</option>
                      </optgroup>
                      <optgroup label="Zona Cabañas" className="font-inter text-xs uppercase tracking-widest text-forest/50">
                        <option value="Cabaña - Matrimonial Estándar" className="font-playfair text-base">Matrimonial Estándar</option>
                        <option value="Cabaña - Doble Superior" className="font-playfair text-base">Doble Superior</option>
                        <option value="Cabaña - Doble Estándar" className="font-playfair text-base">Doble Estándar</option>
                        <option value="Cabaña - Familiar" className="font-playfair text-base">Familiar (hasta 6 pax)</option>
                      </optgroup>
                      <optgroup label="Otros Servicios" className="font-inter text-xs uppercase tracking-widest text-forest/50">
                        <option value="Full Day" className="font-playfair text-base">Full Day (Pasadía)</option>
                        <option value="Eventos Especiales" className="font-playfair text-base">Eventos Especiales</option>
                        <option value="Consulta General" className="font-playfair text-base">Consulta General</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Fechas */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-forest/50 mb-2 transition-colors group-focus-within:text-gold">
                      Llegada
                    </label>
                    <div className="flex items-center gap-3 border-b border-forest/20 pb-2 group-focus-within:border-gold transition-colors">
                      <Calendar size={18} className="text-forest/40 group-focus-within:text-gold transition-colors" />
                      <input 
                        type="date" 
                        required
                        min={new Date().toLocaleDateString('en-CA')}
                        value={formData.checkIn}
                        onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                        className="w-full bg-transparent text-forest font-playfair text-lg focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label className="block font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-forest/50 mb-2 transition-colors group-focus-within:text-gold">
                      Salida
                    </label>
                    <div className="flex items-center gap-3 border-b border-forest/20 pb-2 group-focus-within:border-gold transition-colors">
                      <Calendar size={18} className="text-forest/40 group-focus-within:text-gold transition-colors" />
                      <input 
                        type="date" 
                        required
                        min={formData.checkIn || new Date().toLocaleDateString('en-CA')}
                        value={formData.checkOut}
                        onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                        className="w-full bg-transparent text-forest font-playfair text-lg focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Personas */}
                <div className="relative group">
                  <label className="block font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-forest/50 mb-2 transition-colors group-focus-within:text-gold">
                    Huéspedes
                  </label>
                  <div className="flex items-center gap-3 border-b border-forest/20 pb-2 group-focus-within:border-gold transition-colors">
                    <Users size={18} className="text-forest/40 group-focus-within:text-gold transition-colors" />
                    <input 
                      type="number" 
                      min="1"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full bg-transparent text-forest font-playfair text-lg focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-forest hover:bg-forest-light text-white px-8 py-5 rounded-none font-inter text-[11px] font-medium tracking-[0.2em] uppercase transition-all"
                  >
                    <MessageCircle size={18} className="text-gold" />
                    Consultar Disponibilidad
                  </button>
                  <p className="text-center font-inter text-[10px] text-forest/40 mt-4 tracking-wider">
                    Serás redirigido a WhatsApp para confirmar
                  </p>
                </div>
                
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
