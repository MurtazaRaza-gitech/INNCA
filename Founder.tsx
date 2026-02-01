import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Rocket, PenTool, Globe, Briefcase, Linkedin, MessageCircle, Mail, Zap, Terminal } from 'lucide-react';

const Founder: React.FC = () => {
  const skills = [
    { name: "Web Development", icon: Code2 },
    { name: "Product Thinking", icon: Rocket },
    { name: "Startup Building", icon: Briefcase },
    { name: "Storytelling & Vision", icon: PenTool },
    { name: "Platform Design", icon: Globe },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/m-shehram-6a706639b/" },
    { icon: MessageCircle, href: "https://wa.me/+923127641850" },
    { icon: Mail, href: "mailto:innca.tech@gmail.com" }
  ];

  // Direct link transformation for Google Drive image
  const founderImageId = '1vKw81k19cLKaXE2iwLKMtW0xOa2yisn3';
  const founderImageUrl = `https://lh3.googleusercontent.com/u/0/d/1vKw81k19cLKaXE2iwLKMtW0xOa2yisn3`;

  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen bg-black relative">
      <div className="absolute top-1/4 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-600/5 blur-[100px] md:blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 items-center lg:items-start text-center lg:text-left">
          {/* Image & Profile */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="sticky top-40"
            >
              <div className="relative aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 bg-[#080808] shadow-[0_0_80px_rgba(168,85,247,0.1)] group">
                 {/* Founder Image Integration */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={founderImageUrl} 
                      alt="Shehram Mehmood - Founder of Innca" 
                      className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[1500ms] scale-105 group-hover:scale-100"
                      onError={(e) => {
                        // Fallback in case of image load failure
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                 </div>
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12">
                   <div className="text-[10px] md:text-sm font-black text-purple-500 uppercase tracking-[0.4em] mb-3 md:mb-4 flex items-center justify-center lg:justify-start">
                     <div className="w-6 md:w-8 h-px bg-purple-500 mr-2 md:mr-3"></div>
                     The Architect
                   </div>
                   <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">SHEHRAM <br/> MEHMOOD</h1>
                   <div className="mt-4 md:mt-6 flex items-center justify-center lg:justify-start space-x-2 text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                      <Zap size={14} className="text-purple-500" />
                      <span>Founder & CEO</span>
                   </div>
                 </div>
              </div>
              
              <div className="mt-8 md:mt-12 flex justify-center lg:justify-start space-x-4 md:space-x-6">
                {socialLinks.map((social, idx) => (
                  <motion.a 
                    key={idx}
                    whileHover={{ y: -5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 md:p-5 rounded-2xl glass-card text-gray-500 hover:text-purple-500 hover:border-purple-500/50 transition-all border border-white/5"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bio & Professional Narrative */}
          <div className="lg:col-span-7">
            <div className="space-y-16 md:space-y-24">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-black mb-8 md:mb-10 text-white uppercase tracking-tighter flex items-center justify-center lg:justify-start">
                   <Terminal className="mr-3 md:mr-4 text-purple-500" size={20} /> 
                   The Narrative
                </h3>
                <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-gray-400 leading-relaxed font-medium">
                  <p>
                    I’m <span className="text-white font-black">Shehram Mehmood</span>, a young entrepreneur driven by the goal of building impactful digital products and long-term companies.
                  </p>
                  <p>
                    I work at the intersection of technology, creativity, and vision. As a web developer, I enjoy turning ideas into functional systems, and as a storywriter, I believe strong narratives are what give products meaning and direction.
                  </p>
                  <p>
                    I’m focused on creating scalable platforms, leading teams, and building ventures that prioritize execution, innovation, and global impact.
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-black mb-8 md:mb-12 text-white uppercase tracking-tighter">Core Focus Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {skills.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 md:space-x-6 p-6 md:p-8 rounded-[25px] md:rounded-3xl glass-card border-white/5 group"
                    >
                      <div className="p-3 md:p-4 bg-purple-500/10 text-purple-500 rounded-xl md:rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all">
                        <skill.icon size={22} />
                      </div>
                      <span className="text-base md:text-lg font-black text-white uppercase tracking-tight">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-16 rounded-[40px] md:rounded-[60px] bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20 relative overflow-hidden group text-center lg:text-left"
              >
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-purple-600/10 blur-[80px] md:blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 leading-tight tracking-tighter uppercase relative z-10">Let's build the <br/> future together.</h3>
                <p className="text-gray-400 mb-8 md:mb-12 text-base md:text-lg leading-relaxed max-w-lg font-medium relative z-10 mx-auto lg:mx-0">
                  We are selectively taking on new projects that align with our vision of high-performance digital ecosystems.
                </p>
                <Link to="/" state={{ scrollToContact: true }} className="inline-flex px-10 md:px-12 py-5 md:py-6 bg-white text-black font-black rounded-full hover:bg-purple-600 hover:text-white transition-all shadow-2xl relative z-10 text-sm md:text-base">
                  START A CONVERSATION
                </Link>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
