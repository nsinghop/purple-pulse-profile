
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2670&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: 'Advanced React & Redux',
    issuer: 'Frontend Masters',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'Machine Learning Foundations',
    issuer: 'Coursera',
    date: 'November 2023',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 4,
    title: 'Cloud Architecture Fundamentals',
    issuer: 'AWS Training',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop',
    link: '#'
  }
];

const CertificatesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section id="certificates" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text glow">Certificates</span></h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Professional certifications and achievements in various technology domains
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="hover:z-10"
            >
              <Card className="overflow-hidden h-full bg-black/20 border border-neon-purple/30 hover:border-neon-purple/80 transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <div className="text-sm text-gray-400 mb-2">
                    <p>{cert.issuer} • {cert.date}</p>
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-neon-purple text-sm hover:underline inline-flex items-center group"
                    >
                      View Certificate 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
