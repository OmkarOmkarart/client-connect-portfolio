
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight, Layers, Code, Database, Mail, FileCheck, Users, BarChart } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

type ProjectCategory = 'all' | 'client' | 'internal';

interface Project {
  title: string;
  category: 'client' | 'internal';
  description: string;
  role: string;
  tags: string[];
  image: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Stock Exchange Platform using Cryptocurrency",
    category: "client",
    description: "Led the development of a decentralized stock exchange platform utilizing cryptocurrency for secure, real-time trading. Oversaw the integration of blockchain technology, ensuring compliance with financial regulations and delivering a seamless user experience for both retail and institutional traders.",
    role: "Product, Project, and Program Manager",
    tags: ["Cryptocurrency", "Blockchain", "Finance", "Compliance"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1770",
    icon: <Layers className="h-6 w-6 text-gold" />
  },
  {
    title: "Loan Application Mobile App for Major Banks",
    category: "client",
    description: "Managed the end-to-end development of a robust loan application platform for major banking institutions. Delivered both Android and iOS apps, providing a user-friendly interface, secure document management, and real-time loan approval updates to enhance the customer experience and reduce processing time.",
    role: "Product, Project, and Program Manager",
    tags: ["Mobile Apps", "Banking", "Android", "iOS", "UX/UI"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770",
    icon: <Code className="h-6 w-6 text-gold" />
  },
  {
    title: "OTT Platform UI/UX Design for Mobile and Web Apps",
    category: "client",
    description: "Directed the design and implementation of an intuitive UI/UX for an OTT platform across mobile and web applications. Focused on providing a seamless viewing experience, including personalized recommendations, content discovery, and smooth navigation, ensuring high user engagement and retention.",
    role: "Product, Project, and Program Manager",
    tags: ["UI/UX", "OTT Platform", "Mobile Apps", "Web Design"],
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=1771",
    icon: <Code className="h-6 w-6 text-gold" />
  },
  {
    title: "Email Automation Using LLMs and API Integrations",
    category: "client",
    description: "Spearheaded the development of an AI-driven email automation system leveraging large language models (LLMs) and various third-party API integrations. This project automated personalized email campaigns, improving customer engagement and conversion rates while reducing manual effort.",
    role: "Product, Project, and Program Manager",
    tags: ["LLMs", "Automation", "API Integration", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1770",
    icon: <Mail className="h-6 w-6 text-gold" />
  },
  {
    title: "Accounts Payable Automation for Warehouse and Automotive Companies",
    category: "client",
    description: "Led a project to automate accounts payable processes for large warehouse and automotive firms. Integrated AI-driven workflows, enabling real-time invoice processing, vendor management, and fraud detection, which led to significant time savings and cost reductions.",
    role: "Product, Project, and Program Manager",
    tags: ["Accounts Payable", "Automation", "AI", "Fraud Detection"],
    image: "https://images.unsplash.com/photo-1650594208529-3fbd46d1da82?q=80&w=1770",
    icon: <FileCheck className="h-6 w-6 text-gold" />
  },
  {
    title: "HR Use Case Using Agentic AI",
    category: "client",
    description: "Managed the development of an AI-driven HR solution using generative AI to optimize recruitment, employee engagement, and performance management. The system leveraged natural language processing (NLP) and data analytics to provide personalized recommendations and insights for HR teams.",
    role: "Product, Project, and Program Manager",
    tags: ["HR Tech", "Generative AI", "NLP", "Analytics"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1770",
    icon: <Users className="h-6 w-6 text-gold" />
  },
  {
    title: "CASA Projects with Finacle Integration for NBFCs",
    category: "client",
    description: "Oversaw the integration of Core Banking Systems (CBS) with Finacle for CASA (Current Account and Savings Account) products for Non-Banking Financial Companies (NBFCs). The project aimed at streamlining account management processes, improving customer onboarding, and ensuring seamless transactions across platforms.",
    role: "Product, Project, and Program Manager",
    tags: ["Finacle", "CASA", "NBFC", "Core Banking"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1770",
    icon: <Database className="h-6 w-6 text-gold" />
  },
  {
    title: "Internal Workflow Automation System",
    category: "internal",
    description: "Led the design and implementation of an internal workflow automation platform, streamlining processes across multiple departments. The system automated task allocation, approval workflows, and reporting, significantly reducing time spent on manual processes and improving team productivity.",
    role: "Product, Project, and Program Manager",
    tags: ["Workflow Automation", "Process Improvement", "Internal Systems"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1770",
    icon: <Code className="h-6 w-6 text-gold" />
  },
  {
    title: "Employee Performance and Engagement Analytics",
    category: "internal",
    description: "Managed the development of a data-driven internal program aimed at analyzing employee performance and engagement. The platform integrated HR metrics, feedback surveys, and productivity data to provide managers with actionable insights for team development and employee satisfaction.",
    role: "Product, Project, and Program Manager",
    tags: ["Analytics", "HR Metrics", "Employee Engagement"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770",
    icon: <BarChart className="h-6 w-6 text-gold" />
  },
  {
    title: "Internal Knowledge Sharing Platform",
    category: "internal",
    description: "Directed the creation of an internal knowledge management system that centralized documents, best practices, and training materials for employees. The platform incorporated AI-driven search features, enhancing knowledge discovery and promoting cross-functional collaboration within the organization.",
    role: "Product, Project, and Program Manager",
    tags: ["Knowledge Management", "AI Search", "Collaboration"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1772",
    icon: <Database className="h-6 w-6 text-gold" />
  },
  {
    title: "Internal Chatbot for IT Support",
    category: "internal",
    description: "Spearheaded the development of an internal AI-powered chatbot for IT support, allowing employees to resolve technical issues and access FAQs without involving support staff. The chatbot provided real-time solutions, improving efficiency and reducing IT response times.",
    role: "Product, Project, and Program Manager",
    tags: ["Chatbot", "AI", "IT Support", "Automation"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420",
    icon: <Users className="h-6 w-6 text-gold" />
  }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-padding bg-black relative">
      {/* Premium background with diagonal pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-gold">Projects</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gold/70 max-w-3xl mx-auto">
            A showcase of client projects and internal programs that demonstrate my approach to program management.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-black/60 backdrop-blur-sm rounded-lg p-1 border border-gold/20">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-gold text-black' 
                  : 'text-gold hover:bg-gold/10'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'client' 
                  ? 'bg-gold text-black' 
                  : 'text-gold hover:bg-gold/10'
              }`}
              onClick={() => setActiveCategory('client')}
            >
              Client Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'internal' 
                  ? 'bg-gold text-black' 
                  : 'text-gold hover:bg-gold/10'
              }`}
              onClick={() => setActiveCategory('internal')}
            >
              Internal Programs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="card-hover border border-gold/20 bg-black/60 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </AspectRatio>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant={project.category === 'client' ? 'default' : 'secondary'} className={project.category === 'client' ? 'bg-gold text-black hover:bg-gold/90' : 'bg-darkGold hover:bg-darkGold/90'}>
                    {project.category === 'client' ? 'Client Project' : 'Internal Program'}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 p-2 rounded-full border border-gold/30">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gold">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <p className="text-sm font-medium text-gold mb-2">Role:</p>
                <p className="text-gray-300 text-sm mb-4">{project.role}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-gold/30 text-gold/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-gold/10 pt-4">
                <Button variant="ghost" className="text-gold hover:text-gold/90 hover:bg-gold/10 w-full">
                  <span>View Project Details</span> <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
