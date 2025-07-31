import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import SplineBackground from '../components/SplineBackground';
import { 
  GraduationCap, 
  BookOpen, 
  Trophy,
  Star,
  Calendar,
  MapPin,
  Lightbulb,
  Rocket,
  Medal
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.education-hero-title', 
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo('.education-hero-subtitle', 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      // Education timeline animations
      ScrollTrigger.create({
        trigger: '.education-timeline',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.timeline-item', 
            { opacity: 0, x: -60 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2 }
          );
        }
      });

      // Certifications animations
      ScrollTrigger.create({
        trigger: '.certifications-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.certification-card', 
            { opacity: 0, y: 40, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.1 }
          );
        }
      });

      // Skills animations
      ScrollTrigger.create({
        trigger: '.skills-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.skill-item', 
            { opacity: 0, y: 30, filter: 'blur(3px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', stagger: 0.1 }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      year: '2022 - Present',
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Daffodil International University',
      location: 'Dhaka, Bangladesh',
      gpa: '3.76/4.00',
      description: 'Majoring in Data Science. Maintaining a CGPA of 3.76 out of 4.00.',
      achievements: ['Data Science Focus', 'High Academic Performance', 'Software Engineering Specialization']
    },
    {
      year: '2018 - 2020',
      degree: 'Higher Secondary School Certificate',
      institution: 'Chandpur Government College',
      location: 'Chandpur, Bangladesh',
      gpa: '5.00/5.00',
      description: 'Completed HSC with a focus on Science. Achieved GPA 5.00 out of 5.00.',
      achievements: ['Science Focus', 'Perfect GPA', 'Academic Excellence']
    },
    {
      year: '2016 - 2018',
      degree: 'Secondary School Certificate',
      institution: 'Al-Amin Academy School & College',
      location: 'Chandpur, Bangladesh',
      gpa: '5.00/5.00',
      description: 'Completed SSC with a focus on Science. Achieved GPA 5.00 out of 5.00.',
      achievements: ['Science Focus', 'Perfect GPA', 'Academic Excellence']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'SAA-C03',
      description: 'Cloud architecture and AWS services expertise'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credential: 'GCP-PD-001',
      description: 'Google Cloud Platform development and deployment'
    },
    {
      name: 'Microsoft Certified: Azure Developer',
      issuer: 'Microsoft',
      date: '2022',
      credential: 'AZ-204',
      description: 'Azure development and cloud solutions'
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2022',
      credential: 'CSM-001',
      description: 'Agile project management and team leadership'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021',
      credential: 'REACT-001',
      description: 'Advanced React development and best practices'
    },
    {
      name: 'Python Programming Certification',
      issuer: 'Python Institute',
      date: '2021',
      credential: 'PCEP-001',
      description: 'Python programming fundamentals and advanced concepts'
    }
  ];

  const skills = [
    { name: 'Programming Languages', level: 95, items: ['JavaScript', 'Python', 'Java', 'C++'] },
    { name: 'Web Technologies', level: 90, items: ['React', 'Node.js', 'HTML/CSS', 'TypeScript'] },
    { name: 'Database Management', level: 85, items: ['SQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
    { name: 'Cloud Platforms', level: 80, items: ['AWS', 'Google Cloud', 'Azure', 'Docker'] },
    { name: 'DevOps & Tools', level: 75, items: ['Git', 'CI/CD', 'Kubernetes', 'Jenkins'] },
    { name: 'Soft Skills', level: 90, items: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork'] }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Spline Background Animation */}
      <SplineBackground />
      
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
              Education
            </span>
          </div>
          
          <h1 className="education-hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            My Educational Journey
          </h1>
          
          <p className="education-hero-subtitle text-text-secondary text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            A comprehensive overview of my academic background, certifications, and continuous learning journey 
            in the field of computer science and software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button group">
              Download Resume
              <BookOpen size={20} className="ml-2 inline transition-transform group-hover:translate-x-1" />
            </button>
            <button className="glass-card px-8 py-3 border border-glass-border/30 text-text-primary hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center">
                              <Medal size={20} className="mr-2" />
                View Certificates
            </button>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="education-timeline py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Academic Background
            </h2>
            <p className="text-text-secondary text-lg">
              My formal education and academic achievements in computer science and technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item glass-card p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className="glass-card p-3 rounded-lg">
                      <GraduationCap size={32} className="text-neon-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{edu.degree}</h3>
                      <p className="text-neon-blue font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-text-secondary text-sm">{edu.year}</span>
                    <div className="text-neon-purple font-bold text-lg">{edu.gpa}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-text-secondary">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{edu.year}</span>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-4">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Professional Certifications
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Industry-recognized certifications that validate my expertise in various technologies and methodologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card glass-card p-6 hover:shadow-glow-purple transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="glass-card p-3 rounded-lg mr-4">
                    <Medal size={32} className="text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{cert.name}</h3>
                    <p className="text-neon-purple font-medium text-sm">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-text-secondary text-sm mb-2">{cert.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Credential ID:</span>
                    <span className="text-neon-blue font-mono">{cert.credential}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-text-secondary">Issued:</span>
                    <span className="text-neon-cyan">{cert.date}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded-full border border-neon-purple/20">
                    Verified
                  </span>
                  <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20">
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Competencies */}
      <section className="skills-section py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(271 81% 56%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Skills & Competencies
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Technical and soft skills developed through education, certifications, and hands-on experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-text-primary">{skill.name}</h3>
                  <span className="text-neon-blue font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-glass-border/20 rounded-full h-3 mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 text-center">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Continuous Learning
            </h3>
            <p className="text-text-secondary text-lg mb-8">
              I believe in lifelong learning and staying current with the latest technologies and industry trends. 
              Currently pursuing advanced certifications and exploring emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm">
                Blockchain
              </span>
              <span className="px-4 py-2 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm">
                Web3
              </span>
              <span className="px-4 py-2 bg-neon-pink/10 text-neon-pink rounded-full text-sm">
                AI/ML
              </span>
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

export default Education; 