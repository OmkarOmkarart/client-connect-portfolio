
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Mail, Download, MapPin, Phone } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/90 opacity-90 z-20"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1770')] bg-cover bg-center z-0"
          style={{ filter: 'brightness(0.3)' }}
        ></div>
      </div>
      
      {/* Animated Golden Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Golden particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold animate-pulse opacity-70"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-gold animate-pulse opacity-50 animation-delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-gold animate-pulse opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-gold animate-pulse opacity-80 animation-delay-1500"></div>
        
        {/* Golden lines */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gold/10"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gold/10"></div>
        
        {/* Golden circular elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-gold/10 rounded-full"></div>
        <div className="absolute -bottom-60 -right-60 w-120 h-120 border border-gold/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-block mb-6 p-2 border border-gold/30 bg-black/50 backdrop-blur">
              <p className="text-gold font-medium">Program Manager | PMP & PRINCE2 Certified</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Omkar</span> <span className="gold-text">Fadnis</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gold/80 max-w-2xl">
              Program Manager specializing in AI-driven automation, fintech solutions, 
              and digital transformation with proven expertise in delivering mission-critical projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-gold">
                <MapPin className="h-5 w-5 mr-2" />
                <span>India</span>
              </div>
              <a href="tel:+919699903354" className="flex items-center text-gold hover:text-gold/80 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 9699903354</span>
              </a>
              <a href="mailto:omkarfadnis777@gmail.com" className="flex items-center text-gold hover:text-gold/80 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/omkarf/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gold hover:text-gold/80 transition-colors">
                <Linkedin className="h-5 w-5 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gold hover:bg-darkGold text-black text-lg py-6 px-8 border border-gold/20"
                onClick={() => window.location.href = "#projects"}
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold/10 text-lg py-6 px-8"
                onClick={() => window.location.href = "#contact"}
              >
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <div className="text-center mb-4">
                <span className="inline-block bg-gold px-4 py-1 rounded-full text-black text-sm font-medium">
                  7+ Years Experience
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gold">
                Bridging Business & Technology
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">$2M+</p>
                  <p className="text-gold/70">Budget Managed</p>
                </div>
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">40%</p>
                  <p className="text-gold/70">Efficiency Increase</p>
                </div>
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">30%</p>
                  <p className="text-gold/70">Faster Delivery</p>
                </div>
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">95%</p>
                  <p className="text-gold/70">On-time Completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
