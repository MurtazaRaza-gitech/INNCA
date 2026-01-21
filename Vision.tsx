import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Award, FastForward, Zap, Globe } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen bg-black overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-purple-600/5 blur-[150px] md:blur-[250px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-cyan-500/5 blur-[150px] md:blur-[250px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full glass-card text-purple-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-8 md:mb-12 border-purple-500/20">
            <Compass className="w-3 md:w-4 h-3 md:h-4 mr-2 md:mr-3" />
            Strategic Horizons
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-[9rem] font-black text-white leading-[1.1] md:leading-[0.8] mb-10 md:mb-12 tracking-tighter uppercase text-reveal">THE ROAD <br className="md:hidden" /> AHEAD.</h1>
        </motion.div>

        <div className="space-y-10 md:space-y-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-24 rounded-[40px] md:rounded-[80px] glass-card relative group border-purple-500/20 shadow-[0_0_100px_rgba(168,85,247,0.05)] text-center md:text-left"
          >
            <div className="absolute top-8 md:top-12 left-8 md:left-12 opacity-5"><Zap size={80} className="text-purple-600" /></div>
            
            <div className="space-y-10 md:space-y-12 relative z-10">
              <p className="text-2xl md:text-5xl text-white leading-[1.2] md:leading-[1.1] font-black uppercase tracking-tighter">
                Our goal is to build world-class digital applications across multiple categories, with a strong focus on quality, clarity, and long-term value.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-base md:text-xl text-gray-500 leading-relaxed font-medium">
                <p>
                  We create products that meet global standards in design, performance, and usability, while remaining reliable, secure, and relevant as technology evolves. Every decision we make is guided by a clear vision and a commitment to building strong systems rather than short-term solutions.
                </p>
                <p>
                  We believe that great products are shaped through disciplined execution, thoughtful iteration, and attention to real user needs.
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-[30px] md:rounded-[50px] bg-white/[0.03] border border-purple-500/40 text-white font-bold text-lg md:text-2xl leading-relaxed italic"
              >
                "As we grow, we are intentionally building a foundation of platforms, processes, and teams that support long-term innovation, empower talented individuals, and turn ambitious ideas into scalable, lasting digital products that earn trust and deliver impact worldwide."
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Future Pillars */}
        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {[
            { icon: Globe, color: "text-purple-500", title: "Global Impact", desc: "Digital solutions that transcend borders and set universal standards." },
            { icon: Award, color: "text-cyan-400", title: "Deep Quality", desc: "A commitment to architectural excellence and visual precision." },
            { icon: FastForward, color: "text-white", title: "Rapid Iteration", desc: "Agile processes that respond to user needs and market evolution." }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 md:w-24 h-20 md:h-24 bg-white/[0.04] rounded-[24px] md:rounded-[32px] flex items-center justify-center mx-auto mb-8 md:mb-10 group-hover:scale-110 group-hover:bg-purple-600/10 transition-all duration-500 border border-white/5">
                <pillar.icon className={pillar.color} size={32} />
              </div>
              <h4 className="font-black text-xl md:text-2xl mb-4 md:mb-6 uppercase tracking-tight">{pillar.title}</h4>
              <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-lg px-4 md:px-0">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Visual */}
        <div className="mt-24 md:mt-40 text-center pb-12">
           <div className="inline-block relative">
              <div className="text-6xl sm:text-9xl md:text-[15rem] font-black opacity-5 select-none tracking-tighter">FUTURE</div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <h2 className="text-3xl md:text-7xl font-black uppercase tracking-widest text-white">INNCA</h2>
              </div>
           </div>
           <p className="text-gray-600 font-bold uppercase tracking-[0.4em] md:tracking-[0.8em] mt-[-0.5rem] md:mt-[-2rem] text-[10px] md:text-base">Architecture of the next age</p>
        </div>
      </div>
    </div>
  );
};

export default Vision;