"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { GalleryImage } from "@/types";

// Elementos del Acordeón (Highlights)
const highlightItems = [
  { 
    id: 1, 
    category: "Instalaciones", 
    title: "Piscina Principal",
    desc: "Un oasis de relajación bajo el sol de Cieneguilla.",
    src: "/images/hero/hero-1.png" 
  },
  { 
    id: 2, 
    category: "Alojamiento", 
    title: "Suite Premium",
    desc: "Máximo confort y elegancia para momentos inolvidables.",
    src: "/images/rooms/hmatrisjunior1.png" 
  },
  { 
    id: 3, 
    category: "Entorno", 
    title: "Naturaleza Pura",
    desc: "Amplias áreas verdes para desconectar de la ciudad.",
    src: "/images/hero/hero-3.png" 
  },
  { 
    id: 4, 
    category: "Gastronomía", 
    title: "Restaurante",
    desc: "Sabores exquisitos en un ambiente acogedor.",
    src: "/images/restaurant/res1.png" 
  },
  { 
    id: 5, 
    category: "Cabañas", 
    title: "Matrimonial Estándar",
    desc: "Arquitectura rústica con todas las comodidades modernas.",
    src: "/images/rooms/h_matri1_v2.png" 
  },
];

// Elementos de la Grilla Completa
const gridItems: GalleryImage[] = [
  { id: 1, category: "Piscinas", src: "/images/hero/hero-1.png", label: "Piscina Principal", className: "md:col-span-2 md:row-span-2" },
  { id: 2, category: "Familias", src: "/images/hero/hero-2.png", label: "Diversión en Familia" },
  { id: 21, category: "Familias", src: "/images/areas/j_demesa.png", label: "Juegos de Mesa" },
  { id: 22, category: "Familias", src: "/images/areas/j_futbolmesa.png", label: "Fútbol de Mesa" },
  { id: 23, category: "Familias", src: "/images/areas/j_inflables.png", label: "Juegos Inflables" },
  { id: 24, category: "Familias", src: "/images/areas/j_inflables2.png", label: "Diversión en Inflables" },
  { id: 25, category: "Familias", src: "/images/areas/j_sapito.png", label: "Juego del Sapito" },
  { id: 26, category: "Familias", src: "/images/areas/j_niños.png", label: "Juegos para Niños" },
  { id: 27, category: "Familias", src: "/images/areas/j_niños2.png", label: "Zona Infantil" },
  { id: 3, category: "Áreas verdes", src: "/images/hero/hero-3.png", label: "Jardines del Resort", className: "md:row-span-2" },
  { id: 31, category: "Áreas verdes", src: "/images/areas/areaverde.png", label: "Áreas Verdes" },
  { id: 32, category: "Áreas verdes", src: "/images/areas/areaverde2.png", label: "Jardines y Naturaleza" },
  { id: 33, category: "Piscinas", src: "/images/areas/areapiscina.png", label: "Área de Piscina" },
  { id: 34, category: "Piscinas", src: "/images/areas/areapiscina2.png", label: "Piscina y Recreación" },
  { id: 4, category: "Eventos", src: "/images/events/ev1.png", label: "Celebraciones Familiares" },
  { id: 41, category: "Eventos", src: "/images/events/ev2.png", label: "Matrimonios y Bodas" },
  { id: 42, category: "Eventos", src: "/images/events/ev3.png", label: "Eventos Corporativos" },
  { id: 43, category: "Eventos", src: "/images/areas/baile1.png", label: "Danzas y Shows" },
  { id: 44, category: "Eventos", src: "/images/areas/baile2.png", label: "Entretenimiento en Vivo" },
  { id: 5, category: "Habitaciones", src: "/images/rooms/hmatrisjunior1.png", label: "Suite Premium", className: "md:col-span-2" },
  { id: 6, category: "Piscinas", src: "/images/hero/hero-5.png", label: "Piscina Infantil" },
  { id: 7, category: "Restaurante", src: "/images/restaurant/res1.png", label: "Área de Restaurante", className: "md:col-span-2 md:row-span-2" },
  { id: 71, category: "Restaurante", src: "/images/restaurant/res3.png", label: "Platos a la Carta" },
  { id: 72, category: "Restaurante", src: "/images/restaurant/res4.png", label: "Bar y Bebidas" },
  { id: 8, category: "Habitaciones", src: "/images/rooms/h_matri1_v2.png", label: "Matrimonial Estándar" },
  { id: 9, category: "Habitaciones", src: "/images/rooms/h_doble_sup1.png", label: "Doble Superior" },
  { id: 10, category: "Habitaciones", src: "/images/rooms/hdsjunior1.png", label: "Interiores", className: "md:col-span-2" },
];

