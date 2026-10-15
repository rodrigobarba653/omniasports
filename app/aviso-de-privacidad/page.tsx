import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad | OMNIA Sports",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-cream pt-28 pb-16">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-[0.72rem] font-semibold tracking-[0.28em] text-cyan uppercase">
            Legal
          </p>
          <h1 className="font-display mt-3 text-4xl text-navy">
            Aviso de privacidad
          </h1>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-navy/75">
            <p>
              OMNIA Sports (en adelante, “OMNIA”) es responsable del tratamiento
              de los datos personales que se recaben a través de este sitio web
              y de los canales de contacto publicados, incluyendo correo
              electrónico y WhatsApp.
            </p>
            <p>
              Los datos que nos proporciones —nombre, correo, teléfono, tipo de
              contacto y mensaje— se utilizarán únicamente para atender tu
              solicitud, dar seguimiento comercial o informativo y, en su caso,
              iniciar una conversación sobre servicios de representación,
              desarrollo de talento u oportunidades comerciales.
            </p>
            <p>
              No utilizamos esta información para finalidades distintas ni la
              compartimos con terceros, salvo cuando sea necesario para prestar
              el servicio solicitado, cumplir una obligación legal o contar con
              tu consentimiento.
            </p>
            <p>
              Puedes solicitar acceso, rectificación, cancelación u oposición al
              tratamiento de tus datos escribiendo a{" "}
              <a href={`mailto:${contact.email}`} className="text-cyan">
                {contact.email}
              </a>
              .
            </p>
            <p>
              Este aviso puede actualizarse para reflejar cambios en la operación
              o en la normativa aplicable. La versión vigente se publica en esta
              página.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
