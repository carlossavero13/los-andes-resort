import { X, User, Phone, Mail, MapPin, FileText, Calendar, Loader2 } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-forest/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FDFCFB] w-full sm:max-w-3xl sm:rounded-3xl shadow-2xl h-[95vh] sm:h-auto sm:max-h-[90vh] flex flex-col overflow-hidden rounded-t-3xl animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-200 border border-gray-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={onClose} aria-label="Cerrar detalle" className="sm:hidden p-1.5 -ml-1.5 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full">
              <X className="w-5 h-5" />
            </button>
            <div>
              <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">GESTIÓN DE CASO</p>
              <h2 className="text-xl md:text-2xl font-playfair font-bold text-forest">{selectedClaim.tracking_code}</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <StatusBadge status={selectedClaim.status} />
            <button onClick={onClose} aria-label="Cerrar detalle" className="hidden sm:flex p-2 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar text-sm space-y-8">
          
          {/* Sección 1: Cliente */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-forest/5 px-5 py-3 border-b border-gray-100">
              <h3 className="text-xs font-bold text-forest uppercase tracking-widest flex items-center gap-2">
                <User className="w-4 h-4 text-gold" /> Datos del Cliente
              </h3>
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Nombre Completo</p>
                <p className="font-bold text-gray-900 text-base">{selectedClaim.consumer_name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{selectedClaim.consumer_doc_type}</p>
                <p className="font-bold text-gray-900 text-base">{selectedClaim.consumer_doc_number}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center"><Phone className="w-4 h-4 text-gray-400" /></div>
                <p className="text-gray-700 font-medium">{selectedClaim.consumer_phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center"><Mail className="w-4 h-4 text-gray-400" /></div>
                <p className="text-gray-700 font-medium truncate">{selectedClaim.consumer_email}</p>
              </div>
              <div className="sm:col-span-2 flex items-start gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-gray-400" /></div>
                <p className="text-gray-700 font-medium pt-1">{selectedClaim.consumer_address}</p>
              </div>
            </div>
          </div>

          {/* Sección 2: Bien y Reclamo */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-forest/5 px-5 py-3 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xs font-bold text-forest uppercase tracking-widest flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold" /> Detalle del Caso
              </h3>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${selectedClaim.claim_type === 'Queja' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                {selectedClaim.claim_type}
              </span>
            </div>
            <div className="p-5 space-y-5">
              <div className="flex flex-wrap gap-4 text-xs font-medium">
                <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                  <span className="text-gray-400 uppercase tracking-wider mr-2">Bien:</span>
                  <span className="text-gray-900 font-bold">{selectedClaim.contracted_type}</span>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900 font-bold">{selectedClaim.incident_date}</span>
                </div>
                {selectedClaim.receipt_number && (
                  <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                    <span className="text-gray-400 uppercase tracking-wider mr-2">Comprobante:</span>
                    <span className="font-mono text-gray-900 font-bold">{selectedClaim.receipt_number}</span>
                  </div>
                )}
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Descripción del consumo</p>
                <p className="text-gray-800 leading-relaxed bg-gray-50/50 p-3 rounded-xl border border-gray-100">{selectedClaim.contracted_description}</p>
              </div>
              
              <div className="pt-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Motivo detallado</p>
                <p className="text-red-900 bg-red-50/50 p-4 rounded-xl border border-red-100 leading-relaxed font-medium">
                  {selectedClaim.claim_details}
                </p>
              </div>
              
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Petición del consumidor</p>
                <p className="text-gray-800 bg-gray-50/50 p-4 rounded-xl border border-gray-100 leading-relaxed">
                  {selectedClaim.consumer_request}
                </p>
              </div>
            </div>
          </div>

          {/* Sección 3: Gestión Admin */}
          <div className="bg-white border-2 border-forest/10 rounded-2xl overflow-hidden shadow-md">
            <div className="bg-forest px-5 py-3">
              <h3 className="text-xs font-bold text-gold uppercase tracking-widest">Resolución Oficial</h3>
            </div>
            <div className="p-5 space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Estado Interno</label>
                <select 
                  value={newStatus} 
                  onChange={(e) => onStatusChange(e.target.value)}
                  className="w-full sm:w-72 h-12 pl-4 pr-8 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-forest appearance-none focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-shadow"
                >
                  <option value="Pendiente">⚠️ Pendiente (Sin Revisar)</option>
                  <option value="En Proceso">⏳ En Proceso (Evaluando)</option>
                  <option value="Resuelto">✅ Resuelto (Finalizado)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mensaje al Cliente <span className="text-[10px] text-gray-400 font-normal normal-case ml-1">*Lo leerán con su código</span></label>
                <textarea 
                  rows={4}
                  value={adminResponse}
                  onChange={(e) => onResponseChange(e.target.value)}
                  placeholder="Redacta la respuesta formal y detallada para el cliente..."
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-shadow resize-none text-gray-800"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 bg-white flex flex-col-reverse sm:flex-row justify-end gap-3 shrink-0 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.03)]">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100 transition-colors"
          >
            Volver
          </button>
          <button 
            onClick={onSave}
            disabled={isUpdating}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-forest hover:bg-forest-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isUpdating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Guardar Resolución"}
          </button>
        </div>
      </div>
    </div>
  );
}
