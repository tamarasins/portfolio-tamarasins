// components/Doodles.tsx
"use client";
import { motion } from "framer-motion";

export default function Doodles() {
  return (
    <>
      {/* Rechts oben vom Main */}
      <motion.img
        src="/doodle-heart.svg"
        alt="Kritzelei rechts oben"
        className="absolute top-[calc(45%-300px-30px)] right-[calc(40%-200px-54px)] pointer-events-none z-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      {/* Links unten vom Main */}
      <motion.img
        src="/doodle-flower.svg"
        alt="Kritzelei links unten"
        className="absolute top-[calc(50%+300px-50px)] left-[calc(25%-20px)] pointer-events-none z-0"
        animate={{ y: [0, 6, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </>
  );
}