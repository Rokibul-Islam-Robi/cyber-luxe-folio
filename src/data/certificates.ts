export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  description: string;
  image: string;
  date: string;
  credential: string;
  linkedinUrl: string;
  category: 'certificate' | 'workshop';
}

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    description: 'Cloud architecture and AWS services expertise',
    image: '/lovable-uploads/aws-certificate.png',
    date: '2023',
    credential: 'SAA-C03',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_aws-certification-cloud-architecture-activity-123456789',
    category: 'certificate'
  },
  {
    id: '2',
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    description: 'Google Cloud Platform development and deployment',
    image: '/lovable-uploads/gcp-certificate.png',
    date: '2023',
    credential: 'GCP-PD-001',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_google-cloud-certification-activity-123456789',
    category: 'certificate'
  },
  {
    id: '3',
    name: 'Microsoft Certified: Azure Developer',
    issuer: 'Microsoft',
    description: 'Azure development and cloud solutions',
    image: '/lovable-uploads/azure-certificate.png',
    date: '2022',
    credential: 'AZ-204',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_microsoft-azure-certification-activity-123456789',
    category: 'certificate'
  },
  {
    id: '4',
    name: 'React Advanced Workshop',
    issuer: 'Meta',
    description: 'Advanced React development and best practices',
    image: '/lovable-uploads/react-workshop.png',
    date: '2021',
    credential: 'REACT-001',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_react-workshop-advanced-development-activity-123456789',
    category: 'workshop'
  },
  {
    id: '5',
    name: 'Python Programming Workshop',
    issuer: 'Python Institute',
    description: 'Python programming fundamentals and advanced concepts',
    image: '/lovable-uploads/python-workshop.png',
    date: '2021',
    credential: 'PCEP-001',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_python-workshop-programming-activity-123456789',
    category: 'workshop'
  },
  {
    id: '6',
    name: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
    description: 'Agile project management and team leadership',
    image: '/lovable-uploads/scrum-certificate.png',
    date: '2022',
    credential: 'CSM-001',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_scrum-master-certification-agile-activity-123456789',
    category: 'certificate'
  }
];

export const getCertificates = () => certificates.filter(item => item.category === 'certificate');
export const getWorkshops = () => certificates.filter(item => item.category === 'workshop');
export const getCertificateById = (id: string) => certificates.find(cert => cert.id === id); 