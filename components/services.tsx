import { services } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="servicios" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Nuestros servicios"
            title="Cada carrera merece una estrategia."
            description="Acompañamos a nuestros deportistas en cada etapa de su desarrollo profesional, dentro y fuera de la cancha."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.n} delay={index * 90}>
              <article className="relative overflow-hidden rounded-md border border-navy/8 bg-[#f7f4ee] p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-7">
                <span className="absolute top-0 bottom-0 left-0 w-1 bg-gold" />
                <div className="flex size-12 items-center justify-center rounded bg-cyan font-display text-lg font-semibold text-navy">
                  {service.n}
                </div>
                <h3 className="font-display mt-5 text-2xl leading-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm bg-navy px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-cream uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-navy/50">
          Los servicios jurídicos, fiscales, financieros, migratorios y de
          intermediación regulada se presentan como asesoría especializada y
          se prestan mediante profesionales autorizados o alianzas, según la
          legislación aplicable.
        </p>
      </div>
    </section>
  );
}
