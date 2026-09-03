"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CompanyInfoPanel } from "@/components/claims/CompanyInfoPanel";
import { ClaimForm } from "@/components/claims/ClaimForm";
import { ClaimSearch } from "@/components/claims/ClaimSearch";

export default function LibroDeReclamaciones() {
  const [activeTab, setActiveTab] = useState<"nuevo" | "consulta">("nuevo");
  const [trackingCode, setTrackingCode] = useState<string | null>(null);

  const handleSuccess = (code: string) => {
    setTrackingCode(code);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <CompanyInfoPanel />

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
            <ClaimForm onSuccess={handleSuccess} />
          )}

          {/* VIEW: CONSULTA (Search) */}
          {activeTab === "consulta" && (
            <ClaimSearch />
          )}

        </div>
      </div>
    </div>
  );
}
