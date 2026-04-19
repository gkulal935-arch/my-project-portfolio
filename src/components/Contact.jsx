import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Camera } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-4 md:px-10 overflow-hidden">
      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-[0.2em] neon-text">
          Initialize Contact
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-xs mb-16">
          AWAITING TRANSMISSION...
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: WhatsApp / Phone */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl glass-card flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 group-hover:border-neonPink/50 flex items-center justify-center transition-colors">
              <MessageCircle size={32} className="text-white/50 group-hover:text-neonPink transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">WhatsApp / Call</h3>
            <p className="text-neonPink font-mono">+91 8904075514</p>
            <a 
              href="https://wa.me/918904075514" 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 px-6 py-2 rounded-full border border-white/10 hover:bg-neonPink/20 text-xs font-bold uppercase tracking-widest transition-all"
            >
              Ping Me
            </a>
          </motion.div>

          {/* Card 2: Instagram */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl glass-card flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 group-hover:border-neonPurple/50 flex items-center justify-center transition-colors">
              <Camera size={32} className="text-white/50 group-hover:text-neonPurple transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Instagram</h3>
            <p className="text-neonPurple font-mono">@ganesh_kulal27</p>
            <a 
              href="https://instagram.com/ganesh_kulal27" 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 px-6 py-2 rounded-full border border-white/10 hover:bg-neonPurple/20 text-xs font-bold uppercase tracking-widest transition-all"
            >
              Follow Node
            </a>
          </motion.div>
        </div>

        <div className="mt-16 text-white/30 font-mono text-xs uppercase">
           <p>End of Transmission.</p>
           <p>System Out.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
