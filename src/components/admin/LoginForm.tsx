import { useState } from "react";
import { Loader2, Mail, Lock, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    if (error) setLoginError("Credenciales incorrectas");
    setIsLoggingIn(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative font-inter">
      {/* Fondo de pantalla completa (Naturaleza/Bosque) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/piscina (1).webp" 
          alt="Fondo Los Andes"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro para resaltar el panel (Color de la empresa) */}
        <div className="absolute inset-0 bg-[#0F1115]/60 mix-blend-multiply" />
      </div>

      {/* Tarjeta Glassmorphism Limpia */}
      <div className="relative z-10 w-full max-w-[420px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 sm:p-10 text-gray-900 overflow-hidden">
        
        {/* Botón X de cerrar */}
        <Link href="/" className="absolute top-4 right-4 bg-gray-900/80 hover:bg-black text-white p-1.5 rounded-lg transition-colors shadow-sm">
          <X className="w-4 h-4" />
        </Link>

        {/* Logo de la Empresa (Reemplaza al texto "Login") */}
        <div className="mb-10 text-center flex justify-center">
          <div className="w-40 drop-shadow-md">
            <img 
              src="/images/los_andes_logo.webp" 
              alt="Los Andes Logo" 
              className="object-contain w-full h-auto brightness-0 invert"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input con fondo blanco como en su foto */}
          <div className="relative group">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-white text-gray-900 placeholder:text-gray-400 h-11 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest rounded-md shadow-sm transition-all peer" 
              required 
            />
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 peer-focus:text-forest transition-colors" />
          </div>
          
          {/* Password Input con fondo blanco */}
          <div className="relative group">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-white text-gray-900 placeholder:text-gray-400 h-11 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest rounded-md shadow-sm transition-all peer" 
              required 
            />
            <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 peer-focus:text-forest transition-colors" />
          </div>
          
          {loginError && (
            <p className="text-red-700 text-xs text-center font-bold py-2 bg-red-100/80 rounded-lg">
              {loginError}
            </p>
          )}
          
          {/* Botón de Login (Color de la empresa: Forest) */}
          <button 
            type="submit" 
            disabled={isLoggingIn}
            className="w-full h-11 mt-6 bg-forest text-white text-sm font-semibold rounded-md hover:bg-forest-light transition-all flex justify-center items-center shadow-lg disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoggingIn ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
