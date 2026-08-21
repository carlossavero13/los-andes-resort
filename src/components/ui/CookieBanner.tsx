"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si ya aceptó las cookies previamente
    const hasAccepted = localStorage.getItem("cookies_accepted");
    if (!hasAccepted) {
      // Pequeño retraso para que no aparezca de golpe al cargar
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    // Si solo lo cierra, no guardamos "true" o guardamos "dismissed"
    // Para simplificar, lo trataremos como aceptado para no molestar más
    localStorage.setItem("cookies_accepted", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-[400px] z-[999]"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#722F37]/10 p-5 md:p-6 flex flex-col gap-4 relative overflow-hidden">
            {/* Adorno de fondo */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-[30px] pointer-events-none" />

            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-forest/40 hover:text-forest transition-colors"
              aria-label="Cerrar aviso de cookies"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="bg-[#722F37]/5 p-2 rounded-lg text-[#722F37]">
                <Cookie size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair font-semibold text-forest text-lg">
                Uso de Cookies
              </h3>
            </div>
            
            <p className="font-inter text-forest/70 text-xs md:text-sm leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios, personalizar tu experiencia y analizar el tráfico de nuestro sitio web.
            </p>
            
            <div className="flex gap-3 mt-1">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-[#722F37] hover:bg-[#5a252b] text-white font-inter text-sm font-medium py-2.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
