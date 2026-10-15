import Image from "next/image";
import { values } from "@/lib/site";
import { LinePattern } from "@/components/line-pattern";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="nosotros" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Mucho más que representación deportiva."
            description="OMNIA Sports es una firma de representación y gestión estratégica de futbolistas, dedicada a identificar, desarrollar y proyectar talento a nivel nacional e internacional."
          />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/70">
            Combinamos experiencia deportiva, conexiones estratégicas y
            oportunidades comerciales para construir carreras sostenibles y
            generar valor para deportistas, clubes y marcas.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {values.map((value) => (
              <li
                key={value}
                className="rounded-md border border-navy/10 bg-white px-3 py-4 text-center"
              >
                <span className="font-display text-sm tracking-wide text-navy uppercase">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative isolate overflow-hidden rounded-md bg-navy px-4 pt-8">
            <LinePattern />
            <Image
              src="/images/players/kenti.png"
              alt="Kenti Robles"
              width={570}
              height={590}
              className="relative z-10 mx-auto h-[360px] w-auto object-contain sm:h-[440px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
