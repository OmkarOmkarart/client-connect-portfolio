
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

type ProjectCategory = 'all' | 'client' | 'internal';

interface Project {
  title: string;
  category: 'client' | 'internal';
  description: string;
  tags: string[];
  duration: string;
  outcome: string;
}

const projects: Project[] = [
  {
    title: "Enterprise CRM Implementation",
    category: "client",
    description: "Led the implementation of a complex CRM system for a Fortune 500 financial services company, integrating with 12+ legacy systems.",
    tags: ["CRM", "Financial Services", "System Integration"],
    duration: "18 months",
    outcome: "30% increase in customer satisfaction, 25% reduction in processing time."
  },
  {
    title: "Digital Transformation Initiative",
    category: "client",
    description: "Managed a comprehensive digital transformation program for a healthcare provider, modernizing patient management systems.",
    tags: ["Healthcare", "Digital Transformation", "Change Management"],
    duration: "24 months",
    outcome: "40% improvement in operational efficiency, $2.3M annual cost savings."
  },
  {
    title: "Agile Methodology Adoption",
    category: "internal",
    description: "Spearheaded the transition from waterfall to agile methodology across all development teams, including training and process redesign.",
    tags: ["Agile", "Process Improvement", "Team Development"],
    duration: "8 months",
    outcome: "35% faster time-to-market, increased team satisfaction scores by 28%."
  },
  {
    title: "Supply Chain Optimization",
    category: "client",
    description: "Redesigned supply chain processes for a manufacturing client, implementing new inventory management systems and vendor protocols.",
    tags: ["Supply Chain", "Manufacturing", "Logistics"],
    duration: "12 months",
    outcome: "Reduced inventory costs by 18%, improved fulfillment rates to 97%."
  },
  {
    title: "Project Management Office (PMO) Establishment",
    category: "internal",
    description: "Designed and implemented a centralized PMO to standardize project management practices and improve resource allocation.",
    tags: ["PMO", "Governance", "Best Practices"],
    duration: "6 months",
    outcome: "Standardized reporting across 30+ projects, improved resource utilization by 22%."
  },
  {
    title: "Customer Experience Enhancement",
    category: "client",
    description: "Led a cross-functional initiative to redesign customer touchpoints and service processes for a retail organization.",
    tags: ["Customer Experience", "Retail", "Process Design"],
    duration: "10 months",
    outcome: "NPS score improved from 32 to 48, 15% increase in customer retention."
  },
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of client projects and internal programs that demonstrate my approach to program management.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-lightGray rounded-lg p-1">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-white text-navy shadow' 
                  : 'text-gray-600 hover:text-navy'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'client' 
                  ? 'bg-white text-navy shadow' 
                  : 'text-gray-600 hover:text-navy'
              }`}
              onClick={() => setActiveCategory('client')}
            >
              Client Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'internal' 
                  ? 'bg-white text-navy shadow' 
                  : 'text-gray-600 hover:text-navy'
              }`}
              onClick={() => setActiveCategory('internal')}
            >
              Internal Programs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="card-hover border border-gray-100">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.category === 'client' ? 'default' : 'secondary'} className={project.category === 'client' ? 'bg-teal hover:bg-teal/90' : 'bg-navy hover:bg-navy/90'}>
                    {project.category === 'client' ? 'Client Project' : 'Internal Program'}
                  </Badge>
                  <Badge variant="outline" className="text-gray-500">
                    {project.duration}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-navy">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <p className="text-sm font-medium text-navy mb-2">Outcome:</p>
                <p className="text-gray-600 text-sm mb-4">{project.outcome}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-lightGray text-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-teal hover:text-teal/90 hover:bg-teal/10 w-full">
                  <ExternalLink className="h-4 w-4 mr-2" /> View Project Details
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
