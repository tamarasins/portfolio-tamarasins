'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PortfolioDetailPage() {
  const { slug } = useParams()
  
  // Inhalte pro Slug definieren
  const projectContent: Record<string, any> = {
    "jga-buddies": {
      title: "JGA Buddies",
      description: "Ein Redesign der Plattform für Stadtrallyes und JGA‑Events mit Fokus auf Nutzerfreundlichkeit, Mobile‑First und spielerischen Interaktionen.",
      category: "Web Development · UI/UX",
      time: "2021-2025",
      tasks: ["Frontend-Entwicklung, UI/UX Design, SEO"],
      tools: ["WordPress, HTML & CSS, JavaScript, Canva & Google Analytics"],
      problem: ["Die bestehende Plattform war auf vielen Geräten nicht optimal nutzbar, die User Journey war unübersichtlich und der spielerische Charakter des Produktes wurde nur unzureichend transportiert. Ziel war es, die Website leichter bedienbar, visuell ansprechender und interaktiver zu gestalten."],
      solution: ["Die überarbeitete Website bietet Nutzern eine intuitive Navigation, ist mobil‑optimiert und vermittelt durch visuelle Spiel‑Elemente echten Rallye‑Charakter. Verbesserungen: erhöhte Verweildauer, geringere Absprungrate."],
      learnings: [<ul className="list-disc list-inside space-y-1 text-[15px] leading-tight mb-4">
                  <li>Mobile‑First Denken bereits im Anfangsstadium</li>
                  <li>Interaktive Elemente steigern Engagement, jedoch nicht auf Kosten der Performance</li>
                  <li>Enge Zusammenarbeit mit Produkt‑Team war entscheidend</li>
                  </ul>],
      imagesCount: 7
    },
    "myweinwanderung": {
      title: "MyWeinwanderung",
      description: "Ein Redesign der Plattform für Stadtrallyes und JGA‑Events mit Fokus auf Nutzerfreundlichkeit, Mobile‑First und spielerischen Interaktionen.",
      category: "Web Development · UI/UX",
      time: "2021-2025",
      tasks: ["Frontend-Entwicklung, UI/UX Design, SEO"],
      tools: ["WordPress, HTML & CSS, JavaScript, Canva & Google Analytics"],
      problem: [""],
      solution: [""],
      learnings: [""],
      imagesCount: 7
    },
     "tsv-loechgau": {
      title: "TSV Löchgau",
      description: "Ein Redesign der Plattform für Stadtrallyes und JGA‑Events mit Fokus auf Nutzerfreundlichkeit, Mobile‑First und spielerischen Interaktionen.",
      category: "Web Development · UI/UX",
      time: "2021-2025",
      tasks: ["Frontend-Entwicklung, UI/UX Design, SEO"],
      tools: ["WordPress, HTML & CSS, JavaScript, Canva & Google Analytics"],
      problem: [""],
      solution: [""],
      learnings: [""],
      imagesCount: 7
    },
      "portfolio": {
      title: "Meine Portfolio Website",
      description: "Ein Redesign der Plattform für Stadtrallyes und JGA‑Events mit Fokus auf Nutzerfreundlichkeit, Mobile‑First und spielerischen Interaktionen.",
      category: "Web Development · UI/UX",
      time: "2021-2025",
      tasks: ["Frontend-Entwicklung, UI/UX Design, SEO"],
      tools: ["WordPress, HTML & CSS, JavaScript, Canva & Google Analytics"],
      problem: [""],
      solution: [""],
      learnings: [""],
      imagesCount: 7
    },
      "weiterbildung": {
      title: "Weiterbildung Projekt",
      description: "Ein Redesign der Plattform für Stadtrallyes und JGA‑Events mit Fokus auf Nutzerfreundlichkeit, Mobile‑First und spielerischen Interaktionen.",
      category: "Web Development · UI/UX",
      time: "2021-2025",
      tasks: ["Frontend-Entwicklung, UI/UX Design, SEO"],
      tools: ["WordPress, HTML & CSS, JavaScript, Canva & Google Analytics"],
      problem: [""],
      solution: [""],
      learnings: [""],
      imagesCount: 7
    },
      "game-1": {
      title: "Game Projekt",
      description: "Ein Redesign der Plattform für Stadtrallyes und JGA‑Events mit Fokus auf Nutzerfreundlichkeit, Mobile‑First und spielerischen Interaktionen.",
      category: "Web Development · UI/UX",
      time: "2021-2025",
      tasks: ["Frontend-Entwicklung, UI/UX Design, SEO"],
      tools: ["WordPress, HTML & CSS, JavaScript, Canva & Google Analytics"],
      problem: [""],
      solution: [""],
      learnings: [""],
      imagesCount: 7
    },
  }

  const content = projectContent[slug] || {
    title: 'Projekt nicht gefunden',
    description: 'Leider gibt es für diesen Slug keinen Inhalt.',
    category: '',
    time: '',
    tasks: [],
    tools: [],
    imagesCount: 0
  }

  const images = Array.from({ length: content.imagesCount }, (_, i) => `/images/${slug}-${i+1}.jpg`)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4 max-w-5xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-heading text-[#E56D6A] mb-4">{content.title}</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {content.description}
        </p>
        <div className="mt-6">
          <Link href="/portfolio">
            <button className="button">
              &larr; Zu allen Projekten
            </button>
          </Link>
        </div>
      </div>

      {/* Screenshot Section */}
        <img src={`/${slug}-1.webp`} alt="Projektbild 1" className="w-full h-72 rounded items-center justify-center my-4" />

      {/* Übersicht */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Übersicht</h2>
        <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight">
          <li>Kategorie: {content.category}</li>
          <li>Zeitraum: {content.time}</li>
          <li>Aufgaben: {content.tasks}</li>
          <li>Tools & Technologien: {content.tools}</li>
        </ul>
      </section>

      {/* Problemstellung */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Problemstellung</h2>
        <p className="text-[15px] leading-tight">
          {content.problem}
          </p>

        {/* Drei viereckige Projekt-Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center">
          <div className="h-40 w-full bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={`/${slug}-2.webp`} alt="Projektbild 2" className="rounded shadow-md" />
          </div>
          <p className="mt-2 text-center">Design</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-40 w-full bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={`/${slug}-3.webp`} alt="Projektbild 3" className="rounded shadow-md" />
          </div>
          <p className="mt-2 text-center">Prototyp</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-40 w-full bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={`/${slug}-4.webp`} alt="Projektbild 4" className="rounded shadow-md" />
          </div>
          <p className="mt-2 text-center">Implementierung</p>
        </div>
      </div>
      </section>

      {/* Ergebnis */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Ergebnis</h2>
        <p className="text-[15px] leading-tight mb-4">
          {content.solution}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={`/images/${slug}-5.webp`} alt="Projektbild 5" className="rounded shadow-md my-4" />
            </div>
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={`/images/${slug}-6.webp`} alt="Projektbild 6" className="rounded shadow-md my-4" />
          </div>
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={`/images/${slug}-7.webp`} alt="Projektbild 7" className="rounded shadow-md my-4" />
            </div>
        </div>
      </section>

      {/* Learnings */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Learnings</h2>
        {content.learnings}
        <div className="mt-6">
          <Link href="/portfolio">
            <button className="button">
              &larr; Zu allen Projekten
            </button>
          </Link>
        </div>
      </section>
    </motion.section>
  )
}
