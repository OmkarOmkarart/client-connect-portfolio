
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-navy to-navy/90 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Strategic Program Management for Mission-Critical Projects
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Elevating client projects and internal programs with methodical planning,
              seamless execution, and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-teal hover:bg-teal/90 text-white text-lg py-6 px-8"
                onClick={() => window.location.href = "#projects"}
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
                onClick={() => window.location.href = "#contact"}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-xl">
              <div className="text-center mb-4">
                <span className="inline-block bg-teal px-4 py-1 rounded-full text-white text-sm font-medium">
                  Program Manager
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                Bridging Business & Technology
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal">15+</p>
                  <p className="text-gray-200">Client Projects</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal">8+</p>
                  <p className="text-gray-200">Years Experience</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal">20+</p>
                  <p className="text-gray-200">Internal Programs</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal">95%</p>
                  <p className="text-gray-200">On-time Delivery</p>
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
