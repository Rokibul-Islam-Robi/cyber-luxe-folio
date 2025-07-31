import { LinkedinLogo, Calendar, Medal, ExternalLink } from 'phosphor-react';
import { Certificate } from '../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="certification-card glass-card p-6 hover:shadow-glow-purple transition-all duration-500 group transform-gpu perspective-1000">
      {/* Certificate Image with 3D Effect */}
      <div className="relative mb-4 transform-gpu transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
        <img 
          src={certificate.image} 
          alt={certificate.name}
          className="w-full h-48 object-cover rounded-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-neon-purple/30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
        
        {/* 3D Floating Elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-purple/20 rounded-full animate-pulse group-hover:animate-bounce"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-neon-cyan/30 rounded-full animate-pulse group-hover:animate-ping"></div>
      </div>

      {/* Certificate Info with 3D Transform */}
      <div className="flex items-center mb-4 transform-gpu transition-transform duration-300 group-hover:translate-z-4">
        <div className="glass-card p-3 rounded-lg mr-4 transform-gpu transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
          <Medal size={32} className="text-neon-purple transition-colors duration-300 group-hover:text-neon-cyan" />
        </div>
        <div className="transform-gpu transition-transform duration-300 group-hover:translate-x-2">
          <h3 className="text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-neon-blue">{certificate.name}</h3>
          <p className="text-neon-purple font-medium text-sm transition-colors duration-300 group-hover:text-neon-cyan">{certificate.issuer}</p>
        </div>
      </div>
      
      {/* Description with 3D Text Effect */}
      <div className="mb-4 transform-gpu transition-transform duration-300 group-hover:translate-z-2">
        <p className="text-text-secondary text-sm mb-2 leading-relaxed group-hover:text-text-primary transition-colors duration-300">{certificate.description}</p>
        
        {/* Date and Credential with 3D Hover */}
        <div className="flex items-center justify-between text-sm transform-gpu transition-transform duration-300 group-hover:scale-105">
          <div className="flex items-center gap-1 transform-gpu transition-transform duration-300 group-hover:translate-x-1">
            <Calendar size={16} className="text-text-secondary transition-colors duration-300 group-hover:text-neon-cyan" />
            <span className="text-text-secondary transition-colors duration-300 group-hover:text-text-primary">Issued:</span>
            <span className="text-neon-cyan font-medium transition-colors duration-300 group-hover:text-neon-blue">{certificate.date}</span>
          </div>
          <div className="flex items-center gap-1 transform-gpu transition-transform duration-300 group-hover:translate-x-1">
            <Medal size={16} className="text-text-secondary transition-colors duration-300 group-hover:text-neon-purple" />
            <span className="text-text-secondary transition-colors duration-300 group-hover:text-text-primary">ID:</span>
            <span className="text-neon-blue font-mono transition-colors duration-300 group-hover:text-neon-cyan">{certificate.credential}</span>
          </div>
        </div>
      </div>
      
      {/* Status Tags with 3D Animation */}
      <div className="flex gap-2 mb-4 transform-gpu transition-transform duration-300 group-hover:scale-105">
        <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded-full border border-neon-purple/20 transition-all duration-300 group-hover:bg-neon-purple/20 group-hover:border-neon-purple/40 group-hover:scale-110">
          Verified
        </span>
        <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20 transition-all duration-300 group-hover:bg-neon-blue/20 group-hover:border-neon-blue/40 group-hover:scale-110">
          Active
        </span>
        <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/20 transition-all duration-300 group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/40 group-hover:scale-110">
          {certificate.category === 'certificate' ? 'Certificate' : 'Workshop'}
        </span>
      </div>

      {/* LinkedIn Button with 3D Effect */}
      <a 
        href={certificate.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full glass-card py-3 text-sm font-medium text-text-primary hover:text-neon-blue border border-glass-border/30 hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2 group transform-gpu hover:translate-y-[-2px] hover:shadow-lg hover:shadow-neon-blue/20"
      >
        <LinkedinLogo size={16} className="transition-transform duration-300 group-hover:scale-110" />
        View on LinkedIn
        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default CertificateCard; 