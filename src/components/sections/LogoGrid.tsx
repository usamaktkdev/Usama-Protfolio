"use client";

import { motion } from "framer-motion";

// Note: Using plain <img> tags with hardcoded basePath prefix.
// Next.js <Image> double-prepends basePath on static exports, breaking GitHub Pages.
// Exact filenames are case-sensitive on GitHub Pages — these match public/assets/ exactly.
const logos = [
  { src: "/Usama-Protfolio/assets/pngwing.com.png",           alt: "Flutter"    },
  { src: "/Usama-Protfolio/assets/dart.png",                  alt: "Dart"       },
  { src: "/Usama-Protfolio/assets/firebase.png",              alt: "Firebase"   },
  { src: "/Usama-Protfolio/assets/supabase.png",              alt: "Supabase"   },
  { src: "/Usama-Protfolio/assets/github-light.png",          alt: "GitHub"     },
  { src: "/Usama-Protfolio/assets/javascript-svgrepo-com.svg", alt: "JavaScript" },
  { src: "/Usama-Protfolio/assets/nodejs-alt.png",            alt: "Node.js"    },
];

export default function LogoGrid() {
  return (
    <section id="stack" className="border-t border-white/5 py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-10 md:mb-16">
          Built with the tools I trust
        </p>

        {/* Responsive logo grid — 2 cols mobile, 4 cols md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 place-items-center">
          {logos.map((logo, i) => (
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
                className="w-auto h-10 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


