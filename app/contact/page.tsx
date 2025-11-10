"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
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
          Kontaktiere mich 💌
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Hast du ein Projekt oder eine Frage? Schreib mir gerne — ich freue mich auf deine Nachricht!
        </motion.p>
      </section>

      {/* ✉️ Kontaktformular */}
      <section className="py-20 px-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto grid gap-6 bg-[#FFD6E0]/30 p-8 rounded-3xl shadow-md"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Dein Name"
              className="p-3 rounded-2xl border border-[#FFB6C1] focus:outline-none focus:ring-2 focus:ring-[#FFC4D6]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Deine E-Mail"
              className="p-3 rounded-2xl border border-[#FFB6C1] focus:outline-none focus:ring-2 focus:ring-[#FFC4D6]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">
              Nachricht
            </label>
            <textarea
              id="message"
              placeholder="Deine Nachricht..."
              rows={6}
              className="p-3 rounded-2xl border border-[#FFB6C1] focus:outline-none focus:ring-2 focus:ring-[#FFC4D6]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FFB6C1] hover:bg-[#FFC4D6] text-[#3B2E2A] py-3 rounded-2xl font-medium shadow-md hover:scale-105 transition-all"
          >
            Absenden
          </button>
        </motion.form>
      </section>

      {/* 🔗 Social Links */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Oder finde mich hier</h2>
        <div className="flex justify-center gap-6 text-sm">
          <a
            href="https://github.com/mimikyu-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@tamarasins.de"
            className="hover:underline"
          >
            E-Mail
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
