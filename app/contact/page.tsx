'use client'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 max-w-xl mx-auto"
    >
      <h2 className="text-4xl font-heading mb-8 text-center">Kontakt</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlight"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlight"
        />
        <textarea
          placeholder="Nachricht"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlight"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-highlight text-white px-6 py-3 rounded-lg font-semibold mt-2"
        >
          Senden
        </motion.button>
      </form>
    </motion.section>
  )
}
