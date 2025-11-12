"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
        {/* 🌸 Hero Section */}
        <section className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Hallihallo, ich bin <span className="text-[#FFB6C1]">Tamara Sins</span>
            <br />
            Webentwicklerin & UI/UX Designerin
          </motion.h1>
          <p>
            Ich gestalte digitale Erlebnisse, die Menschen berühren — mit klarer Struktur und Liebe zum Detail.
            <br />
            Mein Ziel: Interfaces schaffen, die nicht nur funktionieren, sondern sich richtig gut anfühlen.
          </p>
          <br />
          <button className="button">Zu meinen Projekten →</button>
        </section>

        {/* 🧡 About Section */}
        <section>
          <div className="mx-auto text-center flex flex-col items-center">
              <h2>Über mich</h2>
              <p>
                Ich komme aus der Webentwicklung und habe meine Leidenschaft für Design entdeckt.
                <br />
                In meinen Projekten verbinde ich technisches Know-how mit einem Auge für Ästhetik und Benutzerfreundlichkeit.
                <br />
                Jede Oberfläche, die ich gestalte, soll <span className="text-[#E56D6A]">intuitiv, emotional und zugänglich</span> sein — ob Website, App oder interaktives Interface.
              </p>
          </div>
        </section>
            
            
          {/* 🧡 Arbeitsweise Section */}
          <section>
            <div className="mx-auto text-center flex flex-col items-center">
              <h2>Meine Arbeitsweise</h2>
              <p>
                Für mich ist gutes Design wie ein Gespräch: <span className="text-[#E56D6A]">klar, empathisch und ehrlich</span>.
                <br />
                Ich denke nicht nur in Farben und Formen, sondern auch in Emotionen.
                <br />
                In jedem Projekt steckt ein Stück Persönlichkeit.
              </p>
              </div>
        </section>
    </>
  );
}
