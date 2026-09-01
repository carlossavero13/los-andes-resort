import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente público (para cuando necesites que el frontend se conecte directamente)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente administrativo (usa la Service Role Key para saltarse políticas de seguridad)
// SOLO debe usarse dentro de Route Handlers (/api/...) o Server Components
export const getServiceSupabase = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!serviceKey) {
    throw new Error('Falta SUPABASE_SERVICE_ROLE_KEY en las variables de entorno')
  }

  return createClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}
