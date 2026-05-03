'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const FEATURED_PROJECTS = [
  {
    title: 'AI Content Beast',
    description: 'Autonomous AI marketing agent that generates content, monitors YouTube trends, and posts to 6 platforms with auto-replies.',
    tech: ['Python', 'AI / ML', 'Automation'],
    github: 'https://github.com/mohamedsolaiman/ai-content-beast',
    num: '01'
  },
  {
    title: 'SOC Shield',
    description: 'A comprehensive all-in-one CLI tool designed for SOC Analysts to automate security workflows and enhance blue team operations.',
    tech: ['Python', 'Cybersecurity', 'CLI'],
    github: 'https://github.com/mohamedsolaiman/socshield',
    num: '02'
  },
  {
    title: 'TastyGo',
    description: 'A responsive food ordering mobile app integrated with Appwrite backend for seamless authentication and real-time database management.',
    tech: ['TypeScript', 'React Native', 'Appwrite'],
    github: 'https://github.com/mohamedsolaiman/tastygo',
    num: '03'
  },
  {
    title: 'SubTrackr API',
    description: 'A robust RESTful API built for tracking user subscriptions, featuring secure authentication, data validation, and optimized endpoints.',
    tech: ['Node.js', 'Express', 'JavaScript', 'REST API'],
    github: 'https://github.com/mohamedsolaiman/subtrackr-api',
    num: '04'
  },
  {
    title: 'CyberWatch Toolkit',
    description: 'An advanced security investigation and OSINT toolkit providing deep data harvesting and reconnaissance capabilities.',
    tech: ['Python', 'OSINT', 'Cybersecurity'],
    github: 'https://github.com/mohamedsolaiman/cyberwatch-toolkit',
    num: '05'
  },
  {
    title: 'CyberScout',
    description: 'A powerful OSINT tool capable of discovering social media profiles and digital footprints across more than 300 platforms.',
    tech: ['Python', 'OSINT', 'Data Scraping'],
    github: 'https://github.com/mohamedsolaiman/cyberscout',
    num: '06'
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
          A curated selection of my software engineering projects spanning autonomous AI agents, cybersecurity tools, scalable APIs, and cross-platform mobile development.
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
