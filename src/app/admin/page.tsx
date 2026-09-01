"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, Search, Filter, LogOut, CheckCircle2, Clock, Inbox, ChevronRight, X, User, Calendar, MapPin, Mail, Phone, FileText } from "lucide-react";

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null);
  const [loadingSession, setLoadingSession] = useState(true);
  
  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard State
  const [claims, setClaims] = useState<any[]>([]);
  const [loadingClaims, setLoadingClaims] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Todos");
  
  // Detalle Reclamo State
  const [selectedClaim, setSelectedClaim] = useState<any>(null);
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError("Correo o contraseña incorrectos");
    setIsLoggingIn(false);
  };

  const handleLogout = async () => await supabase.auth.signOut();

  const handleUpdateClaim = async () => {
    if (!selectedClaim) return;
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
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-4 font-inter text-forest">
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-[400px] border border-gray-100">
          <div className="mb-8 text-center flex flex-col items-center">
            <div className="bg-forest px-8 py-5 rounded-2xl mb-8 w-52 flex items-center justify-center shadow-lg shadow-forest/20">
              <img 
                src="/images/los_andes_logo.png" 
                alt="Los Andes Logo" 
                className="object-contain w-full h-auto drop-shadow-md"
              />
            </div>
            <h1 className="text-2xl font-playfair font-bold">Iniciar sesión</h1>
            <p className="text-sm text-gray-500 mt-2">Acceso al Panel Administrativo</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@empresa.com"
                className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-shadow" 
                required 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 px-4 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-shadow" 
                required 
              />
            </div>
            
            {loginError && <p className="text-red-600 text-sm text-center font-medium pt-1 bg-red-50 py-2 rounded-lg">{loginError}</p>}
            
            <button 
              type="submit" 
              disabled={isLoggingIn}
              className="w-full h-12 mt-4 bg-forest text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-forest-light transition-colors flex justify-center items-center disabled:opacity-50"
            >
              {isLoggingIn ? <Loader2 className="w-5 h-5 animate-spin" /> : "Ingresar"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const StatusBadge = ({ status }: { status: string }) => {
    if (status === 'Pendiente') return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/50"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Pendiente</span>;
    if (status === 'En Proceso') return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> En Proceso</span>;
    return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200/50"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Resuelto</span>;
  };

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
                    {filteredClaims.map((claim) => (
                      <tr 
                        key={claim.id} 
                        onClick={() => {
                          setSelectedClaim(claim);
                          setAdminResponse(claim.admin_response || "");
                          setNewStatus(claim.status);
                        }}
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
                {filteredClaims.map((claim) => (
                  <div 
                    key={claim.id}
                    onClick={() => {
                      setSelectedClaim(claim);
                      setAdminResponse(claim.admin_response || "");
                      setNewStatus(claim.status);
                    }}
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
          )}
        </div>
      </main>

      {/* MODAL / SLIDEOVER PARA DETALLES */}
      {selectedClaim && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-forest/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FDFCFB] w-full sm:max-w-3xl sm:rounded-3xl shadow-2xl h-[95vh] sm:h-auto sm:max-h-[90vh] flex flex-col overflow-hidden rounded-t-3xl animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-200 border border-gray-200">
            
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10 shrink-0">
              <div className="flex items-center gap-4">
                <button onClick={() => setSelectedClaim(null)} className="sm:hidden p-1.5 -ml-1.5 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full">
                  <X className="w-5 h-5" />
                </button>
                <div>
                  <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">GESTIÓN DE CASO</p>
                  <h2 className="text-xl md:text-2xl font-playfair font-bold text-forest">{selectedClaim.tracking_code}</h2>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <StatusBadge status={selectedClaim.status} />
                <button onClick={() => setSelectedClaim(null)} className="hidden sm:flex p-2 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full transition-colors">
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
                      onChange={(e) => setNewStatus(e.target.value)}
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
                      onChange={(e) => setAdminResponse(e.target.value)}
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
                onClick={() => setSelectedClaim(null)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100 transition-colors"
              >
                Volver
              </button>
              <button 
                onClick={handleUpdateClaim}
                disabled={isUpdating}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-forest hover:bg-forest-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isUpdating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Guardar Resolución"}
              </button>
            </div>
          </div>
        </div>
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
