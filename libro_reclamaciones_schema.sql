-- Tabla principal para el Libro de Reclamaciones
CREATE TABLE claims (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_code text UNIQUE,
  
  -- 1. Identificación del Consumidor
  consumer_name text NOT NULL,
  consumer_doc_type text NOT NULL,
  consumer_doc_number text NOT NULL,
  consumer_phone text NOT NULL,
  consumer_email text NOT NULL,
  consumer_address text NOT NULL,
  
  -- 2. Identificación del Bien Contratado
  contracted_type text NOT NULL, -- 'Producto' o 'Servicio'
  contracted_description text NOT NULL,
  incident_date date NOT NULL,
  receipt_number text,
  
  -- 3. Detalle de Reclamación
  claim_type text NOT NULL, -- 'Reclamo' o 'Queja'
  claim_details text NOT NULL,
  consumer_request text NOT NULL,
  
  -- 4. Administración
  status text DEFAULT 'Pendiente', -- 'Pendiente', 'En Proceso', 'Resuelto'
  admin_response text,
  resolved_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Función para generar automáticamente el código LR-YYYY-XXXXXX
CREATE OR REPLACE FUNCTION generate_tracking_code()
RETURNS TRIGGER AS $$
DECLARE
  current_year text;
  next_val integer;
  formatted_val text;
BEGIN
  -- Obtener el año actual basado en la fecha de creación
  current_year := to_char(NEW.created_at, 'YYYY');
  
  -- Contar cuántos reclamos existen este año para asignar el siguiente número
  SELECT COUNT(*) + 1 INTO next_val
  FROM claims
  WHERE to_char(created_at, 'YYYY') = current_year;
  
  -- Dar formato de 6 dígitos con ceros a la izquierda (ej. 000005)
  formatted_val := lpad(next_val::text, 6, '0');
  
  -- Asignar el código generado a la nueva fila
  NEW.tracking_code := 'LR-' || current_year || '-' || formatted_val;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger que ejecuta la función justo antes de insertar un nuevo reclamo
CREATE TRIGGER set_tracking_code
BEFORE INSERT ON claims
FOR EACH ROW
EXECUTE FUNCTION generate_tracking_code();
