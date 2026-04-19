import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Briefcase, Code, GraduationCap } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="relative w-full py-20 flex flex-col items-center justify-center px-4 md:px-10 overflow-hidden">
      <div className="max-w-4xl w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group p-1 rounded-3xl overflow-hidden"
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neonPurple via-neonBlue to-neonPink opacity-40 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_3s_linear_infinite]" />
          
          <div className="relative glass-card bg-[#0a0a0a]/90 backdrop-blur-3xl p-8 md:p-12 w-full flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl z-10 border border-white/5">
            
            {/* Left side text content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/50 mb-6 group-hover:border-neonBlue/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-neonBlue animate-pulse"></span>
                Last Updated: March 2026
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                System <span className="neon-text">Credentials</span>.
              </h2>
              
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mb-8">
                Download my resume to explore my technical experience and project work. A comprehensive breakdown of my engineering foundations, tech stack, and professional capabilities.
              </p>

              <div className="hidden md:flex items-center gap-6 text-white/40">
                <div className="flex items-center gap-2"><Briefcase size={16} /> <span className="text-xs uppercase tracking-widest">Experience</span></div>
                <div className="flex items-center gap-2"><Code size={16} /> <span className="text-xs uppercase tracking-widest">Skills</span></div>
                <div className="flex items-center gap-2"><GraduationCap size={16} /> <span className="text-xs uppercase tracking-widest">Education</span></div>
              </div>
            </div>

            {/* Right side CTA */}
            <div className="flex flex-col items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/GaneshCV.pdf', '_blank')}
                className="relative flex items-center gap-4 px-10 py-5 rounded-2xl bg-white/5 border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <FileText size={28} className="text-white relative z-10" />
                <span className="text-lg font-bold tracking-widest uppercase relative z-10">
                  View Resume
                </span>
                <Download size={20} className="text-white/50 group-hover/btn:text-white group-hover/btn:translate-y-1 relative z-10 transition-all" />
              </motion.button>
              
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                PDF FORMAT • SECURE NODE
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
