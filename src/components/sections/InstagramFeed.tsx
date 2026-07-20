"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const feedMedia = [
  { type: "video", src: "/videos/ig1.mp4", href: "https://www.instagram.com/reel/Da3iaO1P56G/" },
  { type: "video", src: "/videos/ig2.mp4", href: "https://www.instagram.com/reel/Da6joDDRcaW/" },
  { type: "video", src: "/videos/ig3.mp4", href: "https://www.instagram.com/reel/DamUXGMvnEM/" },
  { type: "video", src: "/videos/ig4.mp4", href: "https://www.instagram.com/reel/Dabhk6zvPtB/" },
  { type: "video", src: "/videos/ig5.mp4", href: "https://www.instagram.com/reel/DaHCubYPGTE/" },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-20">
        <AnimatedSection variant="fadeUp" className="flex flex-col items-center justify-center text-center">
          <SectionHeading
            subtitle="@losandescieneguilla"
            title="Vive la Experiencia"
            light={false}
            centered={true}
          />
          <a 
            href="https://www.instagram.com/losandescieneguilla/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-forest hover:bg-forest-light text-gold rounded-full font-inter text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 -mt-2"
          >
            <InstagramIcon className="w-5 h-5" />
            Síguenos
          </a>
        </AnimatedSection>
      </div>

      {/* Grid de Instagram Simulado Moderno */}
      <div className="w-full relative z-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 px-4 md:px-8">
          {feedMedia.map((media, idx) => {
            return (
              <InstagramCard key={idx} media={media} idx={idx} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InstagramCard({ media, idx }: { media: { type: string; src: string; href?: string }, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <a 
      href={media.href || "https://www.instagram.com/losandescieneguilla/"} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "block relative",
        idx % 2 !== 0 ? "md:translate-y-12" : ""
      )}
      ref={ref}
    >
      <AnimatedSection 
        variant="fadeUp" 
        delay={idx * 0.1}
        className="relative aspect-[4/5] group overflow-hidden cursor-pointer bg-light-bg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        {media.type === "video" ? (
          isInView && (
            <video
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )
        ) : (
          <Image
            src={media.src}
            alt={`Instagram Post ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center backdrop-blur-[2px]">
          <InstagramIcon className="w-10 h-10 text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
          <span className="text-white font-inter text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-semibold drop-shadow-md">
            Ver Post
          </span>
        </div>
      </AnimatedSection>
    </a>
  );
}
