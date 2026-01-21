import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Send, Layers, Smartphone, Mail, Linkedin, Zap, Monitor } from 'lucide-react';

const Home: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const location = useLocation();

  useEffect(() => {
    // Check if we navigated here with a request to scroll to contact
    if (location.state && (location.state as any).scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Transmission received. The Innca team will contact you shortly.');
    setFormState({ name: '', email: '', message: '' });
  };

  const services = [
    {
      icon: Code,
      title: "Product Innovation",
      desc: "We design and build digital products that solve real-world problems with long-term scalability in mind."
    },
    {
      icon: Layers,
      title: "Platform Development",
      desc: "Our flagship platform is currently under development, aimed at creating a self-sustaining ecosystem for ideas, talent, and execution."
    },
    {
      icon: Smartphone,
      title: "Creative Technology",
      desc: "From web applications to storytelling-driven products, we blend creativity with engineering."
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid pt-24 pb-12">
        <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[120px] md:blur-[180px] rounded-full animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full glass-card text-purple-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 md:mb-10 border-purple-500/20"
          >
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 mr-2" />
            Where Innovation Meets Execution
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-[7.5rem] font-black tracking-tighter text-white mb-8 leading-[1.1] md:leading-[0.9] text-reveal"
          >
            Building the Future <br />
            of Digital Products.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium"
          >
            We are a technology-driven company focused on turning bold ideas into scalable digital products—where innovation meets execution.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <Link to="/products" className="w-full sm:w-auto group px-8 md:px-10 py-4 md:py-5 bg-white text-black font-black rounded-full transition-all hover:bg-purple-600 hover:text-white flex items-center justify-center shadow-xl shadow-white/5">
              EXPLORE OUR PRODUCTS
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 glass-card text-white font-black rounded-full transition-all hover:bg-white/10 text-center"
            >
              CONTACT US
            </button>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-[20%] right-[10%] opacity-20 hidden lg:block animate-float">
          <Monitor size={140} className="text-purple-500" />
        </div>
        <div className="absolute bottom-[20%] left-[5%] opacity-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
          <Zap size={100} className="text-cyan-500" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 md:py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-500 mb-4 md:mb-6">Capabilities</h2>
            <h3 className="text-3xl md:text-6xl font-black text-white">WHAT WE DO</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 md:p-12 rounded-[30px] md:rounded-[40px] glass-card group hover:border-purple-500/50 transition-all duration-500 text-center md:text-left"
              >
                <div className="w-14 md:w-16 h-14 md:h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all mx-auto md:mx-0">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[40px] md:rounded-[60px] p-8 md:p-24 overflow-hidden relative border-purple-500/10">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center relative z-10 text-center lg:text-left">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 uppercase tracking-tighter">WHAT WE'RE <br/> WORKING ON</h2>
                <div className="space-y-8 md:space-y-10">
                  <div className="flex flex-col md:flex-row items-center lg:items-start md:space-x-6 space-y-4 md:space-y-0">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Zap className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Core Platform</h4>
                      <p className="text-gray-400 font-medium text-sm md:text-base">Under active development — Creating a self-sustaining ecosystem.</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center lg:items-start md:space-x-6 space-y-4 md:space-y-0">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Sparkles className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Makeup App</h4>
                      <p className="text-gray-400 font-medium text-sm md:text-base">Completed, testing phase (launching soon) — Precision beauty tech.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2074&auto=format&fit=crop" alt="Technology" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Highlight */}
      <section className="py-24 md:py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-5xl font-black mb-10 md:mb-12 italic text-gray-400 leading-tight">
            "Led by a young founder with a long-term vision."
          </h2>
          <Link to="/founder" className="inline-flex items-center px-8 md:px-12 py-4 md:py-5 bg-purple-600 text-white font-black rounded-full hover:bg-purple-700 transition-all shadow-xl shadow-purple-900/20 text-sm md:text-base">
            MEET THE FOUNDER
            <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </section>

      {/* Contact Section (Merged) */}
      <section id="contact" className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24 px-4">
            <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 uppercase tracking-tighter">GET IN TOUCH</h2>
            <p className="text-gray-500 text-base md:text-xl max-w-lg mx-auto font-medium">
              Whether you’re interested in our products, partnerships, or future opportunities, feel free to reach out.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <input 
                type="text" 
                placeholder="NAME"
                required
                className="w-full px-6 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-600 focus:bg-white/[0.08] transition-all font-bold placeholder:text-gray-600 text-sm md:text-base"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="EMAIL"
                required
                className="w-full px-6 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-600 focus:bg-white/[0.08] transition-all font-bold placeholder:text-gray-600 text-sm md:text-base"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <textarea 
              placeholder="MESSAGE"
              rows={5}
              required
              className="w-full px-6 md:px-10 py-6 md:py-8 rounded-[25px] md:rounded-[40px] bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-600 focus:bg-white/[0.08] transition-all resize-none font-bold placeholder:text-gray-600 text-sm md:text-base"
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
            ></textarea>
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 md:py-8 bg-white text-black font-black rounded-full transition-all flex items-center justify-center space-x-3 shadow-2xl group overflow-hidden relative"
            >
              <span className="relative z-10 text-sm md:text-lg uppercase tracking-widest">Send Transmission</span>
              <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>

          <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
            <a href="mailto:innca.tech@gmail.com" className="flex items-center space-x-4 group">
              <div className="p-3 md:p-4 bg-white/5 rounded-2xl group-hover:text-purple-500 transition-all border border-white/5"><Mail size={20} /></div>
              <span className="font-black text-white text-base md:text-lg tracking-tighter">innca.tech@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/m-shehram-6a706639b/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              <div className="p-3 md:p-4 bg-white/5 rounded-2xl group-hover:text-purple-500 transition-all border border-white/5"><Linkedin size={20} /></div>
              <span className="font-black text-white text-base md:text-lg tracking-tighter">Innca Global</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;