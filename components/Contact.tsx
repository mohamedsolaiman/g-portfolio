'use client';

import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 flex flex-col items-start max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6 italic block">Contact</span>
        </div>
        
        <div className="space-y-4 mb-10">
          <p className="text-xl font-medium text-white hover:text-blue-500 transition-colors">
            <a href="mailto:mohamedsolaimansy@gmail.com">mohamedsolaimansy@gmail.com</a>
          </p>
          <p className="text-xl font-medium text-white hover:text-blue-500 transition-colors">
            <a href="tel:+963987004025">+963 987 004 025</a>
          </p>
        </div>

        <p className="text-zinc-400 text-sm mb-12 leading-relaxed">
          Based in Latakia, Syria. Available for new projects, open-source collaborations, and exciting opportunities in software engineering.
        </p>

        <a 
          href="mailto:mohamedsolaimansy@gmail.com" 
          className="bg-zinc-900 rounded-full h-12 inline-flex items-center px-6 border border-zinc-800 hover:border-zinc-600 transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">Say Hello</span>
          <div className="ml-6 w-6 h-[1px] bg-zinc-600 group-hover:bg-zinc-400 transition-colors"></div>
        </a>
      </motion.div>
    </section>
  );
}
