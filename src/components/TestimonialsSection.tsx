
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "Working with DevPort transformed our online presence. The team delivered a website that exceeded our expectations both in design and functionality.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    content: "The attention to detail and responsiveness of the team was impressive. Our e-commerce site has seen a 40% increase in conversions since the redesign.",
    author: "Michael Chen",
    position: "Marketing Director, Retail Solutions",
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: 3,
    content: "Professional, creative, and incredibly knowledgeable. DevPort took our vague ideas and turned them into a stunning website that perfectly represents our brand.",
    author: "Emma Rodriguez",
    position: "Founder, Artisan Collective",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const TestimonialsSection = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section className="py-20 relative" ref={containerRef}>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client <span className="gradient-text glow">Testimonials</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel p-6 rounded-xl border border-white/10 hover:border-neon-purple/30 transition-all duration-300"
            >
              <div className="mb-4 text-neon-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
