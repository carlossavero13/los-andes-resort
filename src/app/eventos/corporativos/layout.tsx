import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos Corporativos y Team Building en Cieneguilla",
  description: "Espacios versátiles para conferencias, integraciones y team building. Sal de la oficina y lleva a tu equipo a Los Andes Club Resort en Cieneguilla.",
  openGraph: {
    title: "Eventos Corporativos | Los Andes Club Resort",
    description: "Conferencias, team building y jornadas de integración en un entorno natural único en Cieneguilla.",
    url: "https://losandesclubresort.com/eventos/corporativos",
    images: [{ url: "/images/events/corporativo/corp3.webp", width: 1200, height: 630, alt: "Eventos Corporativos en Los Andes Club Resort" }],
  },
  alternates: { canonical: "https://losandesclubresort.com/eventos/corporativos" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
