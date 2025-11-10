"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* 🌸 Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Über mich 💖
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Ich bin Tamara Sins — Webentwicklerin & angehende UI/UX Designerin.  
          Mein Ziel: digitale Produkte, die nicht nur funktionieren, sondern auch Freude bereiten.
        </motion.p>
      </section>

      {/* 🎨 Philosophie & Portrait */}
      <section className="py-20 px-6 bg-[#C2E7FF]/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meine Design-Philosophie</h2>
            <p className="opacity-80 leading-relaxed mb-4">
              Ich glaube daran, dass gute Interfaces Menschen inspirieren und den Alltag erleichtern.  
              Jedes Projekt ist für mich eine Gelegenheit, Funktionalität mit Ästhetik zu verbinden.
            </p>
            <p className="opacity-80 leading-relaxed">
              Mein Prozess beginnt immer mit Zuhören, gefolgt von Skizzen, Prototyping und Tests.  
              Am Ende steht ein Produkt, das sowohl schön als auch intuitiv ist.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/tamara-portrait.jpg"
                alt="Tamara Sins"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🛠 Skills */}
      <section className="py-20 px-6 bg-[#FFD6E0]/50">
        <h2 className="text-3xl font-bold text-center mb-12">Meine Tools & Skills</h2>
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { name: "Figma", color: "#FFB6C1" },
            { name: "Adobe XD", color: "#FFC4D6" },
            { name: "React", color: "#C2E7FF" },
            { name: "Next.js", color: "#FFEAC2" },
            { name: "TailwindCSS", color: "#FFD6E0" },
            { name: "Framer Motion", color: "#C2E7FF" },
          ].map((tool, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl shadow-md text-center font-medium cursor-default transition-all hover:scale-105"
              style={{ backgroundColor: tool.color }}
            >
              {tool.name}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
