import Image from "next/image";
import { markets } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function V2Vision() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <Image
        src="/images/v2/vision.jpg"
        alt=""
        fill
        className="v2-kenburns object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-[1600px] flex-col justify-end px-6 py-20 sm:px-10 lg:px-16">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-[#c4a574] uppercase">
            Visión internacional
          </p>
          <h2 className="v2-serif mt-4 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
            Talento local.
            <em className="italic text-[#c4a574]"> Visión global.</em>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-[1.8] text-[#ede6d9]/75">
            Construimos conexiones para abrir oportunidades más allá de las
            fronteras, con una estrategia de expansión que parte de México y
            Estados Unidos hacia Latinoamérica y Europa.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-4">
          {markets.map((market, index) => (
            <li key={market.name} className="border-t border-[#c4a574]/40 pt-4">
              <p className="text-[0.62rem] tracking-[0.24em] text-[#c4a574] uppercase">
                0{index + 1} · {market.note}
              </p>
              <p className="v2-serif mt-2 text-2xl">{market.name}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[0.7rem] text-[#9a9286]">
          Mercados actuales y de expansión estratégica. No implica oficinas ni
          operación activa en cada región.
        </p>
      </div>
    </section>
  );
}
