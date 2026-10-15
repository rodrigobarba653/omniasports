import { V2ContactLink } from "@/components/v2/contact-link";
import { V2Lookbook } from "@/components/v2/lookbook";
import { Reveal } from "@/components/reveal";

export function V2Talent() {
  return (
    <section id="talento" className="py-24">
      <div className="px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-[#c4a574] uppercase">
            Nuestro talento
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="v2-serif max-w-2xl text-4xl leading-[0.95] sm:text-6xl">
              El talento <em className="italic text-[#c4a574]">habla por sí solo.</em>
            </h2>
            <p className="max-w-md text-sm leading-[1.8] text-[#ede6d9]/65">
              Trabajamos con futbolistas de distintas generaciones, trayectorias
              y perfiles. Cada placa es archivo de cancha.
            </p>
          </div>
        </Reveal>
      </div>

      <V2Lookbook />

      <div className="mt-10 px-6 sm:px-10 lg:px-16">
        <V2ContactLink tipo="Marca" className="v2-link">
          Conecta con nuestro talento
        </V2ContactLink>
      </div>
    </section>
  );
}
