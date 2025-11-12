import './globals.css'
import { ReactNode } from 'react'
import { Inter, Quicksand } from "next/font/google";
import Header from './components/Header'
import Footer from './components/Footer'
import Doodles from './components/Doodles'

// Fonts laden
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: 'Tamara Sins',
  description: 'Tamara Sins - Webentwicklerin & UI/UX-Designerin',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Doodles />
      </body>
    </html>
  )
}

