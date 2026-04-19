import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[100dvh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 3.5 }}
        className="z-10"
      >
        <h2 className="text-neonBlue font-mono text-sm tracking-[0.5em] mb-4 uppercase">System Architect & Developer</h2>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter">
          <span className="block">GANESH</span>
          <span className="neon-text">KULAL</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-white/60 text-lg md:text-xl font-light mb-10 leading-relaxed">
          Crafting <span className="text-white font-medium">immersive digital experiences</span> and 
          <span className="text-white font-medium"> scalable systems</span> for the modern web.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-neonPurple text-white font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all"
          >
            Enter Experience
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl glass border-white/20 text-white font-bold hover:bg-white/20 transition-all"
          >
            View Projects
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neonPink rounded-full" />
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonPurple/10 rounded-full blur-[100px] -z-10 animate-pulse" />
    </section>
  );
};

export default Hero;
