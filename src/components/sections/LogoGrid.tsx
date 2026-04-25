"use client";

import { motion } from "framer-motion";

// Note: Using plain <img> tags with hardcoded basePath prefix.
// Next.js <Image> double-prepends basePath on static exports, breaking GitHub Pages.
// Exact filenames are case-sensitive on GitHub Pages — these match public/assets/ exactly.
const row1 = [
  { src: "/Usama-Protfolio/assets/pngwing.com.png", alt: "Flutter" },
  { src: "/Usama-Protfolio/assets/dart.png",         alt: "Dart" },
  { src: "/Usama-Protfolio/assets/firebase.png",     alt: "Firebase" },
  { src: "/Usama-Protfolio/assets/supabase.png",     alt: "Supabase" },
];

const row2: { src: string; alt: string; nudgeX?: number }[] = [
  { src: "/Usama-Protfolio/assets/github-light.png",            alt: "GitHub",     nudgeX: 16 },
  { src: "/Usama-Protfolio/assets/javascript-svgrepo-com.svg",  alt: "JavaScript"             },
  { src: "/Usama-Protfolio/assets/nodejs-alt.png",              alt: "Node.js",    nudgeX: 16 },
];

export default function LogoGrid() {
  return (
    <section id="stack" className="border-t border-white/5 py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-16">
          Built with the tools I trust
        </p>

        {/* Staggered Flex Rows */}
        <div className="flex flex-col items-center gap-y-20 mt-12">
          {/* Row 1 — 4 logos */}
          <div className="flex justify-between w-full max-w-4xl mx-auto">
            {row1.map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 120, damping: 22 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-auto h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                />
              </motion.div>
            ))}
          </div>

          {/* Row 2 — 3 logos (centered, staggered offset) */}
          {/* ↓ ADJUST LOGO SPACING: change gap-x-64 to gap-x-48 (closer) or gap-x-80 (further) */}
          <div className="flex justify-center gap-x-64 w-full mx-auto">
            {row2.map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i + 4) * 0.07, type: "spring", stiffness: 120, damping: 22 }}
                className="flex items-center justify-center"
                style={{ transform: logo.nudgeX ? `translateX(${logo.nudgeX}px)` : undefined }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-auto h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

