'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  { id: '1', title: 'Projekt 1' },
  { id: '2', title: 'Projekt 2' },
  { id: '3', title: 'Projekt 3' },
]

export default function PortfolioPage() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-heading mb-8 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-block p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-heading mb-2">{project.title}</h3>
            <Link href={`/portfolio/${project.id}`}>
              <button className="mt-4 bg-highlight text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                Mehr erfahren
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
