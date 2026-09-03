import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Políticas de Privacidad | Los Andes Club Resort",
  description: "Políticas de privacidad y términos de servicio de Los Andes Club Resort.",
};

export default function PoliticasDePrivacidad() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-playfair text-4xl md:text-5xl text-forest font-bold mb-8">Políticas de Privacidad</h1>
          
          <div className="prose prose-lg prose-headings:font-playfair prose-headings:text-forest text-forest/80">
            <p className="font-inter">Última actualización: Septiembre 2026</p>
            
            <h2 className="text-2xl mt-8 mb-4 font-semibold">1. Información General</h2>
            <p className="font-inter mb-4">
              En Los Andes Club Resort (en adelante, "el Resort"), valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, protegemos y compartimos la información personal de nuestros usuarios y clientes a través de nuestro sitio web y servicios asociados.
            </p>
            
            <h2 className="text-2xl mt-8 mb-4 font-semibold">2. Información que Recopilamos</h2>
            <p className="font-inter mb-4">Podemos recopilar los siguientes datos personales:</p>
            <ul className="list-disc pl-6 font-inter mb-4 space-y-2">
              <li><strong>Datos de contacto y registro:</strong> Nombres, apellidos, tipo y número de documento de identidad, correo electrónico, número de teléfono y dirección (especialmente a través de nuestro Libro de Reclamaciones).</li>
              <li><strong>Datos de uso:</strong> Información sobre cómo interactúa con nuestro sitio web (mediante cookies y Google Analytics).</li>
            </ul>

            <h2 className="text-2xl mt-8 mb-4 font-semibold">3. Uso de la Información</h2>
            <p className="font-inter mb-4">La información recopilada se utiliza para los siguientes fines:</p>
            <ul className="list-disc pl-6 font-inter mb-4 space-y-2">
              <li>Atender, procesar y dar respuesta a quejas o reclamos ingresados en nuestro Libro de Reclamaciones Virtual, conforme a la normativa de INDECOPI.</li>
              <li>Gestionar solicitudes de reservas o consultas enviadas mediante WhatsApp.</li>
              <li>Mejorar nuestros servicios y personalizar su experiencia en el sitio web.</li>
            </ul>

            <h2 className="text-2xl mt-8 mb-4 font-semibold">4. Libro de Reclamaciones (Ley N° 29571)</h2>
            <p className="font-inter mb-4">
              Los datos personales ingresados en el Libro de Reclamaciones Virtual son de uso estricto y exclusivo para la atención de su solicitud, queja o reclamo. Estos datos no serán utilizados para fines publicitarios, de marketing, ni serán compartidos con terceros, salvo requerimiento de una autoridad competente (como INDECOPI).
            </p>

            <h2 className="text-2xl mt-8 mb-4 font-semibold">5. Protección y Seguridad</h2>
            <p className="font-inter mb-4">
              Implementamos medidas técnicas y organizativas (como cifrado HTTPS y bases de datos seguras) para proteger su información personal contra accesos no autorizados, pérdida, alteración o divulgación.
            </p>

            <h2 className="text-2xl mt-8 mb-4 font-semibold">6. Derechos ARCO</h2>
            <p className="font-inter mb-4">
              De acuerdo con la Ley de Protección de Datos Personales (Ley N° 29733), usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al uso de sus datos personales. Para ejercer estos derechos, puede contactarnos enviando un correo a: <strong>clientes@restaurantlosandes.com.pe</strong>.
            </p>

            <h2 className="text-2xl mt-8 mb-4 font-semibold">7. Contacto</h2>
            <p className="font-inter mb-4">
              Si tiene alguna duda o consulta sobre estas Políticas de Privacidad, por favor contáctenos a través de nuestro número oficial: <strong>+51 924 899 204</strong> o a nuestro correo electrónico.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
