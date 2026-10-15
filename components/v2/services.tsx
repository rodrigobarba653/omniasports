import { services } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function V2Services() {
  return (
    <section id="servicios" className="border-t border-[rgba(237,230,217,0.14)] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-[#c4a574] uppercase">
            Nuestros servicios
          </p>
          <h2 className="v2-serif mt-4 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
            Cada carrera merece <em className="italic text-[#c4a574]">una estrategia.</em>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-[1.8] text-[#ede6d9]/70">
            Acompañamos a nuestros deportistas en cada etapa de su desarrollo
            profesional, dentro y fuera de la cancha.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-[rgba(237,230,217,0.14)] border-y border-[rgba(237,230,217,0.14)]">
          {services.map((service, index) => (
            <Reveal key={service.n} delay={index * 80}>
              <article className="v2-service grid gap-6 py-12 lg:grid-cols-[160px_1fr_0.8fr] lg:items-start">
                <p className="v2-serif text-5xl italic text-[#c4a574]">{service.n}</p>
                <div>
                  <h3 className="v2-serif text-3xl">{service.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-[1.8] text-[#ede6d9]/65">
                    {service.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-[0.65rem] tracking-[0.2em] text-[#ede6d9]/55 uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[0.7rem] leading-relaxed text-[#9a9286]">
          Los servicios jurídicos, fiscales, financieros, migratorios y de
          intermediación regulada se presentan como asesoría especializada y
          se prestan mediante profesionales autorizados o alianzas, según la
          legislación aplicable.
        </p>
      </div>
    </section>
  );
}
