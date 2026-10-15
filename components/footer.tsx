import { contact, footerNav } from "@/lib/site";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-cream/65">
            Talento con dirección. Carreras con propósito.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          {footerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cream/75 transition-colors hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm">
          <a href={`mailto:${contact.email}`} className="text-cyan hover:text-gold">
            {contact.email}
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 OMNIA Sports. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/v2" className="hover:text-cyan">
              Atelier
            </a>
            <a href="/aviso-de-privacidad" className="hover:text-cyan">
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
