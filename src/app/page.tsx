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
const CommonAreas = dynamic(() => import("@/components/sections/CommonAreas"));
const Restaurant = dynamic(() => import("@/components/sections/Restaurant"));
const Events = dynamic(() => import("@/components/sections/Events"));
const About = dynamic(() => import("@/components/sections/About"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Location = dynamic(() => import("@/components/sections/Location"));

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* 1. GANCHO — Impacto visual inmediato */}
        <Hero />

        {/* 2. PROPUESTA DE VALOR — Precio accesible, acción rápida */}
        <FullDay />

        {/* 3. CORE BUSINESS — Donde se genera la mayor rentabilidad */}
        <Rooms />

        {/* FEED INSTAGRAM */}
        <InstagramFeed />

        {/* 4. PRUEBA VISUAL — Demuestra que es real */}
        <Gallery />

        {/* 5. PRUEBA SOCIAL — Otros ya confiaron */}
        <Testimonials />

        {/* 6. SOPORTE — Complementa la decisión */}
        <CommonAreas />
        <Restaurant />
        <Events />

        {/* 7. CONFIANZA — Historia y dudas */}
        <About />
        <FAQ />

        {/* 8. CIERRE — Cómo llegar y contacto */}
        <Location />
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
