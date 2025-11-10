import type { Metadata } from "next";
import { ReactNode } from 'react'
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Tamara\'s Portfolio",
  description: "Mein Portfolio",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={"antialiased bg-white text-black"}>
        {children}
      </body>
    </html>
  );
}
