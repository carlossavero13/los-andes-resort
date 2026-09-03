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
                          c.consumer_name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "Todos" || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  if (loadingSession) {
    return <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-forest" /></div>;
  }

  // --- LOGIN ---
  if (!session) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // --- DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#FDFCFB] font-inter text-forest">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-forest rounded-lg text-gold flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <span className="font-playfair font-bold text-lg tracking-tight">Libro de Reclamaciones</span>
          </div>
          <button onClick={handleLogout} className="text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2">
            <LogOut className="w-4 h-4" /> <span className="hidden sm:inline">Cerrar Sesión</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-playfair font-bold">Casos Registrados</h1>
            <p className="text-sm text-gray-500 mt-2">Administra y responde los reclamos y quejas de los clientes.</p>
          </div>
        </div>
        
        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar por código o nombre..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 h-11 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-shadow shadow-sm"
            />
          </div>
          <div className="relative w-full sm:w-[200px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-9 pr-8 h-11 bg-white border border-gray-200 rounded-xl text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-shadow shadow-sm"
            >
              <option value="Todos">Todos los estados</option>
              <option value="Pendiente">Pendientes</option>
              <option value="En Proceso">En Proceso</option>
              <option value="Resuelto">Resueltos</option>
            </select>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {loadingClaims ? (
            <div className="flex justify-center py-24"><Loader2 className="w-8 h-8 animate-spin text-gold" /></div>
          ) : filteredClaims.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center px-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                <Inbox className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-base font-semibold text-forest">No se encontraron casos</h3>
              <p className="text-sm text-gray-500 mt-1">Intenta ajustando los filtros de búsqueda.</p>
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
      </main>

      {/* MODAL / SLIDEOVER PARA DETALLES */}
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

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 left-6 sm:left-auto z-[60] animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="bg-forest text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-bold border border-forest-light">
            {toastMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            )}
            {toastMessage.text}
          </div>
        </div>
      )}
    </div>
  );
}
