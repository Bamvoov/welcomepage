"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorTracker() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring motion
  const x = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const y = useSpring(mouseY, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="
        fixed top-0 left-0 z-[9999]
        w-4 h-4 rounded-full
        bg-accent/15
        border border-accent/30
        pointer-events-none
        hidden md:block
      "
    />
  );
}
