"use client";

import { motion } from "framer-motion";

export default function Arsenal() {
  return (
    <section className="flex flex-col gap-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tighter">The Arsenal</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Mobile Engineering — md:col-span-1 md:row-span-2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
          className="glass-card rounded-xl p-lg md:col-span-1 md:row-span-2 relative overflow-hidden group border-white/10"
        >
          <div className="absolute inset-0 grid-texture opacity-20"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#18E299] text-3xl">smartphone</span>
              <h4 className="font-headline-md text-xl text-on-surface">Mobile Engineering</h4>
            </div>
            <p className="font-body-sm text-sm text-zinc-400 mb-0 leading-relaxed">
              Architecting fluid, responsive mobile interfaces that feel natively integrated and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col gap-3 my-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#18E299] text-sm">commit</span>
                <span className="text-zinc-400 text-sm font-['Inter']">60fps Fluid Animations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#18E299] text-sm">commit</span>
                <span className="text-zinc-400 text-sm font-['Inter']">Complex State Management</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#18E299] text-sm">commit</span>
                <span className="text-zinc-400 text-sm font-['Inter']">Native Platform Channels</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">Flutter</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">Dart</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">Riverpod</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">BLoC</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Cloud & Backend — md:col-span-2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
          className="glass-card rounded-xl p-lg md:col-span-2 relative overflow-hidden group border-white/10"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#18E299] text-3xl">database</span>
              <h4 className="font-headline-md text-xl text-on-surface">Cloud &amp; Backend</h4>
            </div>
            <p className="font-body-sm text-sm text-zinc-400 mb-6 leading-relaxed">
              Designing robust, scalable server architectures and optimizing queries for lightning-fast data retrieval across distributed databases.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">Node.js</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">Firebase</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">Supabase</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">PostgreSQL</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: AI & Architecture — md:col-span-2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
          className="glass-card rounded-xl p-lg md:col-span-2 relative overflow-hidden group border-white/10"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#18E299] text-3xl">rocket_launch</span>
              <h4 className="font-headline-md text-lg text-on-surface">AI &amp; Architecture</h4>
            </div>
            <p className="font-body-sm text-sm text-zinc-400 mb-6 leading-relaxed">
              Continuously integrating emerging technologies. From wiring up LLM capabilities to streamlining CI/CD pipelines for automated deployments.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">AI Integrations</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">CI/CD</span>
              <span className="font-mono text-[10px] uppercase tracking-widest bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full border border-[#18E299]/20">System Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
