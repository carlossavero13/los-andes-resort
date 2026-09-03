"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, BedDouble, MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

import Image from "next/image";

const EXPERIENCES = [
  { group: "Zona Hotel (Suites)", items: ["Hotel - Matrimonial Suite Junior", "Hotel - Doble Suite Junior"] },
  { group: "Zona Cabañas", items: ["Cabaña - Matrimonial Estándar", "Cabaña - Doble Superior", "Cabaña - Doble Estándar", "Cabaña - Familiar"] },
  { group: "Otros Servicios", items: ["Full Day", "Eventos Especiales", "Consulta General"] }
];

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    service: "Cabaña - Matrimonial Estándar",
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    comments: "",
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
    const commentsText = formData.comments.trim() ? `\n*Comentarios:* ${formData.comments.trim()}` : "";
    const message = `Hola, me gustaría consultar disponibilidad.\n\n*Servicio:* ${formData.service}\n*Llegada:* ${formData.checkIn}\n*Salida:* ${formData.checkOut}\n*Personas:* ${formData.guests}\n*Habitaciones:* ${formData.rooms}${commentsText}\n\nQuedo a la espera de su respuesta.`;
    window.open(getWhatsAppUrl(message), "_blank");
    setIsOpen(false);
  };

  // Bloquear el scroll del fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
          data-lenis-prevent
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
          >
            {/* Left Side - Image (Hidden on mobile) */}
            <div className="hidden md:block md:w-5/12 relative bg-black">
              <Image 
                src="/images/rooms/sui_mat_jun/sui_mat_jun1.webp"
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
                
                {/* Servicio - Custom Dropdown */}
                <div className="relative group">
                  <label className="block font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-forest/50 mb-2 transition-colors">
                    Experiencia Deseada
                  </label>
                  
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between border-b border-forest/20 pb-2 cursor-pointer hover:border-gold transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <BedDouble size={18} className={`transition-colors ${isDropdownOpen ? 'text-gold' : 'text-forest/40'}`} />
                      <span className="text-forest font-playfair text-lg">
                        {formData.service.replace("Hotel - ", "").replace("Cabaña - ", "")}
                      </span>
                    </div>
                    <ChevronDown size={18} className={`text-forest/40 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </div>

                  {/* Menu Desplegable Customizado */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        data-lenis-prevent
                        className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#722F37]/10 z-[60] max-h-[300px] overflow-y-auto origin-top overscroll-contain"
                      >
                        {EXPERIENCES.map((group, idx) => (
                          <div key={idx}>
                            <div className="px-5 py-2.5 font-inter text-[10px] font-bold uppercase tracking-widest text-[#722F37]/70 bg-[#722F37]/5 border-y border-[#722F37]/10 first:border-t-0">
                              {group.group}
                            </div>
                            {group.items.map(item => (
                              <div 
                                key={item}
                                onClick={() => {
                                  setFormData({...formData, service: item});
                                  setIsDropdownOpen(false);
                                }}
                                className={`px-5 py-3 font-playfair text-base cursor-pointer transition-all ${
                                  formData.service === item 
                                    ? 'bg-[#722F37]/10 text-[#722F37] font-semibold pl-6 border-l-2 border-[#722F37]' 
                                    : 'text-forest hover:bg-forest/5 hover:pl-6'
                                }`}
                              >
                                {item.replace("Hotel - ", "").replace("Cabaña - ", "")}
                              </div>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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

                {/* Personas, Habitaciones y Comentarios (Agrupados) */}
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
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

                    <div className="relative group">
                      <label className="block font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-forest/50 mb-2 transition-colors group-focus-within:text-gold">
                        Habitaciones
                      </label>
                      <div className="flex items-center gap-3 border-b border-forest/20 pb-2 group-focus-within:border-gold transition-colors">
                        <BedDouble size={18} className="text-forest/40 group-focus-within:text-gold transition-colors" />
                        <input 
                          type="number" 
                          min="1"
                          required
                          value={formData.rooms}
                          onChange={(e) => setFormData({...formData, rooms: e.target.value})}
                          className="w-full bg-transparent text-forest font-playfair text-lg focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-forest/50 mb-2 transition-colors group-focus-within:text-gold">
                      Comentarios o Pedidos Especiales <span className="text-forest/30 normal-case tracking-normal">(Opcional)</span>
                    </label>
                    <div className="flex items-start gap-3 border-b border-forest/20 pb-2 group-focus-within:border-gold transition-colors">
                      <MessageCircle size={18} className="text-forest/40 mt-1 group-focus-within:text-gold transition-colors" />
                      <textarea 
                        rows={2}
                        value={formData.comments}
                        onChange={(e) => setFormData({...formData, comments: e.target.value})}
                        placeholder="Ej. Viajo con mi mascota, aniversario, alergias..."
                        className="w-full bg-transparent text-forest font-inter text-sm focus:outline-none resize-none placeholder:text-forest/20"
                      />
                    </div>
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
