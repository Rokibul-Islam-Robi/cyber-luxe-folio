import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import PlanetAnimation from '../components/PlanetAnimation';
import ProjectCard from '../components/ProjectCard';
import ProjectManager from '../components/ProjectManager';
import { getFeaturedProjects, getAllProjects } from '../data/projects';
import { 
  GithubLogo, 
  Globe, 
  Star, 
  Calendar,
  MapPin,
  Lightbulb,
  Rocket,
  Code,
  Link,
  Plus
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isProjectManagerOpen, setIsProjectManagerOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.projects-hero-title', 
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo('.projects-hero-subtitle', 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      // Featured projects animations
      ScrollTrigger.create({
        trigger: '.featured-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.featured-card', 
            { opacity: 0, y: 60, filter: 'blur(3px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', stagger: 0.2 }
          );
        }
      });

      // All projects animations
      ScrollTrigger.create({
        trigger: '.all-projects-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.project-card', 
            { opacity: 0, y: 40, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.1 }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Planet Animation Background */}
      <PlanetAnimation />
      
      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb glow-orb-1 w-64 h-64 bg-neon-blue/20 top-20 left-10"></div>
        <div className="glow-orb glow-orb-2 w-48 h-48 bg-neon-purple/30 top-1/3 right-20"></div>
        <div className="glow-orb glow-orb-3 w-32 h-32 bg-neon-cyan/25 bottom-1/4 left-1/3"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6">
              Projects
            </span>
          </div>
          
          <h1 className="projects-hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          
          <p className="projects-hero-subtitle text-text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            A showcase of my latest work in web development, 3D experiences, and innovative digital solutions. 
            Each project represents a unique challenge and creative solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button group">
              View All Projects
              <Rocket size={20} className="ml-2 inline transition-transform group-hover:translate-x-1" />
            </button>
            <button className="glass-card px-8 py-3 border border-glass-border/30 text-text-primary hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center">
              <GithubLogo size={20} className="mr-2" />
              GitHub Profile
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-section py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Featured Projects
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Highlighted projects that showcase my expertise in modern web development and innovative design.
            </p>
            <button
              onClick={() => setIsProjectManagerOpen(true)}
              className="neon-button group"
            >
              <Plus size={20} className="mr-2" />
              Add New Project
            </button>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="all-projects-section py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              All Projects
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A comprehensive collection of my work, from small experiments to large-scale applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="all" />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 text-center">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-text-secondary text-lg mb-8">
              Let's collaborate on your next innovative project. I'm always excited to work on new challenges and bring ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button group">
                Start a Project
                <Rocket size={20} className="ml-2 inline transition-transform group-hover:translate-x-1" />
              </button>
              <button className="glass-card px-8 py-3 border border-glass-border/30 text-text-primary hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center">
                <Code size={20} className="mr-2" />
                View GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-glass-border/20">
        <div className="container mx-auto text-center">
          <p className="text-text-muted mb-4">
            © 2024 TASNIA. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Manager Modal */}
      <ProjectManager
        isOpen={isProjectManagerOpen}
        onClose={() => setIsProjectManagerOpen(false)}
        onAddProject={(newProject) => {
          // Here you would typically save to a database or state management
          console.log('New project to add:', newProject);
          // For now, we'll just close the modal
          setIsProjectManagerOpen(false);
        }}
      />
    </div>
  );
};

export default Projects; 