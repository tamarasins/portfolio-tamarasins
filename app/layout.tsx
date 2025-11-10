import type { Metadata } from "next";
import { ReactNode } from 'react'
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Tamara\'s Portfolio",
  description: "Portfolio von Tamara Sins – Webdesignerin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
