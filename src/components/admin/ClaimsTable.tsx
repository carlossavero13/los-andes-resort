import { ChevronRight } from "lucide-react";
import type { Claim } from "@/types";

export const StatusBadge = ({ status }: { status: string }) => {
  if (status === 'Pendiente') return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/50"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Pendiente</span>;
  if (status === 'En Proceso') return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> En Proceso</span>;
  return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200/50"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Resuelto</span>;
};

interface ClaimsTableProps {
  claims: Claim[];
  onSelectClaim: (claim: Claim) => void;
}

export function ClaimsTable({ claims, onSelectClaim }: ClaimsTableProps) {
  return (
    <>
      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-500 uppercase tracking-wider text-xs font-bold">
            <tr>
              <th className="px-6 py-4">Código</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {claims.map((claim) => (
              <tr 
                key={claim.id} 
                onClick={() => onSelectClaim(claim)}
                className="hover:bg-gray-50/80 transition-colors cursor-pointer group"
              >
                <td className="px-6 py-4 align-middle">
                  <span className="font-mono text-sm font-bold text-forest">{claim.tracking_code}</span>
                </td>
                <td className="px-6 py-4 align-middle">
                  <div className="font-semibold text-gray-900">{claim.consumer_name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{claim.consumer_doc_type}: {claim.consumer_doc_number}</div>
                </td>
                <td className="px-6 py-4 align-middle">
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${claim.claim_type === 'Queja' ? 'bg-purple-50 text-purple-700 border border-purple-200/60' : 'bg-orange-50 text-orange-700 border border-orange-200/60'}`}>
                    {claim.claim_type}
                  </span>
                </td>
                <td className="px-6 py-4 align-middle text-gray-500 font-medium text-xs">
                  {new Date(claim.created_at).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-6 py-4 align-middle">
                  <StatusBadge status={claim.status} />
                </td>
                <td className="px-6 py-4 align-middle text-right">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gold opacity-60 group-hover:opacity-100 transition-opacity">
                    Revisar <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE LIST */}
      <div className="md:hidden divide-y divide-gray-100">
        {claims.map((claim) => (
          <div 
            key={claim.id}
            onClick={() => onSelectClaim(claim)}
            className="p-5 active:bg-gray-50 cursor-pointer flex flex-col gap-3 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs font-bold text-gold">{claim.tracking_code}</span>
                <span className="font-bold text-gray-900 text-base leading-tight">{claim.consumer_name}</span>
              </div>
              <StatusBadge status={claim.status} />
            </div>
            <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-50">
              <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${claim.claim_type === 'Queja' ? 'bg-purple-50 text-purple-700' : 'bg-orange-50 text-orange-700'}`}>
                {claim.claim_type}
              </span>
              <span className="text-xs font-medium text-gray-400">
                {new Date(claim.created_at).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
