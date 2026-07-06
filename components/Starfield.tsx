"use client";

import { useMemo } from "react";

export default function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 140 }, () => ({
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {stars.map((s, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
