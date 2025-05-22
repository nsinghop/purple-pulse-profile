
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 499,
    description: 'Perfect for small businesses just starting out',
    features: [
      'Custom responsive design',
      'Up to 5 pages',
      '1 contact form',
      '2 revisions',
      'Basic SEO setup',
      '30 days support',
    ],
    popular: false
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 999,
    description: 'Ideal for growing businesses needing more features',
    features: [
      'Premium responsive design',
      'Up to 10 pages',
      'Multiple contact forms',
      'Blog integration',
      '5 revisions',
      'Advanced SEO optimization',
      '60 days support',
      'Social media integration'
    ],
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 1999,
    description: 'Advanced solution for businesses with complex needs',
    features: [
      'Custom premium design',
      'Unlimited pages',
      'E-commerce functionality',
      'Custom integrations',
      'Unlimited revisions',
      'Premium SEO package',
      '6 months support',
      'Performance optimization',
      'Security hardening',
      'Analytics dashboard'
    ],
    popular: false
  }
];

const PricingSection = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const handleBuyNow = (planId: string) => {
    navigate(`/order-form?plan=${planId}`);
  };

  return (
    <section id="pricing" className="py-20 relative" ref={containerRef}>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing <span className="gradient-text glow">Plans</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan that fits your project needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-xl overflow-hidden ${
                plan.popular ? 'ring-2 ring-neon-purple glow-box scale-105 z-10' : 'border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-neon-purple text-white text-center py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              
              <div className="glass-panel p-6 h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 mb-3">
                    <span className="text-5xl font-bold">${plan.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-neon-purple mr-2 mt-0.5" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handleBuyNow(plan.id)}
                  className={`w-full py-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-purple to-neon-purple3 hover:opacity-90' 
                      : 'bg-white/10 hover:bg-white/20 border border-neon-purple/30'
                  }`}
                >
                  Buy Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
