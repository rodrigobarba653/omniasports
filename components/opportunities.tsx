import Image from "next/image";
import { audiences } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { ContactLink } from "@/components/contact-link";
import { Reveal } from "@/components/reveal";

export function Opportunities() {
  return (
    <section id="oportunidades" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Oportunidades"
            title="Donde el talento encuentra oportunidades."
            description="Creamos conexiones estratégicas que generan valor para deportistas, marcas y organizaciones deportivas."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {audiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="group overflow-hidden rounded-md bg-navy text-cream transition-transform duration-300 ease-out hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                </div>
                <div className="px-6 pt-5 pb-6">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    {item.description}
                  </p>
                  <ContactLink
                    tipo={item.tipo}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-cyan"
                  >
                    {item.cta}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </ContactLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
