"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 🌸 Hero Section */}
      <section className="flex flex-col items-center text-center">
        <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="sm:-mt-2"
  >
    <img
      src="/logo-design.png" // dein großes Logo
      alt="Tamara Sins Logo"
      width={258}
      height={246}
      className="w-[255px] sm:w-[300px] h-auto"
    />
  </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="sm:-mt-2"
        >
          <Link href="/portfolio">
            <button className="button flex items-center gap-2">
              Zu meinen Projekten →
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 🧡 Über mich Section */}
      <section className="sm:-mt-2">
        <div className="mx-auto text-center flex flex-col items-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            Über mich
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="leading-relaxed text-[15px]"
          >
            Ich komme aus der Webentwicklung und habe meine Leidenschaft für Design entdeckt.
            <br />
            In meinen Projekten verbinde ich technisches Know-how mit einem Auge für
            Ästhetik und Benutzerfreundlichkeit.
            <br />
            Jede Oberfläche, die ich gestalte, soll{" "}
            <span className="text-[#E56D6A]">
              intuitiv, emotional und zugänglich
            </span>{" "}
            sein —
            <br />
            ob Website, App oder interaktives Interface.
          </motion.p>
        </div>
      </section>

      {/* 🧡 Arbeitsweise Section */}
      <section className="sm:-m-6">
        <div className="mx-auto text-center flex flex-col items-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            Meine Arbeitsweise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[15px] leading-relaxed"
          >
            Für mich ist gutes Design wie ein Gespräch:{" "}
            <span className="text-[#E56D6A]">klar, empathisch und ehrlich</span>.
            <br />
            Ich denke nicht nur in Farben und Formen, sondern auch in Emotionen.
            <br />
            In jedem Projekt steckt ein Stück Persönlichkeit.
          </motion.p>

        </div>
      </section>
    </>
  );
}
