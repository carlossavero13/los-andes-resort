import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { AuthError } from "@supabase/supabase-js";

interface LoginFormProps {
  onLogin: (email: string, pass: string) => Promise<{ error: AuthError | null }>;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");
    
    const { error } = await onLogin(email, password);
    if (error) setLoginError("Correo o contraseña incorrectos");
    setIsLoggingIn(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-4 font-inter text-forest">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-[400px] border border-gray-100">
        <div className="mb-8 text-center flex flex-col items-center">
          <div className="bg-forest px-8 py-5 rounded-2xl mb-8 w-52 flex items-center justify-center shadow-lg shadow-forest/20">
            <img 
              src="/images/los_andes_logo.webp" 
              alt="Los Andes Logo" 
              className="object-contain w-full h-auto drop-shadow-md"
            />
          </div>
          <h1 className="text-2xl font-playfair font-bold">Iniciar sesión</h1>
          <p className="text-sm text-gray-500 mt-2">Acceso al Panel Administrativo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
