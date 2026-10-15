import { values } from "@/lib/site";

const loop = [...values, ...values, ...values, ...values];

export function V2Ticker() {
  return (
    <div className="v2-ticker" aria-hidden="true">
      <div className="v2-ticker-track">
        {loop.map((value, index) => (
          <span key={`${value}-${index}`}>{value} ·</span>
        ))}
      </div>
    </div>
  );
}
