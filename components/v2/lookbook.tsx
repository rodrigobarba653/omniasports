"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { players } from "@/lib/site";
import { cn } from "@/lib/cn";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function onPlateMove(event: MouseEvent<HTMLElement>) {
  if (prefersReducedMotion()) return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  el.style.setProperty("--tx", `${x * 10}px`);
  el.style.setProperty("--ty", `${y * 10}px`);
}

function onPlateLeave(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget;
  el.style.setProperty("--tx", "0px");
  el.style.setProperty("--ty", "0px");
}

export function V2Lookbook() {
  return (
    <div className="v2-lookbook mt-12 flex gap-3 overflow-x-auto px-6 pb-4 sm:px-10 lg:px-16">
      {players.map((player, index) => (
        <article
          key={player.slug}
          className={cn(
            "v2-plate group relative h-[78vh] shrink-0 snap-start overflow-hidden",
            index % 2 === 0
              ? "w-[82vw] sm:w-[54vw] lg:w-[34vw]"
              : "w-[78vw] sm:w-[48vw] lg:w-[28vw]",
          )}
          style={{ animationDelay: `${index * 90}ms` }}
          onMouseMove={onPlateMove}
          onMouseLeave={onPlateLeave}
        >
          <Image
            src={`/images/v2/plate-${player.slug}.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 32vw, 80vw"
            className="v2-plate-bg object-cover"
          />
          <div className="v2-plate-veil absolute inset-0" />

          <p className="v2-serif absolute top-5 left-5 z-10 text-3xl italic text-[#c4a574]">
            0{index + 1}
          </p>

          <div className="absolute inset-x-0 bottom-0 z-[3] p-6 pt-24">
            <p className="text-[0.62rem] tracking-[0.28em] text-[#c4a574] uppercase">
              {player.nickname}
            </p>
            <h3 className="v2-serif mt-1 text-3xl leading-none sm:text-4xl">
              {player.name}
            </h3>
            <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-[#ede6d9]/55 uppercase">
              {player.position} · {player.club}
            </p>
            <p className="v2-plate-bio mt-3 max-w-sm text-sm leading-relaxed text-[#ede6d9]/80">
              {player.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
