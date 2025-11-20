'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const businessProjects = [
  { id: 'business-1', title: 'JGA Buddies', img: '/projects/business1.png', slug: 'jga-buddies' },
  { id: 'business-2', title: 'MyWeinwanderung', img: '/projects/business2.png', slug: 'myweinwanderung' },
  { id: 'business-3', title: 'TSV Löchgau', img: '/projects/business3.png', slug: 'tsv-loechgau' },
]

const consumerProjects = [
  { id: 'consumer-1', title: 'Portfolio Website', img: '/projects/consumer1.png', slug: 'sins-portfolio' },
  { id: 'consumer-2', title: 'COMING SOON', img: '/projects/consumer2.png', slug: 'weiterbildung' },
]

const gameProjects = [
  { id: 'game-1', title: 'Game Projekt', img: '/projects/game1.png', slug: 'game-1' },
]

export default function PortfolioPage() {
  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
        >
          <Link href={`/portfolio/${project.slug}`}>
            <img src={project.img} alt={project.title} className="w-full h-72 object-cover" />
            <h3 className="text-xl font-heading p-4 text-[#E56D6A]">{project.title}</h3>
          </Link>
        </motion.div>
      ))}
    </div>
  )

  return (
    <section className="px-4">
      <h1 className="text-4xl font-heading mb-8 text-[#E56D6A]">Portfolio</h1>

      <h2 className="text-2xl font-semibold text-[#E56D6A] mb-4">Business & Corporate</h2>
      {renderProjects(businessProjects)}

      <h2 className="text-2xl font-semibold text-[#E56D6A] mt-12 mb-4">Consumer & Apps</h2>
      {renderProjects(consumerProjects)}

      <h2 className="text-2xl font-semibold text-[#E56D6A] mt-12 mb-4">Games & Interactive Experiences</h2>
      {renderProjects(gameProjects)}
    </section>
  )
}