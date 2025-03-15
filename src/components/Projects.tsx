
import { useState, useEffect } from 'react';
import { projects, categories } from '@/utils/projectsData';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Projects</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities through various projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="relative mb-12">
          <button 
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 mx-auto text-white"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4" />
            <span>Filter: {categories.find(c => c.id === activeCategory)?.name}</span>
          </button>

          <div className={cn(
            "flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 transition-all duration-300 overflow-hidden",
            isFilterOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          )}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category.id 
                    ? "bg-white text-black border-white" 
                    : "border-white/20 text-white hover:border-white"
                )}
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsFilterOpen(false);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-white/70">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
