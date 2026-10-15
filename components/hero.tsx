import Image from "next/image";
import { values } from "@/lib/site";
import { BrandStripe, LinePattern, RingDeco } from "@/components/line-pattern";
import { ContactLink } from "@/components/contact-link";
import { contactButtonClass } from "@/lib/styles";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-navy pt-[4.75rem] text-cream"
    >
      <BrandStripe />
      <div className="hero-bg absolute inset-0">
        <Image
          src="/images/stadium-night.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55" />
      <LinePattern />
      <RingDeco className="top-24 right-8 hidden size-48 opacity-70 lg:block" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
        <div className="hero-copy max-w-xl">
          <p className="text-[0.72rem] font-semibold tracking-[0.28em] text-cyan uppercase">
            Omnia Sports / Sports Management
          </p>
          <h1 className="font-display mt-4 text-4xl leading-[0.95] font-semibold tracking-tight sm:text-6xl lg:text-[4.35rem]">
            El talento no tiene límites.
            <span className="mt-1 block text-gold">Su futuro tampoco.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
            Impulsamos carreras deportivas y conectamos talento con
            oportunidades dentro y fuera de la cancha. Representación,
            desarrollo y proyección internacional.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactLink tipo="Deportista" className={contactButtonClass("primary")}>
              Soy deportista
            </ContactLink>
            <ContactLink tipo="Marca" className={contactButtonClass("secondary")}>
              Marcas y clubes
            </ContactLink>
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-lg sm:h-[460px] lg:h-[560px] lg:max-w-none">
          <Image
            src="/images/players/alice.png"
            alt=""
            width={321}
            height={460}
            className="hero-player absolute bottom-0 left-[-4%] h-[78%] w-auto drop-shadow-2xl sm:left-[2%]"
            priority
            loading="eager"
          />
          <Image
            src="/images/players/rebeca.png"
            alt=""
            width={239}
            height={511}
            className="hero-player absolute right-[6%] bottom-0 h-[86%] w-auto drop-shadow-2xl"
            priority
            loading="eager"
          />
          <Image
            src="/images/players/charlyn.png"
            alt="Talento Omnia Sports"
            width={585}
            height={540}
            className="hero-player absolute bottom-0 left-[16%] z-10 h-[92%] w-auto drop-shadow-2xl sm:left-[18%]"
            priority
            loading="eager"
          />
        </div>
      </div>

      <div className="relative border-t border-cream/10 bg-navy-2/80">
        <div className="overflow-hidden py-3">
          <div className="marquee-track flex w-max gap-10 text-[0.72rem] font-semibold tracking-[0.32em] text-cream/70 uppercase">
            {[...values, ...values, ...values, ...values].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                {item}
                <span className="size-1 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
