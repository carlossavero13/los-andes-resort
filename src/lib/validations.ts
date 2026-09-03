import { z } from 'zod'

export const claimSchema = z.object({
  consumer_name: z.string().min(2, 'Nombre requerido').max(200).trim(),
  consumer_doc_type: z.enum(['DNI', 'CE', 'Pasaporte'], { message: 'Tipo de documento inválido' }),
  consumer_doc_number: z.string().min(6).max(20).trim(),
  consumer_phone: z.string().min(6).max(20).trim(),
  consumer_email: z.string().email('Email inválido').max(200).trim(),
  consumer_address: z.string().min(3, 'Dirección requerida').max(500).trim(),
  contracted_type: z.enum(['Producto', 'Servicio'], { message: 'Tipo de bien inválido' }),
  contracted_description: z.string().min(5).max(2000).trim(),
  incident_date: z.string().min(1, 'Fecha requerida'),
  receipt_number: z.string().max(100).optional().nullable().transform(v => v || null),
  claim_type: z.enum(['Reclamo', 'Queja'], { message: 'Tipo de acción inválido' }),
  claim_details: z.string().min(10, 'Detalle muy corto').max(5000).trim(),
  consumer_request: z.string().min(5).max(2000).trim(),
})

export const updateClaimSchema = z.object({
  id: z.string().uuid('ID inválido'),
  status: z.enum(['Pendiente', 'En Proceso', 'Resuelto'], { message: 'Estado inválido' }),
  admin_response: z.string().max(5000).optional().nullable().transform(v => v || null),
})

export type ClaimInput = z.infer<typeof claimSchema>
export type UpdateClaimInput = z.infer<typeof updateClaimSchema>
