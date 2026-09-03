import { ChevronRight, Calendar } from "lucide-react";
import type { Claim } from "@/types";

export const StatusBadge = ({ status }: { status: string }) => {
  if (status === 'Pendiente') return <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/50"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" /> Pendiente</span>;
  if (status === 'En Proceso') return <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" /> En Proceso</span>;
  return <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200/50"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> Resuelto</span>;
};

interface ClaimsTableProps {
  claims: Claim[];
  onSelectClaim: (claim: Claim) => void;
}

export function ClaimsTable({ claims, onSelectClaim }: ClaimsTableProps) {
  return (
    <>
      {/* DESKTOP TABLE - Diseño Moderno SaaS */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50/50 text-gray-500 uppercase tracking-widest text-[10px] font-bold border-b border-gray-100">
            <tr>
              <th className="px-6 py-5">Código</th>
              <th className="px-6 py-5">Cliente</th>
              <th className="px-6 py-5">Tipo</th>
              <th className="px-6 py-5">Fecha</th>
              <th className="px-6 py-5">Estado</th>
              <th className="px-6 py-5 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {claims.map((claim) => (
              <tr 
                key={claim.id} 
                onClick={() => onSelectClaim(claim)}
                className="hover:bg-gray-50/80 transition-all cursor-pointer group bg-white"
              >
                <td className="px-6 py-4 align-middle">
                  <span className="font-mono text-xs font-bold text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-md border border-gray-100">{claim.tracking_code}</span>
                </td>
                <td className="px-6 py-4 align-middle">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-forest/5 flex items-center justify-center text-forest font-bold text-xs shrink-0 border border-forest/10">
                      {claim.consumer_name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{claim.consumer_name}</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{claim.consumer_doc_type}: {claim.consumer_doc_number}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 align-middle">
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${claim.claim_type === 'Queja' ? 'bg-purple-50 text-purple-700 border border-purple-100' : 'bg-orange-50 text-orange-700 border border-orange-100'}`}>
                    {claim.claim_type}
                  </span>
                </td>
                <td className="px-6 py-4 align-middle text-gray-600 font-medium text-xs">
                  {new Date(claim.created_at).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-6 py-4 align-middle">
                  <StatusBadge status={claim.status} />
                </td>
                <td className="px-6 py-4 align-middle text-right">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-forest group-hover:text-white transition-colors border border-gray-100 group-hover:border-forest">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE LIST - Diseño de Tarjetas (Cards) Intuitivo y Premium */}
      <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50">
        {claims.map((claim) => (
          <div 
            key={claim.id}
            onClick={() => onSelectClaim(claim)}
            className="bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 active:scale-[0.98] transition-transform cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${claim.status === 'Pendiente' ? 'bg-amber-400' : claim.status === 'En Proceso' ? 'bg-blue-400' : 'bg-green-400'}`} />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">{claim.tracking_code}</span>
                <h3 className="font-bold text-gray-900 text-base leading-tight mt-1 pr-2">{claim.consumer_name}</h3>
              </div>
              <div className="shrink-0">
                <StatusBadge status={claim.status} />
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-5">
              <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                <Calendar className="w-3 h-3 text-gray-400" />
                {new Date(claim.created_at).toLocaleDateString('es-PE')}
              </span>
              <span className={`inline-flex px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${claim.claim_type === 'Queja' ? 'bg-purple-50 text-purple-700' : 'bg-orange-50 text-orange-700'}`}>
                {claim.claim_type}
              </span>
            </div>

            <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
              <span className="text-xs font-medium text-forest uppercase tracking-wider">Gestionar Caso</span>
              <div className="w-7 h-7 rounded-full bg-forest/5 flex items-center justify-center shadow-sm">
                <ChevronRight className="w-4 h-4 text-forest" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
