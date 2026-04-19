import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-4 md:px-10 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Hologram placeholder (Will be represented by a stylized DIV for now, or I can add a small 3D object here) */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-neonPurple to-neonBlue opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity duration-700" />
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="relative z-10 glass-card p-1 aspect-square max-w-sm mx-auto overflow-hidden group"
          >
            <div className="w-full h-full bg-black/80 flex items-center justify-center p-8 relative">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(168,85,247,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scanline_4s_linear_infinite]" />
              
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-neonPurple p-2 flex items-center justify-center bg-white/5">
                   <User size={64} className="text-neonPurple" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Ganesh Kulal</h3>
                <p className="text-neonBlue font-mono text-sm">Full Stack Developer</p>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center"><Code size={16} /></div>
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center"><Database size={16} /></div>
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center"><Globe size={16} /></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Info */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-white/50 block text-lg font-mono mb-2 uppercase tracking-[0.3em]">Identity.sys</span>
            The <span className="neon-text underline underline-offset-8 decoration-white/10">Creator</span> Behind the Code
          </h2>
          
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Hey, I'm <span className="text-white font-semibold">Ganesh Kulal</span>. A passionate full-stack developer 
              focused on building real-world systems, problem-solving, and scalable applications.
            </p>
            <p>
              My expertise lies in architecting end-to-end solutions. From developing robust <span className="neon-text">Biometric Facial Recognition Systems</span>, 
              scalable <span className="neon-text">E-Commerce Platforms</span>, to fully integrated <span className="neon-text">College Administration & Exam Delivery Networks</span>, 
              I specialize in writing code that solves complex, real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Experience', val: '2+ Years' },
                { label: 'Projects', val: '15+ Fixed' },
                { label: 'Uptime', val: '99.9%' },
                { label: 'Coffee', val: '∞ Cups' }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-xl font-bold neon-text">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
