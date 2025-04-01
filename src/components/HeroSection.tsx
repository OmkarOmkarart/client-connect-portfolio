
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-premium-gradient text-gold min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <p className="text-gold/80 mb-2">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, my name's <span className="gold-text">Omkar.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gold/80">
              Program Manager specializing in AI-driven automation, fintech solutions, 
              and digital transformation with proven expertise in delivering mission-critical projects.
            </p>
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
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 shadow-xl">
              <div className="text-center mb-4">
                <span className="inline-block bg-gold px-4 py-1 rounded-full text-black text-sm font-medium">
                  Program Manager
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                Bridging Business & Technology
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-black/50 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">15+</p>
                  <p className="text-gold/70">Client Projects</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">8+</p>
                  <p className="text-gold/70">Years Experience</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gold/10">
                  <p className="text-3xl font-bold text-gold">20+</p>
                  <p className="text-gold/70">Internal Programs</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gold/10">
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
