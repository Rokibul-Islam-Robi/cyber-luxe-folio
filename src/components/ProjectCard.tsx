import { useState } from 'react';
import { GithubLogo, Globe, Star, Code, Link, ArrowRight } from 'phosphor-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'all';
}

const ProjectCard = ({ project, variant = 'all' }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-card p-6 hover:shadow-glow-strong transition-all duration-500 group ${
        variant === 'featured' ? 'featured-card' : 'project-card'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* GitHub Button Overlay */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-2 rounded-lg bg-neon-blue/20 border border-neon-blue/30 text-white hover:bg-neon-blue/30 transition-all duration-300"
          >
            <GithubLogo size={20} />
          </a>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-neon-blue transition-colors">
        {project.title}
      </h3>
      
      <p className="text-text-secondary mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-1">
            <Star size={16} />
            <span>{project.stats.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <Code size={16} />
            <span>{project.stats.forks}</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={16} />
            <span>{project.stats.views}</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 glass-card py-2 text-sm font-medium text-text-primary hover:text-neon-blue border border-glass-border/30 hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <GithubLogo size={16} />
          GitHub
        </a>
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass-card py-2 text-sm font-medium text-text-primary hover:text-neon-purple border border-glass-border/30 hover:border-neon-purple/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Link size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 