import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function CompanyInfoPanel() {
  return (
    <div className="w-full lg:w-2/5 xl:w-1/3 relative lg:fixed lg:top-0 lg:left-0 bg-forest flex flex-col justify-between p-8 md:p-12 lg:p-16 h-auto lg:h-screen lg:overflow-y-auto z-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero/hero-1.webp"
          alt="Fondo Los Andes"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/95 to-forest z-10" />
      </div>

      {/* Top Content */}
      <div className="relative z-20">
        <Link href="/" className="inline-flex items-center gap-3 text-gold hover:text-white transition-colors mb-12 group text-xs font-inter uppercase tracking-[0.2em] font-semibold">
          <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:text-forest transition-all">
            <ArrowLeft size={14} />
          </div>
          Volver al inicio
        </Link>
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] text-white/80 uppercase tracking-widest font-inter">Atención al Cliente</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-white leading-[1.1]">
            Libro de<br />
            <span className="text-gold italic">Reclamaciones</span>
          </h1>
          
          <p className="text-white/60 font-inter font-light text-sm leading-relaxed max-w-sm pt-4">
            Queremos escucharte. Tu opinión es fundamental para seguir mejorando nuestros servicios y ofrecerte la experiencia premium que mereces.
          </p>
        </div>
      </div>

      {/* Bottom Content - Company Info */}
      <div className="relative z-20 mt-16 lg:mt-0">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700" />
          
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-6">Datos de la Empresa</h3>
          
          <dl className="space-y-4 font-inter text-sm">
            <div>
              <dt className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Razón Social</dt>
              <dd className="text-white/90 font-medium">LOS ANDES HOTEL RESORT S.A.C</dd>
            </div>
            <div>
              <dt className="text-white/40 text-[10px] uppercase tracking-wider mb-1">RUC</dt>
              <dd className="text-white/90 font-medium">20610109773</dd>
            </div>
            <div>
              <dt className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Dirección Legal</dt>
              <dd className="text-white/80 font-light leading-relaxed">Av. Nueva Toledo Lote 205A Parcelac.<br />Cieneguilla 1ET</dd>
            </div>
            <div>
              <dt className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Correo de Contacto</dt>
              <dd className="text-gold font-medium">clientes@restaurantlosandes.com.pe</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
