import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      
      {/* Signature Animated Gradient Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1.1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="w-[60vw] h-[60vw] rounded-full bg-accentBlue/20 blur-[100px] absolute mix-blend-screen"
        />
        <motion.div 
          initial={{ opacity: 0.1, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: 0.9 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1 }}
          className="w-[40vw] h-[40vw] rounded-full bg-accentPurple/20 blur-[80px] absolute mix-blend-screen"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-textLight mb-2"
        >
          Hello, I'm
        </motion.p>
        
        <motion.svg 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          width="250" height="90" viewBox="0 0 250 90" className="mx-auto mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        >
          <defs>
            <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <motion.text 
            x="50%" y="70" textAnchor="middle" 
            className="font-sans text-[65px] font-extrabold"
            initial={{ strokeDasharray: 400, strokeDashoffset: 400, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{ stroke: 'url(#textGrad)', fill: 'url(#textGrad)', strokeWidth: 1.5 }}
          >
            Avi
          </motion.text>
        </motion.svg>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-shadow-glow">
          <span className="text-gradient inline-block">Full Stack Java Developer</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10"
        >
          Building scalable backend systems and seamless user experiences
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="btn-primary inline-flex items-center justify-center">View Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center">Download Resume</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
