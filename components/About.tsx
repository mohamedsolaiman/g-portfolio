'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ExternalLink } from 'lucide-react';

const SKILLS = [
  { category: 'Languages', items: 'JavaScript (ES6+), TypeScript, Python, HTML/CSS' },
  { category: 'Frontend Ecosystem', items: 'React, Next.js, Framer Motion, Tailwind CSS, Three.js' },
  { category: 'Backend & Data', items: 'Node.js, Django, PostgreSQL, MongoDB, RESTful APIs' },
  { category: 'AI Tooling & Orchestration', items: 'Google AI Studio, Claude Code, Antigravity, GitHub Copilot' },
  { category: 'DevOps & Architecture', items: 'Git, Docker, CI/CD Pipelines, System Design' },
  { category: 'Security', items: 'Cybersecurity, Ethical Hacking Principles' }
];

const CERTIFICATIONS = [
  { 
    issuer: 'Meta', 
    title: 'Full Stack Developer Specialization',
    description: 'Gained comprehensive full-stack expertise, specializing in back-end engineering with Python and secure API design using Django.',
    courses: ['Programming in Python', 'Introduction to Back-End Development', 'Introduction to Databases', 'Django Web Framework', 'APIs'],
    url: 'https://www.coursera.org/user/0814a52d75ff35a1304959164ac41ee3'
  },
  { 
    issuer: 'Meta', 
    title: 'Front-End Developer Professional Certificate',
    description: 'Mastered responsive web development. Learned to build scalable web applications using React, JavaScript, HTML, CSS, and modern UX/UI principles.',
    courses: ['Introduction to Front-End Development', 'Programming with JavaScript', 'React Basics', 'Advanced React', 'Front-End Developer Capstone'],
    url: 'https://www.coursera.org/user/0814a52d75ff35a1304959164ac41ee3'
  },
  { 
    issuer: 'Meta', 
    title: 'React Specialization',
    description: 'Deep dive into React architectures, advanced hooks, global state management, and modern component-driven front-end structural patterns.',
    courses: ['React Basics', 'Advanced React'],
    url: 'https://www.coursera.org/user/0814a52d75ff35a1304959164ac41ee3'
  },
  { 
    issuer: 'Google', 
    title: 'IT Automation with Python Professional',
    description: 'Learned to automate complex system administration tasks with Python scripts, version control with Git, and scalable configuration management.',
    courses: ['Crash Course on Python', 'Using Python to Interact with the OS', 'Configuration Management', 'Troubleshooting and Debugging'],
    url: 'https://www.coursera.org/user/0814a52d75ff35a1304959164ac41ee3'
  },
  { 
    issuer: 'Google', 
    title: 'Cybersecurity Professional Certificate',
    description: 'Acquired core competencies in identifying network vulnerabilities, mitigating threats, and applying ethical hacking principles to secure critical infrastructure.',
    courses: ['Foundations of Cybersecurity', 'Introduction to Ethical Hacking Principles', 'Manage Security Risks', 'Networks and Network Security'],
    url: 'https://www.coursera.org/user/0814a52d75ff35a1304959164ac41ee3'
  },
];

export default function About() {
  const [openCert, setOpenCert] = useState<number | null>(null);

  const toggleCert = (index: number) => {
    setOpenCert(openCert === index ? null : index);
  };

  return (
    <section id="about" className="py-24 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6 italic block">Engineering Profile</span>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-400 space-y-6 text-sm leading-relaxed flex-1"
        >
          <p>
            Hello! My name is Mohamed. My interest in software engineering started when I decided to deeply understand how data moves across systems, which evolved into a focus on building robust, scalable full-stack architectures.
          </p>
          <p>
            Today, I engineer digital solutions that span from interactive front-end experiences like 3D architectural portfolios to robust back-end systems processing real-time conversational AI. My methodology focuses on writing clean, accessible, and high-performance code.
          </p>
          <p>
            To maximize efficiency and maintain a cutting-edge workflow, I professionally leverage advanced AI coding agents and LLM orchestration tools—including Google AI Studio, Claude Code, and Antigravity. Integrating these platforms allows me to rapidly prototype complex architectures, automate iterative tasks, and deliver production-ready systems at an accelerated pace without compromising engineering rigor.
          </p>
          
          <div className="pt-6 mt-6 border-t border-zinc-800">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 block">Core Technologies & Skills</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {SKILLS.map((skill, idx) => (
                 <li key={idx}>
                   <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">{skill.category}</span>
                   <span className="text-zinc-300 tracking-wide text-xs">{skill.items}</span>
                 </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-800">
             <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 block">Language & Localization Experience</span>
             <ul className="space-y-6">
               <li className="group">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-sm text-zinc-300">
                     Dubbing Script Writer <span className="text-zinc-600 mx-2">/</span> <a href="https://www.tanweerstudios.com/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors underline decoration-zinc-800 hover:decoration-blue-500 underline-offset-4">Tanweer Studios</a>
                   </span>
                 </div>
                 <p className="text-xs text-zinc-500 leading-relaxed max-w-lg">
                   Adapted and localized scripts for dubbing, ensuring rigorous linguistic accuracy, precise lip-syncing synchronization, and seamless cultural adaptations for diverse audiences.
                 </p>
               </li>
               <li className="group">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-sm text-zinc-300">
                     Freelance Translator <span className="text-zinc-600 mx-2">/</span> <span className="text-zinc-400">EN ↔ AR</span>
                   </span>
                 </div>
                 <p className="text-xs text-zinc-500 leading-relaxed max-w-lg">
                   Translated and localized high-volume video content and technical documents between English and Arabic, maintaining strict narrative flow and contextual integrity.
                 </p>
               </li>
             </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-800">
             <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 block">Professional Certifications</span>
             <ul className="space-y-2">
               {CERTIFICATIONS.map((cert, idx) => {
                 const isOpen = openCert === idx;
                 return (
                   <li key={idx} className="group border-b border-zinc-900 border-opacity-50">
                     <button 
                       onClick={() => toggleCert(idx)}
                       className="w-full flex items-center justify-between py-4 text-left hover:text-white transition-colors cursor-pointer group-hover:border-blue-500"
                     >
                       <span className={`text-sm tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>{cert.title}</span>
                       <div className="flex items-center gap-4">
                         <span className="text-[10px] text-zinc-600 uppercase tracking-widest hidden sm:block">{cert.issuer}</span>
                         <ChevronDown className={`w-4 h-4 text-zinc-600 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                       </div>
                     </button>
                     
                     <motion.div 
                       initial={false}
                       animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                       className="overflow-hidden"
                     >
                       <div className="pb-6 pt-2">
                         <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                           {cert.description}
                         </p>
                         <div className="mb-6">
                           <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3 block">Curriculum Courses</span>
                           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                             {cert.courses.map((course, i) => (
                               <li key={i} className="flex items-start gap-3">
                                 <div className="w-1 h-1 rounded-full bg-blue-500/50 mt-1.5 shrink-0"></div>
                                 <span className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors">{course}</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                         <a 
                           href={cert.url} 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white underline decoration-zinc-800 hover:decoration-blue-500 underline-offset-4 transition-all"
                         >
                           Verify Credential <ExternalLink size={10} />
                         </a>
                       </div>
                     </motion.div>
                   </li>
                 );
               })}
             </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
