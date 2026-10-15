import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./v2.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "OMNIA Atelier | Talento con dirección",
  description:
    "Una casa de representación para carreras que se construyen con criterio, no con prisa.",
};

export default function V2Layout({ children }: LayoutProps<"/v2">) {
  return (
    <div className={`${cormorant.variable} v2-root relative min-h-full`}>
      <div className="v2-grain" aria-hidden="true" />
      {children}
    </div>
  );
}
