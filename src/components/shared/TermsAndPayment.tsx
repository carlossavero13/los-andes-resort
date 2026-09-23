"use client";

import { AlertCircle, CreditCard } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TermsAndPayment() {
  return (
    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 pt-12 border-t border-forest/10">
      <AnimatedSection variant="fadeRight">
        <div className="flex items-center gap-3 mb-8">
          <AlertCircle className="w-6 h-6 text-gold" />
          <h4 className="font-playfair text-3xl text-forest">Términos Importantes</h4>
        </div>
        <ul className="space-y-6">
          <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
            Cotización válida por <strong>30 días</strong>.
          </li>
          <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
            En caso de modificación de fecha del evento, tendrá un costo del <strong>10%</strong> del monto total del evento, y se reprogramará según disponibilidad.
          </li>
          <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
            En caso de cancelación del evento, se cobrará el monto total del evento y <strong>no habrá devolución</strong> de dinero.
          </li>
          <li className="text-forest/70 font-light text-base leading-relaxed pl-4 border-l-2 border-gold/30">
            El cliente será responsable del mal uso o negligencia de las áreas de nuestras instalaciones.
          </li>
        </ul>
      </AnimatedSection>

      <AnimatedSection variant="fadeLeft">
        <div className="flex items-center gap-3 mb-8">
          <CreditCard className="w-6 h-6 text-gold" />
          <h4 className="font-playfair text-3xl text-forest">Métodos de Pago</h4>
        </div>
        <p className="text-forest/70 font-light text-base mb-8">
          Se aceptan pagos en efectivo o transferencia vía BCP. Ofrecemos facilidades de pago en cuotas de <strong>máximo 5 fechas</strong>.
        </p>
        
        <div className="bg-[#FDFBF7] p-8 rounded-[2rem] border border-forest/10 space-y-6">
          <div>
            <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-2">Cuenta BCP Soles</p>
            <p className="font-playfair italic text-forest text-2xl">1939 6216 14018</p>
          </div>
          <div>
            <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-2">Cuenta Interbancaria (CCI)</p>
            <p className="font-playfair italic text-forest text-2xl">002 193 0096 2161 4018 14</p>
          </div>
          <div className="pt-4 border-t border-forest/10">
            <p className="text-xs text-forest/50 uppercase tracking-widest font-bold mb-1">Titular</p>
            <p className="font-inter font-medium text-forest">Los Andes Hotel Resort SAC</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
