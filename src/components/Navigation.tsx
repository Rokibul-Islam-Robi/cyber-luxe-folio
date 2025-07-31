import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initial navbar animation
    gsap.fromTo('.navbar',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  // Update navigation indicator position based on current page
  useEffect(() => {
    const updateIndicator = () => {
      const navItems = [
        { path: '/about', index: 0 },
        { path: '/tech-stack', index: 1 },
        { path: '/projects', index: 2 },
        { path: '/education', index: 3 },
        { path: '/problem-solving', index: 4 }
      ];

      const currentItem = navItems.find(item => location.pathname === item.path);
      if (currentItem) {
        const positions = [0, 90, 180, 275, 380];
        const indicator = document.querySelector('.nav-indicator') as HTMLElement;
        if (indicator) {
          indicator.style.left = `${positions[currentItem.index]}px`;
        }
      }
    };

    updateIndicator();
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: 'power3.out'
      });
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power3.out'
      });
    }
  };

  const navItems = [
    { name: 'About Me', path: '/about' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Problem Solving', path: '/problem-solving' },
  ];

  return (
    <>
      <nav className={`navbar fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-glass-border/20'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="nav-logo">
              <Link
                to="/"
                className="text-2xl lg:text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
              >
                ROBI
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="nav-container relative">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-link relative inline-block text-text-secondary hover:text-text-primary transition-all duration-500 ease-out py-2 px-6 mx-1 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20 ${
                      location.pathname === item.path ? 'text-neon-blue scale-105 shadow-lg shadow-neon-blue/20' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <span className="nav-indicator absolute bottom-0 h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg transition-all duration-500 ease-out z-0"></span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-text-primary hover:text-neon-blue transition-all duration-300 hover:scale-110 hover:rotate-3"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-background-secondary/95 backdrop-blur-xl border-l border-glass-border/20 z-50 transform translate-x-full lg:hidden`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-glass-border/20">
            <span className="text-xl font-bold text-gradient">Menu</span>
            <button
              onClick={toggleMenu}
              className="p-2 text-text-primary hover:text-neon-blue transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 p-6">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block w-full text-left text-lg transition-all duration-500 ease-out py-3 border-b border-glass-border/10 hover:border-neon-blue/30 hover:scale-105 hover:translate-x-2 ${
                    location.pathname === item.path
                      ? 'text-neon-blue scale-105 translate-x-2'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-glass-border/20">
            <p className="text-text-muted text-sm text-center">
              © 2024 ROBI
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navigation;