"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, Search, Filter, LogOut, CheckCircle2, Inbox, FileText, AlertCircle } from "lucide-react";
import { LoginForm } from "@/components/admin/LoginForm";
import { ClaimsTable } from "@/components/admin/ClaimsTable";
import { ClaimDetailModal } from "@/components/admin/ClaimDetailModal";
import type { Claim } from "@/types";

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null);
  const [loadingSession, setLoadingSession] = useState(true);
  
  // Dashboard State
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loadingClaims, setLoadingClaims] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");
  
  // Detalle Reclamo State
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [adminResponse, setAdminResponse] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Custom Toast State
  const [toastMessage, setToastMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);

  const showToast = (text: string, type: 'success' | 'error') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingSession(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) fetchClaims();
  }, [session]);

  const fetchClaims = async () => {
    setLoadingClaims(true);
    try {
      if (!session) return;
      const res = await fetch('/api/admin/claims', {
        headers: { 'Authorization': `Bearer ${session.access_token}` }
      });
      const data = await res.json();
      if (res.ok) setClaims(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingClaims(false);
    }
  };

  const handleLogin = async (email: string, pass: string) => {
    return await supabase.auth.signInWithPassword({ email, password: pass });
  };

  const handleLogout = async () => await supabase.auth.signOut();

  const handleUpdateClaim = async () => {
    if (!selectedClaim || !session) return;
    setIsUpdating(true);
    try {
      const res = await fetch('/api/admin/claims', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          id: selectedClaim.id,
          status: newStatus,
          admin_response: adminResponse
        })
      });

      if (res.ok) {
        showToast("Caso actualizado correctamente", "success");
        setSelectedClaim(null);
        fetchClaims();
      } else {
        showToast("Error al guardar los cambios", "error");
      }
    } catch (err) {
      showToast("Error de conexión", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredClaims = claims.filter(c => {
    const matchesSearch = c.tracking_code.toLowerCase().includes(search.toLowerCase()) || 
                          c.consumer_name.toLowerCase().includes(search.toLowerCase()) ||
                          c.consumer_doc_number.includes(search);
    const matchesStatus = filterStatus === "Todos" || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  if (loadingSession) {
    return <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-forest" /></div>;
  }

  // --- LOGIN ---
  if (!session) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // --- DASHBOARD ---
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#FDFBF7] font-inter text-gray-800 overflow-hidden">
      
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-100 shadow-[2px_0_10px_rgba(0,0,0,0.02)] z-10 relative shrink-0">
        <div className="p-8 border-b border-gray-100 flex justify-center">
          <img 
            src="/images/los_andes_logo.webp" 
            alt="Los Andes Logo" 
            className="w-32 object-contain brightness-0 opacity-80"
          />
        </div>
        
        <div className="flex-1 overflow-y-auto py-8 px-4 flex flex-col gap-2 custom-scrollbar">
          <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Menú Principal</p>
          <button className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-forest/5 text-forest font-semibold transition-colors">
            <FileText className="w-5 h-5 text-forest" />
            Libro de Casos
          </button>
          <button className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors cursor-not-allowed opacity-50">
            <Search className="w-5 h-5" />
            Reportes
          </button>
          <button className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors cursor-not-allowed opacity-50">
            <Inbox className="w-5 h-5" />
            Bandeja
          </button>
        </div>

        <div className="p-5 border-t border-gray-100">
          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 mb-4 border border-gray-200/60 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold text-sm shrink-0">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-gray-900 truncate">Administrador</p>
              <p className="text-[11px] text-gray-500 truncate">{session.user.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
          >
            <LogOut className="w-4 h-4" /> 
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* MOBILE HEADER (Normal document flow) */}
      <header className="md:hidden shrink-0 flex items-center justify-between p-4 bg-white border-b border-gray-100 z-20">
        <img src="/images/los_andes_logo.webp" alt="Logo" className="w-24 object-contain brightness-0 opacity-80" />
        <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
          <LogOut className="w-5 h-5" />
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10 custom-scrollbar">
          
          <div className="max-w-[1200px] mx-auto">
            {/* Header del Main */}
            <div className="mb-6 md:mb-8 mt-2 md:mt-0">
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">
                Libro de Reclamaciones
              </h1>
              <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
                Panel centralizado para el seguimiento y resolución de casos presentados por los huéspedes y clientes.
              </p>
            </div>

            {/* AREA UNIFICADA: TOOLBAR + TABLA */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
              
              {/* Toolbar */}
              <div className="p-4 md:p-5 border-b border-gray-100 flex flex-col md:flex-row gap-3 md:gap-4 bg-white">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Buscar código, nombre o DNI..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-11 pr-4 h-11 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div className="relative w-full md:w-64 shrink-0">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full pl-11 pr-10 h-11 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-semibold appearance-none focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all text-gray-900 cursor-pointer"
                  >
                    <option value="Todos">Todos los Estados</option>
                    <option value="Pendiente">Pendientes</option>
                    <option value="En Proceso">En Proceso</option>
                    <option value="Resuelto">Resueltos</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contenedor de la Tabla */}
              <div className="min-h-[300px] md:min-h-[400px] bg-white">
                {loadingClaims ? (
                  <div className="flex justify-center items-center h-64">
                    <Loader2 className="w-8 h-8 animate-spin text-forest" />
                  </div>
                ) : filteredClaims.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center px-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                      <Inbox className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No hay casos</h3>
                    <p className="text-sm text-gray-500 mt-1 max-w-sm">
                      No encontramos ningún reclamo con los filtros que aplicaste.
                    </p>
                  </div>
                ) : (
                  <ClaimsTable 
                    claims={filteredClaims} 
                    onSelectClaim={(claim) => {
                      setSelectedClaim(claim);
                      setAdminResponse(claim.admin_response || "");
                      setNewStatus(claim.status);
                    }} 
                  />
                )}
              </div>
            </div>
            
            {/* Footer sutil */}
            <div className="mt-8 pb-4 text-center text-[10px] md:text-[11px] text-gray-400 font-medium uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Los Andes Resort - Portal Administrativo
            </div>

          </div>
        </div>
      </main>

      {/* TOAST CUSTOM */}
      {toastMessage && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl border ${
            toastMessage.type === 'success' 
              ? 'bg-white border-green-100 text-green-800' 
              : 'bg-white border-red-100 text-red-800'
          }`}>
            {toastMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            )}
            <span className="font-semibold text-sm leading-tight">{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* DRAWER / SLIDEOVER PARA DETALLES */}
      {selectedClaim && (
        <ClaimDetailModal
          selectedClaim={selectedClaim}
          newStatus={newStatus}
          adminResponse={adminResponse}
          isUpdating={isUpdating}
          onClose={() => setSelectedClaim(null)}
          onStatusChange={setNewStatus}
          onResponseChange={setAdminResponse}
          onSave={handleUpdateClaim}
        />
      )}
    </div>
  );
}
