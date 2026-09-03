import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ClaimFormProps {
  onSuccess: (trackingCode: string) => void;
}

export function ClaimForm({ onSuccess }: ClaimFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
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
        onSuccess(result.tracking_code);
      } else {
        setFormError(result.error || "Error al enviar el reclamo.");
      }
    } catch (err) {
      setFormError("Hubo un error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
            <input type="text" name="Número de documento" placeholder="Ej: 71234567" pattern="[A-Za-z0-9]+" title="Solo letras y números" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-forest focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37] transition-all" required />
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

      {formError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-red-600 text-xs font-bold">!</span>
          </div>
          <div>
            <p className="text-red-800 text-sm font-medium">Error al enviar</p>
            <p className="text-red-600 text-xs mt-1">{formError}</p>
          </div>
        </div>
      )}

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
  );
}
