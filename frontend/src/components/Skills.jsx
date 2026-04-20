import FadeInSection from './FadeInSection';
import { motion } from 'framer-motion';
import { VscVscode } from 'react-icons/vsc';
import { 
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaDocker, 
  FaAws, FaHtml5, FaCss3Alt, FaFigma 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiPostgresql, SiMysql, SiJavascript, 
  SiTypescript, SiTailwindcss, SiPostman 
} from 'react-icons/si';

const Skills = () => {
  const customIcons = {
    'React': <FaReact />,
    'Node.js': <FaNodeJs />,
    'HTML/CSS': <FaHtml5 />,
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'Tailwind CSS': <SiTailwindcss />,
    'Java': <FaJava />,
    'Spring Boot': <SiSpringboot />,
    'PostgreSQL': <SiPostgresql />,
    'MySQL': <SiMysql />,
    'Git': <FaGitAlt />,
    'Docker': <FaDocker />,
    'AWS': <FaAws />,
    'Postman': <SiPostman />,
    'VS Code': <VscVscode />,
    'Figma': <FaFigma />
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', progress: '90%' },
        { name: 'JavaScript', progress: '85%' },
        { name: 'TypeScript', progress: '75%' },
        { name: 'HTML/CSS', progress: '95%' },
        { name: 'Tailwind CSS', progress: '85%' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', progress: '85%' },
        { name: 'Spring Boot', progress: '80%' },
        { name: 'Node.js', progress: '70%' },
        { name: 'PostgreSQL', progress: '75%' },
        { name: 'MySQL', progress: '80%' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', progress: '90%' },
        { name: 'Docker', progress: '65%' },
        { name: 'AWS', progress: '60%' },
        { name: 'Postman', progress: '85%' },
        { name: 'VS Code', progress: '95%' }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-32 flex flex-col justify-center relative container mx-auto px-6 max-w-6xl">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight drop-shadow-md">Technical Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card p-8 group">
              <h3 className="text-xl font-bold mb-8 text-accentBlue group-hover:text-accentPurple transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name} className="p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group/item">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl text-textMuted group-hover/item:text-textLight group-hover/item:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0)] group-hover/item:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          {customIcons[skill.name] || <span className="w-6 h-6 bg-accentPurple rounded-full"></span>}
                        </span>
                        <span className="text-base font-medium text-textLight">{skill.name}</span>
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.progress }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                        className="h-full bg-gradient-to-r from-accentBlue to-accentPurple rounded-full group-hover/item:drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Skills;
