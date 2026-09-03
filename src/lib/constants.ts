import { Room, Testimonial, FAQ, NavLink } from "@/types";

export const WHATSAPP_NUMBER = "51924899204";
export const WHATSAPP_DEFAULT_MESSAGE = "Hola, me gustaría obtener más información sobre Los Andes Club Resort";
export const RESORT_PHONE = "+51 924 899 204";
export const RESORT_LANDLINE = "(01) 748 - 3726";
export const RESORT_EMAIL = "clientes@restaurantlosandes.com.pe";
export const RESORT_ADDRESS = "Los Andes Club Resort, Cieneguilla, Lima, Perú";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/HF5sNn4YHAZWRQKA6";
export const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=Club%20Resort%20Los%20Andes,%20Cieneguilla,%20Lima,%20Peru&t=&z=14&ie=UTF8&iwloc=&output=embed";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/losandescieneguilla/",
  tiktok: "https://www.tiktok.com/@losandescieneguilla?is_from_webapp=1&sender_device=pc",
  youtube: "https://www.youtube.com/@ClubResortLosAndes",
  facebook: "https://www.facebook.com/profile.php?id=61584395893943",
};

export const NAV_LINKS: NavLink[] = [
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Hotel", href: "/#habitaciones" },
  { name: "Full Day", href: "/#fullday" },
  { name: "Ubicación", href: "/#ubicacion" },
  { name: "Turismo", href: "/#turismo" },
  { name: "Eventos", href: "/#eventos" },
  { name: "Galería", href: "/#galeria" },
];

