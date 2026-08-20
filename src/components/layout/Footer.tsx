"use client";

import { Phone, Mail, MapPin, BookOpen } from "lucide-react";
import {
  NAV_LINKS,
  RESORT_PHONE,
  RESORT_LANDLINE,
  RESORT_EMAIL,
  RESORT_ADDRESS,
  WHATSAPP_DEFAULT_MESSAGE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-[#0F1115] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative gradient to blend smoothly */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-playfair text-3xl font-bold text-white tracking-wide">
                Los Andes
              </span>
            </div>
            <p className="text-white/70 text-sm font-poppins leading-relaxed max-w-xs">
              Tu escape perfecto entre la naturaleza y el confort. Un resort
              exclusivo para crear recuerdos inolvidables en familia.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.37-6.22V9.4a8.16 8.16 0 0 0 3.85.96V7.64a4.85 4.85 0 0 1-0-.95z"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-dark transition-all"
                aria-label="Youtube"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Navegación
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm font-poppins transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-sm font-poppins">
                    {RESORT_PHONE} (Celular)
                  </span>
                  <span className="text-white/70 text-sm font-poppins">
                    {RESORT_LANDLINE} (Fijo)
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-poppins">
                  {RESORT_EMAIL}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-poppins">
                  {RESORT_ADDRESS}
                </span>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-inter text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Horario
            </h4>
            <div className="font-poppins">
              <p className="text-white font-medium text-sm">Lunes a Domingo</p>
              <p className="text-white/70 text-sm mt-1">10:00 AM - 5:00 PM</p>
            </div>
            <a
              href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-gold hover:bg-gold-light text-forest px-6 py-3 rounded-full font-inter text-sm font-semibold transition-colors shadow-lg"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="text-white/50 text-sm font-poppins text-center md:text-left">
            © {new Date().getFullYear()} Los Andes Club Resort. Todos los
            derechos reservados.
          </p>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-sm"
              title="Libro de Reclamaciones"
            >
              <BookOpen size={18} className="text-gold" />
              <span className="font-poppins text-xs font-medium uppercase tracking-wider">Libro de Reclamaciones</span>
            </a>
            <p className="text-white/30 text-xs font-poppins">
              Diseñado con ♥ para crear experiencias inolvidables
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
