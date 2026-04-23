'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', num: '01' },
    { name: 'About', href: '#about', num: '02' },
    { name: 'Contact', href: '#contact', num: '03' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'h-16 bg-[#0a0a0a]/90 backdrop-blur-md shadow-sm border-b border-zinc-900' : 'h-24 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-mono font-bold text-xl tracking-tighter"
        >
          <a href="/">MS.</a>
        </motion.div>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 hover:text-white transition-colors flex gap-2 group"
            >
              <span className="text-zinc-600">{link.num}</span>
              <span className="group-hover:text-white">{link.name}</span>
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://github.com/mohamedsolaiman"
            target="_blank"
            rel="noreferrer"
            className="ml-4 text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors"
          >
            GitHub
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
