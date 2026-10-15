"use client";

import type { ContactType } from "@/lib/site";
import { TIPO_EVENT } from "@/components/contact-link";

type Props = {
  children: React.ReactNode;
  tipo?: ContactType;
  className?: string;
};

export function V2ContactLink({ children, tipo, className }: Props) {
  return (
    <a
      href="/v2#contacto"
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
