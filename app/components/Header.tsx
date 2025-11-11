'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 flex justify-center"
    >
      <div className="bg-block rounded-menu shadow-menu px-8 py-3 flex items-center gap-6">
        <h1 className="text-xl font-heading">Tamara Sins</h1>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-highlight transition">Home</a>
          <a href="/portfolio" className="hover:text-highlight transition">Portfolio</a>
          <a href="/about" className="hover:text-highlight transition">Über mich</a>
          <a href="/contact" className="hover:text-highlight transition">Kontakt</a>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </motion.header>
  )
}
