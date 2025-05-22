
import React from 'react';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import ServicesFeaturesSection from '@/components/ServicesFeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { motion } from 'framer-motion';

const Freelancing = () => {
  return (
    <div className="min-h-screen bg-neon-darker text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Premium <span className="gradient-text glow">Web Development</span> Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Transform your ideas into stunning digital experiences with our expert web development services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <PricingSection />
      
      {/* Services Features */}
      <ServicesFeaturesSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10 bg-gradient-to-b from-neon-darker to-neon-dark">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} DevPort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Freelancing;
