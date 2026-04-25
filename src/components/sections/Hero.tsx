"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <section className="mb-xl relative">
      <div className="hero-green-glow"></div>
      <motion.div 
        className="flex flex-col items-start max-w-3xl"
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#18E299]/10 text-[#18E299] px-3 py-1 rounded-full font-mono-tag text-mono-tag mb-lg border border-[#18E299]/20">
          <span className="w-2 h-2 rounded-full bg-[#18E299] animate-pulse"></span>
          AVAILABLE FOR WORK
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-display-xl text-3xl md:text-display-xl text-on-surface mb-md">
          Architecting Scalable, <span className="text-[#18E299]">High-Performance</span> Mobile Experiences
        </motion.h1>
        <motion.p variants={itemVariants} className="font-body-base text-body-base text-on-surface-variant max-w-full md:max-w-xl mb-lg">
          Mobile-first software engineer specializing in Flutter and Dart. Focused on complex state management, 60fps fluid interfaces, and robust full-stack architectures using Node.js and Supabase to deliver production-ready applications.
        </motion.p>

      </motion.div>
    </section>
  );
}
