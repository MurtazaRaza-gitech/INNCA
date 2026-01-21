import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Zap, TrendingUp, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: Zap, title: "Innovation with purpose", desc: "Every project starts with a real-world problem and ends with a meaningful solution." },
    { icon: TrendingUp, title: "Execution over noise", desc: "We prioritize actual results and shipping products over hype and endless talk." },
    { icon: ShieldCheck, title: "Long-term thinking", desc: "We build systems and platforms meant to last and evolve over decades." },
    { icon: Award, title: "Ownership and responsibility", desc: "We take full accountability for our work, our code, and our impact." },
  ];

  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section / Overview */}
        <div className="mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-10 md:gap-20 items-center lg:items-start text-center lg:text-left"
          >
            <div className="lg:w-1/2">
              <h1 className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-purple-500 mb-6 md:mb-8">WHO WE ARE</h1>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">COMPANY <br className="hidden md:block"/> IDENTITY.</h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-xl md:text-3xl text-white font-medium leading-relaxed">
                We are a startup-driven technology company focused on building impactful digital products.
              </p>
              <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-500 leading-relaxed font-medium">
                Our mission is to create systems, platforms, and applications that are not only innovative but sustainable, scalable, and globally relevant. We believe that strong execution, combined with clarity of vision, is what transforms ideas into real companies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 rounded-[40px] md:rounded-[60px] glass-card relative group border-white/10 text-center md:text-left"
          >
            <div className="w-14 md:w-16 h-14 md:h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-purple-500 mx-auto md:mx-0">
               <Target size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 uppercase tracking-tighter">Mission</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
              To build meaningful digital products that create real impact and evolve into long-lasting companies.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 rounded-[40px] md:rounded-[60px] glass-card relative group border-purple-500/20 text-center md:text-left"
          >
            <div className="w-14 md:w-16 h-14 md:h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-cyan-400 mx-auto md:mx-0">
               <Eye size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 uppercase tracking-tighter">Vision</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
              To create a global ecosystem where ideas, talent, and execution align seamlessly.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-16 md:mb-24 px-4">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter">CORE VALUES</h2>
            <div className="h-1 md:h-1.5 w-20 md:w-32 bg-purple-600 mx-auto mt-6 md:mt-8 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-[30px] md:rounded-[40px] glass-card hover:bg-white/[0.04] hover:border-purple-500/30 transition-all group text-center md:text-left"
              >
                <v.icon className="w-10 md:w-12 h-10 md:h-12 text-purple-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform mx-auto md:mx-0" />
                <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 uppercase tracking-tight">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* High-Impact Visual */}
        <div className="relative h-[400px] md:h-[600px] rounded-[40px] md:rounded-[60px] overflow-hidden group border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Futuristic Grid" 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-all duration-[3000ms]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center p-6">
             <div className="text-center">
                <div className="text-6xl sm:text-8xl md:text-[12rem] font-black text-white opacity-5 select-none leading-none">INNCA</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-[0.3em] md:tracking-[0.5em] mt-[-1rem] md:mt-[-2rem] relative z-10">Innovation First</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;