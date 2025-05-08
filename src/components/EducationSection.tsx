
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  logo: string;
};

const educationData: Education[] = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    institution: 'Stanford University',
    location: 'California, USA',
    period: '2020 - 2022',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on neural network optimization for edge computing devices.',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 2,
    degree: 'Bachelor of Engineering',
    institution: 'MIT',
    location: 'Massachusetts, USA',
    period: '2016 - 2020',
    description: 'Majored in Computer Science with minors in Mathematics and Data Science. Graduated with honors.',
    logo: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2674&auto=format&fit=crop'
  },
  {
    id: 3,
    degree: 'High School Diploma',
    institution: 'Science Academy High',
    location: 'New York, USA',
    period: '2012 - 2016',
    description: 'Advanced placement courses in Computer Science, Mathematics, and Physics. Member of Robotics Club.',
    logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2664&auto=format&fit=crop'
  }
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="education" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text glow">Education</span></h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Academic journey and educational qualifications
          </p>
        </div>
        
        <div 
          ref={ref}
          className="relative max-w-4xl mx-auto mt-16"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple via-neon-purple2 to-neon-purple3"></div>
          
          {educationData.map((education, index) => (
            <motion.div 
              key={education.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 md:mb-24 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 transform -translate-y-1/3 md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-neon-purple3 glow-box z-10"></div>
              
              {/* Year bubble */}
              <div className={`absolute left-0 top-0 md:top-0 ${index % 2 === 0 ? 'md:left-auto md:right-full md:mr-10' : 'md:left-full md:ml-10'} transform -translate-x-full -translate-y-1/4 md:transform-none whitespace-nowrap`}>
                <span className="block bg-neon-purple/20 backdrop-blur-sm px-4 py-1 rounded-full border border-neon-purple/40 text-sm font-medium">
                  {education.period}
                </span>
              </div>
              
              {/* Content Card */}
              <div className={`glass-panel ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 p-6">
                  {/* Logo */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                    <img 
                      src={education.logo} 
                      alt={education.institution} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow text-left">
                    <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
                    <p className="text-neon-purple font-medium mb-2">{education.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{education.location}</p>
                    <p className="text-gray-300 text-sm">{education.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
