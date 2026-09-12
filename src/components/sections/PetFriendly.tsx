"use client";

import Image from "next/image";
import { PawPrint, Heart, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PetFriendly() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/5] sm:aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/site/huesped-con-mascota-2.webp"
                  alt="Huésped con su mascota en Los Andes Club Resort"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden sm:flex">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <PawPrint className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100% Pet Friendly</p>
                  <p className="text-sm text-gray-500">Tu mejor amigo es bienvenido</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium mb-6">
                <Heart className="w-4 h-4 fill-emerald-600" />
                <span>Nos encantan los animales</span>
              </div>
              
              <SectionHeading
                title="Vacaciones con tu Mejor Amigo"
                subtitle="En Los Andes Club Resort sabemos que tu mascota es parte de la familia. Por eso, hemos adaptado nuestros espacios para que ambos disfruten de una estadía inolvidable."
                alignment="left"
              />
              
              <ul className="mt-8 space-y-4">
                {[
                  "Amplias áreas verdes para correr y jugar",
                  "Cabañas y habitaciones seleccionadas con espacios ideales",
                  "Ambiente relajado en contacto con la naturaleza",
                  "Entorno seguro y cerrado en Cieneguilla"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md">
                   <Image src="/images/site/huesped-con-mascota-1.webp" alt="Pet Friendly Mascotas" fill className="object-cover" />
                </div>
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md">
                   <Image src="/images/site/huesped-con-mascota-3.webp" alt="Vacaciones con perro" fill className="object-cover" />
                </div>
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md">
                   <Image src="/images/site/huesped-con-mascota-4.webp" alt="Paseo con mascota" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
