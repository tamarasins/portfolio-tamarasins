'use client'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <h2 className="text-4xl font-heading mb-6 text-center">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
        Ich bin Tamara, eine kreative Entwickler*in mit einem Fokus auf süße, moderne Designs. 
        Ich liebe es, interaktive Webseiten zu bauen, die sowohl funktional als auch visuell ansprechend sind.
      </p>
    </motion.section>
  )
}
