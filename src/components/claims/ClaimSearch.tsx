import { useState } from "react";
import { Loader2, Search } from "lucide-react";
import type { ClaimSearchResult } from "@/types";

export function ClaimSearch() {
  const [searchCode, setSearchCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<ClaimSearchResult | { error: string } | null>(null);

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

      {searchResult && !('error' in searchResult) && (
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

      {searchResult && 'error' in searchResult && (
        <div className="bg-red-50 border border-red-100 text-red-600 rounded-xl p-4 text-sm">
          {searchResult.error}
        </div>
      )}
    </div>
  );
}
