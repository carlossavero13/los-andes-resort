import { BedDouble, Waves, Activity, Coffee, Refrigerator, Droplets, Wifi, Maximize, Bath, TreePine, Car, Snowflake, ConciergeBell, Sparkles, Tv, SprayCan, Sun, CheckCircle2, type LucideIcon } from "lucide-react";

export function getAmenityIcon(amenity: string): LucideIcon {
  const a = amenity.toLowerCase();
  if (a.includes("cama")) return BedDouble;
  if (a.includes("piscina")) return Waves;
  if (a.includes("fútbol") || a.includes("juegos")) return Activity;
  if (a.includes("desayuno")) return Coffee;
  if (a.includes("friobar") || a.includes("cafetera")) return Refrigerator;
  if (a.includes("agua caliente")) return Droplets;
  if (a.includes("wifi")) return Wifi;
  if (a.includes("área") || a.includes("medición") || a.includes("metros")) return Maximize;
  if (a.includes("toalla") || a.includes("jacuzzi")) return Bath;
  if (a.includes("verde") || a.includes("naturaleza")) return TreePine;
  if (a.includes("estacionamiento")) return Car;
  if (a.includes("aire acondicionado")) return Snowflake;
  if (a.includes("servicio") || a.includes("habitaciones disponible")) return ConciergeBell;
  if (a.includes("limpieza")) return Sparkles;
  if (a.includes("televisión") || a.includes("tv")) return Tv;
  if (a.includes("aseo") || a.includes("artículos")) return SprayCan;
  if (a.includes("terraza")) return Sun;
  return CheckCircle2;
}
