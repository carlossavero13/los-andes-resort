"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Evitar scroll mientras carga
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2500); // 2.5 segundos de pantalla de carga

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-forest flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-60" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Logo Ampliado */}
            <div className="relative w-72 h-36 md:w-96 md:h-48 mb-10">
               <Image 
                  src="/images/los_andes_logo.png" 
                  alt="Los Andes Club Resort"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_35px_rgba(196,162,101,0.4)] brightness-0 invert"
               />
            </div>
            
            {/* Línea de carga elegante (Gold) */}
            <div className="w-56 h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 text-gold text-[10px] md:text-[11px] font-inter uppercase tracking-[0.5em] font-medium"
            >
              Preparando su escape
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
