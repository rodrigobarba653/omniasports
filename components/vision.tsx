import { markets } from "@/lib/site";
import { LinePattern, RingDeco } from "@/components/line-pattern";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-cream sm:py-20">
      <LinePattern />
      <RingDeco className="-right-8 -bottom-10 size-56 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Visión internacional"
            title="Talento local. Visión global."
            description="Construimos conexiones para abrir oportunidades más allá de las fronteras, con una estrategia de expansión que parte de México y Estados Unidos hacia Latinoamérica y Europa."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <Reveal key={market.name} delay={index * 80}>
              <article className="relative rounded-md border border-cream/10 bg-navy-2/80 px-5 py-6">
                <span className="font-display text-sm text-gold">
                  0{index + 1}
                </span>
                <p className="font-display mt-3 text-2xl">{market.name}</p>
                <p className="mt-1 text-xs tracking-[0.2em] text-cyan uppercase">
                  {market.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-cream/45">
          Mercados actuales y de expansión estratégica. No implica oficinas ni
          operación activa en cada región.
        </p>
      </div>
    </section>
  );
}
