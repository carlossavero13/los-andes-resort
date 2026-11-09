"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("dismiss_ny_announcement");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem("dismiss_ny_announcement", "true");
  };

  const handleScrollToPromo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const targetEl = document.querySelector("#promocion-ano-nuevo") as HTMLElement | null;
      if (targetEl && lenis) {
        lenis.scrollTo(targetEl, { offset: -40, duration: 1.4 });
      } else if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#promocion-ano-nuevo";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="relative bg-gradient-to-r from-[#2B0E0D] via-[#581e1d] to-[#2B0E0D] text-white border-b border-gold/30 shadow-md z-[60] overflow-hidden"
        >
          {/* Subtle animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs">
            
            {/* Center Content / Clickable Banner */}
            <a
              href="/#promocion-ano-nuevo"
              onClick={handleScrollToPromo}
              className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center cursor-pointer group hover:opacity-95 transition-opacity"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-light border border-gold/30 font-medium text-[10px] tracking-wider uppercase">
                Preventa 2027
              </span>

              <span className="hidden md:inline font-inter text-white/90 font-light">
                Recibe el Año Nuevo en Cieneguilla · Paquetes y cupos limitados
              </span>
              <span className="md:hidden font-inter text-white/90 font-light text-[11px]">
                ¡Año Nuevo 2027 en Los Andes!
              </span>

              <span className="inline-flex items-center gap-1 text-gold font-medium tracking-wide uppercase text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform">
                <span>Ver Promoción</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              aria-label="Cerrar aviso"
              className="text-white/60 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
