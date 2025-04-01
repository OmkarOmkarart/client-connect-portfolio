
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Calendar, Globe, FileText, Settings } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-teal" />,
    title: "Program Strategy",
    description: "Developing comprehensive program roadmaps that align with organizational objectives and deliver measurable business value."
  },
  {
    icon: <Users className="h-10 w-10 text-teal" />,
    title: "Client Project Management",
    description: "Managing end-to-end client projects with clear communication, milestone tracking, and quality deliverables."
  },
  {
    icon: <Settings className="h-10 w-10 text-teal" />,
    title: "Process Optimization",
    description: "Streamlining workflows and implementing best practices to enhance efficiency and productivity."
  },
  {
    icon: <Calendar className="h-10 w-10 text-teal" />,
    title: "Resource Planning",
    description: "Strategic allocation of resources to ensure projects are delivered on time and within budget constraints."
  },
  {
    icon: <FileText className="h-10 w-10 text-teal" />,
    title: "Performance Tracking",
    description: "Implementing KPIs and metrics to monitor program performance and enable data-driven decision making."
  },
  {
    icon: <Globe className="h-10 w-10 text-teal" />,
    title: "Cross-functional Leadership",
    description: "Leading diverse teams across departments to achieve common goals and drive organizational success."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Services & Expertise</h2>
          <div className="w-20 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leveraging proven methodologies and industry best practices to deliver exceptional program management services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-none">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
