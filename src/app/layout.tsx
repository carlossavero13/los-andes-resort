import type { Metadata } from "next";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BookingModal from "@/components/ui/BookingModal";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Preloader from "@/components/ui/Preloader";

import CookieBanner from "@/components/ui/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://losandesclubresort.com"),
  title: {
    default: "Los Andes Club Resort | Hotel & Restaurante en Cieneguilla, Lima",
    template: "%s | Los Andes Club Resort",
  },
  description: "Escápate a Los Andes Club Resort en Cieneguilla. Habitaciones premium, restaurante campestre, bar, piscina y amplias áreas verdes a solo 40 min de Lima. ¡Reserva tu estadía hoy!",
  keywords: ["resort en cieneguilla", "hotel en cieneguilla", "hotel con piscina lima", "club resort lima", "restaurante campestre cieneguilla", "eventos en cieneguilla", "full day cieneguilla", "matrimonio al aire libre lima", "hotel cerca de lima", "resort campestre lima"],
  authors: [{ name: "Los Andes Club Resort" }],
  creator: "Los Andes Club Resort",
  publisher: "Los Andes Club Resort",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Los Andes Club Resort | Hotel & Restaurante en Cieneguilla, Lima",
    description: "Tu escape perfecto entre naturaleza y confort. Habitaciones premium, restaurante criollo, piscina, eventos y Full Day a solo 40 min de Lima.",
    url: "https://losandesclubresort.com",
    siteName: "Los Andes Club Resort",
    images: [
      {
        url: "/images/hero/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Los Andes Club Resort - Resort campestre en Cieneguilla, Lima",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Andes Club Resort | Hotel & Restaurante en Cieneguilla",
    description: "Habitaciones premium, restaurante campestre, piscina y eventos a solo 40 min de Lima.",
    images: ["/images/hero/hero-1.webp"],
  },
  alternates: {
    canonical: "https://losandesclubresort.com",
  },
  category: "travel",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Resort",
      "@id": "https://losandesclubresort.com/#resort",
      "name": "Los Andes Club Resort",
      "alternateName": "Club Resort Los Andes",
      "image": [
        "https://losandesclubresort.com/images/hero/hero-1.webp",
        "https://losandesclubresort.com/images/hero/hero-2.webp"
      ],
      "description": "Resort campestre exclusivo en Cieneguilla, Lima. Habitaciones premium, restaurante criollo, bar de cócteles, piscina, áreas verdes y espacios para eventos como matrimonios, cumpleaños y full days corporativos.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Nueva Toledo Lote 205A Parcelac.",
        "addressLocality": "Cieneguilla",
        "addressRegion": "Lima",
        "postalCode": "15593",
        "addressCountry": "PE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -12.1008,
        "longitude": -76.7697
      },
      "telephone": "+51924899204",
      "email": "clientes@restaurantlosandes.com.pe",
      "url": "https://losandesclubresort.com",
      "priceRange": "$$",
      "checkinTime": "14:00",
      "checkoutTime": "12:00",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Piscina", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Restaurante", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Bar", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Wi-Fi Gratuito", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Estacionamiento", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Áreas Verdes", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Juegos Recreativos", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Canchas Deportivas", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Salón de Eventos", "value": true }
      ],
      "sameAs": [
        "https://www.instagram.com/losandescieneguilla/",
        "https://www.facebook.com/profile.php?id=61584395893943",
        "https://www.tiktok.com/@losandescieneguilla",
        "https://www.youtube.com/@ClubResortLosAndes"
      ]
    },
    {
      "@type": "Restaurant",
      "@id": "https://losandesclubresort.com/#restaurant",
      "name": "Restaurante Los Andes",
      "image": "https://losandesclubresort.com/images/restaurant/platos/platos1.webp",
      "description": "Restaurante campestre en Cieneguilla con carta criolla, fusión y bar de cócteles artesanales. Ideal para almuerzos familiares y celebraciones.",
      "servesCuisine": ["Peruana", "Criolla", "Fusión"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Nueva Toledo Lote 205A Parcelac.",
        "addressLocality": "Cieneguilla",
        "addressRegion": "Lima",
        "addressCountry": "PE"
      },
      "telephone": "+51924899204",
      "url": "https://losandesclubresort.com/#restaurante",
      "priceRange": "$$",
      "parentOrganization": { "@id": "https://losandesclubresort.com/#resort" }
    },
    {
      "@type": "WebSite",
      "@id": "https://losandesclubresort.com/#website",
      "url": "https://losandesclubresort.com",
      "name": "Los Andes Club Resort",
      "description": "Resort campestre en Cieneguilla, Lima — Hotel, Restaurante y Eventos",
      "publisher": { "@id": "https://losandesclubresort.com/#resort" },
      "inLanguage": "es-PE"
    },
    {
      "@type": "FAQPage",
      "@id": "https://losandesclubresort.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Dónde queda Los Andes Club Resort?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estamos ubicados en Av. Nueva Toledo Lote 205A, Cieneguilla, Lima, Perú. A solo 40 minutos del centro de Lima."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué servicios incluye la estadía en Los Andes Club Resort?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Incluye acceso a habitaciones premium con desayuno, piscina, áreas verdes, canchas deportivas, juegos recreativos, Wi-Fi y estacionamiento. También contamos con restaurante campestre y bar."
          }
        },
        {
          "@type": "Question",
          "name": "¿Realizan eventos como matrimonios y cumpleaños?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos espacios al aire libre y salones para todo tipo de eventos: matrimonios, cumpleaños, corporativos y full days. Contáctanos para cotización personalizada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el horario de check-in y check-out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El check-in es a partir de las 2:00 PM y el check-out es hasta las 12:00 PM del día siguiente."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script 
          id="json-ld" 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />
        {/* Google Analytics 4 — Reemplaza G-XXXXXXXXXX con tu ID real */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <SmoothScroll>
          <Preloader />
          {children}
          <BookingModal />
          <ExitIntentPopup />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
