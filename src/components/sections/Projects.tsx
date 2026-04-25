"use client";

import { motion } from "framer-motion";

const TAG_CLS = "bg-[#18E299]/10 text-[#18E299] px-4 py-1.5 rounded-full font-code-label text-[11px] uppercase tracking-widest border border-[#18E299]/20";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-12 mt-24">
      <div className="flex items-end justify-between border-b border-white/5 pb-8">
        <div className="flex flex-col gap-2">
          <span className="font-mono-tag text-[10px] uppercase tracking-[0.4em] text-[#18E299]">Case Studies</span>
          <h3 className="font-display-xl text-4xl md:text-5xl text-on-surface tracking-tighter">Featured Work</h3>
        </div>
        <div className="hidden md:block font-mono-tag text-zinc-600 text-xs uppercase tracking-widest mb-2">
          Ref 01 // Precision Engineering
        </div>
      </div>

      <div className="grid grid-cols-1 gap-20">

        {/* ── Project 1 — A Star Campus CMS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
          whileHover="hover"
          className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center project-card"
        >
          {/* Card visual — hidden on mobile, visible md+ */}
          <div className="hidden md:block lg:col-span-7">
            <div className="glass-card rounded-2xl aspect-video overflow-hidden relative p-8 group-hover:border-[#18E299]/30 transition-all duration-500 shadow-2xl bg-zinc-900/50">
              <div className="project-glow"></div>
              <motion.div
                variants={{ hover: { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } } }}
                className="relative w-full h-full border border-white/10 rounded-xl bg-black overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Browser chrome */}
                <div className="h-7 border-b border-white/5 flex items-center px-3 gap-1.5 bg-zinc-900 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  <div className="ml-3 h-3.5 w-32 bg-zinc-800 rounded-full"></div>
                </div>

                {/* Dashboard layout */}
                <div className="w-full h-[calc(100%-1.75rem)] bg-[#050505] flex overflow-hidden">

                  {/* Sidebar — hidden on xs, visible from sm up */}
                  <div className="hidden sm:flex w-1/4 h-full border-r border-white/10 bg-[#0a0a0a] p-3 flex-col gap-3 shrink-0">
                    {/* Logo */}
                    <img
                      src="/Usama-Protfolio/assets/logo.jpg"
                      alt="A Star CMS Logo"
                      className="w-full h-auto object-contain mix-blend-screen opacity-90 mb-1"
                    />
                    {/* Nav skeletons */}
                    <div className="h-2 rounded-full bg-white/10 w-3/4"></div>
                    <div className="h-2 rounded-full bg-white/5 w-full"></div>
                    <div className="h-2 rounded-full bg-white/5 w-5/6"></div>
                    <div className="h-2 rounded-full bg-white/5 w-2/3"></div>
                    <div className="mt-auto h-2 rounded-full bg-white/5 w-1/2"></div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-3 flex flex-col gap-3 min-w-0">
                    {/* Page header */}
                    <div className="h-3 rounded-full bg-white/5 w-1/3"></div>

                    {/* Stat widgets row */}
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      {/* Widget 1 — glowing */}
                      <div className="bg-[#111111] border border-[#18E299]/30 rounded-md h-14 w-full flex flex-col justify-between p-2 shadow-[0_0_12px_rgba(24,226,153,0.1)]">
                        <div className="h-1.5 rounded-full bg-[#18E299]/30 w-1/2"></div>
                        <div className="h-3 rounded-full bg-[#18E299]/20 w-3/4"></div>
                      </div>
                      {/* Widget 2 */}
                      <div className="bg-[#111111] border border-white/5 rounded-md h-14 w-full flex flex-col justify-between p-2">
                        <div className="h-1.5 rounded-full bg-white/10 w-1/2"></div>
                        <div className="h-3 rounded-full bg-white/5 w-3/4"></div>
                      </div>
                      {/* Widget 3 */}
                      <div className="bg-[#111111] border border-white/5 rounded-md h-14 w-full flex flex-col justify-between p-2">
                        <div className="h-1.5 rounded-full bg-white/10 w-1/2"></div>
                        <div className="h-3 rounded-full bg-white/5 w-3/4"></div>
                      </div>
                    </div>

                    {/* Table skeleton */}
                    <div className="flex-1 bg-[#0d0d0d] border border-white/5 rounded-md p-2 flex flex-col gap-1.5">
                      <div className="h-2 rounded-full bg-white/10 w-full"></div>
                      <div className="h-px bg-white/5 w-full"></div>
                      <div className="h-2 rounded-full bg-white/5 w-5/6"></div>
                      <div className="h-2 rounded-full bg-white/5 w-4/6"></div>
                      <div className="h-2 rounded-full bg-white/5 w-5/6"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Metadata */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono-tag text-[10px] uppercase tracking-widest text-[#18E299] bg-[#18E299]/10 px-3 py-1 rounded-full border border-[#18E299]/20">Open Source</span>
              <span className="h-px flex-grow bg-white/5"></span>
              <span className="font-mono-tag text-zinc-500 text-sm">2024</span>
            </div>
            <h4 className="font-display-xl text-4xl text-on-surface font-bold tracking-tight">A Star-CMS</h4>
            <p className="font-body-base text-zinc-400 leading-relaxed text-lg">
              A sophisticated, open-source Campus Management System enabling universities to manage student lifecycles, campus resources, and semesters with an engineered data architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={TAG_CLS}>Flutter</span>
              <span className={TAG_CLS}>Node.js</span>
              <span className={TAG_CLS}>Supabase</span>
              <span className={TAG_CLS}>PostgreSQL</span>
            </div>
            <button className="w-fit flex items-center gap-2 text-on-surface font-bold font-['Inter'] text-sm group-hover:text-[#18E299] transition-colors mt-4">
              Deep Dive <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </motion.div>

        {/* ── Project 2 — Quantum Real-time Chat ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
          whileHover="hover"
          className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center project-card"
        >
          {/* Metadata — left on desktop */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <span className="font-mono-tag text-[10px] uppercase tracking-widest text-[#18E299] bg-[#18E299]/10 px-3 py-1 rounded-full border border-[#18E299]/20">Native Build</span>
              <span className="h-px flex-grow bg-white/5"></span>
              <span className="font-mono-tag text-zinc-500 text-sm">2023</span>
            </div>
            <h4 className="font-display-xl text-4xl text-on-surface font-bold tracking-tight">A Realtime Chat App</h4>
            <p className="font-body-base text-zinc-400 leading-relaxed text-lg">
              An optimized real-time messaging application featuring offline support, presence indicators, and message delivery confirmation built for scalability.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={TAG_CLS}>Flutter</span>
              <span className={TAG_CLS}>Firebase</span>
              <span className={TAG_CLS}>WebSockets</span>
              <span className={TAG_CLS}>Bloc</span>
            </div>
            <button className="w-fit flex items-center gap-2 text-on-surface font-bold font-['Inter'] text-sm group-hover:text-[#18E299] transition-colors mt-4">
              Deep Dive <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>

          {/* Card visual — phone mockup — hidden on mobile, visible md+ */}
          <div className="hidden md:block lg:col-span-7 order-1 lg:order-2">
            <div className="glass-card rounded-2xl aspect-video overflow-hidden relative p-12 group-hover:border-[#18E299]/30 transition-all duration-500 shadow-2xl bg-zinc-900/50 flex justify-center">
              <div className="project-glow"></div>
              <motion.div
                variants={{ hover: { scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } } }}
                className="w-[200px] h-full border-[6px] border-zinc-800 rounded-[2.5rem] bg-black overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-zinc-800 rounded-b-2xl z-10"></div>
                {/* Gradient placeholder until chat_mockup.png is ready */}
                <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-[#050505] flex flex-col gap-2 p-3 pt-7">
                  <div className="h-2 rounded-full bg-white/10 w-2/3 self-end"></div>
                  <div className="h-2 rounded-full bg-[#18E299]/20 w-3/4"></div>
                  <div className="h-2 rounded-full bg-white/10 w-1/2 self-end"></div>
                  <div className="h-2 rounded-full bg-[#18E299]/20 w-2/3"></div>
                  <div className="h-2 rounded-full bg-white/10 w-3/4 self-end"></div>
                  <div className="mt-auto h-8 rounded-full bg-zinc-800 w-full flex items-center px-3">
                    <div className="h-2 rounded-full bg-white/10 w-2/3"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

