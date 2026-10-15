import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className }: LogoProps) {
  const stroke = variant === "light" ? "#F3EDE0" : "#1B3654";
  const gold = variant === "light" ? "#D0A24A" : "#B8863B";
  const word = variant === "light" ? "#F3EDE0" : "#1B3654";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 80 86.3"
        className="h-9 w-auto shrink-0 sm:h-10"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10,66.1v-30c0-15,11.1-27.7,26-29.7" />
          <path d="M44,6.5c14.9,2,26,14.7,26,29.7v30" />
          <path d="M21,66.1v-30c0-8.9,6.3-16.6,15-18.5" />
          <path d="M44,17.7c8.7,1.9,15,9.6,15,18.5v30" />
          <path d="M32,66.1v-30c-0.1-2.9,1.5-5.6,4-7.1" />
          <path d="M44,29.1c2.5,1.5,4.1,4.2,4,7.1v30" />
        </g>
        <path
          d="M40,80.1v-74"
          fill="none"
          stroke={gold}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="40" cy="50.1" r="5" fill={gold} />
      </svg>
      <span className="leading-none">
        <span
          className="block font-medium text-[1.35rem] tracking-tight"
          style={{ color: word }}
        >
          Omnia
        </span>
        <span
          className="mt-0.5 block text-[0.62rem] uppercase tracking-[0.32em]"
          style={{ color: gold }}
        >
          sports
        </span>
      </span>
    </span>
  );
}
