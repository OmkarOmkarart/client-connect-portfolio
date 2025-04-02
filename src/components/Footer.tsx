
import React from 'react';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gold pt-12 pb-6 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/35957e47-1a44-4523-8523-ccbc288580dd.png" 
                alt="Omkar Fadnis" 
                className="h-12" 
              />
            </div>
            <p className="text-gold/70 mb-6 max-w-md">
              Strategic program management professional specializing in AI-driven automation, 
              fintech solutions, and digital transformation with proven expertise in 
              delivering mission-critical projects.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:omkarfadnis777@gmail.com" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <Mail size={18} className="text-gold" />
              </a>
              <a href="https://www.linkedin.com/in/omkarf/" target="_blank" rel="noopener noreferrer" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <Linkedin size={18} className="text-gold" />
              </a>
              <a href="tel:+919699903354" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <Phone size={18} className="text-gold" />
              </a>
              <a href="#" className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20">
                <MapPin size={18} className="text-gold" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Expertise</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Program Strategy</a></li>
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">AI Implementation</a></li>
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Digital Transformation</a></li>
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Agile Methodology</a></li>
              <li><a href="#services" className="text-gold/70 hover:text-gold transition-colors">Enterprise Integrations</a></li>
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
          <p>© {new Date().getFullYear()} Omkar Fadnis. All rights reserved.</p>
          <p className="mt-2">PMP & PRINCE2 Certified Program Manager</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
