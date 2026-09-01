import { NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const supabase = getServiceSupabase()

    // 1. Insert into Supabase
    // Note: The generate_tracking_code trigger will automatically assign tracking_code
    const { data, error } = await supabase
      .from('claims')
      .insert([
        {
          consumer_name: body.consumer_name,
          consumer_doc_type: body.consumer_doc_type,
          consumer_doc_number: body.consumer_doc_number,
          consumer_phone: body.consumer_phone,
          consumer_email: body.consumer_email,
          consumer_address: body.consumer_address,
          
          contracted_type: body.contracted_type,
          contracted_description: body.contracted_description,
          incident_date: body.incident_date,
          receipt_number: body.receipt_number || null,
          
          claim_type: body.claim_type,
          claim_details: body.claim_details,
          consumer_request: body.consumer_request,
        }
      ])
      .select('tracking_code')
      .single()

    if (error) {
      console.error('Supabase Insert Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // 2. Return tracking code
    return NextResponse.json({ tracking_code: data.tracking_code }, { status: 201 })
    
  } catch (err: any) {
    console.error('API Route Error:', err)
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 })
  }
}
