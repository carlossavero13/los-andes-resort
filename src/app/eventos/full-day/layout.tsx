import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Day para Colegios en Cieneguilla",
  description: "Organiza el Full Day perfecto para tu institución educativa. Piscinas, canchas deportivas, juegos y menús especiales en Los Andes Club Resort.",
  openGraph: {
    title: "Full Day para Colegios | Los Andes Club Resort",
    description: "Programas recreativos y deportivos para instituciones educativas en un entorno seguro y natural.",
    url: "https://losandesclubresort.com/eventos/full-day",
    images: [{ url: "/images/events/fullday_colegios/f_day_cole2.webp", width: 1200, height: 630, alt: "Full Day Colegios en Los Andes Club Resort" }],
  },
  alternates: { canonical: "https://losandesclubresort.com/eventos/full-day" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
