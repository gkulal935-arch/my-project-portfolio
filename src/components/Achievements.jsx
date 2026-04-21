import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Cpu, Trophy, Terminal } from 'lucide-react';

const achievements = [
  {
    title: "Hack4Future: National Hackathon",
    organization: "Christ Academy Institute for Advanced Studies",
    description: "Successfully participated in the National Level Hackathon 'Hack4Future', demonstrating exceptional innovation and technical excellence in solving complex real-world challenges.",
    type: "Participation",
    icon: <Trophy className="text-neonPink" />,
    color: "neonPink",
    link: "/Ganesh.pdf"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    organization: "IBM SkillsBuild",
    description: "Professional certification from IBM covering essential AI concepts, machine learning foundations, and neural network architectures. Validated engineering expertise in building intelligent system nodes.",
    type: "Certification",
    icon: <Cpu className="text-neonBlue" />,
    color: "neonBlue",
    link: "/IBM Certificate(AI).pdf"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative w-full py-32 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h4 className="text-neonPurple font-mono text-sm tracking-[0.4em] mb-4 uppercase">System Credentials & Recognition</h4>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            HONORS <span className="neon-text">& AWARDS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur z-0
                ${item.color === 'neonPink' ? 'bg-neonPink/20' : 'bg-neonBlue/20'}`} 
              />
              
              <div className="relative z-10 glass-card p-8 md:p-10 h-full flex flex-col justify-between overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  {item.icon}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50">{item.type}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:neon-text transition-all tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-neonPurple/80 font-mono text-xs mb-6 uppercase tracking-wider">
                    {item.organization}
                  </p>

                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                   <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      <Terminal size={14} /> System Node Verified
                   </div>
                   
                   <a 
                     href={item.link} 
                     target="_blank" 
                     rel="noreferrer"
                     className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-xs font-bold uppercase tracking-widest transition-all group/btn"
                   >
                     View Credential
                     <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
