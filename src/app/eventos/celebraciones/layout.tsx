import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cumpleaños y Celebraciones en Cieneguilla",
  description: "Celebra cumpleaños y fiestas memorables en Los Andes Club Resort. Espacios al aire libre, gastronomía y diversión para toda la familia.",
  openGraph: {
    title: "Cumpleaños y Celebraciones | Los Andes Club Resort",
    description: "Festeja rodeado de naturaleza con piscina, gastronomía y atención personalizada en Cieneguilla.",
    url: "https://losandesclubresort.com/eventos/celebraciones",
    images: [{ url: "/images/events/cumple/cumple.webp", width: 1200, height: 630, alt: "Celebraciones en Los Andes Club Resort" }],
  },
  alternates: { canonical: "https://losandesclubresort.com/eventos/celebraciones" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
