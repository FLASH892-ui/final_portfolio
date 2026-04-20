import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'Full Stack Task Manager',
      desc: 'A comprehensive CRUD application combining a dynamic UI with a robust backend architecture. Solves team coordination friction by centralizing task states.',
      stack: ['React', 'Spring Boot', 'MySQL', 'Tailwind'],
      features: ['Role-based access control', 'Dynamic Kanban boards', 'RESTful API integration'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      github: 'https://github.com/#',
      demo: 'https://demo.com'
    },
    {
      title: 'Secure JWT Auth Microservice',
      desc: 'A specialized authentication backend prioritizing zero-trust architecture. Decouples identity verification to be plugged into any frontend.',
      stack: ['Java 17', 'Spring Security', 'JWT', 'PostgreSQL'],
      features: ['Stateless JWT verification', 'BCrypt password hashing', 'Refresh token rotation'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      github: 'https://github.com/#',
      demo: null
    },
    {
      title: 'E-Commerce REST API',
      desc: 'A scalable backend architecture handling product catalogs, user carts, and secure payment intent processing for high-traffic environments.',
      stack: ['Spring Boot', 'Hibernate', 'Redis', 'Docker'],
      features: ['Pagination & Filtering', 'Redis caching layer', 'Dockerized deployment'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      github: 'https://github.com/#',
      demo: null
    },
    {
      title: 'Developer Portfolio',
      desc: 'This exact web application, architected to showcase my transition into professional software development with a sleek minimalist design.',
      stack: ['React', 'Vite', 'Tailwind CSS'],
      features: ['Responsive CSS Grid', 'Framer Motion animations', 'Glassmorphism styling'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
      github: 'https://github.com/#',
      demo: 'https://portfolio.com'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-32 flex flex-col justify-center relative container mx-auto px-6 max-w-6xl">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight drop-shadow-md">Featured Projects</h2>
      </FadeInSection>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {projects.map((p, i) => (
          <motion.div key={i} variants={cardVariants} className="glass-card flex flex-col overflow-hidden group">
            <div className="w-full h-56 relative overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-[#0a0a0f]/10 opacity-80 transition-opacity duration-700 group-hover:opacity-40"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4 text-textLight">{p.title}</h3>
              <p className="text-textMuted mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map(tech => (
                  <span key={tech} className="bg-accentPurple/10 text-accentPurple text-sm font-medium px-3 py-1 rounded-full border border-accentPurple/20">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mb-8 space-y-2">
                {p.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-textMuted text-sm">
                    <span className="text-accentBlue mr-2 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-4">
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center justify-center text-textLight hover:text-accentPurple transition-colors duration-300 font-medium group/link">
                  View Code
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center text-accentBlue hover:text-accentPurple hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 font-medium gap-2 group/link">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-dot shadow-[0_0_0_0_rgba(16,185,129,0.7)]"></span>
                    Live Demo
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
