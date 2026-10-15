"use client";

import type { ContactType } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  tipo?: ContactType;
  className?: string;
};

export const TIPO_EVENT = "omnia:tipo";

export function ContactLink({ children, tipo, className }: Props) {
  return (
    <a
      href="/#contacto"
      className={className}
      onClick={() => {
        if (tipo) {
          window.dispatchEvent(new CustomEvent(TIPO_EVENT, { detail: tipo }));
        }
      }}
    >
      {children}
    </a>
  );
}