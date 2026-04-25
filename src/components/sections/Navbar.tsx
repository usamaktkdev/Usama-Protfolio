"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-16">
        {/* Superscript Logo */}
        <a href="#" className="flex items-start group">
          <span
            className="text-xs text-[#18E299] mt-1 mr-1.5 opacity-80"
            style={{ fontFamily: '"Playwrite DE Sas", cursive' }}
          >
            I am
          </span>
          <span className="font-['Inter'] font-bold text-xl text-zinc-100 tracking-tighter group-hover:text-white transition-colors">Usama</span>
        </a>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#projects" className="text-zinc-400 hover:text-[#18E299] transition-colors duration-200 font-['Inter'] text-sm tracking-tight">Projects</a>
          <a href="#stack" className="text-zinc-400 hover:text-[#18E299] transition-colors duration-200 font-['Inter'] text-sm tracking-tight">Stack</a>
          <a href="#contact" className="text-zinc-400 hover:text-[#18E299] transition-colors duration-200 font-['Inter'] text-sm tracking-tight">Contact</a>
        </div>
        {/* CV CTA */}
        <a href="/Usama-Protfolio/assets/CV.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#18E299] text-[#003823] px-4 py-2 rounded-full font-body-sm font-semibold hover:bg-primary-fixed transition-colors shadow-[0_0_20px_rgba(24,226,153,0.2)]">CV</button>
        </a>
      </div>
    </motion.nav>
  );
}
