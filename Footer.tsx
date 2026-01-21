import React from 'react';
import { Github, MessageCircle, Linkedin, Mail, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start text-center md:text-left">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-black tracking-tighter text-white">INNCA</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              An innovative digital studio engineering the next generation of scalable products and platforms.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex space-x-6">
              <a href="https://wa.me/+923127641850" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-500 transition-colors">
                <MessageCircle size={22} />
              </a>
              <a href="https://www.linkedin.com/in/m-shehram-6a706639b/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-500 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/MurtazaRaza-gitech/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-500 transition-colors">
                <Github size={22} />
              </a>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest">Contact</h4>
            <a href="mailto:innca.tech@gmail.com" className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors">
              <Mail size={18} />
              <span>innca.tech@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} INNCA. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;