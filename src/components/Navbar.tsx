
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-navy font-bold text-2xl">
            PM<span className="text-teal">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-charcoal hover:text-teal transition-colors">Home</a>
            <a href="#about" className="text-charcoal hover:text-teal transition-colors">About</a>
            <a href="#services" className="text-charcoal hover:text-teal transition-colors">Services</a>
            <a href="#projects" className="text-charcoal hover:text-teal transition-colors">Projects</a>
            <a href="#testimonials" className="text-charcoal hover:text-teal transition-colors">Testimonials</a>
          </div>
          
          <div className="hidden md:block">
            <Button 
              className="bg-teal hover:bg-teal/90 text-white"
              onClick={() => window.location.href = "#contact"}
            >
              Contact Me
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-charcoal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-charcoal hover:text-teal transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-charcoal hover:text-teal transition-colors" onClick={toggleMenu}>About</a>
              <a href="#services" className="text-charcoal hover:text-teal transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#projects" className="text-charcoal hover:text-teal transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#testimonials" className="text-charcoal hover:text-teal transition-colors" onClick={toggleMenu}>Testimonials</a>
              <Button 
                className="bg-teal hover:bg-teal/90 text-white w-full"
                onClick={() => {
                  window.location.href = "#contact";
                  toggleMenu();
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
