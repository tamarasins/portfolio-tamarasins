import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Tamara Sins',
  description: 'Cute Portfolio Website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-bg dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="max-w-6xl mx-auto my-12 p-6 bg-block rounded-block shadow-block">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
