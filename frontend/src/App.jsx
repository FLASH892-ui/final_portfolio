import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-[#050a15] flex justify-center items-center pointer-events-none"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full border-2 border-transparent border-t-accentPurple border-r-accentBlue"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="layout-wrapper relative min-h-screen">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="text-center py-8 text-textMuted text-sm border-t border-white/5 mt-10">
          <p>&copy; {new Date().getFullYear()} Avinandan. All rights reserved. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
