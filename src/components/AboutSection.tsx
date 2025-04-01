
import React from 'react';
import { Check, Briefcase, Users, Calendar, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strategic program manager with a passion for orchestrating complex projects 
            and delivering exceptional results for clients and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">
              Turning Vision Into Reality
            </h3>
            <p className="text-gray-600 mb-6">
              With over 8 years of experience in program management, I've successfully led 
              initiatives across various industries, helping organizations achieve their 
              strategic objectives through disciplined planning and execution.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="text-teal mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-medium text-navy">Strategic Planning</span> - Developing comprehensive roadmaps that align with business goals
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-teal mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-medium text-navy">Stakeholder Management</span> - Building consensus and maintaining clear communication
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-teal mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-medium text-navy">Risk Mitigation</span> - Identifying potential issues and implementing proactive solutions
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-teal mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <span className="font-medium text-navy">Resource Optimization</span> - Maximizing efficiency and output from available resources
                </p>
              </div>
            </div>
          </div>

          <div className="bg-lightGray p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-navy mb-6">Professional Background</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <Briefcase className="text-teal p-2 bg-white rounded-full shadow-md" size={40} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Senior Program Manager</h4>
                  <p className="text-gray-600">Enterprise Solutions Inc. | 2019 - Present</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Users className="text-teal p-2 bg-white rounded-full shadow-md" size={40} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Project Management Lead</h4>
                  <p className="text-gray-600">Innovative Tech Group | 2016 - 2019</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Calendar className="text-teal p-2 bg-white rounded-full shadow-md" size={40} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Project Coordinator</h4>
                  <p className="text-gray-600">Strategic Solutions Partners | 2014 - 2016</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Globe className="text-teal p-2 bg-white rounded-full shadow-md" size={40} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Education</h4>
                  <p className="text-gray-600">MBA, Project Management | PMP Certified</p>
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
