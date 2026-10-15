"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "@/components/logo";
import { ContactLink } from "@/components/contact-link";
import { contactButtonClass } from "@/lib/styles";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        "bg-navy/95 backdrop-blur-md",
        (scrolled || open) && "shadow-lg shadow-black/20",
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/#inicio" className="relative z-10" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[0.78rem] font-medium tracking-[0.12em] text-cream/80 uppercase transition-colors hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ContactLink className={contactButtonClass("gold")}>Contactar</ContactLink>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center text-cream lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-6 bg-cream transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span className={cn("block h-px w-6 bg-cream transition-opacity", open && "opacity-0")} />
            <span
              className={cn(
                "block h-px w-6 bg-cream transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-cream/10 bg-navy px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-2xl text-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ContactLink
              className={cn(contactButtonClass("gold"), "mt-4 w-full")}
            >
              <span onClick={() => setOpen(false)}>Contactar</span>
            </ContactLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
