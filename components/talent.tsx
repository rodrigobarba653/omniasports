import Image from "next/image";
import { players } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { LinePattern } from "@/components/line-pattern";
import { ContactLink } from "@/components/contact-link";
import { contactButtonClass } from "@/lib/styles";
import { Reveal } from "@/components/reveal";

export function Talent() {
  return (
    <section id="talento" className="relative overflow-hidden bg-navy py-16 text-cream sm:py-20">
      <LinePattern className="opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Nuestro talento"
            title="El talento habla por sí solo."
            description="Trabajamos con futbolistas de distintas generaciones, trayectorias y perfiles, conectando su talento e historias con nuevas oportunidades deportivas y comerciales."
          />
        </Reveal>

        <div className="talent-row mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {players.map((player, index) => (
            <Reveal key={player.slug} delay={index * 70} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-auto">
              <article className="group overflow-hidden rounded-md bg-navy-2">
                <div className="relative flex h-64 items-end justify-center overflow-hidden bg-gradient-to-b from-navy-3 to-navy">
                  <Image
                    src={player.image}
                    alt={player.name}
                    width={player.width}
                    height={player.height}
                    className="h-[115%] w-auto max-w-[88%] object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-gold/40 px-4 pt-4 pb-5">
                  <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-gold uppercase">
                    {player.nickname}
                  </p>
                  <h3 className="font-display mt-1 text-2xl text-cream">{player.name}</h3>
                  <p className="mt-1 text-sm text-cream/60">
                    {player.position} · {player.club}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    {player.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {player.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        className="rounded-sm border border-cream/15 px-2.5 py-0.5 text-[0.62rem] tracking-wide text-cyan uppercase"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <ContactLink tipo="Marca" className={contactButtonClass("gold")}>
              Conecta con nuestro talento
            </ContactLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