const categories = ["Todas", "Piscinas", "Habitaciones", "Restaurante", "Eventos", "Áreas verdes", "Familias"];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Todas");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredItems = activeCategory === "Todas"
    ? gridItems
    : gridItems.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-20">
        
        {/* === PARTE 1: ACORDEÓN DE HIGHLIGHTS === */}
        <AnimatedSection variant="fadeUp" className="mb-12 md:mb-16">
          <SectionHeading subtitle="El Resort en Imágenes" title="Nuestra Esencia" />
          <p className="text-center text-text-secondary font-poppins max-w-2xl mx-auto mt-6">
            Descubre los rincones más hermosos de Los Andes Club Resort. Un diseño pensado para armonizar el lujo con la naturaleza.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] xl:h-[700px] gap-4 w-full mb-32">
          {highlightItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isNoneHovered = hoveredIndex === null;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ flex: isHovered ? 4 : isNoneHovered ? 1 : 0.5 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer flex-1 min-h-[100px] shadow-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Dark overlay for inactive state */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${isHovered ? "opacity-0 lg:opacity-0" : "opacity-40 lg:opacity-100"}`} />
                
                {/* Gradient for active state (text legibility) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`} />

                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  
                  {/* Expanded Content */}
                  <motion.div
                    animate={{
                      opacity: isHovered || isMobile ? 1 : 0,
                      y: isHovered || isMobile ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: isHovered ? 0.2 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[1px] bg-gold" />
                      <span className="text-gold text-[10px] md:text-xs font-inter tracking-[0.4em] uppercase font-medium">{item.category}</span>
                    </div>
                    
                    <h3 className="text-white font-playfair text-3xl md:text-4xl lg:text-5xl font-light mb-4 leading-tight drop-shadow-xl whitespace-nowrap">
                      {item.title}
                    </h3>
                    
                    <motion.p 
                      animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                      className="text-white/80 font-inter font-light text-sm md:text-base max-w-md drop-shadow-md leading-relaxed"
                    >
                      {item.desc}
                    </motion.p>
                  </motion.div>

                  {/* Vertical Text (Inactive State) */}
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <motion.span
                      animate={{ opacity: isHovered ? 0 : 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-white/90 font-playfair tracking-widest text-3xl font-light rotate-[-90deg] whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                    >
                      {item.title}
                    </motion.span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* === PARTE 2: GRILLA COMPLETA FILTRABLE === */}
        <AnimatedSection variant="fadeUp" className="mb-12">
          <h3 className="font-playfair text-3xl md:text-4xl font-light text-center text-forest mb-12">
            Explora la Galería Completa
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 px-4">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2.5 rounded-full font-inter text-[10px] md:text-[11px] tracking-[0.25em] uppercase transition-all duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-forest/60 hover:text-forest bg-transparent hover:bg-forest/5"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="gallery-pill" 
                      className="absolute inset-0 bg-forest rounded-full shadow-md" 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <motion.div layout className="min-h-[500px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px] max-w-7xl mx-auto"
            >
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-forest/20 transition-all duration-500 ${item.className || "col-span-1 row-span-1"}`}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-[1500ms] ease-out md:group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  
                  {/* Gradiente oscuro para el hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-500 z-10" />

                  {/* Lupa / Icono central (Art Gallery effect) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 z-20">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/40 flex items-center justify-center bg-black/30 backdrop-blur-sm shadow-2xl">
                      <Search size={20} className="text-gold" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Textos inferiores (Aparecen con hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                    <div className="w-6 h-[1px] bg-gold mb-3" />
                    <span className="text-white text-base md:text-xl font-playfair font-light block drop-shadow-md">
                      {item.label}
                    </span>
                    <span className="text-gold text-[9px] md:text-[10px] font-inter uppercase tracking-[0.3em] block mt-1 drop-shadow-md">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>

      {/* === MODAL / LIGHTBOX DE IMAGEN === */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-auto sm:h-[85vh] rounded-3xl overflow-hidden bg-black flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-gold hover:border-gold hover:text-forest transition-all duration-300"
              >
                <X size={24} />
              </button>
              
              {/* Image */}
              <div className="absolute inset-0">
                <Image 
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </div>
              
              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 sm:p-12 md:p-16 text-center sm:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-10 h-[2px] bg-gold mb-4 mx-auto sm:mx-0" />
                  <h3 className="font-playfair text-3xl sm:text-5xl font-light text-white mb-3">
                    {selectedImage.label}
                  </h3>
                  <span className="text-gold text-xs sm:text-sm font-inter uppercase tracking-[0.4em]">
                    {selectedImage.category}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
