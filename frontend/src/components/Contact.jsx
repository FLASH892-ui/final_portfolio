import { useState } from 'react';
import FadeInSection from './FadeInSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Error connecting to server.');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-32 flex flex-col justify-center relative container mx-auto px-6 max-w-6xl">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight drop-shadow-md">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          
          <div className="md:col-span-2 glass-card p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-textLight mb-4">Let's Connect</h3>
              <p className="text-textMuted mb-8 leading-relaxed">
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4 text-textLight">
                <p className="flex items-center gap-3">
                  <span className="text-accentBlue text-xl">📧</span>
                  avi.developer@example.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-accentPurple text-xl">📍</span>
                  Remote / Global
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-textLight hover:bg-white/5 hover:text-accentPurple hover:border-accentPurple transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-textLight hover:bg-white/5 hover:text-accentBlue hover:border-accentBlue transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 glass-card p-8 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-textLight outline-none focus:border-accentPurple focus:ring-2 focus:ring-accentPurple/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 placeholder:text-textMuted"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-textLight outline-none focus:border-accentPurple focus:ring-2 focus:ring-accentPurple/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 placeholder:text-textMuted"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-textLight outline-none focus:border-accentPurple focus:ring-2 focus:ring-accentPurple/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 placeholder:text-textMuted resize-y"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn-primary mt-2">Send Message</button>
            {status && <p className="text-center mt-4 font-medium text-accentBlue">{status}</p>}
          </form>

        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
