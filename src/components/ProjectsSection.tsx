
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

type ProjectCategory = 'all' | 'client' | 'internal';

interface Project {
  title: string;
  category: 'client' | 'internal';
  description: string;
  tags: string[];
  duration: string;
  outcome: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Enterprise CRM Implementation",
    category: "client",
    description: "Led the implementation of a complex CRM system for a Fortune 500 financial services company, integrating with 12+ legacy systems.",
    tags: ["CRM", "Financial Services", "System Integration"],
    duration: "18 months",
    outcome: "30% increase in customer satisfaction, 25% reduction in processing time.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1770"
  },
  {
    title: "Digital Transformation Initiative",
    category: "client",
    description: "Managed a comprehensive digital transformation program for a healthcare provider, modernizing patient management systems.",
    tags: ["Healthcare", "Digital Transformation", "Change Management"],
    duration: "24 months",
    outcome: "40% improvement in operational efficiency, $2.3M annual cost savings.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1770"
  },
  {
    title: "Agile Methodology Adoption",
    category: "internal",
    description: "Spearheaded the transition from waterfall to agile methodology across all development teams, including training and process redesign.",
    tags: ["Agile", "Process Improvement", "Team Development"],
    duration: "8 months",
    outcome: "35% faster time-to-market, increased team satisfaction scores by 28%.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1770"
  },
  {
    title: "Supply Chain Optimization",
    category: "client",
    description: "Redesigned supply chain processes for a manufacturing client, implementing new inventory management systems and vendor protocols.",
    tags: ["Supply Chain", "Manufacturing", "Logistics"],
    duration: "12 months",
    outcome: "Reduced inventory costs by 18%, improved fulfillment rates to 97%.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1770"
  },
  {
    title: "Project Management Office (PMO) Establishment",
    category: "internal",
    description: "Designed and implemented a centralized PMO to standardize project management practices and improve resource allocation.",
    tags: ["PMO", "Governance", "Best Practices"],
    duration: "6 months",
    outcome: "Standardized reporting across 30+ projects, improved resource utilization by 22%.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1772"
  },
  {
    title: "Customer Experience Enhancement",
    category: "client",
    description: "Led a cross-functional initiative to redesign customer touchpoints and service processes for a retail organization.",
    tags: ["Customer Experience", "Retail", "Process Design"],
    duration: "10 months",
    outcome: "NPS score improved from 32 to 48, 15% increase in customer retention.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420"
  },
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
                  <Badge variant="outline" className="text-white border-gold/30 bg-black/60">
                    {project.duration}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gold">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <p className="text-sm font-medium text-gold mb-2">Outcome:</p>
                <p className="text-gray-300 text-sm mb-4">{project.outcome}</p>
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
