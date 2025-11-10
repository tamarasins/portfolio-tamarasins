"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hallo, ich bin <span className="text-[#FFB6C1]">Tamara Sins</span> 🌷
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Webentwicklerin auf dem Weg zur UI/UX Designerin — ich gestalte
          emotionale, funktionale Interfaces mit Liebe zum Detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Link
            href="#projects"
            className="bg-[#FFD6E0] hover:bg-[#FFC4D6] text-[#3B2E2A] px-6 py-3 rounded-2xl font-medium shadow-md hover:scale-105 transition-all"
          >
            Zu meinen Projekten →
          </Link>
        </motion.div>
      </section>

      {/* 💻 Web Design Projekte */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Web Design Projekte
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "JGA Buddies Redesign", slug: "jga-buddies" },
            { title: "Adventure Buddies", slug: "adventure-buddies" },
            { title: "MyWeinwanderung", slug: "myweinwanderung" },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="bg-[#FFEAC2] rounded-3xl shadow-md p-6 hover:shadow-xl cursor-pointer transition-all"
            >
              <Link href={`/portfolio/${project.slug}`}>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80">
                  Website & UX-Optimierung
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎨 UI/UX Projekte */}
      <section className="py-20 px-6 bg-[#C2E7FF]/30">
        <h2 className="text-3xl font-bold text-center mb-12">
          UI/UX Projekte
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "App Redesign (in Arbeit)", slug: "uiux-1" },
            { title: "Dashboard Konzept", slug: "uiux-2" },
            { title: "Mobile Prototype", slug: "uiux-3" },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="bg-[#FFD6E0] rounded-3xl shadow-md p-6 hover:shadow-xl cursor-pointer transition-all"
            >
              <Link href={`/portfolio/${project.slug}`}>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80">
                  Platzhalter für zukünftige UI/UX Case Studies
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💅 Über mich & Skills */}
      <section className="py-20 px-6 bg-[#FFEAC2]/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Über mich</h2>
            <p className="opacity-80 leading-relaxed">
              Ich komme aus der Webentwicklung und habe meine Leidenschaft
              für UI/UX entdeckt. Meine Arbeit kombiniert technisches
              Verständnis mit Designästhetik, um digitale Erlebnisse
              benutzerfreundlich und visuell ansprechend zu gestalten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-md p-6 grid grid-cols-3 gap-4 text-center"
          >
            {[
              "Figma",
              "React",
              "Next.js",
              "Tailwind",
              "Framer",
              "Notion",
            ].map((tool, i) => (
              <div key={i} className="p-3 bg-[#FFF7F5] rounded-2xl shadow-sm">
                <p className="font-medium">{tool}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      </>
  );
}