import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PlanetAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles with reduced opacity for subtle background effect
      const particles = [];
      const particleCount = 80; // Reduced count for subtlety
      const colors = ['bg-neon-blue/20', 'bg-orange-400/20', 'bg-yellow-400/20', 'bg-green-400/20']; // Reduced opacity

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.className = `absolute w-1 h-1 ${color} rounded-full`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        containerRef.current?.appendChild(particle);
        particles.push(particle);

        // Animate each particle with more varied movement
        gsap.to(particle, {
          y: Math.random() * 200 - 100,
          x: Math.random() * 200 - 100,
          duration: Math.random() * 15 + 10,
          repeat: -1,
          ease: 'none',
          delay: Math.random() * 10
        });
      }

      // Animate the main planet with reduced opacity
      gsap.to('.planet-core', {
        rotation: 360,
        duration: 25, // Slower rotation
        repeat: -1,
        ease: 'none'
      });

      // Animate the planet rings with reduced opacity
      gsap.to('.planet-ring', {
        rotation: -360,
        duration: 20, // Slower rotation
        repeat: -1,
        ease: 'none'
      });

      // Animate the glow effect with reduced intensity
      gsap.to('.planet-glow', {
        scale: 1.1, // Reduced scale
        opacity: 0.3, // Reduced opacity
        duration: 4, // Slower animation
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
      {/* Main Planet - Reduced opacity */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
        <div className="planet-glow absolute inset-0 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="planet-core relative w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/20">
          <div className="absolute inset-2 bg-gradient-to-br from-neon-cyan/30 to-neon-blue/30 rounded-full"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-background/60 to-background/20 rounded-full"></div>
        </div>
        
        {/* Planet Rings - Reduced opacity */}
        <div className="planet-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-neon-blue/10 rounded-full"></div>
        <div className="planet-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-neon-purple/10 rounded-full"></div>
        <div className="planet-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-neon-cyan/10 rounded-full"></div>
      </div>

      {/* Secondary Planets - Reduced opacity */}
      <div className="absolute top-1/4 right-1/3">
        <div className="w-8 h-8 bg-gradient-to-br from-neon-purple/15 to-neon-pink/15 rounded-full border border-neon-purple/10"></div>
      </div>

      <div className="absolute bottom-1/4 right-1/6">
        <div className="w-6 h-6 bg-gradient-to-br from-neon-cyan/15 to-neon-blue/15 rounded-full border border-neon-cyan/10"></div>
      </div>

      {/* Floating Orbs - Reduced opacity */}
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-neon-blue/10 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-neon-purple/10 rounded-full blur-sm"></div>
      <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-neon-cyan/10 rounded-full blur-sm"></div>

      {/* Grid Lines - Reduced opacity */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      </div>

    </div>
  );
};

export default PlanetAnimation; 