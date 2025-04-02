
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-gold font-bold text-2xl flex items-center">
            <img 
              src="/lovable-uploads/35957e47-1a44-4523-8523-ccbc288580dd.png" 
              alt="Omkar Fadnis" 
              className="h-14 mr-2" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gold hover:text-lightGold transition-colors">Home</a>
            <a href="#about" className="text-gold hover:text-lightGold transition-colors">About</a>
            <a href="#services" className="text-gold hover:text-lightGold transition-colors">Services</a>
            <a href="#projects" className="text-gold hover:text-lightGold transition-colors">Projects</a>
            <a href="#testimonials" className="text-gold hover:text-lightGold transition-colors">Testimonials</a>
          </div>
          
          <div className="hidden md:block">
            <Button 
              className="bg-gold hover:bg-darkGold text-black"
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
              className="text-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-black/90 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gold hover:text-lightGold transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-gold hover:text-lightGold transition-colors" onClick={toggleMenu}>About</a>
              <a href="#services" className="text-gold hover:text-lightGold transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#projects" className="text-gold hover:text-lightGold transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#testimonials" className="text-gold hover:text-lightGold transition-colors" onClick={toggleMenu}>Testimonials</a>
              <Button 
                className="bg-gold hover:bg-darkGold text-black w-full"
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
