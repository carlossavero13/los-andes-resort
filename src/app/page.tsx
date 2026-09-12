import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Hero from "@/components/sections/Hero";
import FullDay from "@/components/sections/FullDay";
import PetFriendly from "@/components/sections/PetFriendly";


import Rooms from "@/components/sections/Rooms";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Restaurant from "@/components/sections/Restaurant";
import Events from "@/components/sections/Events";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import Tourism from "@/components/sections/Tourism";

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

        {/* 7. EVENTOS ESPECIALES */}
        <Events />

        {/* 6. UBICACIÓN */}
        <Location />

        {/* TODO LO DEMÁS */}
        <Restaurant />
        <Gallery />

        {/* 7. LUGARES TURÍSTICOS */}
        <Tourism />
        
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
