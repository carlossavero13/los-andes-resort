"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Solo mostramos en desktop cuando el mouse sale hacia arriba (intento de cerrar pestaña o cambiar URL)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (!hasTriggered && !sessionStorage.getItem("exitIntentShown")) {
          setIsOpen(true);
          setHasTriggered(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  const handleClaim = () => {
    window.open(getWhatsAppUrl("Hola, acabo de ver la promoción del 10% de descuento en la web y me gustaría aprovecharlo."), "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative text-center"
          >
            {/* Botón Cerrar Flotante */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-forest bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-10"
              type="button"
            >
              <X size={20} />
            </button>

            {/* Header Clean Luxury */}
            <div className="pt-10 px-8 pb-4 text-center relative">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift size={36} className="text-gold" />
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-forest mb-3">
                ¡Un Regalo <br/> Exclusivo!
              </h3>
              <div className="w-12 h-1 bg-gold mx-auto rounded-full mb-4" />
              <p className="font-poppins text-gray-500 text-sm px-4 leading-relaxed">
                Antes de que te vayas, queremos obsequiarte un descuento especial para tu próxima aventura.
              </p>
            </div>
            
            <div className="px-8 pb-8">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl py-4 mb-6">
                <p className="font-poppins text-gray-600 text-sm">
                  Obtén un <span className="font-bold text-forest text-xl block mt-1">10% de descuento</span> en Full Day o Estadía.
                </p>
              </div>
              
              <button
                onClick={handleClaim}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-xl font-inter font-bold transition-all shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 mb-4"
              >
                <MessageCircle size={22} />
                Reclamar Descuento
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 text-xs font-inter hover:text-gray-600 underline transition-colors"
              >
                No gracias, prefiero perder esta oferta
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
