
import { useState } from 'react';
import { Project } from '@/utils/projectsData';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { AspectRatio } from './ui/aspect-ratio';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;
  
  // Determine if project is private (Java projects) or has a live demo (MERN/React)
  const isPrivate = project.category === 'java';
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <AspectRatio ratio={16/9} className="w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.log(`Error loading image for ${project.title}`);
              target.src = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </AspectRatio>
      )}
      
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5"
          >
            <Icon 
              className="h-6 w-6 transition-transform duration-500 text-white"
              style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }} 
            />
          </div>
          <Badge variant="secondary" className="text-sm font-medium bg-white/10 text-white">
            {project.category === 'java' ? 'Java' : 
             project.category === 'mern' ? 'MERN Stack' : 'React'}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/80">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className={cn(
        "absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-6",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/80 mb-6 text-center">{project.description}</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/90"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          
          {isPrivate ? (
            <div
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white cursor-not-allowed"
              aria-label="Private project"
            >
              <Lock className="h-5 w-5" />
            </div>
          ) : project.link ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
