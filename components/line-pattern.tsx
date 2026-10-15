import { cn } from "@/lib/cn";

export function LinePattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="line-grid absolute -top-[20%] right-0 left-0 h-[140%] opacity-80" />
    </div>
  );
}

export function RingDeco({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("ring-deco pointer-events-none absolute size-40", className)}
    />
  );
}

export function BrandStripe({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute top-0 bottom-0 left-0 z-20 flex w-2.5", className)}
    >
      <span className="w-[70%] bg-cyan" />
      <span className="w-[30%] bg-gold" />
    </div>
  );
}
