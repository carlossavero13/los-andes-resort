"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FAQS, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { getWhatsAppUrl, cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-white/40 -z-10 blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gold/5 -z-10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Columna Izquierda: Sticky Header & Contact */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <AnimatedSection variant="fadeUp">
              <span className="text-forest/40 font-inter text-[10px] tracking-[0.4em] font-light uppercase mb-6 block">
                Resuelve tus Dudas
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-forest mb-8 leading-tight tracking-tight">
                Preguntas<br className="hidden lg:block" /> Frecuentes
              </h2>
              
              <p className="text-forest/60 font-inter font-light text-sm tracking-wide leading-relaxed mb-12">
                Hemos recopilado las dudas más comunes de nuestros huéspedes para ayudarte a planificar tu escape perfecto.
              </p>

              <div className="hidden lg:block mt-4">
                <a
                  href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-forest font-inter font-medium text-[10px] tracking-[0.3em] uppercase hover:text-white transition-colors group/btn border border-gold/40 px-8 py-4 rounded-full hover:bg-gold hover:border-gold shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-gold group-hover/btn:text-white transition-colors" />
                  Atención Personalizada
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Columna Derecha: Accordions Minimalistas */}
          <div className="w-full lg:w-2/3">
            <AnimatedSection variant="fadeUp" delay={0.2} className="divide-y divide-gold/30">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.id} className="py-8 group/accordion">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <span
                        className={cn(
                          "font-playfair text-xl md:text-2xl pr-8 transition-colors duration-500",
                          isOpen ? "text-gold font-light italic" : "text-forest/80 group-hover:text-gold font-light"
                        )}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 border",
                          isOpen
                            ? "bg-gold text-white border-gold shadow-md"
                            : "bg-transparent text-forest/40 border-forest/20 group-hover:border-gold group-hover:text-gold"
                        )}
                      >
                        {isOpen ? <Minus className="w-4 h-4" strokeWidth={1.5} /> : <Plus className="w-4 h-4" strokeWidth={1.5} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="font-inter font-light text-forest/60 pt-6 pb-2 pr-12 leading-relaxed text-sm md:text-base tracking-wide">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </AnimatedSection>
            
            <div className="mt-16 pt-8 border-t border-gold/30 lg:hidden flex justify-center">
              <a
                href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-forest font-inter font-medium text-[10px] tracking-[0.3em] uppercase hover:text-white transition-colors group/btn border border-gold/40 px-8 py-4 rounded-full hover:bg-gold hover:border-gold shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-gold group-hover/btn:text-white transition-colors" />
                Atención Personalizada
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
