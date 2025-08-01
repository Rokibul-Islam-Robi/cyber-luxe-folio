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
  Database,
  Medal
} from 'phosphor-react';
import { cvLinks } from '../data/cv';
import CertificateCard from '../components/CertificateCard';
import { getCertificates, getWorkshops } from '../data/certificates';
import CVPreview from '../components/CVPreview';

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

      // Certificates section animations
      ScrollTrigger.create({
        trigger: '.certificates-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.certificates-section h2', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
          );

          gsap.fromTo('.certificates-section .certification-card', 
            { opacity: 0, y: 60, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.2, delay: 0.3 }
          );
        }
      });

      // Contact info section animations - DISABLED
      // ScrollTrigger.create({
      //   trigger: '.contact-info-section',
      //   start: 'top 80%',
      //   onEnter: () => {
      //     gsap.fromTo('.corporate-contact-card', 
      //       { opacity: 0, y: 60, scale: 0.95 },
      //       { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      //     );
      //   }
      // });

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
              <span className="text-3xl md:text-4xl lg:text-5xl" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
              <CVPreview type="cv">
                <a 
                  href={cvLinks.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-8 py-3 border border-glass-border/30 text-text-primary hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center hover:shadow-glow-blue"
                >
                  <DownloadSimple size={20} className="mr-2" />
                  Download CV
                </a>
              </CVPreview>
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                About Me
              </h2>
              
              <p className="text-white text-lg mb-8 leading-relaxed">
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

      {/* Contact Information Section */}
      <section className="contact-info-section py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Contact Information
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Get in touch with me for collaborations, opportunities, or just to say hello.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="corporate-contact-card relative glass-card p-8 lg:p-12 overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-background rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Personal Info */}
                  <div className="space-y-6">
                                         <div className="flex items-center gap-4">
                       <div className="glass-card p-3 rounded-lg">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-neon-blue">
                           <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                         </svg>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-text-primary">Rokibul Islam Robi</h3>
                         <p className="text-text-secondary">Software Engineering Student</p>
                       </div>
                     </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="glass-card p-2 rounded-lg">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-purple">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-text-secondary text-sm">Contact Number</p>
                          <p className="text-text-primary font-medium">01531150655</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="glass-card p-2 rounded-lg">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-cyan">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-text-secondary text-sm">Primary Email</p>
                          <p className="text-text-primary font-medium">rokebul.islam088@gmail.com</p>
                        </div>
                      </div>
                      
                                             <div className="flex items-center gap-4">
                         <div className="glass-card p-2 rounded-lg">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-blue">
                             <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                           </svg>
                         </div>
                         <div>
                           <p className="text-text-secondary text-sm">Academic Email</p>
                           <p className="text-text-primary font-medium">islam222053411672diu.edu.bd</p>
                         </div>
                       </div>
                       
                       <div className="flex items-center gap-4">
                         <div className="glass-card p-2 rounded-lg">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-purple">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                           </svg>
                         </div>
                         <div>
                           <p className="text-text-secondary text-sm">Occupation</p>
                           <p className="text-text-primary font-medium">Student</p>
                         </div>
                       </div>
                       
                       <div className="flex items-center gap-4">
                         <div className="glass-card p-2 rounded-lg">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-cyan">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                           </svg>
                         </div>
                         <div>
                           <p className="text-text-secondary text-sm">Nationality</p>
                           <p className="text-text-primary font-medium">Bangladeshi</p>
                         </div>
                       </div>
                       
                       <div className="flex items-center gap-4">
                         <div className="glass-card p-2 rounded-lg">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-red-400">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                           </svg>
                         </div>
                         <div>
                           <p className="text-text-secondary text-sm">Blood Group</p>
                           <p className="text-text-primary font-medium">B+</p>
                         </div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h4>
                    <div className="space-y-3">
                      <CVPreview type="cv">
                        <a 
                          href={cvLinks.cv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full glass-card p-4 text-left hover:border-neon-blue/50 transition-all duration-300 border border-glass-border/30 rounded-lg group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-neon-blue/10">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-blue">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              </div>
                              <span className="text-text-primary font-medium">Download CV</span>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-secondary group-hover:text-neon-blue transition-colors">
                              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 19l8-8-8-8z"/>
                            </svg>
                          </div>
                        </a>
                      </CVPreview>
                      
                      <button className="w-full glass-card p-4 text-left hover:border-neon-purple/50 transition-all duration-300 border border-glass-border/30 rounded-lg group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-neon-purple/10">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-purple">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                              </svg>
                            </div>
                            <span className="text-text-primary font-medium">Send Email</span>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-secondary group-hover:text-neon-purple transition-colors">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 19l8-8-8-8z"/>
                          </svg>
                        </div>
                      </button>
                      
                      <button className="w-full glass-card p-4 text-left hover:border-neon-cyan/50 transition-all duration-300 border border-glass-border/30 rounded-lg group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-neon-cyan/10">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neon-cyan">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <span className="text-text-primary font-medium">Schedule Call</span>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-secondary group-hover:text-neon-cyan transition-colors">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 19l8-8-8-8z"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Featured Projects
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
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

      {/* Certificates Section */}
      <section className="certificates-section py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Certificates & Workshops
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Industry-recognized certifications and hands-on workshops that validate my expertise in various technologies.
            </p>
          </div>
          
          {/* Certificates */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="glass-card p-3 rounded-lg mr-4">
                <Medal size={32} className="text-neon-purple" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Professional Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCertificates().slice(0, 3).map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </div>
          
          {/* Workshops */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="glass-card p-3 rounded-lg mr-4">
                <Code size={32} className="text-neon-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Workshops & Training</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getWorkshops().slice(0, 3).map((workshop) => (
                <CertificateCard key={workshop.id} certificate={workshop} />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/education" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg border-2 border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300 shadow-lg hover:shadow-glow-blue"
            >
              View All Certificates
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Get In Touch
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="contact-info">
              <h3 className="text-3xl font-bold mb-8 text-text-primary">Let's Connect</h3>
              <p className="text-text-secondary mb-10 leading-relaxed text-lg">
                I'm always interested in hearing about new opportunities and creative projects. 
                Whether you have a question or just want to say hello, feel free to drop me a line.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-glow-blue transition-all duration-300">
                  <div className="glass-card p-3 rounded-lg">
                    <EnvelopeSimple size={24} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">Email</p>
                    <p className="text-text-secondary">rokebul.islam088@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-glow-purple transition-all duration-300">
                  <div className="glass-card p-3 rounded-lg">
                    <GithubLogo size={24} className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">GitHub</p>
                    <p className="text-text-secondary">github.com/Rokibul-Islam-Robi</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-glow-cyan transition-all duration-300">
                  <div className="glass-card p-3 rounded-lg">
                    <LinkedinLogo size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">LinkedIn</p>
                    <p className="text-text-secondary">linkedin.com/in/rokibulislam088</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form glass-card p-10">
              <h3 className="text-2xl font-bold mb-8 text-text-primary text-center">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-text-primary font-medium mb-3">Name</label>
                  <input 
                    type="text" 
                    className="input-glow w-full px-4 py-4 rounded-lg text-text-primary placeholder-text-muted"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-text-primary font-medium mb-3">Email</label>
                  <input 
                    type="email" 
                    className="input-glow w-full px-4 py-4 rounded-lg text-text-primary placeholder-text-muted"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-text-primary font-medium mb-3">Message</label>
                  <textarea 
                    rows={5}
                    className="input-glow w-full px-4 py-4 rounded-lg text-text-primary placeholder-text-muted resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button type="submit" className="neon-button w-full py-4 text-lg font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-glass-border/20">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Get in Touch */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-text-primary mb-4">Get in Touch</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://github.com/Rokibul-Islam-Robi" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-neon-blue transition-colors">
                  <GithubLogo size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rokibulislam088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-neon-purple transition-colors">
                  <LinkedinLogo size={24} />
                </a>
                <a href="https://www.facebook.com/Its.Robbii?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-neon-cyan transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-text-secondary hover:text-neon-cyan transition-colors">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="mailto:hello@rokibulrobi.dev" className="text-text-secondary hover:text-neon-blue transition-colors">
                  <EnvelopeSimple size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-neon-purple hover:text-neon-blue transition-colors">About</a>
                <a href="#projects" className="block text-neon-purple hover:text-neon-blue transition-colors">Projects</a>
                <a href="/education" className="block text-neon-purple hover:text-neon-blue transition-colors">Courses</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-text-primary mb-4">Newsletter</h3>
              <p className="text-text-secondary text-sm mb-4">
                Subscribe to get updates about new courses and projects.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium rounded-lg hover:shadow-glow-purple transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-glass-border/20 pt-8 text-center">
            <p className="text-text-muted">
              © 2024 Rokibul Islam Robi Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;