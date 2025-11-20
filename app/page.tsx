"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 🌸 Hero Section */}
      <section className="flex flex-col items-center text-center">
        {/* h1 Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hallihallo, ich bin{" "}
          <span className="text-[#E56D6A]">Tamara Sins</span>
          <br />
          Webentwicklerin & UI/UX Designerin
        </motion.h1>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="leading-relaxed"
        >
          Ich gestalte digitale Erlebnisse, die Menschen berühren —
          mit klarer Struktur und Liebe zum Detail.
          <br />
          Mein Ziel: Interfaces schaffen, die nicht nur funktionieren,
          sondern sich richtig gut anfühlen.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/portfolio">
            <button className="button flex items-center gap-2">
              Zu meinen Projekten →
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 🧡 Über mich Section */}
      <section>
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
            className="leading-relaxed"
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
      <section>
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
