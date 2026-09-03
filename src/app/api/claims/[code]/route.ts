import { NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const resolvedParams = await params;
    const code = resolvedParams.code.trim().toUpperCase()
    const supabase = getServiceSupabase()

    // 1. Fetch from Supabase
    // We only select safe fields to return to the public search
    const { data, error } = await supabase
      .from('claims')
      .select('tracking_code, status, admin_response, created_at, resolved_at')
      .eq('tracking_code', code)
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Reclamo no encontrado' }, { status: 404 })
    }

    // 2. Return data
    return NextResponse.json(data, { status: 200 })
    
  } catch (err: unknown) {
    console.error('API Route GET Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
