import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bodas y Matrimonios al Aire Libre en Cieneguilla",
  description: "Celebra tu boda de ensueño en Los Andes Club Resort. Amplios jardines, catering premium, hospedaje para novios e invitados. Cotiza tu matrimonio en Cieneguilla.",
  openGraph: {
    title: "Bodas y Matrimonios | Los Andes Club Resort",
    description: "El escenario perfecto para el día más importante de tu vida. Jardines, decoración rústico-chic y atención personalizada.",
    url: "https://losandesclubresort.com/eventos/matrimonios",
    images: [{ url: "/images/events/matrimonio/matri1.webp", width: 1200, height: 630, alt: "Matrimonios en Los Andes Club Resort" }],
  },
  alternates: { canonical: "https://losandesclubresort.com/eventos/matrimonios" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
