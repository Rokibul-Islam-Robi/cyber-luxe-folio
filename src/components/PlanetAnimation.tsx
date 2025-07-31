import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PlanetAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles with different colors
      const particles = [];
      const particleCount = 100;
      const colors = ['bg-neon-blue/40', 'bg-orange-400/40', 'bg-yellow-400/40', 'bg-green-400/40'];

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

      // Animate the main planet
      gsap.to('.planet-core', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      // Animate the planet rings
      gsap.to('.planet-ring', {
        rotation: -360,
        duration: 15,
        repeat: -1,
        ease: 'none'
      });

      // Animate the glow effect
      gsap.to('.planet-glow', {
        scale: 1.2,
        opacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main Planet */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
        <div className="planet-glow absolute inset-0 bg-neon-blue/20 rounded-full blur-3xl"></div>
        <div className="planet-core relative w-32 h-32 bg-gradient-to-br from-neon-blue/40 to-neon-purple/40 rounded-full border border-neon-blue/30">
          <div className="absolute inset-2 bg-gradient-to-br from-neon-cyan/60 to-neon-blue/60 rounded-full"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-background/80 to-background/40 rounded-full"></div>
        </div>
        
        {/* Planet Rings */}
        <div className="planet-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-neon-blue/20 rounded-full"></div>
        <div className="planet-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-neon-purple/20 rounded-full"></div>
        <div className="planet-ring absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-neon-cyan/20 rounded-full"></div>
      </div>

      {/* Secondary Planets */}
      <div className="absolute top-1/4 right-1/3">
        <div className="w-16 h-16 bg-gradient-to-br from-neon-purple/30 to-neon-pink/30 rounded-full border border-neon-purple/20"></div>
      </div>

      <div className="absolute bottom-1/4 right-1/6">
        <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/30 to-neon-blue/30 rounded-full border border-neon-cyan/20"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-neon-blue/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-neon-purple/20 rounded-full blur-sm"></div>
      <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-neon-cyan/20 rounded-full blur-sm"></div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      </div>

      {/* PARTICLE PLANET Text */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-light tracking-wider opacity-80">
        PARTICLE PLANET
      </div>

      {/* Size Buttons */}
      <div className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button className="w-8 h-8 rounded-full bg-background/20 border border-neon-blue/30 text-white text-xs hover:bg-neon-blue/20 transition-all duration-300">
          S
        </button>
        <button className="w-8 h-8 rounded-full bg-neon-blue/20 border border-neon-blue/50 text-white text-xs hover:bg-neon-blue/30 transition-all duration-300 relative">
          M
          <div className="absolute inset-1 bg-neon-blue/60 rounded-full"></div>
        </button>
        <button className="w-8 h-8 rounded-full bg-background/20 border border-neon-blue/30 text-white text-xs hover:bg-neon-blue/20 transition-all duration-300">
          L
        </button>
      </div>
    </div>
  );
};

export default PlanetAnimation; 