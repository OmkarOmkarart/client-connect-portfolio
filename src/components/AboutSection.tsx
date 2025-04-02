
import React from 'react';
import { Check, Briefcase, Users, Calendar, Globe, Award, GraduationCap, Medal, FileText, Brain, Cpu, BarChart, Settings, Zap, Layers, Database, Shield, Target, ArrowUpRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';

const AboutSection: React.FC = () => {
  // Define skill categories with their respective icons
  const skillCategories = [
    {
      name: "Program Leadership",
      icon: <Briefcase className="h-5 w-5 text-gold mr-2" />,
      skills: ["Program Strategy", "Project Management", "Agile & Scrum", "Stakeholder Management", "Risk Mitigation"]
    },
    {
      name: "AI & Automation",
      icon: <Brain className="h-5 w-5 text-gold mr-2" />,
      skills: ["LLMs", "RPA", "Email Automation", "Workflow Optimization", "Generative AI"]
    },
    {
      name: "Enterprise Systems",
      icon: <Database className="h-5 w-5 text-gold mr-2" />,
      skills: ["SFDC", "Finacle", "JIRA", "SAP", "Payment Gateways"]
    },
    {
      name: "Digital Transformation",
      icon: <Zap className="h-5 w-5 text-gold mr-2" />,
      skills: ["Process Improvement", "Change Management", "Cross-functional Leadership", "AI Documentation", "Compliance"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-black relative py-24">
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
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
            
            <div className="absolute -bottom-6 -right-6 md:-right-10 w-auto h-auto bg-black border-2 border-gold p-4 flex flex-col items-center justify-center z-20">
              <div className="text-center mb-2">
                <Award className="w-10 h-10 text-gold mx-auto mb-2" />
                <p className="text-gold text-sm">PMP Certified</p>
              </div>
              <div className="text-center">
                <Medal className="w-10 h-10 text-gold mx-auto mb-2" />
                <p className="text-gold text-sm">PRINCE2 Certified</p>
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
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="font-medium text-gold">AI & Automation</span> - Implementing AI-driven solutions to enhance productivity and reduce manual effort
                </p>
              </div>
            </div>

            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-gold/20 mb-8">
              <h4 className="text-xl font-semibold text-gold mb-4">Professional Background</h4>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <Briefcase className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Program Manager</h5>
                    <p className="text-gray-400">E42.ai | July 2024 - Present</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Briefcase className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Project Manager</h5>
                    <p className="text-gray-400">Simplifai | June 2022 - June 2024</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Users className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Business Analyst</h5>
                    <p className="text-gray-400">Signzy | April 2021 - June 2022</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Calendar className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Project Manager</h5>
                    <p className="text-gray-400">UpsideLMS | January 2020 - April 2021</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Globe className="text-gold p-2 bg-black rounded-full border border-gold/30" size={40} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">IT Project Manager</h5>
                    <p className="text-gray-400">Sunday Mobility | February 2018 - September 2019</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-gold/20">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-gold mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-gold">Education</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white">Master in Management Studies (IT)</h5>
                    <p className="text-gray-400">Aditya Institute, Mumbai University</p>
                    <p className="text-gray-500 text-sm">2016 - 2018</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Bachelor in Science (CS)</h5>
                    <p className="text-gray-400">Modern College, Pune University</p>
                    <p className="text-gray-500 text-sm">2013 - 2016</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-gold/20">
                <div className="flex items-center mb-4">
                  <FileText className="text-gold mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-gold">Certifications</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Award className="text-gold mr-2" size={16} />
                    Project Management Professional (PMP)® – PMI
                  </li>
                  <li className="flex items-center">
                    <Award className="text-gold mr-2" size={16} />
                    PRINCE2® Practitioner & Foundation – AXELOS
                  </li>
                  <li className="flex items-center">
                    <Award className="text-gold mr-2" size={16} />
                    Software Product Management – Coursera
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gold mb-6 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-black/70 backdrop-blur-sm border border-gold/20 rounded-lg p-6 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h4 className="text-xl font-semibold text-gold">{category.name}</h4>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <ArrowUpRight className="h-4 w-4 text-gold mr-2" />
                      <span className="text-gold/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: <Target className="h-4 w-4 text-gold mr-2" />, skill: "Budgeting ($2M+)" },
              { icon: <Cpu className="h-4 w-4 text-gold mr-2" />, skill: "Fintech Automation" },
              { icon: <Shield className="h-4 w-4 text-gold mr-2" />, skill: "Compliance" },
              { icon: <Database className="h-4 w-4 text-gold mr-2" />, skill: "CRMNEXT" },
              { icon: <Settings className="h-4 w-4 text-gold mr-2" />, skill: "Process Improvement" },
              { icon: <BarChart className="h-4 w-4 text-gold mr-2" />, skill: "Analytics" },
              { icon: <Users className="h-4 w-4 text-gold mr-2" />, skill: "Team Leadership" },
              { icon: <Globe className="h-4 w-4 text-gold mr-2" />, skill: "Enterprise Integrations" },
              { icon: <Brain className="h-4 w-4 text-gold mr-2" />, skill: "AI Documentation" },
              { icon: <Zap className="h-4 w-4 text-gold mr-2" />, skill: "Digital Transformation" }
            ].map((item, index) => (
              <div key={index} className="bg-black/50 border border-gold/30 px-4 py-3 rounded-md text-gold/80 text-center text-sm hover:bg-gold/10 transition-colors flex items-center justify-center">
                {item.icon}
                <span>{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