export const ROOMS: Room[] = [
  {
    id: "matrimonial-suite-junior",
    name: "Matrimonial Suite Junior",
    slug: "matrimonial-suite-junior",
    capacity: 2,
    category: "hotel",
    price: 300.00,
    description: "Una suite matrimonial premium con cama King Size y todas las comodidades modernas en la zona del hotel.",
    images: [
      "/images/rooms/sui_mat_jun/sui_mat_jun1.webp",
      "/images/rooms/sui_mat_jun/sui_mat_jun2.webp",
      "/images/rooms/sui_mat_jun/sui_mat_jun3.webp",
      "/images/rooms/sui_mat_jun/sui_mat_jun4.webp",
      "/images/rooms/sui_mat_jun/sui_mat_jun5.webp"
    ],
    amenities: ["1 Cama King Size", "Tina", "Área de 44 m²", "Terraza", "Vista a la piscina", "Wifi", "Friobar", "Agua Caliente", "Toalla / Toalla de mano", "Aire acondicionado", "Servicio de habitaciones disponible", "Limpieza diaria", "Televisión", "Artículos de aseo", "Desayuno Incluido", "Piscina", "Cancha de fútbol y vóley", "Juegos recreativos", "Áreas verdes", "Estacionamiento"],
    featured: true,
  },
  {
    id: "junior-ejecutiva",
    name: "Junior Ejecutiva",
    slug: "junior-ejecutiva",
    capacity: 2,
    category: "hotel",
    price: 350.00,
    description: "Una suite ejecutiva ideal para quienes buscan comodidad, elegancia y un espacio perfecto para el descanso.",
    images: [
      "/images/rooms/sui_jun_ejec/sui_jun_ejec1.webp",
      "/images/rooms/sui_jun_ejec/sui_jun_ejec2.webp"
    ],
    amenities: ["1 Cama King Size", "Jacuzzi", "Área de 44 m²", "Terraza", "Vista a la piscina", "Wifi", "Friobar", "Agua Caliente", "Toalla / Toalla de mano", "Aire acondicionado", "Servicio de habitaciones disponible", "Limpieza diaria", "Televisión", "Artículos de aseo", "Desayuno Incluido", "Piscina", "Cancha de fútbol y vóley", "Juegos recreativos", "Áreas verdes", "Estacionamiento"],
    featured: true,
  },
  {
    id: "matrimonial-estandar",
    name: "Matrimonial Estándar",
    slug: "matrimonial-estandar",
    capacity: 2,
    category: "cabana",
    price: 270.00,
    description: "Una cabaña íntima y acogedora, perfecta para parejas que buscan tranquilidad rodeados de naturaleza.",
    images: [
      "/images/rooms/hab_mat_std/hab_mat_std1.webp",
      "/images/rooms/hab_mat_std/hab_mat_std2.webp",
      "/images/rooms/hab_mat_std/hab_mat_std3.webp",
      "/images/rooms/hab_mat_std/hab_mat_std4.webp",
      "/images/rooms/hab_mat_std/hab_mat_std5.webp",
      "/images/rooms/hab_mat_std/hab_mat_std6.webp"
    ],
    amenities: ["1 Cama Queen", "Wifi", "Friobar", "Agua Caliente", "Toalla / Toalla de mano", "Aire acondicionado", "Servicio de habitaciones disponible", "Limpieza diaria", "Televisión", "Artículos de aseo", "Desayuno Incluido", "Piscina", "Cancha de fútbol y vóley", "Juegos recreativos", "Áreas verdes", "Estacionamiento"],
  },

  {
    id: "doble-superior",
    name: "Doble Superior",
    slug: "doble-superior",
    capacity: 4,
    category: "cabana",
    price: 400.00,
    description: "Espaciosa cabaña con dos camas grandes, ideal para familias pequeñas o grupos de amigos.",
    images: [
      "/images/rooms/hab_dob_sup/hab_dob_sup1.webp",
      "/images/rooms/hab_dob_sup/hab_dob_sup2.webp",
      "/images/rooms/hab_dob_sup/hab_dob_sup3.webp",
      "/images/rooms/hab_dob_sup/hab_dob_sup4.webp",
      "/images/rooms/hab_dob_sup/hab_dob_sup5.webp",
      "/images/rooms/hab_dob_sup/hab_dob_sup6.webp",
      "/images/rooms/hab_dob_sup/hab_dob_sup7.webp"
    ],
    amenities: ["1 Cama Queen", "1 Cama 2 Plazas", "Wifi", "Friobar", "Agua Caliente", "Toalla / Toalla de mano", "Aire acondicionado", "Servicio de habitaciones disponible", "Limpieza diaria", "Televisión", "Artículos de aseo", "Desayuno Incluido", "Piscina", "Cancha de fútbol y vóley", "Juegos recreativos", "Áreas verdes", "Estacionamiento"],
  },
  {
    id: "doble-suite-junior",
    name: "Doble Suite Junior",
    slug: "doble-suite-junior",
    capacity: 4,
    category: "hotel",
    price: 400.00,
    description: "Comodidad de lujo para 4 personas con dos camas Queen en nuestra exclusiva zona de hotel.",
    images: [
      "/images/rooms/sui_dob_jun/sui_dob_jun1.webp",
      "/images/rooms/sui_dob_jun/sui_dob_jun2.webp",
      "/images/rooms/sui_dob_jun/sui_dob_jun3.webp",
      "/images/rooms/sui_dob_jun/sui_dob_jun4.webp",
      "/images/rooms/sui_dob_jun/sui_dob_jun5.webp",
      "/images/rooms/sui_dob_jun/sui_dob_jun6.webp"
    ],
    amenities: ["2 Camas Queen", "Área de 44 m²", "Terraza", "Vista a la piscina", "Wifi", "Friobar", "Agua Caliente", "Toalla / Toalla de mano", "Aire acondicionado", "Servicio de habitaciones disponible", "Limpieza diaria", "Televisión", "Artículos de aseo", "Desayuno Incluido", "Piscina", "Cancha de fútbol y vóley", "Juegos recreativos", "Áreas verdes", "Estacionamiento"],
  },
  {
    id: "doble-estandar",
    name: "Doble Estándar",
    slug: "doble-estandar",
    capacity: 3,
    category: "cabana",
    price: 320.00,
    description: "Cabaña funcional y cómoda con capacidad para 3 personas, perfecta para una escapada rápida.",
    images: [
      "/images/rooms/hab_dob_std/hab_dob_std7.webp",
      "/images/rooms/hab_dob_std/hab_dob_std4.webp",
      "/images/rooms/hab_dob_std/hab_dob_std5.webp",
      "/images/rooms/hab_dob_std/hab_dob_std6.webp"
    ],
    amenities: ["1 Cama Queen", "1 Cama 1.5 Plazas", "Wifi", "Friobar", "Agua Caliente", "Toalla / Toalla de mano", "Aire acondicionado", "Servicio de habitaciones disponible", "Limpieza diaria", "Televisión", "Artículos de aseo", "Desayuno Incluido", "Piscina", "Cancha de fútbol y vóley", "Juegos recreativos", "Áreas verdes", "Estacionamiento"],
  },
  {
    id: "familiar",
    name: "Familiar",
    slug: "familiar",
    capacity: 6,
    category: "cabana",
    price: 520.00,
    description: "Nuestra cabaña más grande, equipada para acomodar a toda la familia con la máxima comodidad y espacio.",
    images: [
      "/images/rooms/cab_fam_rustica/cab_fam_rustica.webp",
      "/images/rooms/cab_fam_rustica/cab_fam_rustica2.webp",
      "/images/rooms/cab_fam_rustica/cab_fam_rustica3.webp",
      "/images/rooms/cab_fam_rustica/cab_fam_rustica4.webp",
      "/images/rooms/cab_fam_rustica/cab_fam_rustica5.webp",
      "/images/rooms/cab_fam_rustica/cab_fam_rustica6.webp",
      "/images/rooms/cab_fam_rustica/cab_fam_rustica7.webp"
    ],
    amenities: ["1 Cama King Size", "2 Camas 2 Plazas", "Wifi", "Friobar", "Agua Caliente", "Toalla / Toalla de mano", "Aire acondicionado", "Servicio de habitaciones disponible", "Limpieza diaria", "Televisión", "Artículos de aseo", "Desayuno Incluido", "Piscina", "Cancha de fútbol y vóley", "Juegos recreativos", "Áreas verdes", "Estacionamiento"],
    featured: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Huésped de Booking.com",
    rating: 5,
    comment: "Las instalaciones son hermosas. Resalto mucho la limpieza de la piscina y la comodidad de las cabañas. Un lugar perfecto para ir en familia.",
    date: "Opinión Verificada",
  },
  {
    id: "2",
    name: "Usuario de Google",
    rating: 5,
    comment: "Fantástica experiencia. Fuimos a pasar un Full Day y la atención fue muy buena. Mis hijos disfrutaron mucho de los juegos y el clima de Cieneguilla es inmejorable.",
    date: "Opinión Verificada",
  },
  {
    id: "3",
    name: "Viajero en Kayak",
    rating: 5,
    comment: "El ambiente es súper acogedor. Nos sirvió muchísimo para desconectarnos de la rutina de Lima. Las áreas verdes y los jardines están muy bien cuidados.",
    date: "Opinión Verificada",
  },
  {
    id: "4",
    name: "Huésped de Booking.com",
    rating: 4,
    comment: "Muy buena ubicación. El restaurante tiene buena sazón, la comida estuvo deliciosa y la terraza es el lugar ideal para relajarse por la tarde.",
    date: "Opinión Verificada",
  },
  {
    id: "5",
    name: "Pareja (Booking.com)",
    rating: 5,
    comment: "Un hotel campestre hermoso. Las habitaciones son impecables y el entorno te da mucha paz. Definitivamente volveremos para nuestro próximo aniversario.",
    date: "Opinión Verificada",
  },
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "¿Aceptan mascotas?",
    answer: "¡Sí! Somos un resort Pet Friendly. Tu mascota es bienvenida para disfrutar de nuestras áreas verdes junto a ti.",
  },
  {
    id: "2",
    question: "¿Hay estacionamiento?",
    answer: "Sí, contamos con estacionamiento privado y vigilado sin costo adicional para todos nuestros visitantes.",
  },
  {
    id: "3",
    question: "¿Las habitaciones incluyen desayuno?",
    answer: "Sí, todas nuestras habitaciones incluyen desayuno americano completo para cada huésped.",
  },
  {
    id: "4",
    question: "¿Debo reservar con anticipación?",
    answer: "Sí, recomendamos reservar con anticipación, especialmente en fines de semana y feriados, para garantizar disponibilidad.",
  },
  {
    id: "5",
    question: "¿El Full Day incluye restaurante?",
    answer: "El Full Day incluye un vale de consumo de S/20 por persona para disfrutar en nuestro restaurante. Puedes consumir platos adicionales con un costo extra.",
  },
];

export const GALLERY_CATEGORIES = [
  "Todas",
  "Piscinas",
  "Habitaciones",
  "Restaurante",
  "Eventos",
  "Áreas verdes",
  "Familias",
] as const;
