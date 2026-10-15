"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { V2ContactLink } from "@/components/v2/contact-link";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/v2#nosotros", label: "Casa" },
  { href: "/v2#servicios", label: "Oficio" },
  { href: "/v2#talento", label: "Elenco" },
  { href: "/v2#oportunidades", label: "Alianzas" },
  { href: "/v2#contacto", label: "Privado" },
];

export function V2Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-navy/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <a href="/v2#inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="v2-nav-link text-[0.68rem] tracking-[0.22em] text-[#ede6d9]/70 uppercase transition-colors hover:text-[#c4a574]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <V2ContactLink className="v2-link hidden lg:inline-flex">
          Reservar conversación
        </V2ContactLink>
        <button
          type="button"
          className="text-[0.68rem] tracking-[0.22em] text-[#ede6d9] uppercase lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar" : "Menú"}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-navy px-6 py-10 lg:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="v2-serif text-3xl italic"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <V2ContactLink className="v2-link mt-6">
              <span onClick={() => setOpen(false)}>Reservar conversación</span>
            </V2ContactLink>
          </nav>
        </div>
      ) : null}
      <div className="v2-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
