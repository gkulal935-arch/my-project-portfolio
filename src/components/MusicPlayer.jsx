import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 rounded-full glass flex items-center justify-center text-white border-white/20 hover:border-neonPurple/50 hover:bg-neonPurple/20 transition-all"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
      
      <audio 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" 
        loop 
        style={{ display: 'none' }}
        ref={(audio) => {
          if (audio) {
            if (isPlaying) {
              const playPromise = audio.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => setIsPlaying(false));
              }
            } else {
              audio.pause();
            }
          }
        }}
      />
      
      {isPlaying && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 px-4 py-2 rounded-lg border border-white/10 text-[10px] font-mono whitespace-nowrap"
        >
          AMBIENT_FEED: <span className="text-neonPurple italic">ACTIVE</span>
        </motion.div>
      )}
    </div>
  );
};

export default MusicPlayer;
