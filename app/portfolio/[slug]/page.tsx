'use client'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function PortfolioDetailPage() {
  const { slug } = useParams()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <h2 className="text-4xl font-heading mb-6 text-center">Projekt {slug}</h2>
      <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
        Details zu Projekt {slug}. Hier können Beschreibung, Bilder und Links zum Projekt gezeigt werden.
      </p>
    </motion.section>
  )
}
