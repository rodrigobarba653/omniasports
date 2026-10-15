import Image from "next/image";
import { audiences } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { V2ContactLink } from "@/components/v2/contact-link";

const images = [
  "/images/v2/opp-athletes.jpg",
  "/images/v2/opp-brands.jpg",
  "/images/v2/opp-clubs.jpg",
];

export function V2Opportunities() {
  return (
    <section id="oportunidades" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.32em] text-[#c4a574] uppercase">
            Oportunidades
          </p>
          <h2 className="v2-serif mt-4 max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
            Donde el talento encuentra
            <em className="italic text-[#c4a574]"> oportunidades.</em>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-3">
          {audiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="v2-opp group grid overflow-hidden bg-navy-2 lg:grid-cols-2">
                <div className={`relative min-h-[280px] overflow-hidden ${index === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={images[index]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center px-8 py-12 sm:px-14">
                  <p className="text-[0.62rem] tracking-[0.28em] text-[#c4a574] uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="v2-serif mt-3 text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-[1.8] text-[#ede6d9]/65">
                    {item.description}
                  </p>
                  <V2ContactLink tipo={item.tipo} className="v2-link mt-8 w-fit">
                    {item.cta}
                  </V2ContactLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
