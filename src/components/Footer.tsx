
import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gold pt-12 pb-6 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Program Management <span className="text-gold">Portfolio</span></h3>
            <p className="text-gold/70 mb-6 max-w-md">
              Delivering strategic program management services that transform visions into reality. 
              Let's collaborate to drive your most important initiatives forward.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <Mail size={18} className="text-gold" />
              </a>
              <a href="#" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <Linkedin size={18} className="text-gold" />
              </a>
              <a href="#" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <Twitter size={18} className="text-gold" />
              </a>
              <a href="#" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <Github size={18} className="text-gold" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Program Strategy</a></li>
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Client Project Management</a></li>
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Process Optimization</a></li>
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Resource Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gold/70 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gold/70 hover:text-gold transition-colors">About</a></li>
              <li><a href="#projects" className="text-gold/70 hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="text-gold/70 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gold/70 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/10 pt-6 text-center text-gold/50 text-sm">
          <p>© {new Date().getFullYear()} Program Management Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
