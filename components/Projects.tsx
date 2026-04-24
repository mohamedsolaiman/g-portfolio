'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const FEATURED_PROJECTS = [
  {
    title: 'LingoBuddy',
    description: 'A real-time conversational AI language learning partner. Engages users in immersive language learning experiences using AI.',
    tech: ['TypeScript', 'Next.js', 'AI', 'Tailwind'],
    github: 'https://github.com/mohamedsolaiman/LingoBuddy',
    num: '01'
  },
  {
    title: 'StudyHub',
    description: 'A full-stack Next.js application where users can create, manage, and share learning content securely with a community of learners.',
    tech: ['Next.js', 'React', 'TypeScript', 'Full-stack'],
    github: 'https://github.com/mohamedsolaiman/StudyHub',
    num: '02'
  },
  {
    title: 'Architectural Portfolio',
    description: 'A 3D interactive and aesthetic portfolio designed for an architect, utilizing advanced rendering techniques on the web.',
    tech: ['TypeScript', 'Three.js', 'React 3D', 'Tailwind CSS'],
    github: 'https://github.com/mohamedsolaiman/Architectural-Portfolio',
    num: '03'
  },
  {
    title: 'The Living Portfolio',
    description: 'A dynamic, highly interactive portfolio designed for a senior React developer, highlighting dynamic DOM transitions and creative UI flow.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/mohamedsolaiman/The-Living-Portfolio',
    num: '04'
  },
  {
    title: 'Zenith Meditation',
    description: 'A calming, user-centric meditation companion application focusing on immersive audio and serene visuals.',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/mohamedsolaiman/Zenith-Meditation',
    num: '05'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6 italic block">Selected Works</span>
        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
          A curated selection of my software engineering projects spanning 3D rendering, real-time conversational AI, scalable full-stack architectures, and cross-platform tooling.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group block border-t border-zinc-800 pt-6 flex flex-col h-full transition-colors"
          >
            <div className="flex justify-between items-center border-b border-zinc-900 pb-2 mb-4 group-hover:border-blue-500 transition-colors">
              <span className="text-lg text-zinc-200">
                <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {project.title}
                </a>
              </span>
              <span className="text-xs text-zinc-600">{project.num}</span>
            </div>
            
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">{project.description}</p>
            
            <p className="text-xs text-zinc-500 font-mono mt-auto">
              {project.tech.join(', ')}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://github.com/mohamedsolaiman" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
