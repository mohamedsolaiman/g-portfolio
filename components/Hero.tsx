'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col items-start min-h-[80vh] justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-1 mb-12"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-bold">Portfolio // 2026</span>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-xs text-zinc-400 uppercase tracking-widest">Available for new projects</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-6xl sm:text-[96px] md:text-[112px] leading-[0.85] font-light tracking-tighter mb-4">
          MOHAMED<br/>
          <span className="text-zinc-500">SOLAIMAN</span>
        </h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-400 mb-8 max-w-3xl">
          I build full-stack experiences.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-zinc-400 text-lg max-w-2xl mb-12 leading-relaxed font-light"
      >
        <p className="mb-4">
          Software Engineer & Full-stack Developer crafting scalable digital solutions with a focus on precision and performance. Based in Latakia, Syria, I specialize in building accessible, human-centered products.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <div className="flex items-center gap-3 border-l border-zinc-800 pl-4 py-1 hover:border-blue-500 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Location</span>
            <span className="text-sm text-zinc-300">Latakia, Syria</span>
          </div>
          <div className="flex items-center gap-3 border-l border-zinc-800 pl-4 py-1 hover:border-blue-500 transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Email</span>
            <a href="mailto:mohamedsolaimansy@gmail.com" className="text-sm text-zinc-300 hover:text-white transition-colors">mohamedsolaimansy@...</a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-6 w-full max-w-md"
      >
        <a 
          href="#projects" 
          className="bg-zinc-900 rounded-full h-12 flex-1 flex items-center px-6 border border-zinc-800 hover:border-zinc-600 transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">Let's collaborate</span>
          <div className="ml-auto w-6 h-[1px] bg-zinc-600 group-hover:bg-zinc-400 transition-colors"></div>
        </a>
        <div className="flex items-center gap-4">
          <a href="https://github.com/mohamedsolaiman" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github size={20} strokeWidth={1.5} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/mohamed-solaiman-sy" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Linkedin size={20} strokeWidth={1.5} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
