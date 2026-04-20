import FadeInSection from './FadeInSection';

const Experience = () => {
  const journeys = [
    {
      role: 'Full Stack Development Immersive',
      company: 'Personal & Open Source',
      period: '2023 - Present',
      desc: 'Architected and deployed full-stack applications using React, Spring Boot, and PostgreSQL. Focused on modern design patterns, REST API standards, and responsive UI implementations.'
    },
    {
      role: 'Java Core Specialization',
      company: 'Self-Directed Learning',
      period: '2022 - 2023',
      desc: 'Mastered object-oriented programming principles, data structures, and multithreading in Java. Built CLI applications and foundational algorithms.'
    },
    {
      role: 'Frontend Web Fundamentals',
      company: 'Tech Bootcamps',
      period: '2021 - 2022',
      desc: 'Gained proficiency in HTML5, CSS3, ES6 JavaScript, and responsive design systems. Started building interactive web interfaces and basic single-page applications.'
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-32 flex flex-col justify-center relative container mx-auto px-6 max-w-4xl">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight drop-shadow-md">Learning Journey</h2>
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 space-y-12">
          {journeys.map((exp, i) => (
            <div key={i} className="relative group">
              <span className="absolute -left-[41px] top-1 w-5 h-5 bg-bgDark border-2 border-accentPurple rounded-full group-hover:bg-accentPurple group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 z-10"></span>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-textLight">{exp.role}</h3>
                <h4 className="text-lg text-accentBlue mb-2">{exp.company} | <span className="text-textMuted text-sm">{exp.period}</span></h4>
                <p className="text-textLight leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
