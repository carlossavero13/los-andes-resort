import { X, User, Phone, Mail, MapPin, FileText, Calendar, Loader2, Info } from "lucide-react";
import { StatusBadge } from "@/components/admin/ClaimsTable";
import type { Claim } from "@/types";

interface ClaimDetailModalProps {
  selectedClaim: Claim;
  newStatus: string;
  adminResponse: string;
  isUpdating: boolean;
  onClose: () => void;
  onStatusChange: (status: string) => void;
  onResponseChange: (response: string) => void;
  onSave: () => void;
}

export function ClaimDetailModal({ 
  selectedClaim, 
  newStatus, 
  adminResponse, 
  isUpdating, 
  onClose, 
  onStatusChange, 
  onResponseChange, 
  onSave 
}: ClaimDetailModalProps) {
  return (
    <>
      {/* OVERLAY */}
      <div 
        className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* DRAWER LATERAL (con altura 100dvh y sin desbordamiento global) */}
      <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[540px] md:w-[640px] h-[100dvh] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-gray-100">
        
        {/* Header Elegante */}
        <div className="px-6 sm:px-8 py-6 border-b border-gray-100 bg-white sticky top-0 z-20 shrink-0 flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gold hidden sm:block"></span>
              Gestión de Caso
            </p>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 tracking-tight">{selectedClaim.tracking_code}</h2>
            <div className="mt-3">
              <StatusBadge status={selectedClaim.status} />
            </div>
          </div>
          <button onClick={onClose} aria-label="Cerrar detalle" className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body con data-lenis-prevent="true" para que el scroll funcione */}
        <div 
          className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar text-sm space-y-8 bg-gray-50/50 overscroll-contain"
          data-lenis-prevent="true"
        >
          
          {/* Sección 1: Datos del Cliente */}
          <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-50 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center border border-forest/10">
                <User className="w-4 h-4 text-forest" />
              </div>
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Datos del Cliente
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Nombre Completo</p>
                <p className="font-semibold text-gray-900 text-base">{selectedClaim.consumer_name}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">DNI / CE</p>
                <p className="font-semibold text-gray-900 text-base">{selectedClaim.consumer_doc_number}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-900 font-medium text-base">{selectedClaim.consumer_phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-900 font-medium text-base truncate">{selectedClaim.consumer_email}</p>
              </div>
              <div className="md:col-span-2 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-900 font-medium text-base pt-0.5">{selectedClaim.consumer_address}</p>
              </div>
            </div>
          </div>

          {/* Sección 2: Detalle del Caso */}
          <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center border border-forest/10">
                  <FileText className="w-4 h-4 text-forest" />
                </div>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  Detalle del Caso
                </h3>
              </div>
              <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${selectedClaim.claim_type === 'Queja' ? 'bg-purple-50 text-purple-700 border border-purple-100' : 'bg-orange-50 text-orange-700 border border-orange-100'}`}>
                {selectedClaim.claim_type}
              </span>
            </div>
            <div className="p-6 space-y-6 sm:space-y-8">
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="bg-gray-50 px-5 py-2.5 rounded-xl border border-gray-100 flex items-center gap-2">
                  <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mr-1">Bien:</span>
                  <span className="text-gray-900 font-bold">{selectedClaim.contracted_type}</span>
                </div>
                <div className="bg-gray-50 px-5 py-2.5 rounded-xl border border-gray-100 flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900 font-bold">{selectedClaim.incident_date}</span>
                </div>
                {selectedClaim.receipt_number && (
                  <div className="bg-gray-50 px-5 py-2.5 rounded-xl border border-gray-100 flex items-center gap-2">
                    <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mr-1">Comprobante:</span>
                    <span className="font-mono text-gray-900 font-bold">{selectedClaim.receipt_number}</span>
                  </div>
                )}
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Descripción del consumo</p>
                <div className="text-gray-800 leading-relaxed bg-gray-50 p-5 rounded-2xl border border-gray-100 text-base">
                  {selectedClaim.contracted_description}
                </div>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Motivo detallado</p>
                <div className="text-red-900 bg-red-50 p-5 rounded-2xl border border-red-100 leading-relaxed text-base">
                  {selectedClaim.claim_details}
                </div>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Petición del consumidor</p>
                <div className="text-gray-800 bg-gray-50 p-5 rounded-2xl border border-gray-100 leading-relaxed text-base">
                  {selectedClaim.consumer_request}
                </div>
              </div>
            </div>
          </div>

          {/* Sección 3: Resolución Admin */}
          <div className="bg-white border-2 border-forest/5 rounded-[1.5rem] overflow-hidden shadow-sm relative mb-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
            <div className="px-6 py-5 border-b border-gray-50 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                <Info className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Resolución del Administrador</h3>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Cambiar Estado del Caso</label>
                <div className="relative w-full sm:w-80">
                  <select 
                    value={newStatus} 
                    onChange={(e) => onStatusChange(e.target.value)}
                    className="w-full h-14 pl-5 pr-10 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all shadow-sm cursor-pointer"
                  >
                    <option value="Pendiente">🟡 Pendiente (Sin Revisar)</option>
                    <option value="En Proceso">🔵 En Proceso (Evaluando)</option>
                    <option value="Resuelto">🟢 Resuelto (Finalizado)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Respuesta Oficial
                  <span className="text-[10px] text-gray-400 font-medium normal-case tracking-normal">(* El cliente podrá leer este mensaje con su código)</span>
                </label>
                <textarea 
                  rows={5}
                  value={adminResponse}
                  onChange={(e) => onResponseChange(e.target.value)}
                  placeholder="Redacta la respuesta formal y detallada para el cliente..."
                  className="w-full p-5 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none text-gray-900 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-gray-100 bg-white flex flex-col-reverse sm:flex-row justify-end gap-3 shrink-0 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.02)] relative z-30">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-4 sm:py-3 rounded-xl text-sm font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Cancelar
          </button>
          <button 
            onClick={onSave}
            disabled={isUpdating}
            className="w-full sm:w-auto px-8 py-4 sm:py-3 rounded-xl text-sm font-bold text-white bg-forest hover:bg-[#0A2E1F] shadow-[0_4px_15px_rgba(15,17,21,0.15)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
          >
            {isUpdating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Guardar Resolución"}
          </button>
        </div>
      </div>
    </>
  );
}
