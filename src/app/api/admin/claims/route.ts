import { NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { updateClaimSchema } from '@/lib/validations'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || ''

async function verifyAdminAuth(request: Request) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }
  const token = authHeader.split(' ')[1]
  const supabase = getServiceSupabase()
  
  const { data: { user }, error } = await supabase.auth.getUser(token)
  
  if (error || !user) return null
  
  // Verify the user is the authorized admin
  if (ADMIN_EMAIL && user.email !== ADMIN_EMAIL) {
    return null
  }
  
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
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error interno'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const user = await verifyAdminAuth(request)
    if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

    const body = await request.json()
    
    // Validate input
    const result = updateClaimSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }
    
    const { id, status, admin_response } = result.data
    const supabase = getServiceSupabase()
    
    const resolved_at = status === 'Resuelto' ? new Date().toISOString() : null

    const updateData: Record<string, string | null> = { status, admin_response: admin_response ?? null }
    if (resolved_at) updateData.resolved_at = resolved_at

    const { error } = await supabase
      .from('claims')
      .update(updateData)
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error interno'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
