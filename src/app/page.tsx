import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";

import Hero from "@/components/sections/Hero";
import FullDay from "@/components/sections/FullDay";

// Carga Diferida (Lazy Loading) para todas las secciones debajo del fold
const Rooms = dynamic(() => import("@/components/sections/Rooms"));
const InstagramFeed = dynamic(() => import("@/components/sections/InstagramFeed"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Restaurant = dynamic(() => import("@/components/sections/Restaurant"));
const Events = dynamic(() => import("@/components/sections/Events"));
const About = dynamic(() => import("@/components/sections/About"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Location = dynamic(() => import("@/components/sections/Location"));
const Tourism = dynamic(() => import("@/components/sections/Tourism"));

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* 1. PORTADA */}
        <Hero />

        {/* 2. NOSOTROS */}
        <About />

        {/* 5. VIVE LA EXPERIENCIA */}
        <InstagramFeed />

        {/* 3. HOTEL */}
        <Rooms />

        {/* 4. FULL DAY */}
        <FullDay />

        {/* 6. UBICACIÓN */}
        <Location />

        {/* 7. LUGARES TURÍSTICOS */}
        <Tourism />

        {/* 7. EVENTOS ESPECIALES */}
        <Events />

        {/* TODO LO DEMÁS */}
        <Restaurant />
        <Gallery />
        <FAQ />
        
        {/* 8. TESTIMONIOS (ÚLTIMO) */}
        <Testimonials />
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
