import { useState } from 'react';
import { Plus, X, Upload, GithubLogo, Globe } from 'phosphor-react';
import { Project } from '../data/projects';

interface ProjectManagerProps {
  onAddProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectManager = ({ onAddProject, isOpen, onClose }: ProjectManagerProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    image: '',
    githubUrl: '',
    liveUrl: '',
    technologies: '',
    category: 'all' as 'featured' | 'all',
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      views: 0
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProject = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      stats: {
        stars: parseInt(formData.stats.stars.toString()),
        forks: parseInt(formData.stats.forks.toString()),
        views: parseInt(formData.stats.views.toString())
      }
    };

    onAddProject(newProject);
    setFormData({
      title: '',
      description: '',
      longDescription: '',
      image: '',
      githubUrl: '',
      liveUrl: '',
      technologies: '',
      category: 'all',
      featured: false,
      stats: { stars: 0, forks: 0, views: 0 }
    });
    onClose();
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStatsChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [field]: value
      }
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Add New Project</h2>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-primary font-medium mb-2">Project Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
                placeholder="Enter project title"
                required
              />
            </div>

            <div>
              <label className="block text-text-primary font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="input-glow w-full px-4 py-3 rounded-lg text-text-primary"
              >
                <option value="all">All Projects</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-text-primary font-medium mb-2">Short Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
              placeholder="Brief description of the project"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-text-primary font-medium mb-2">Long Description</label>
            <textarea
              value={formData.longDescription}
              onChange={(e) => handleInputChange('longDescription', e.target.value)}
              className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
              placeholder="Detailed description of the project"
              rows={4}
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-text-primary font-medium mb-2">Project Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
              placeholder="https://example.com/image.png"
              required
            />
          </div>

          {/* URLs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-primary font-medium mb-2">
                <GithubLogo size={20} className="inline mr-2" />
                GitHub URL
              </label>
              <input
                type="url"
                value={formData.githubUrl}
                onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
                placeholder="https://github.com/username/repo"
                required
              />
            </div>

            <div>
              <label className="block text-text-primary font-medium mb-2">
                <Globe size={20} className="inline mr-2" />
                Live URL (Optional)
              </label>
              <input
                type="url"
                value={formData.liveUrl}
                onChange={(e) => handleInputChange('liveUrl', e.target.value)}
                className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
                placeholder="https://project-demo.com"
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-text-primary font-medium mb-2">Technologies (comma-separated)</label>
            <input
              type="text"
              value={formData.technologies}
              onChange={(e) => handleInputChange('technologies', e.target.value)}
              className="input-glow w-full px-4 py-3 rounded-lg text-text-primary placeholder-text-muted"
              placeholder="React, TypeScript, Node.js, MongoDB"
              required
            />
          </div>

          {/* Stats */}
          <div>
            <label className="block text-text-primary font-medium mb-2">Project Statistics</label>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-text-secondary text-sm mb-1">Stars</label>
                <input
                  type="number"
                  value={formData.stats.stars}
                  onChange={(e) => handleStatsChange('stars', parseInt(e.target.value) || 0)}
                  className="input-glow w-full px-3 py-2 rounded-lg text-text-primary"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-1">Forks</label>
                <input
                  type="number"
                  value={formData.stats.forks}
                  onChange={(e) => handleStatsChange('forks', parseInt(e.target.value) || 0)}
                  className="input-glow w-full px-3 py-2 rounded-lg text-text-primary"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm mb-1">Views</label>
                <input
                  type="number"
                  value={formData.stats.views}
                  onChange={(e) => handleStatsChange('views', parseInt(e.target.value) || 0)}
                  className="input-glow w-full px-3 py-2 rounded-lg text-text-primary"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => handleInputChange('featured', e.target.checked)}
              className="w-4 h-4 text-neon-blue bg-background border-glass-border rounded focus:ring-neon-blue"
            />
            <label htmlFor="featured" className="text-text-primary font-medium">
              Mark as Featured Project
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="neon-button flex-1 flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Add Project
            </button>
            <button
              type="button"
              onClick={onClose}
              className="glass-card px-6 py-3 border border-glass-border/30 text-text-primary hover:border-neon-blue/50 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectManager; 