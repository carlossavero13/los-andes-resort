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
      
      <main className="flex-1 relative">
        {/* 1. PORTADA (Sticky Stacking Effect) */}
        <div className="sticky top-0 h-[100dvh] w-full z-0 overflow-hidden">
          <Hero />
        </div>

        {/* 2. NOSOTROS (Desliza por encima del Hero) */}
        <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-t-[40px] overflow-hidden">
          <About />
        </div>

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
