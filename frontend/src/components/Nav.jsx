import { useState, useEffect } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full py-6 z-[100] transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#0a0a0f]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-white/5 py-4' 
        : 'bg-[#0a0a0f]/50 backdrop-blur-sm border-transparent'
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center max-w-6xl">
        <h2 className="font-bold tracking-tight text-2xl">
          <span className="text-gradient">{"<Portfolio />"}</span>
        </h2>
        <ul className="hidden md:flex gap-8 list-none">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a 
                  href={`#${id}`} 
                  className={`relative font-medium transition-colors duration-300 pb-1 group ${
                    isActive ? 'text-accentPurple text-shadow-glow' : 'text-textLight hover:text-accentPurple'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-accentPurple rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
