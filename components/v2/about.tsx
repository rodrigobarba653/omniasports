import Image from "next/image";
import { values } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function V2About() {
  return (
    <section id="nosotros" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] items-end gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/v2/about.jpg"
              alt=""
              fill
              className="v2-kenburns object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[0.68rem] tracking-[0.32em] text-[#c4a574] uppercase">
            Sobre nosotros
          </p>
          <h2 className="v2-serif mt-4 text-4xl leading-[0.95] sm:text-6xl">
            Mucho más que
            <em className="block italic text-[#c4a574]">representación.</em>
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[1.8] text-[#ede6d9]/70">
            OMNIA Sports es una firma de representación y gestión estratégica
            de futbolistas, dedicada a identificar, desarrollar y proyectar
            talento a nivel nacional e internacional.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-[1.8] text-[#ede6d9]/70">
            Combinamos experiencia deportiva, conexiones estratégicas y
            oportunidades comerciales para construir carreras sostenibles y
            generar valor para deportistas, clubes y marcas.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-y-4 border-t border-[rgba(237,230,217,0.14)] pt-8 sm:grid-cols-4">
            {values.map((value) => (
              <li
                key={value}
                className="text-[0.68rem] tracking-[0.22em] text-[#c4a574] uppercase"
              >
                {value}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
