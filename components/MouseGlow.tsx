"use client";

import { motion } from "framer-motion";
import { useMouse } from "@/hooks/useMouse";

export default function MouseGlow() {
  const { x, y } = useMouse();

  return (
    <motion.div
      animate={{
        x: x - 175,
        y: y - 175,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
      }}
      className="
        pointer-events-none
        fixed
        z-15
        h-[350px]
        w-[350px]
        rounded-full
        blur-[120px]
      "
      style={{
        background:
          "radial-gradient(circle, rgba(0,229,255,.18) 0%, rgba(0,229,255,0) 75%)",
      }}
    />
  );
}
