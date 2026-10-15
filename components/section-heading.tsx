import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const light = tone === "light";

  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center")}>
      <p
        className={cn(
          "text-[0.72rem] font-semibold tracking-[0.28em] uppercase",
          light ? "text-cyan" : "text-cyan",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-3 text-3xl leading-[1.05] font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-cream" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed",
            light ? "text-cream/75" : "text-navy/70",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
