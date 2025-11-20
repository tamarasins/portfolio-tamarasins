'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-heading mb-4 text-[#E56D6A]">Kontakt</h1>
      <p className="leading-relaxed mb-8">
        Ich freue mich über neue Projekte, Kooperationen oder einfach nette Gespräche rund um Webentwicklung, UI/UX Design, Games oder anderen Nerdkram.<br />
        Schreib mir gerne eine Nachricht – ich melde mich so schnell wie möglich zurück!
      </p>

      <div className="bg-[#FDE8C4]  rounded-xl shadow-md p-6 space-y-2 mx-8 text-center md:text-left md:mx-80">
        <h2 className="text-xl font-semibold">Direkt erreichbar über:</h2>
        <strong>E-Mail:</strong> <a href="mailto:hallo@tamarasins.de" className="underline">hallo@tamarasins.de</a>
        <br />
        <strong>LinkedIn:</strong> <a href="mailto:hallo@tamarasins.de" className="underline">tamara-sins</a>
        <br />
        <strong>GitHub:</strong> <a href="mailto:hallo@tamarasins.de" className="underline">tamarasins</a>
      </div>
      </motion.section>
  )
}