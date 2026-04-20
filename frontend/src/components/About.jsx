import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-32 flex flex-col justify-center relative container mx-auto px-6 max-w-4xl">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight drop-shadow-md">About Me</h2>
        <div className="glass-card p-8 md:p-12 text-lg text-textLight leading-relaxed">
          <p className="mb-6">
            I'm a passionate Full Stack Developer with a strong foundation in <span className="text-accentBlue font-semibold">Java Backend Development</span> and modern Frontend ecosystems. What started as an interest in solving complex logical problems has evolved into a career building scalable, impactful web applications.
          </p>
          <p className="mb-6">
            I specialize in the <span className="text-accentPurple font-semibold">Spring Boot</span> ecosystem for robust API architectures and <strong className="font-semibold">React</strong> for dynamic user interfaces. By bridging the gap between database design and user experience, I deliver end-to-end solutions that are both secure and intuitive.
          </p>
          <p>
            When I'm not writing code, you can find me exploring new technologies, contributing to open-source projects, or diving deep into system design patterns.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
