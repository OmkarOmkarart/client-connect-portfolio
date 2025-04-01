
import React from 'react';
import { Check, Briefcase, Users, Calendar, Globe, Award } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black relative">
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1772')] bg-cover bg-fixed bg-center"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-gold">Me</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gold/80 max-w-3xl mx-auto">
            A strategic program manager with a passion for orchestrating complex projects 
            and delivering exceptional results for clients and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full md:w-5/6 mx-auto overflow-hidden rounded-lg border-2 border-gold/30">
              <AspectRatio ratio={4/5} className="bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420" 
                  alt="Omkar Fadnis" 
                  className="object-cover w-full h-full opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </AspectRatio>
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-10 w-32 h-32 bg-black border-2 border-gold p-4 flex items-center justify-center z-20">
              <div className="text-center">
                <Award className="w-10 h-10 text-gold mx-auto mb-2" />
                <p className="text-gold text-sm">PMP Certified</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gold mb-4">
              Turning Vision Into Reality
            </h3>
            <p className="text-gray-300 mb-6">
              With over 8 years of experience in program management, I've successfully led 
              initiatives across various industries, helping organizations achieve their 
              strategic objectives through disciplined planning and execution.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-medium text-gold">Strategic Planning</span> - Developing comprehensive roadmaps that align with business goals
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-medium text-gold">Stakeholder Management</span> - Building consensus and maintaining clear communication
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-medium text-gold">Risk Mitigation</span> - Identifying potential issues and implementing proactive solutions
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-medium text-gold">Resource Optimization</span> - Maximizing efficiency and output from available resources
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-gold/20">
              <h4 className="text-xl font-semibold text-gold mb-4">Professional Background</h4>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <Briefcase className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Senior Program Manager</h5>
                    <p className="text-gray-400">Enterprise Solutions Inc. | 2019 - Present</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Users className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Project Management Lead</h5>
                    <p className="text-gray-400">Innovative Tech Group | 2016 - 2019</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Calendar className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Project Coordinator</h5>
                    <p className="text-gray-400">Strategic Solutions Partners | 2014 - 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
