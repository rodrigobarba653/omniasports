import { cn } from "@/lib/cn";

export function contactButtonClass(variant: "primary" | "secondary" | "gold") {
  const base =
    "inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-300 ease-out hover:-translate-y-0.5";

  if (variant === "primary") {
    return cn(base, "bg-cyan text-navy hover:bg-cyan/90");
  }
  if (variant === "gold") {
    return cn(base, "bg-gold text-navy hover:bg-gold/90");
  }
  return cn(
    base,
    "border border-cream/35 bg-transparent text-cream hover:border-gold hover:text-gold",
  );
}
