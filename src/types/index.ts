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
