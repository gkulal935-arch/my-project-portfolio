import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90, color: '#a855f7' },
  { name: 'Flask', level: 85, color: '#ec4899' },
  { name: 'MongoDB', level: 80, color: '#3b82f6' },
  { name: 'React', level: 75, color: '#06b6d4' },
  { name: 'Tailwind CSS', level: 95, color: '#10b981' },
  { name: 'OpenCV', level: 70, color: '#f59e0b' }
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-4 md:px-10 overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-[0.2em]">Neural Network <span className="neon-text">Skills</span></h2>
          <p className="text-white/50 font-mono tracking-widest text-xs">CALIBRATING SYSTEM CAPABILITIES...</p>
        </div>

        <div className="space-y-10">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="relative group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold tracking-widest uppercase group-hover:text-white transition-colors">{skill.name}</span>
                <span className="font-mono text-white/40 group-hover:neon-text transition-all">{skill.level}%</span>
              </div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="h-full relative overflow-hidden"
                  style={{ backgroundColor: skill.color }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_2s_infinite]" />
                </motion.div>
                
                {/* Glow effect */}
                <div 
                   className="absolute top-0 h-full blur-md opacity-30 group-hover:opacity-60 transition-opacity"
                   style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { title: 'Core Skills', count: '12+' },
             { title: 'Libraries', count: '45+' },
             { title: 'Databases', count: '4+' },
             { title: 'API Nodes', count: '30+' }
           ].map((item) => (
             <div key={item.title} className="text-center p-6 glass rounded-2xl">
                <h3 className="text-3xl font-bold neon-text mb-2">{item.count}</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{item.title}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
