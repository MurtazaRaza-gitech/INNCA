import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Package, Rocket, CheckCircle } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-12 text-center md:text-left"
        >
          <div className="max-w-3xl">
            <h1 className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-purple-500 mb-6 md:mb-8">OUR PRODUCTS</h1>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black mb-8 md:mb-10 leading-[1.1] md:leading-[0.85] tracking-tighter uppercase text-reveal">ECOSYSTEM.</h2>
            <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed">
              We are currently building and launching digital products across different domains, with a focus on usability, design, and scalability.
            </p>
          </div>
          <Rocket className="w-16 md:w-24 h-16 md:h-24 text-purple-600 opacity-20 hidden lg:block animate-pulse" />
        </motion.div>

        {/* Product Pipeline */}
        <div className="space-y-16 md:space-y-24">
          {/* Flagship Platform */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass-card rounded-[40px] md:rounded-[60px] p-8 md:p-24 overflow-hidden border border-purple-500/10"
          >
            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-600/5 blur-[100px] md:blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center relative z-10 text-center lg:text-left">
              <div className="lg:w-1/2 w-full">
                <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full bg-purple-600/10 text-purple-500 text-[10px] md:text-xs font-black uppercase tracking-widest mb-8 md:mb-10 border border-purple-500/20">
                  Currently in private development
                </div>
                <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 leading-tight uppercase tracking-tighter">FLAGSHIP <br className="hidden md:block"/> PLATFORM</h2>
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                   <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                   <span className="font-black text-[10px] md:text-sm uppercase tracking-[0.2em] text-gray-300">Status: Under Development</span>
                </div>
                <p className="text-base md:text-xl text-gray-400 mb-10 md:mb-12 leading-relaxed font-medium">
                  A platform designed to enable structured collaboration, idea execution, and company-building in a scalable ecosystem. More details will be revealed soon.
                </p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-purple-600 w-[45%]"></div>
                </div>
                <div className="mt-4 flex justify-between text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-600">
                   <span>Archiving phase</span>
                   <span>45% Complete</span>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#0a0a0a] relative group-hover:scale-[1.02] transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" alt="Abstract Tech" className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Layout size={60} className="text-purple-500 opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Makeup App */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass-card rounded-[40px] md:rounded-[60px] p-8 md:p-24 overflow-hidden border border-cyan-500/10"
          >
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-cyan-500/5 blur-[100px] md:blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center relative z-10 text-center lg:text-left">
              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#0a0a0a] relative group-hover:scale-[1.02] transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop" alt="Beauty App" className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Smartphone size={60} className="text-cyan-400 opacity-20" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-8 md:mb-10 border border-cyan-400/20">
                  Launching Soon
                </div>
                <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 leading-tight uppercase tracking-tighter">MAKEUP <br className="hidden md:block"/> APP</h2>
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                   <CheckCircle size={18} className="text-green-500" />
                   <span className="font-black text-[10px] md:text-sm uppercase tracking-[0.2em] text-gray-300">Status: Completed | Testing Phase</span>
                </div>
                <p className="text-base md:text-xl text-gray-400 mb-10 md:mb-12 leading-relaxed font-medium">
                  A modern, user-focused makeup application designed with performance, usability, and visual experience in mind. Launch scheduled after final testing.
                </p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-cyan-400 w-[95%]"></div>
                </div>
                <div className="mt-4 flex justify-between text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-600">
                   <span>Final QA</span>
                   <span>95% Complete</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Future Note */}
        <div className="mt-20 md:mt-32 p-10 md:p-20 rounded-[40px] md:rounded-[60px] border-2 border-dashed border-white/10 text-center">
          <Package className="w-12 md:w-16 h-12 md:h-16 text-gray-800 mx-auto mb-6 md:mb-8" />
          <h3 className="text-xl md:text-3xl font-black uppercase mb-4 md:mb-6 tracking-tight">More products in pipeline</h3>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-lg font-medium">
            We are consistently exploring new domains to apply our engineering standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;