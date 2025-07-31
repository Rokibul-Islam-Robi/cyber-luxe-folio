import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import { 
  GithubLogo, 
  ExternalLink, 
  Star,
  Eye,
  Fork,
  Calendar,
  Code,
  Globe,
  Rocket
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const featuredProjects = [
    {
      id: 1,
      title: "3D Interactive Email Platform",
      description: "Modern email solution with 3D animations and developer-focused features. Built with React, Three.js, and GSAP for immersive user experiences.",
      tech: ["React", "Three.js", "GSAP", "TypeScript"],
      image: "/lovable-uploads/09356399-4a00-47d5-b816-7991d94860bd.png",
      github: "https://github.com/tasnia/email-platform",
      live: "https://email-platform.tasnia.dev",
      stats: { stars: 45, forks: 12, views: 1200 }
    },
    {
      id: 2,
      title: "Next-Level Gaming UI",
      description: "Futuristic gaming interface with advanced 3D elements and smooth animations. Features real-time data visualization and interactive components.",
      tech: ["React", "WebGL", "TypeScript", "Framer Motion"],
      image: "/lovable-uploads/62685ee9-0ba7-4378-8471-c27123d43751.png",
      github: "https://github.com/tasnia/gaming-ui",
      live: "https://gaming-ui.tasnia.dev",
      stats: { stars: 78, forks: 23, views: 2100 }
    },
    {
      id: 3,
      title: "3D Portfolio Website",
      description: "Immersive portfolio experience with cutting-edge 3D visuals. Showcases projects in an interactive 3D environment with smooth transitions.",
      tech: ["Spline", "React", "GSAP", "Three.js"],
      image: "/lovable-uploads/52545b39-a092-42b4-96e0-013af841c7d5.png",
      github: "https://github.com/tasnia/3d-portfolio",
      live: "https://3d-portfolio.tasnia.dev",
      stats: { stars: 156, forks: 34, views: 4500 }
    }
  ];

  const allProjects = [
    {
      id: 4,
      title: "Gaming Website Platform",
      description: "Dynamic gaming platform with interactive character showcases and real-time features.",
      tech: ["React", "Framer Motion", "CSS3", "Node.js"],
      image: "/lovable-uploads/3ec37a13-3d91-4dee-9275-c66a34b180e0.png",
      github: "https://github.com/tasnia/gaming-platform",
      live: "https://gaming-platform.tasnia.dev",
      stats: { stars: 32, forks: 8, views: 890 }
    },
    {
      id: 5,
      title: "Animation Tools Platform",
      description: "Professional animation tools platform with modern UI design and advanced features.",
      tech: ["React", "GSAP", "Tailwind", "Express"],
      image: "/lovable-uploads/4060dd43-2597-48b4-9abe-93c675ecd0fc.png",
      github: "https://github.com/tasnia/animation-tools",
      live: "https://animation-tools.tasnia.dev",
      stats: { stars: 67, forks: 15, views: 1800 }
    },
    {
      id: 6,
      title: "Developer Portfolio",
      description: "Clean and modern portfolio design with smooth interactions and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      image: "/lovable-uploads/b3cad411-7107-4c48-8a87-4b066956b466.png",
      github: "https://github.com/tasnia/portfolio",
      live: "https://portfolio.tasnia.dev",
      stats: { stars: 89, forks: 21, views: 3200 }
    },
    {
      id: 7,
      title: "E-Commerce Dashboard",
      description: "Comprehensive e-commerce dashboard with analytics, inventory management, and sales tracking.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: "/lovable-uploads/09356399-4a00-47d5-b816-7991d94860bd.png",
      github: "https://github.com/tasnia/ecommerce-dashboard",
      live: "https://ecommerce-dashboard.tasnia.dev",
      stats: { stars: 124, forks: 28, views: 4100 }
    },
    {
      id: 8,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      tech: ["React", "Firebase", "TypeScript", "Tailwind"],
      image: "/lovable-uploads/62685ee9-0ba7-4378-8471-c27123d43751.png",
      github: "https://github.com/tasnia/task-manager",
      live: "https://task-manager.tasnia.dev",
      stats: { stars: 95, forks: 19, views: 2800 }
    },
    {
      id: 9,
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps and detailed forecasts.",
      tech: ["React", "OpenWeather API", "Leaflet", "CSS3"],
      image: "/lovable-uploads/52545b39-a092-42b4-96e0-013af841c7d5.png",
      github: "https://github.com/tasnia/weather-dashboard",
      live: "https://weather-dashboard.tasnia.dev",
      stats: { stars: 73, forks: 16, views: 1900 }
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />
      
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Highlighted projects that showcase my expertise in modern web development and innovative design.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-card glass-card p-6 hover:shadow-glow-strong transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
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
                      <Fork size={16} />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass-card py-2 text-sm font-medium text-text-primary hover:text-neon-blue border border-glass-border/30 hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <GithubLogo size={16} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass-card py-2 text-sm font-medium text-text-primary hover:text-neon-purple border border-glass-border/30 hover:border-neon-purple/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="all-projects-section py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              All <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A comprehensive collection of my work, from small experiments to large-scale applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className="project-card glass-card p-6 hover:shadow-glow-blue transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
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
                      <Fork size={16} />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass-card py-2 text-sm font-medium text-text-primary hover:text-neon-blue border border-glass-border/30 hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <GithubLogo size={16} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass-card py-2 text-sm font-medium text-text-primary hover:text-neon-purple border border-glass-border/30 hover:border-neon-purple/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
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
    </div>
  );
};

export default Projects; 