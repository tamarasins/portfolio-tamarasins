"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioPage() {
  const params = useParams();
  let slug = params.slug;

    // Sicherstellen, dass slug ein string ist
  if (Array.isArray(slug)) {
    slug = slug[0]; // Im Zweifelsfall nur das erste Element nehmen
  }

  // Platzhalter-Daten für Demo
  const projectData = {
    title: slug ? slug.replace(/-/g, " ") : "Projekt Titel",
    description:
      "Dies ist eine Beispiel-Case-Study. Hier beschreibe ich das Projektziel, den Prozess und die Ergebnisse.",
    images: [
      "/portfolio-demo-1.jpg",
      "/portfolio-demo-2.jpg",
      "/portfolio-demo-3.jpg",
    ],
    role: "Web Design & UX Optimization",
    tools: ["Figma", "React", "Next.js", "Tailwind", "Framer Motion"],
    learnings:
      "Wichtige Learnings: Benutzerzentriertes Design, responsive Layouts, interaktive Prototypen, Soft-UI Umsetzung.",
  };

  return (
    <>
      {/* 🌸 Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-[#FFD6E0]/30">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {projectData.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          {projectData.description}
        </motion.p>
      </section>

      {/* 🖼 Bilder / Mockups */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projectData.images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <Image
                src={src}
                alt={`${projectData.title} Screenshot ${i + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🛠 Projektinfos */}
      <section className="py-20 px-6 bg-[#C2E7FF]/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meine Rolle</h2>
            <p className="opacity-80">{projectData.role}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Genutzte Tools</h2>
            <div className="flex flex-wrap gap-4">
              {projectData.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-2xl bg-[#FFD6E0] shadow-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💡 Learnings */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto bg-[#FFEAC2]/30 p-8 rounded-3xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Learnings & Insights</h2>
          <p className="opacity-80">{projectData.learnings}</p>
        </motion.div>
      </section>
    </>
  );
}
