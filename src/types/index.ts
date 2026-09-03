export interface Room {
  id: string;
  name: string;
  slug: string;
  capacity: number;
  category: 'hotel' | 'cabana';
  description: string;
  images: string[];
  amenities: string[];
  price?: number;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface EventType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CommonArea {
  id: string;
  name: string;
  icon: string;
}

export interface GalleryImage {
  id: number;
  category: string;
  src: string;
  label: string;
  className?: string;
}

export interface Claim {
  id: string;
  tracking_code: string;
  consumer_name: string;
  consumer_doc_type: string;
  consumer_doc_number: string;
  consumer_phone: string;
  consumer_email: string;
  consumer_address: string;
  contracted_type: string;
  contracted_description: string;
  incident_date: string;
  receipt_number: string | null;
  claim_type: 'Reclamo' | 'Queja';
  claim_details: string;
  consumer_request: string;
  status: 'Pendiente' | 'En Proceso' | 'Resuelto';
  admin_response: string | null;
  resolved_at: string | null;
  created_at: string;
}

export interface ClaimSearchResult {
  tracking_code: string;
  status: 'Pendiente' | 'En Proceso' | 'Resuelto';
  admin_response: string | null;
  created_at: string;
  resolved_at: string | null;
}

export interface ToastMessage {
  text: string;
  type: 'success' | 'error';
}
