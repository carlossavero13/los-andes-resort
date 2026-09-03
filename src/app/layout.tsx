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
  title: "Los Andes Club Resort | Naturaleza y Confort",
  description: "Descubre un paraíso exclusivo donde cada momento se convierte en un recuerdo inolvidable. Piscinas, habitaciones premium, restaurante, eventos y Full Day.",
  openGraph: {
    title: "Los Andes Club Resort | Naturaleza y Confort",
    description: "Descubre un paraíso exclusivo donde cada momento se convierte en un recuerdo inolvidable.",
    url: "https://losandesclubresort.com",
    siteName: "Los Andes Club Resort",
    images: [
      {
        url: "/images/hero/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Los Andes Club Resort",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "name": "Los Andes Club Resort",
  "image": "https://losandesclubresort.com/images/hero/hero-1.webp",
  "description": "Tu escape perfecto entre la naturaleza y el confort. Un resort exclusivo en Cieneguilla.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cieneguilla",
    "addressLocality": "Lima",
    "addressRegion": "Lima",
    "addressCountry": "PE"
  },
  "telephone": "+51924899204",
  "email": "clientes@restaurantlosandes.com.pe",
  "url": "https://losandesclubresort.com",
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/losandescieneguilla/",
    "https://www.facebook.com/profile.php?id=61584395893943",
    "https://www.tiktok.com/@losandescieneguilla",
    "https://www.youtube.com/@ClubResortLosAndes"
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
