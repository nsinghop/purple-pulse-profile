
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Responsive Design',
    description: 'Websites that look and function perfectly on all devices, from mobile phones to large desktop screens.',
    icon: '💻'
  },
  {
    id: 2,
    title: 'Custom Development',
    description: 'Tailor-made solutions designed specifically for your unique business requirements and goals.',
    icon: '🛠️'
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with secure payment processing, inventory management and order tracking.',
    icon: '🛍️'
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Built-in search engine optimization to help your website rank higher and attract more visitors.',
    icon: '📈'
  },
  {
    id: 5,
    title: 'Content Management',
    description: 'User-friendly CMS that makes it easy to update and manage your website content without technical skills.',
    icon: '📝'
  },
  {
    id: 6,
    title: 'Ongoing Support',
    description: 'Reliable technical support and maintenance to keep your website running smoothly after launch.',
    icon: '🔧'
  }
];

const ServicesFeaturesSection = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section className="py-20 relative" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="gradient-text glow">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl hover:border-neon-purple/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFeaturesSection;
