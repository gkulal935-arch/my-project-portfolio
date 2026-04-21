import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Delay closing the menu on mobile so the browser has time to perform the smooth scroll animation!
    // If closed instantly, the DOM element triggering the scroll is destroyed before it completes.
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 450);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 3 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neonPurple to-neonBlue flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          G
        </div>
        <span className="font-bold tracking-tighter text-xl hidden sm:block">GANESH KULAL</span>
      </div>

      <div className="flex gap-4 md:gap-8 items-center">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {['About', 'Projects', 'Skills', 'Awards', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item === 'Awards' ? 'achievements' : item.toLowerCase())}
              className="text-sm font-medium text-white/70 hover:text-white hover:neon-text transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonPink group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => handleNavClick('resume')}
          className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Resume
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 md:hidden overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {['About', 'Projects', 'Skills', 'Awards', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item === 'Awards' ? 'achievements' : item.toLowerCase())}
                className="w-full p-5 text-center text-sm font-bold uppercase tracking-widest text-white/70 hover:text-neonPink hover:bg-white/5 transition-all border-b border-white/5 last:border-b-0"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
