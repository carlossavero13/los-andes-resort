import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, FileText, User, ShoppingBag, MessageSquare } from "lucide-react";

export default function LibroDeReclamaciones() {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* LEFT PANEL - Fixed on Desktop */}
      <div className="lg:w-2/5 xl:w-1/3 relative bg-forest flex flex-col justify-between p-8 md:p-12 lg:p-16 lg:fixed lg:h-screen lg:overflow-y-auto">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/hero-1.png"
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

      {/* RIGHT PANEL - Scrollable Form */}
      <div className="lg:w-3/5 xl:w-2/3 lg:ml-auto bg-[#FDFCFB] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 lg:p-24">
          
          <form action="https://formsubmit.co/clientes@restaurantlosandes.com.pe" method="POST" className="space-y-16">
            
            {/* FormSubmit Configurations */}
            <input type="hidden" name="_subject" value="Nuevo Reclamo - Libro de Reclamaciones" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_autoresponse" value="Hemos recibido tu reclamo. Nos pondremos en contacto contigo pronto." />

            {/* Section 1: Consumer Info */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-forest mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-gold"></span>
                1. Identificación del Consumidor
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="md:col-span-2 group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Nombre completo *</label>
                  <input type="text" name="Nombre" placeholder="Apellidos y Nombres" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" required />
                </div>
                
                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Tipo de doc. *</label>
                  <select name="Tipo de documento" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all appearance-none" required defaultValue="">
                    <option value="" disabled>Seleccionar</option>
                    <option value="DNI">DNI</option>
                    <option value="CE">Carnet de Extranjería</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Nro de documento *</label>
                  <input type="text" name="Número de documento" placeholder="Ej: 71234567" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" required />
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Teléfono / Celular *</label>
                  <input type="tel" name="Teléfono" placeholder="Ej: 987 654 321" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" required />
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Correo electrónico *</label>
                  <input type="email" name="Email" placeholder="correo@ejemplo.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" required />
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Dirección Completa *</label>
                  <input type="text" name="Dirección" placeholder="Av. / Calle / Distrito" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" required />
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2: Product/Service */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-forest mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-gold"></span>
                2. Identificación del Bien Contratado
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="md:col-span-2 group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Bien Contratado *</label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="Tipo de Bien" value="Producto" className="w-4 h-4 text-[#722F37] focus:ring-[#722F37]" required />
                      <span className="text-sm text-forest">Producto</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="Tipo de Bien" value="Servicio" className="w-4 h-4 text-[#722F37] focus:ring-[#722F37]" required />
                      <span className="text-sm text-forest">Servicio</span>
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Descripción del consumo *</label>
                  <textarea name="Descripción del bien" rows={3} placeholder="Detalle el servicio o producto adquirido..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all resize-none" required></textarea>
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Fecha del suceso *</label>
                  <input type="date" name="Fecha del suceso" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" required />
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Boleta o Factura (Opcional)</label>
                  <input type="text" name="Comprobante" placeholder="Ej: B001-00123" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" />
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3: Reclamo/Queja */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-forest mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-gold"></span>
                3. Detalle de Reclamación
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Tipo *</label>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <label className="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors flex-1">
                      <input type="radio" name="Tipo de Acción" value="Reclamo" className="mt-1 w-4 h-4 text-[#722F37] focus:ring-[#722F37]" required />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-forest">Reclamo</span>
                        <span className="text-[10px] text-gray-500 leading-tight mt-0.5">Disconformidad relacionada a los productos o servicios.</span>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors flex-1">
                      <input type="radio" name="Tipo de Acción" value="Queja" className="mt-1 w-4 h-4 text-[#722F37] focus:ring-[#722F37]" required />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-forest">Queja</span>
                        <span className="text-[10px] text-gray-500 leading-tight mt-0.5">Disconformidad no relacionada a los productos o servicios.</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Detalle *</label>
                  <textarea name="Detalle del reclamo" rows={4} placeholder="Escriba los detalles de forma clara..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all resize-none" required></textarea>
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Pedido del Consumidor *</label>
                  <textarea name="Pedido del consumidor" rows={3} placeholder="¿Qué solución solicita?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all resize-none" required></textarea>
                </div>
              </div>
            </div>

            {/* Confirmación y Envio */}
            <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <label className="flex items-start gap-3 cursor-pointer group max-w-lg">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]" required />
                <span className="text-xs text-gray-500 leading-relaxed font-light">
                  Declaro que la información consignada es verdadera y corresponde a los hechos presentados. Al enviar, acepto la política de tratamiento de datos personales.
                </span>
              </label>
              
              <button type="submit" className="bg-[#722F37] text-white font-inter text-sm tracking-widest uppercase font-semibold py-4 px-8 rounded-xl hover:bg-[#5a252b] transition-all w-full md:w-auto flex-shrink-0">
                Enviar Formulario
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
