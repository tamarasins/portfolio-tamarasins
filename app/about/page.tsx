// Updated AboutPage.tsx with tighter spacing, bullets, no gap between header + first section, image independent on the right

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Layout wrapper */}
          {/* Mobile image on top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="block md:hidden mx-auto mb-6 w-60 h-60 rounded-full overflow-hidden shadow-lg border-2 border-white/50"
        >
        <Image
          src="/portrait.jpg"
          alt="Portrait"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
        </motion.div>

        <div className="relative">
          {/* Independent right-floating image */}
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block absolute right-0 top-0 w-44 h-44 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-2 border-white/50"
        >
        <Image
          src="/portrait.jpg"
          alt="Portrait"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
        </motion.div>

        {/* Content */}
        <div className="pr-0 md:pr-56 space-y-6"> {/* space-y-6 for small spacing */}
          {/* Header */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-heading text-[#E56D6A]">
              Tamara Sins
            </h1>
            <p className="text-lg mt-1 text-gray-700">
              Webentwicklerin • UI/UX Designerin
            </p>
          </div>

          {/* First section — no spacing above because space-y starts AFTER */}
          <section>
            <h2 className="text-2xl font-semibold text-[#E56D6A]">Webentwicklung & Frontend</h2>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-[15px] leading-tight">
              <li>HTML, CSS, JavaScript & TypeScript</li>
              <li>React, Next.js, Tailwind CSS, Framer Motion</li>
              <li>Responsive Design, Performance-Optimierung</li>
              <li>CMS & Deployment: Vercel, Netlify, WordPress</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E56D6A]">UI/UX Design</h2>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-[15px] leading-tight">
              <li>Wireframing & Prototyping</li>
              <li>User Flows & Personas</li>
              <li>Interaction Design</li>
              <li>Usability Testing & Feedback Loops</li>
            </ul>
          </section>

          <section>
            <p className="leading-tight text-[15px]">
              Wenn du ein Projekt hast oder einfach quatschen willst —
              <span className="text-[#E56D6A] font-medium"> let’s go!</span>
              <br />
              Schreib mir unter
              <a href="mailto:hallo@tamarasins.de" className="text-[#E56D6A] underline ml-1">
                hallo@tamarasins.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E56D6A]">Tools</h2>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-[15px] leading-tight">
              <li>Figma, Adobe XD, Sketch</li>
              <li>Illustrator, GIMP</li>
              <li>InVision, Notion</li>
              <li>Jira, Asana</li>
              <li>Git</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E56D6A]">Bildung & Beruf</h2>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-[15px] leading-tight">
              <li><strong>B.Sc. Medieninformatik (2021)</strong> – Schwerpunkt Webentwicklung & Game Development, interaktive Systeme und Mediengestaltung</li>
              <li><strong>Wirtschaftsassistentin (2016)</strong> – BWL, Projektmanagement</li>
              <li>4 Jahre Webentwicklung – Frontend- & Fullstack-Projekte, moderne Webtechnologien, UI/UX Umsetzung und interaktive Interfaces</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E56D6A]">Hobbys</h2>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-[15px] leading-tight">
              <li>Programming & GameDev  (C, C++, C#, Java, Unreal Engine, Unity, Godot, Game Prototyping)</li>
              <li>Gaming (Indie, story-basierte Spiele, Pixel Art)</li>
              <li>Rätsel & Logik (Escape Rooms, Kreuzworträtsel, Brettspiele)</li>
              <li>Lesen (Fantasy & Thriller), Storytelling</li>
              <li>Fotografie, Bildbearbeitung</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#E56D6A]">Sprachen</h2>
            <p className="mt-1 text-[15px] leading-tight">Deutsch, Englisch, Spanisch (Grundkenntnisse)</p>
          </section>
        </div>
      </div>
    </motion.section>
  );
}
