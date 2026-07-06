"use client";

import { useState } from "react";

export default function EnterScreen({ onEnter }: { onEnter: () => void }) {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
    setTimeout(onEnter, 700);
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed inset-0 z-[90] flex flex-col items-center justify-center gap-6 cursor-pointer transition-opacity duration-700 ${
        hidden
          ? "opacity-0 invisible pointer-events-none"
          : "opacity-100 visible"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, #10193a 0%, #050816 70%)",
      }}
    >
      <div className="text-dim text-xs tracking-[3px]">WELCOME TO</div>
      <div className="font-orbitron text-3xl md:text-4xl font-black tracking-[4px] text-center px-4">
        MASUM MUJAWAR <span className="text-gradient">PORTFOLIO</span>
      </div>
      <div className="text-dim text-xs tracking-[2px] mt-2">
        Click anywhere to enter
      </div>
      <div className="w-14 h-14 rounded-full border border-cyan text-cyan flex items-center justify-center text-2xl pulse-ring shadow-glow">
        +
      </div>
    </div>
  );
}
