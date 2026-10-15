"use client";

import { useEffect, useState } from "react";
import { contact, contactTypes, type ContactType } from "@/lib/site";
import { TIPO_EVENT } from "@/components/contact-link";
import { Reveal } from "@/components/reveal";

export function V2Contact() {
  const [tipo, setTipo] = useState<ContactType | "">("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onTipo = (event: Event) => {
      const detail = (event as CustomEvent<ContactType>).detail;
      if (detail) setTipo(detail);
    };
    window.addEventListener(TIPO_EVENT, onTipo);
    return () => window.removeEventListener(TIPO_EVENT, onTipo);
  }, []);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = String(data.get("nombre") || "");
    const correo = String(data.get("correo") || "");
    const mensaje = String(data.get("mensaje") || "");
    const selected = String(data.get("tipo") || tipo);
    const body = [
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      `Tipo: ${selected}`,
      "",
      mensaje,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `OMNIA Atelier — ${selected || "Consulta"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-[#c4a574] uppercase">
            Hablemos
          </p>
          <h2 className="v2-serif mt-4 text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Las grandes oportunidades comienzan con
            <em className="italic text-[#c4a574]"> una conversación.</em>
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-[1.8] text-[#ede6d9]/65">
            ¿Buscas llevar tu carrera al siguiente nivel, conectar tu marca con
            talento deportivo o explorar nuevas alianzas? Hablemos de lo que
            podemos construir juntos.
          </p>
          <div className="mt-12 border-t border-[rgba(237,230,217,0.14)] pt-8">
            <p className="v2-serif text-2xl">{contact.name}</p>
            <p className="mt-1 text-xs tracking-[0.16em] text-[#9a9286] uppercase">
              {contact.role}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 block text-[#c4a574] hover:text-[#e8d5b0]"
            >
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-1 block text-[#ede6d9]/70">
              {contact.phone}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-link mt-8"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="lg:pt-16">
            <label className="block text-[0.65rem] tracking-[0.2em] text-[#9a9286] uppercase">
              Nombre
              <input name="nombre" required className="v2-input mt-1" />
            </label>
            <label className="mt-8 block text-[0.65rem] tracking-[0.2em] text-[#9a9286] uppercase">
              Correo electrónico
              <input name="correo" type="email" required className="v2-input mt-1" />
            </label>
            <label className="mt-8 block text-[0.65rem] tracking-[0.2em] text-[#9a9286] uppercase">
              Tipo de contacto
              <select
                name="tipo"
                required
                value={tipo}
                onChange={(e) => setTipo(e.target.value as ContactType)}
                className="v2-input mt-1"
              >
                <option value="" disabled>
                  Selecciona
                </option>
                {contactTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-8 block text-[0.65rem] tracking-[0.2em] text-[#9a9286] uppercase">
              Mensaje
              <textarea name="mensaje" required rows={4} className="v2-input mt-1 resize-none" />
            </label>
            <button
              type="submit"
              className="mt-10 w-full border border-[#c4a574] py-4 text-[0.68rem] tracking-[0.28em] text-[#c4a574] uppercase transition-colors hover:bg-[#c4a574] hover:text-navy"
            >
              Enviar mensaje
            </button>
            {sent ? (
              <p className="mt-4 text-sm text-[#9a9286]">
                Se abrirá tu correo para completar el envío.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
