import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-dashed border-neonPurple/30 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border-2 border-dashed border-neonPink/30 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-32 flex flex-col items-center justify-center"
        >
          <span className="text-4xl font-bold neon-text">GK</span>
          <span className="text-xs tracking-[0.5em] text-white/50 mt-2 uppercase">Initializing</span>
        </motion.div>
      </div>

      <div className="mt-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-neonPurple via-neonPink to-neonBlue"
        />
      </div>
      
      <div className="mt-4 text-xs font-mono text-neonBlue/80">
        SYSTEM_LOAD: {progress}%
      </div>

      <AnimatePresence>
        {progress >= 100 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // This will trigger the parent App to remove the loading screen
              // Since we're using a simple timer in App.jsx, I'll pass a prop if needed
              // But for now let's just make it look good.
              // I'll update App.jsx to handle this click.
              window.dispatchEvent(new CustomEvent('enter-portfolio'));
            }}
            className="mt-12 px-10 py-4 rounded-xl border border-neonPurple bg-neonPurple/10 text-white font-bold tracking-[0.2em] uppercase"
          >
            Enter Portfolio
          </motion.button>
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 text-[10px] font-mono text-white/20 tracking-widest uppercase">
        Establishing Secure Connection...
      </div>
    </motion.div>
  );
};

export default Loading;
