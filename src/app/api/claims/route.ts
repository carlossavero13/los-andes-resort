import { NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { claimSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    const result = claimSchema.safeParse(body)
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return NextResponse.json(
        { error: 'Datos inválidos', details: errors },
        { status: 400 }
      )
    }
    
    const validated = result.data
    const supabase = getServiceSupabase()

    const { data, error } = await supabase
      .from('claims')
      .insert([validated])
      .select('tracking_code')
      .single()

    if (error) {
      console.error('Supabase Insert Error:', error)
      return NextResponse.json({ error: 'Error al registrar el reclamo' }, { status: 400 })
    }

    return NextResponse.json({ tracking_code: data.tracking_code }, { status: 201 })
    
  } catch (err: unknown) {
    console.error('API Route Error:', err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
