"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Search, Loader2 } from "lucide-react";

export default function LibroDeReclamaciones() {
  const [activeTab, setActiveTab] = useState<"nuevo" | "consulta">("nuevo");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackingCode, setTrackingCode] = useState<string | null>(null);
  const [searchCode, setSearchCode] = useState("");
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    const data = {
      consumer_name: formData.get("Nombre"),
      consumer_doc_type: formData.get("Tipo de documento"),
      consumer_doc_number: formData.get("Número de documento"),
      consumer_phone: formData.get("Teléfono"),
      consumer_email: formData.get("Email"),
      consumer_address: formData.get("Dirección"),
      
      contracted_type: formData.get("Tipo de Bien"),
      contracted_description: formData.get("Descripción del bien"),
      incident_date: formData.get("Fecha del suceso"),
      receipt_number: formData.get("Comprobante"),
      
      claim_type: formData.get("Tipo de Acción"),
      claim_details: formData.get("Detalle del reclamo"),
      consumer_request: formData.get("Pedido del consumidor"),
    };

    try {
      const res = await fetch('/api/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      
      if (res.ok) {
        setTrackingCode(result.tracking_code);
        // Desplazarse arriba
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Error al enviar: " + result.error);
      }
    } catch (err) {
      alert("Hubo un error de conexión al enviar el reclamo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchCode.trim()) return;
    
    setIsSearching(true);
    setSearchResult(null);
    
    try {
      const res = await fetch(`/api/claims/${searchCode.trim()}`);
      const result = await res.json();
      
      if (res.ok) {
        setSearchResult(result);
      } else {
        setSearchResult({ error: "No se encontró ningún reclamo con ese código." });
      }
    } catch (err) {
      setSearchResult({ error: "Error de conexión." });
    } finally {
      setIsSearching(false);
    }
  };

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
      <div className="lg:w-3/5 xl:w-2/3 lg:ml-auto bg-[#FDFCFB] min-h-screen flex flex-col">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 lg:p-24 w-full flex-1">
          
          {/* TABS (Registrar vs Consultar) */}
          <div className="flex gap-4 border-b border-gray-200 mb-12">
            <button 
              onClick={() => { setActiveTab("nuevo"); setTrackingCode(null); }}
              className={`pb-4 text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "nuevo" ? "text-forest border-b-2 border-forest" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Nuevo Reclamo
            </button>
            <button 
              onClick={() => setActiveTab("consulta")}
              className={`pb-4 text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "consulta" ? "text-forest border-b-2 border-forest" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Consultar Estado
            </button>
          </div>

          {/* VIEW: SUCCESS (After submission) */}
          {activeTab === "nuevo" && trackingCode && (
            <div className="bg-white border border-green-100 rounded-3xl p-8 md:p-12 text-center shadow-sm">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-medium text-forest mb-4">¡Reclamo Registrado Exitosamente!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Hemos recibido tu solicitud y la atenderemos a la brevedad. Por favor, guarda este código para consultar el estado de tu trámite:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl py-6 px-8 mb-8 inline-block">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">CÓDIGO DE SEGUIMIENTO</p>
                <p className="text-3xl md:text-4xl font-mono font-bold text-forest">{trackingCode}</p>
              </div>
              <p className="text-sm text-gray-500">
                Puedes revisar el estado cuando lo desees en la pestaña de "Consultar Estado".
              </p>
            </div>
          )}

          {/* VIEW: FORM */}
          {activeTab === "nuevo" && !trackingCode && (
            <form onSubmit={handleSubmit} className="space-y-16 animate-in fade-in duration-500">
              
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
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#722F37] text-white font-inter text-sm tracking-widest uppercase font-semibold py-4 px-8 rounded-xl hover:bg-[#5a252b] transition-all w-full md:w-auto flex-shrink-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                  ) : "Enviar Formulario"}
                </button>
              </div>
            </form>
          )}

          {/* VIEW: CONSULTA (Search) */}
          {activeTab === "consulta" && (
            <div className="animate-in fade-in duration-500 max-w-xl">
              <h2 className="text-2xl font-playfair font-medium text-forest mb-4">Consulta el estado de tu reclamo</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Ingresa el código que te proporcionamos al momento de registrar tu queja o reclamo (Ej. LR-2026-000001).
              </p>
              
              <form onSubmit={handleSearch} className="flex gap-4 mb-10">
                <input 
                  type="text" 
                  placeholder="LR-YYYY-XXXXXX"
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all uppercase"
                  required 
                />
                <button 
                  type="submit" 
                  disabled={isSearching}
                  className="bg-forest text-white font-semibold px-6 rounded-xl hover:bg-forest-light transition-all flex items-center gap-2 disabled:opacity-70"
                >
                  {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  Buscar
                </button>
              </form>

              {searchResult && !searchResult.error && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">CÓDIGO</p>
                      <p className="text-lg font-bold text-forest">{searchResult.tracking_code}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">ESTADO</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        searchResult.status === 'Pendiente' ? 'bg-amber-100 text-amber-700' :
                        searchResult.status === 'En Proceso' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {searchResult.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Fecha de registro</p>
                      <p className="text-sm font-medium text-gray-700">
                        {new Date(searchResult.created_at).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Respuesta de Los Andes Resort</p>
                      {searchResult.admin_response ? (
                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 border border-gray-100">
                          {searchResult.admin_response}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 italic">Su reclamo se encuentra en proceso de evaluación. Le responderemos por este medio y a su correo en los plazos establecidos por ley.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {searchResult && searchResult.error && (
                <div className="bg-red-50 border border-red-100 text-red-600 rounded-xl p-4 text-sm">
                  {searchResult.error}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
