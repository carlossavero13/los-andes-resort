import { NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'

// Verifica que el token enviado pertenezca a un usuario autenticado en Supabase
async function verifyAdminAuth(request: Request) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }
  const token = authHeader.split(' ')[1]
  const supabase = getServiceSupabase()
  
  const { data: { user }, error } = await supabase.auth.getUser(token)
  
  if (error || !user) return null
  return user
}

export async function GET(request: Request) {
  try {
    const user = await verifyAdminAuth(request)
    if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

    const supabase = getServiceSupabase()
    
    const { data, error } = await supabase
      .from('claims')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const user = await verifyAdminAuth(request)
    if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

    const body = await request.json()
    const { id, status, admin_response } = body

    if (!id) return NextResponse.json({ error: 'Falta el ID del reclamo' }, { status: 400 })

    const supabase = getServiceSupabase()
    
    // Si el estado cambia a 'Resuelto', actualizamos la fecha
    const resolved_at = status === 'Resuelto' ? new Date().toISOString() : null

    const updateData: any = { status, admin_response }
    if (resolved_at) updateData.resolved_at = resolved_at

    const { error } = await supabase
      .from('claims')
      .update(updateData)
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
