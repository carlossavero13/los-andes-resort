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
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
          data-lenis-prevent
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FDFBF7] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative flex flex-col p-8 md:p-10 text-center"
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-forest/40 hover:text-forest transition-colors"
              type="button"
              aria-label="Cerrar"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Título */}
            <div className="mb-8 mt-2">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Gift size={28} className="text-gold" />
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#722F37] mb-3 leading-tight">
                ¡Un Regalo <br/> Exclusivo!
              </h3>
              <p className="font-inter text-forest/60 text-sm leading-relaxed px-2">
                Antes de irte, queremos obsequiarte un cupón especial para que disfrutes de tu estadía en Los Andes Resort.
              </p>
            </div>
            
            {/* Ticket Voucher */}
            <div className="relative bg-white border-2 border-dashed border-gold/40 rounded-xl p-5 mb-8 flex items-center justify-center overflow-hidden mx-2">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FDFBF7] rounded-full border-r-2 border-dashed border-gold/40" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FDFBF7] rounded-full border-l-2 border-dashed border-gold/40" />
              
              <div className="text-center z-10">
                <span className="block font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-forest/50 mb-1">
                  Válido para tu Estadía
                </span>
                <span className="block font-playfair text-3xl text-forest font-bold">
                  10% DE DESCT.
                </span>
              </div>
            </div>
            
            {/* Botones */}
            <div className="space-y-4">
              <button
                onClick={handleClaim}
                className="w-full flex items-center justify-center gap-3 bg-[#722F37] hover:bg-[#5a252b] text-white px-8 py-4 rounded-xl font-inter text-sm font-semibold transition-all shadow-[0_8px_20px_rgba(114,47,55,0.2)] hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Reclamarlo por WhatsApp
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-forest/40 text-xs font-inter hover:text-[#722F37] underline transition-colors"
              >
                No gracias, prefiero perder la promoción
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
