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
    <header>
        <nav className="headerNav">
          <a href="/" className="hover:text-highlight transition">home</a>
          <a href="/about" className="hover:text-highlight transition">über mich</a>
          <a href="/portfolio" className="hover:text-highlight transition">portfolio</a>
          <a href="/contact" className="hover:text-highlight transition">kontakt</a>
        </nav>
    </header>
  )
}
