
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, FileText } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  docs?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Image Generator',
    description: 'A cutting-edge application that uses machine learning to generate unique images from text prompts. Built with React, Node.js, and integrated with OpenAI APIs.',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2670&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
    github: '#',
    live: '#',
    docs: '#',
  },
  {
    id: 2,
    title: 'Smart Task Manager',
    description: 'An intelligent productivity app that helps users manage tasks efficiently with AI-powered prioritization, custom workflows, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2670&auto=format&fit=crop',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Docker'],
    github: '#',
    live: '#',
    docs: '#',
  },
  {
    id: 3,
    title: 'Crypto Dashboard',
    description: 'A comprehensive cryptocurrency tracker and analytics platform with real-time data visualization, price alerts, and portfolio management tools.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2674&auto=format&fit=crop',
    tags: ['React', 'Chart.js', 'Firebase', 'Tailwind CSS'],
    github: '#',
    live: '#',
    docs: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text glow">Projects</span></h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Explore my latest work showcasing my skills, creativity, and technical expertise.
          </p>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-purple3 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative glass-panel overflow-hidden rounded-xl aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-darker to-transparent opacity-60"></div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                {/* Tags */}
                <div className="mb-6 flex flex-wrap justify-center md:justify-start gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-white/5 text-sm px-3 py-1 rounded-full border border-neon-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" className="border-neon-purple hover:bg-neon-purple/20 flex items-center gap-2">
                      <Github size={16} />
                      <span>GitHub</span>
                    </Button>
                  )}
                  
                  {project.live && (
                    <Button size="sm" className="bg-gradient-to-r from-neon-purple to-neon-purple3 hover:opacity-90 flex items-center gap-2">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  )}
                  
                  {project.docs && (
                    <Button variant="ghost" size="sm" className="hover:bg-white/5 flex items-center gap-2">
                      <FileText size={16} />
                      <span>Documentation</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
