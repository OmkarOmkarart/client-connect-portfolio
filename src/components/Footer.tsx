
import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Program Management <span className="text-teal">Portfolio</span></h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Delivering strategic program management services that transform visions into reality. 
              Let's collaborate to drive your most important initiatives forward.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Mail size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Program Strategy</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Client Project Management</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Process Optimization</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal transition-colors">Resource Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-teal transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-teal transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-teal transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-teal transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Program Management Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
