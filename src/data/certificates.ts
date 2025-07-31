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
    name: 'Learnathon 3.0 Participation',
    issuer: 'Geeky Solutions',
    description: "Proud to share that I've successfully completed Learnathon 3.0 and received a certificate, organized by Geeky Solutions and proudly sponsored by Brain Station 23. ⚒️🎉 As part of Team pipinstallc, we built the EduSphere: Learning and Academic Collaboration Platform! EduSphere is a personalized learning and academic collaboration platform designed to enhance the university learning experience. It's a resource-sharing and personalized teaching platform for university students, addressing the problems of centralized study resources, fostering collaboration, and building a strong community. EduSphere empowers students to learn at their own pace, access relevant academic resources, and connect with peers for collaborative learning. It allows students to be both learners and teachers, fostering a dynamic and supportive academic environment. A huge thank you to my teammates Jahidul Hassan Reshad and Meherose Hossain Tasnia. This project wouldn't have been possible without the collaborative spirit of our team and the desire to build something truly useful for our fellow students. Special thanks to our mentor Md Redwanuzzaman, for his invaluable insights and encouragement throughout the journey.🙌 🎯Key features Student-Powered Resource Sharing: Easily share notes, guides, and past papers. Community-Centric Learning: Connect with senior students, alumni, and peers through mentorship. Personalized Learning Paths: Discover relevant resources and mentors based on your academic profile. Empowering Dual Roles: Seamlessly switch between learning and sharing your own courses or materials. Centralized Academic Hub: Access a wide variety of study materials in one place. 🧩Tech Stack Frontend: Reactjs Backend: Django API Development: Django REST Framework. ➡️Checkout the project Github Repository: https://Inkd.in/gAr6RKrt Project Demo Website: https://Inkd.in/gbrerhFF Project Overview Video: https:///nkd.in/grNWpCf6 Platform Walkthrough: https://Inkd.in/g4bZEZFB Learnathon 3.0 was more than a competition - it was an intense learning experience that pushed us beyond our comfort zones and strengthened our real-world development skills.",
    image: '/lovable-uploads/learnathon-certificate.png',
    date: 'January 2025 - April 2025',
    credential: 'N/A',
    linkedinUrl: 'https://Inkd.in/gAr6RKrt',
    category: 'certificate'
  },
  {
    id: '2',
    name: 'Introduction to Critical Infrastructure Protection (ICIP)',
    issuer: 'OPSWAT Academy',
    description: "I have successfully completed Cybersecurity training in critical infrastructure protection (ICIP) from OPSWAT Academy and earned a Certificate of Excellence!🎉 Throughout this materials, I gained valuable insights into the Cybersecurity process, from understanding critical infrastructure protection.🛡️💻 Thank you to OPSWAT Academy for providing this platform to help learners grow and excel!🚀",
    image: '/lovable-uploads/opswat-icip-certificate.png',
    date: '11/10/2024',
    credential: '2_RfUNXKrw',
    linkedinUrl: 'https://learn.opswatacademy.com/certificate/2_RfUNXKrw',
    category: 'certificate'
  },
  {
    id: '3',
    name: 'Academic Writing for Research Excellence Workshop',
    issuer: 'Daffodil International University Research Society',
    description: "I am excited to share that I have recently attended a insightful workshop on 'Lecture Series-5: Academic Writing for Research Excellence', hosted by Daffodil International University Research Society (DIURS). 💡Session key topics- 🔗 Effective Paper Development. 🔗 Qsquare Approach. 🔗 Observation Researching in Bangladesh. 🔗Critical thinking in Research. Beyond learning about Academic Writing & Research, I discovered how essential critical thinking & soft skills are in shaping a brighter future. Feeling motivated to dream big, learn more, and grow endlessly!🌟📚",
    image: '/lovable-uploads/academic-writing-workshop.png',
    date: '2024',
    credential: 'N/A',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_academic-writing-workshop-activity-123456789',
    category: 'workshop'
  },
  {
    id: '4',
    name: 'Microsoft Fabric Data Analytics Engineering Training',
    issuer: 'Data Crafters & Microsoft',
    description: "I am excited to share that I have successfully completed the Data Analytics Engineering Training in Microsoft Fabric which is an end-to-end, cloud-based SaaS solution for data and analytics created by Microsoft and earned a Certificate of Excellence!🎉 This learning journey has been an incredible opportunity to further my skills in some key components of Microsoft Fabric and gained hands-on experience with the following: ✅ Microsoft Fabric Core Components: Data Ingestion with Data Pipelines, Dataflow Gen 2, Fabric Notebooks, Internal and External shortcuts. ✅ Data Transformation Tools: Using T-SQL, PySpark, and the Lakehouse & Warehouse architecture. ✅ Power BI: Advanced topics like DirectLake and Dual Mode When to use which mode. Transformations in Power Query, and DAX. ✅ End-to-End Scenarios: Working with Lakehouse and Warehouse for optimized data solutions. ✅Medallion Architecture: Leveraged this 3 tier architecture in Microsoft Fabric to streamline and organize data processing. ✅Security: Learned how to implement Row-Level Security (RLS) and Object-Level Security (OLS) to ensure data privacy and control. Huge thanks to Data Crafters, the instructors, Human Resource Development Institute-HRDI, and Daffodil International University-DIU for putting together such a well-structured program and providing this fantastic opportunity. Looking forward to applying my newly gained knowledge in real-life projects!",
    image: '/lovable-uploads/microsoft-fabric-certificate.png',
    date: 'Sep 7, 2024',
    credential: 'N/A',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_microsoft-fabric-training-activity-123456789',
    category: 'certificate'
  },
  {
    id: '5',
    name: 'Introduction to Microsoft 365 Copilot',
    issuer: 'Microsoft & NetCom Learning Bangladesh',
    description: "🚀Excited to share my learning journey with Microsoft Copilot! I've successfully completed a series of hands-on courses offered by Microsoft in collaboration with NetCom Learning Bangladesh, focused on leveraging AI to enhance productivity, communication, and content creation across Microsoft 365 apps.⚒️🎉 As part of this experience-the first step of the agentX journey-I explored how Microsoft 365 Copilot integrates with tools like Word, Excel, PowerPoint, Teams, and Outlook, helping users work more efficiently and creatively. The learning paths I completed included: 🔹Introduction to Microsoft 365 Copilot. 🔹Exploring the possibilities with Microsoft Copilot. 🔹Optimizing and extend Microsoft 365 Copilot 🔹Summarizing and simplifying information. 🔹Creating and drafting content with Microsoft365. 🔹Editing and transforming material 🔹Asking questions and analyzing content 💡This journey has deepened my understanding of how Copilot can support not just professional work, but also academic tasks and research-making everyday tasks faster and smarter. ⚠️A key insight I gained is that responsible use of AI is essential. While Copilot is a powerful tool, it's important to: Validate outputs to ensure accuracy Use thoughtful, well-crafted prompts for the best results Stay mindful of privacy and data sensitivity, even on trusted platforms 🔰 This is just the beginning of my Agent X learning path, and I'm excited to continue exploring the future of AI-powered productivity. Thank you to Microsoft and NetCom Learning Bangladesh for making this opportunity possible! 🙌",
    image: '/lovable-uploads/microsoft-copilot-certificate.png',
    date: 'June 22, 2025',
    credential: 'N/A',
    linkedinUrl: 'https://www.linkedin.com/posts/rokibul-islam-robi_microsoft-copilot-training-activity-123456789',
    category: 'certificate'
  }
];

export const getCertificates = () => certificates.filter(item => item.category === 'certificate');
export const getWorkshops = () => certificates.filter(item => item.category === 'workshop');
export const getCertificateById = (id: string) => certificates.find(cert => cert.id === id); 