
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Calendar, Globe, FileText, Settings, BarChart, Code, Cpu, LineChart, TrendingUp, Zap } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="h-10 w-10 text-gold" />,
    title: "Program Strategy",
    description: "Developing comprehensive program roadmaps that align with organizational objectives and deliver measurable business value."
  },
  {
    icon: <Users className="h-10 w-10 text-gold" />,
    title: "Client Project Management",
    description: "Managing end-to-end client projects with clear communication, milestone tracking, and quality deliverables."
  },
  {
    icon: <Settings className="h-10 w-10 text-gold" />,
    title: "Process Optimization",
    description: "Streamlining workflows and implementing best practices to enhance efficiency and productivity."
  },
  {
    icon: <BarChart className="h-10 w-10 text-gold" />,
    title: "Resource Planning",
    description: "Strategic allocation of resources to ensure projects are delivered on time and within budget constraints."
  },
  {
    icon: <LineChart className="h-10 w-10 text-gold" />,
    title: "Performance Tracking",
    description: "Implementing KPIs and metrics to monitor program performance and enable data-driven decision making."
  },
  {
    icon: <Cpu className="h-10 w-10 text-gold" />,
    title: "AI Implementation",
    description: "Leading integration of artificial intelligence solutions to drive automation and business transformation."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-black relative">
      {/* Premium background with pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services & <span className="text-gold">Expertise</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gold/70 max-w-3xl mx-auto">
            Leveraging proven methodologies and industry best practices to deliver exceptional program management services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-gold/20 bg-black/60 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <CardHeader className="pb-2">
                <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-black border border-gold/30">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gold/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Background image with overlay */}
        <div className="mt-20 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770" 
            alt="Program Management" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">Premium Program Management</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Delivering excellence through strategic planning, meticulous execution, and continuous optimization.
            </p>
            <Button 
              className="bg-gold hover:bg-darkGold text-black text-base py-2 px-6 border border-gold/20"
              onClick={() => window.location.href = "#contact"}
            >
              <Zap className="mr-2 h-4 w-4" /> Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Button = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <button 
    className={`${className} font-medium rounded-md transition-all`} 
    onClick={onClick}
  >
    {children}
  </button>
);

export default ServicesSection;
