"use client";

import { useEffect, useState } from "react";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(tick);
          return 100;
        }
        return p + 4;
      });
    }, 80);

    const done = setTimeout(() => {
      setHidden(true);
      setTimeout(onDone, 800);
    }, 2300);

    return () => {
      clearInterval(tick);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center gap-5 transition-opacity duration-700 ${
        hidden
          ? "opacity-0 invisible pointer-events-none"
          : "opacity-100 visible"
      }`}
    >
      <div className="font-orbitron text-2xl font-bold tracking-[6px] text-center">
        MASUM MUJAWAR
        <br />
        <span className="text-cyan drop-shadow-[0_0_20px_rgba(13,229,255,0.8)]">
          PORTFOLIO
        </span>
      </div>
      <div className="text-dim text-xs tracking-[2px]">
        INITIALIZING PORTFOLIO...
      </div>
      <div className="w-[280px] h-1 bg-line rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue to-cyan shadow-glow transition-[width] duration-[2200ms] ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-cyan text-xs tracking-[2px]">{pct}%</div>
    </div>
  );
}
