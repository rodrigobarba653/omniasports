import { contact } from "@/lib/site";
import { Logo } from "@/components/logo";

const nav = [
  { href: "/v2#nosotros", label: "Casa" },
  { href: "/v2#servicios", label: "Oficio" },
  { href: "/v2#talento", label: "Elenco" },
  { href: "/v2#oportunidades", label: "Alianzas" },
  { href: "/v2#contacto", label: "Privado" },
];

export function V2Footer() {
  return (
    <footer className="border-t border-[rgba(237,230,217,0.14)] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Logo />
          <p className="v2-serif mt-4 max-w-xs text-lg italic text-[#ede6d9]/60">
            Talento con dirección. Carreras con propósito.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.68rem] tracking-[0.18em] text-[#ede6d9]/55 uppercase hover:text-[#c4a574]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm">
          <a href={`mailto:${contact.email}`} className="text-[#c4a574]">
            {contact.email}
          </a>
          <p className="mt-6 text-[0.65rem] tracking-[0.16em] text-[#9a9286] uppercase">
            <a href="/" className="hover:text-[#c4a574]">
              Índice
            </a>
            {" · "}
            <a href="/aviso-de-privacidad" className="hover:text-[#c4a574]">
              Aviso de privacidad
            </a>
          </p>
          <p className="mt-3 text-[0.65rem] text-[#9a9286]">
            © 2026 OMNIA Sports. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
