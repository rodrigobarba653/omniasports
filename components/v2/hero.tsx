import Image from "next/image";
import { V2ContactLink } from "@/components/v2/contact-link";

export function V2Hero() {
  return (
    <section id="inicio" className="relative min-h-svh overflow-hidden">
      <Image
        src="/images/v2/hero.jpg"
        alt=""
        fill
        priority
        className="hero-bg object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />

      <div className="relative flex min-h-svh flex-col justify-end px-6 pt-28 pb-12 sm:px-10 lg:px-16">
        <div className="hero-copy max-w-4xl">
          <p className="text-[0.68rem] tracking-[0.42em] text-[#c4a574] uppercase">
            Atelier de representación · Ciudad de México
          </p>
          <div className="v2-rule mt-5" />
          <h1 className="v2-serif mt-5 text-5xl leading-[0.9] font-medium tracking-tight sm:text-7xl lg:text-[6.5rem]">
            El talento no tiene límites.
            <em className="mt-2 block font-normal text-[#c4a574]">
              Su futuro tampoco.
            </em>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#ede6d9]/75 sm:text-base">
            Impulsamos carreras deportivas y conectamos talento con
            oportunidades dentro y fuera de la cancha. Representación,
            desarrollo y proyección internacional — con el criterio de una
            casa, no de un catálogo.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
            <V2ContactLink tipo="Deportista" className="v2-link">
              Soy deportista
            </V2ContactLink>
            <V2ContactLink tipo="Marca" className="v2-link">
              Marcas y clubes
            </V2ContactLink>
          </div>
        </div>
        <a href="/v2#nosotros" className="v2-scroll-cue mt-12 w-fit">
          <i />
          Deslizar
        </a>
      </div>
    </section>
  );
}
