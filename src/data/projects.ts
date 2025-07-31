export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  category: 'featured' | 'all';
  featured: boolean;
  stats: {
    stars: number;
    forks: number;
    views: number;
  };
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '3D Interactive Email Platform',
    description: 'Modern email solution with 3D animations and developer-focused features.',
    longDescription: 'A cutting-edge email platform built with React, Three.js, and GSAP for immersive user experiences. Features include 3D animations, real-time collaboration, and advanced email management tools.',
    image: '/lovable-uploads/09356399-4a00-47d5-b816-7991d94860bd.png',
    githubUrl: 'https://github.com/rokibul-rob/email-platform',
    liveUrl: 'https://email-platform.rokibul.dev',
    technologies: ['React', 'Three.js', 'GSAP', 'TypeScript'],
    category: 'featured',
    featured: true,
    stats: { stars: 45, forks: 12, views: 1200 },
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Next-Level Gaming UI',
    description: 'Futuristic gaming interface with advanced 3D elements and smooth animations.',
    longDescription: 'An immersive gaming interface featuring advanced 3D elements, real-time data visualization, and interactive components. Built with modern web technologies for optimal performance.',
    image: '/lovable-uploads/62685ee9-0ba7-4378-8471-c27123d43751.png',
    githubUrl: 'https://github.com/rokibul-rob/gaming-ui',
    liveUrl: 'https://gaming-ui.rokibul.dev',
    technologies: ['React', 'WebGL', 'TypeScript', 'Framer Motion'],
    category: 'featured',
    featured: true,
    stats: { stars: 78, forks: 23, views: 2100 },
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    title: '3D Portfolio Website',
    description: 'Immersive portfolio experience with cutting-edge 3D visuals.',
    longDescription: 'An interactive 3D portfolio showcasing projects in an immersive environment with smooth transitions and cutting-edge visuals. Demonstrates advanced 3D web development techniques.',
    image: '/lovable-uploads/52545b39-a092-42b4-96e0-013af841c7d5.png',
    githubUrl: 'https://github.com/rokibul-rob/3d-portfolio',
    liveUrl: 'https://3d-portfolio.rokibul.dev',
    technologies: ['Spline', 'React', 'GSAP', 'Three.js'],
    category: 'featured',
    featured: true,
    stats: { stars: 156, forks: 34, views: 4500 },
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    title: 'Gaming Website Platform',
    description: 'Dynamic gaming platform with interactive character showcases.',
    longDescription: 'A comprehensive gaming platform featuring interactive character showcases, real-time features, and dynamic content management. Built for scalability and performance.',
    image: '/lovable-uploads/3ec37a13-3d91-4dee-9275-c66a34b180e0.png',
    githubUrl: 'https://github.com/rokibul-rob/gaming-platform',
    liveUrl: 'https://gaming-platform.rokibul.dev',
    technologies: ['React', 'Framer Motion', 'CSS3', 'Node.js'],
    category: 'all',
    featured: false,
    stats: { stars: 32, forks: 8, views: 890 },
    createdAt: '2024-01-05'
  },
  {
    id: '5',
    title: 'Animation Tools Platform',
    description: 'Professional animation tools platform with modern UI design.',
    longDescription: 'A comprehensive animation tools platform featuring modern UI design, advanced animation capabilities, and professional-grade tools for content creators.',
    image: '/lovable-uploads/4060dd43-2597-48b4-9abe-93c675ecd0fc.png',
    githubUrl: 'https://github.com/rokibul-rob/animation-tools',
    liveUrl: 'https://animation-tools.rokibul.dev',
    technologies: ['React', 'GSAP', 'Tailwind', 'Express'],
    category: 'all',
    featured: false,
    stats: { stars: 67, forks: 15, views: 1800 },
    createdAt: '2024-02-15'
  },
  {
    id: '6',
    title: 'Developer Portfolio',
    description: 'Clean and modern portfolio design with smooth interactions.',
    longDescription: 'A clean and modern portfolio design featuring smooth interactions, responsive layout, and professional presentation of development work and skills.',
    image: '/lovable-uploads/b3cad411-7107-4c48-8a87-4b066956b466.png',
    githubUrl: 'https://github.com/rokibul-rob/portfolio',
    liveUrl: 'https://portfolio.rokibul.dev',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    category: 'all',
    featured: false,
    stats: { stars: 89, forks: 21, views: 3200 },
    createdAt: '2024-01-20'
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(project => project.id === id); 