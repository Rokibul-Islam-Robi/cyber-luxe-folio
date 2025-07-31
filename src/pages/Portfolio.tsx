import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import PlanetAnimation from '../components/PlanetAnimation';
import { 
  GithubLogo, 
  LinkedinLogo, 
  EnvelopeSimple, 
  DownloadSimple, 
  ArrowRight,
  Code,
  Palette,
  Rocket,
  Monitor,
  Globe,
  Database
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations with slide effects
      gsap.fromTo('.hero-title', 
        { opacity: 0, x: -100, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo('.hero-cta', 
        { opacity: 0, x: -60, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 1.2 }
      );

      gsap.fromTo('.spline-container', 
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', delay: 0.8 }
      );

      // Floating orbs animation
      gsap.to('.glow-orb-1', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      gsap.to('.glow-orb-2', {
        y: 15,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1
      });

      gsap.to('.glow-orb-3', {
        y: -25,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2
      });

      // About section animations
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.about-image', 
            { opacity: 0, x: -60, filter: 'blur(5px)' },
            { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
          );

          gsap.fromTo('.about-content', 
            { opacity: 0, x: 60 },
            { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
          );

          gsap.fromTo('.skill-icon', 
            { opacity: 0, y: 30, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.1, delay: 0.5 }
          );
        }
      });

      // Projects section animations
      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.project-card', 
            { opacity: 0, y: 60, filter: 'blur(3px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', stagger: 0.15 }
          );
        }
      });

      // Contact section animations
      ScrollTrigger.create({
        trigger: contactRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.contact-form', 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
          );

          gsap.fromTo('.contact-info', 
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: Code, name: 'HTML', color: 'text-orange-400' },
    { icon: Palette, name: 'CSS', color: 'text-blue-400' },
    { icon: Rocket, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: Monitor, name: 'React', color: 'text-cyan-400' },
    { icon: Globe, name: 'GSAP', color: 'text-green-400' },
    { icon: Database, name: 'Node.js', color: 'text-green-500' },
  ];

  const projects = [
    {
      id: 1,
      title: "3D Interactive Email Platform",
      description: "Modern email solution with 3D animations and developer-focused features.",
      tech: ["React", "Three.js", "GSAP"],
      image: "/lovable-uploads/09356399-4a00-47d5-b816-7991d94860bd.png"
    },
    {
      id: 2,
      title: "Next-Level Gaming UI",
      description: "Futuristic gaming interface with advanced 3D elements and smooth animations.",
      tech: ["React", "WebGL", "TypeScript"],
      image: "/lovable-uploads/62685ee9-0ba7-4378-8471-c27123d43751.png"
    },
    {
      id: 3,
      title: "3D Portfolio Website",
      description: "Immersive portfolio experience with cutting-edge 3D visuals.",
      tech: ["Spline", "React", "GSAP"],
      image: "/lovable-uploads/52545b39-a092-42b4-96e0-013af841c7d5.png"
    },
    {
      id: 4,
      title: "Gaming Website Platform",
      description: "Dynamic gaming platform with interactive character showcases.",
      tech: ["React", "Framer Motion", "CSS3"],
      image: "/lovable-uploads/3ec37a13-3d91-4dee-9275-c66a34b180e0.png"
    },
    {
      id: 5,
      title: "Animation Tools Platform",
      description: "Professional animation tools platform with modern UI design.",
      tech: ["React", "GSAP", "Tailwind"],
      image: "/lovable-uploads/4060dd43-2597-48b4-9abe-93c675ecd0fc.png"
    },
    {
      id: 6,
      title: "Developer Portfolio",
      description: "Clean and modern portfolio design with smooth interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/lovable-uploads/b3cad411-7107-4c48-8a87-4b066956b466.png"
    }
  ];

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
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Hi, I'm{' '}
              <span className="text-white">Rokibul Islam Robi</span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">
                Software Engineer
              </span>
            </h1>
            
            <p className="hero-subtitle text-text-secondary text-lg md:text-xl mb-8 max-w-2xl">
              Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="neon-button group">
                Hire Me
                <ArrowRight size={20} className="ml-2 inline transition-transform group-hover:translate-x-1" />
              </button>
              <button className="glass-card px-8 py-3 border border-glass-border/30 text-text-primary hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center">
                <DownloadSimple size={20} className="mr-2" />
                Download CV
              </button>
            </div>
          </div>
          
          <div className="spline-container lg:h-screen flex items-center justify-center">
            <div className="w-full h-96 lg:h-full rounded-xl overflow-hidden">
              <iframe 
                src='https://my.spline.design/particleplanet-5e0fIrNj2I6HQxOgBFekzc02/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                className="pointer-events-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="about-image">
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="glass-card p-8 rounded-full">
                  <img 
                    src="/lovable-uploads/967a4f32-a2c4-4362-a825-f837f03c0db1.png" 
                    alt="Rokibul Islam Robi" 
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-xl opacity-50"></div>
              </div>
            </div>
            
            <div className="about-content">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                I'm a passionate software engineer with expertise in modern web technologies. 
                I specialize in building scalable applications and creating immersive user experiences 
                through innovative design and cutting-edge technology.
              </p>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-icon text-center group">
                    <div className="glass-card p-4 rounded-lg hover:shadow-glow-blue transition-all duration-300">
                      <skill.icon size={32} className={`${skill.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                      <span className="text-xs text-text-muted">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="neon-button">
                  Get In Touch
                </button>
                <button className="glass-card px-6 py-3 border border-glass-border/30 text-text-primary hover:border-neon-purple/50 transition-all duration-300">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A showcase of my latest work in web development, 3D experiences, and innovative digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="project-card glass-card p-6 hover:shadow-glow-strong transition-all duration-500 group">
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
                
                <button className="w-full glass-card py-2 text-sm font-medium text-text-primary hover:text-neon-blue border border-glass-border/30 hover:border-neon-blue/50 transition-all duration-300">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="contact-info">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">Let's Connect</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and creative projects. 
                Whether you have a question or just want to say hello, feel free to drop me a line.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <EnvelopeSimple size={24} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">Email</p>
                    <p className="text-text-secondary">hello@rokibulrobi.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <GithubLogo size={24} className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">GitHub</p>
                    <p className="text-text-secondary">github.com/rokibulrobi</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <LinkedinLogo size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">LinkedIn</p>
                    <p className="text-text-secondary">linkedin.com/in/rokibulrobi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form glass-card p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-text-primary font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-text-primary font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-text-primary font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button type="submit" className="neon-button w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-glass-border/20">
        <div className="container mx-auto text-center">
          <p className="text-text-muted mb-4">
            © 2024 ROBI. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-text-secondary hover:text-neon-blue transition-colors">
              <GithubLogo size={24} />
            </a>
            <a href="#" className="text-text-secondary hover:text-neon-purple transition-colors">
              <LinkedinLogo size={24} />
            </a>
            <a href="#" className="text-text-secondary hover:text-neon-cyan transition-colors">
              <EnvelopeSimple size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;