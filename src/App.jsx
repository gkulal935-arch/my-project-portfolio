import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BackgroundSpace from './components/3d/BackgroundSpace';
import Loading from './components/Loading';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleEnter = () => setLoading(false);
    window.addEventListener('enter-portfolio', handleEnter);
    
    // Fallback: Auto-load after 10s if user doesn't click
    const timer = setTimeout(() => setLoading(false), 10000);
    
    return () => {
      window.removeEventListener('enter-portfolio', handleEnter);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-transparent text-white selection:bg-neonPurple/30 overflow-x-hidden">
      {loading && <Loading />}
      
      <Navbar />
      <MusicPlayer />
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <BackgroundSpace />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Resume />
        <Contact />
        <footer className="w-full py-10 text-center text-white/50 text-sm">
          <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-10">
            <p>© {new Date().getFullYear()} Ganesh Kulal. Built for the future.</p>
          </div>
        </footer>
      </div>

      {/* Music Toggle / Social Icons Fixed etc can go here */}
    </div>
  );
}

export default App;
