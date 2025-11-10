"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPage() {
  // Beispiel-Daten
  const projects = [
    { title: "JGA Buddies Redesign", slug: "jga-buddies", type: "Web Design" },
    { title: "Adventure Buddies", slug: "adventure-buddies", type: "Web Design" },
    { title: "MyWeinwanderung", slug: "myweinwanderung", type: "Web Design" },
    { title: "App Redesign", slug: "uiux-1", type: "UI/UX" },
    { title: "Dashboard Konzept", slug: "uiux-2", type: "UI/UX" },
    { title: "Mobile Prototype", slug: "uiux-3", type: "UI/UX" },
  ];

  return (
    <>
      {/* 🌸 Hero */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Portfolio 🌷
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          Eine Übersicht meiner Web- und UI/UX-Projekte. Klicke auf ein Projekt, um die Case-Study zu sehen.
        </motion.p>
      </section>

      {/* 🖼 Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-[#FFD6E0]/50 p-6 hover:bg-[#FFC4D6]/70 transition-all cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <Link href={`/portfolio/${project.slug}`} className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.type}</p>
                </div>
                <span className="mt-4 text-[#3B2E2A]/70 text-sm">→ Details ansehen</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
