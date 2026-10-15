"use client";

import { useEffect, useState } from "react";
import { contact, contactTypes, type ContactType } from "@/lib/site";
import { TIPO_EVENT } from "@/components/contact-link";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Contact() {
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
      `Contacto Omnia Sports — ${selected || "Consulta"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Hablemos"
            title="Las grandes oportunidades comienzan con una conversación."
            description="¿Buscas llevar tu carrera al siguiente nivel, conectar tu marca con talento deportivo o explorar nuevas alianzas? Hablemos de lo que podemos construir juntos."
          />

          <div className="mt-8 rounded-md bg-navy p-6 text-cream">
            <p className="font-display text-2xl">{contact.name}</p>
            <p className="mt-1 text-sm text-cream/65">{contact.role}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 block text-cyan hover:text-gold"
            >
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-1 block text-cream/80">
              {contact.phone}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded bg-[#25D366] px-5 py-3 text-sm font-semibold text-navy transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
        <form
          onSubmit={onSubmit}
          className="rounded-md border border-navy/10 bg-white p-6 sm:p-8"
        >
          <label className="block text-sm font-medium text-navy">
            Nombre
            <input
              name="nombre"
              required
              className="mt-2 w-full rounded border border-navy/15 bg-cream/50 px-4 py-3 outline-none focus:border-cyan"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-navy">
            Correo electrónico
            <input
              name="correo"
              type="email"
              required
              className="mt-2 w-full rounded border border-navy/15 bg-cream/50 px-4 py-3 outline-none focus:border-cyan"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-navy">
            Tipo de contacto
            <select
              name="tipo"
              required
              value={tipo}
              onChange={(e) => setTipo(e.target.value as ContactType)}
              className="mt-2 w-full rounded border border-navy/15 bg-cream/50 px-4 py-3 outline-none focus:border-cyan"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {contactTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-sm font-medium text-navy">
            Mensaje
            <textarea
              name="mensaje"
              required
              rows={5}
              className="mt-2 w-full resize-none rounded border border-navy/15 bg-cream/50 px-4 py-3 outline-none focus:border-cyan"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded bg-navy py-3.5 text-sm font-semibold tracking-wide text-cream transition-transform duration-300 hover:-translate-y-0.5 hover:bg-navy-2"
          >
            Enviar mensaje
          </button>
          {sent ? (
            <p className="mt-3 text-sm text-navy/60">
              Se abrirá tu correo para completar el envío.
            </p>
          ) : null}
        </form>
        </Reveal>
      </div>
    </section>
  );
}
