import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Faltan credenciales')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function test() {
  const { data, error } = await supabase.from('claims').select('*')
  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Filas encontradas:', data?.length)
    console.log(data)
  }
}

test()
