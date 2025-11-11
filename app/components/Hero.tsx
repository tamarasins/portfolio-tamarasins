'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 py-12"
      >
        <h1 className="text-5xl md:text-6xl font-heading mb-4">Hi, ich bin Tamara!</h1>
        <p className="text-lg md:text-xl mb-6">Ein süßes Portfolio für kreative Projekte.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-highlight text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Zu den Projekten
        </motion.button>
      </motion.div>
    </section>
  )
}
