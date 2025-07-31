import { LinkedinLogo, Calendar, Medal, ExternalLink } from 'phosphor-react';
import { Certificate } from '../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="certification-card glass-card p-6 hover:shadow-glow-purple transition-all duration-300 group">
      {/* Certificate Image */}
      <div className="relative mb-4">
        <img 
          src={certificate.image} 
          alt={certificate.name}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>

      {/* Certificate Info */}
      <div className="flex items-center mb-4">
        <div className="glass-card p-3 rounded-lg mr-4">
          <Medal size={32} className="text-neon-purple" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">{certificate.name}</h3>
          <p className="text-neon-purple font-medium text-sm">{certificate.issuer}</p>
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-4">
        <p className="text-text-secondary text-sm mb-2">{certificate.description}</p>
        
        {/* Date and Credential */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-text-secondary" />
            <span className="text-text-secondary">Issued:</span>
            <span className="text-neon-cyan">{certificate.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Medal size={16} className="text-text-secondary" />
            <span className="text-text-secondary">ID:</span>
            <span className="text-neon-blue font-mono">{certificate.credential}</span>
          </div>
        </div>
      </div>
      
      {/* Status Tags */}
      <div className="flex gap-2 mb-4">
        <span className="px-3 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded-full border border-neon-purple/20">
          Verified
        </span>
        <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20">
          Active
        </span>
        <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/20">
          {certificate.category === 'certificate' ? 'Certificate' : 'Workshop'}
        </span>
      </div>

      {/* LinkedIn Button */}
      <a 
        href={certificate.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full glass-card py-3 text-sm font-medium text-text-primary hover:text-neon-blue border border-glass-border/30 hover:border-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <LinkedinLogo size={16} />
        View on LinkedIn
        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
};

export default CertificateCard; 