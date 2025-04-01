
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Mail, Download } from 'lucide-react';
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
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-block mb-6 p-2 border border-gold/30 bg-black/50 backdrop-blur">
              <p className="text-gold font-medium">Program Manager</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Omkar</span> <span className="gold-text">Fadnis</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gold/80 max-w-2xl">
              Program Manager specializing in AI-driven automation, fintech solutions, 
              and digital transformation with proven expertise in delivering mission-critical projects.
            </p>
            
            <div className="flex gap-6 mb-8">
              <a href="mailto:omkarfadnis777@gmail.com" className="flex items-center text-gold hover:text-gold/80 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/omkar-fadnis" target="_blank" rel="noopener noreferrer" className="flex items-center text-gold hover:text-gold/80 transition-colors">
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
                  10+ Years Experience
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gold">
                Bridging Business & Technology
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">15+</p>
                  <p className="text-gold/70">Client Projects</p>
                </div>
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">8+</p>
                  <p className="text-gold/70">Years Experience</p>
                </div>
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">20+</p>
                  <p className="text-gold/70">Internal Programs</p>
                </div>
                <div className="bg-black/60 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">95%</p>
                  <p className="text-gold/70">On-time Delivery</p>
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
