
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-neon-darker text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8 text-neon-purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Payment <span className="gradient-text glow">Successful!</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your order. Your web development project is now in our queue.
            Our team will contact you within 24 hours to discuss the next steps.
          </p>
          
          <div className="glass-panel p-8 rounded-xl border border-neon-purple/30 mb-10">
            <h3 className="text-xl font-bold mb-4">What happens next?</h3>
            <ol className="text-left space-y-4 text-gray-300">
              <li className="flex">
                <span className="mr-3 font-bold text-neon-purple">1.</span>
                <span>You will receive a confirmation email with your order details.</span>
              </li>
              <li className="flex">
                <span className="mr-3 font-bold text-neon-purple">2.</span>
                <span>Our project manager will schedule an initial consultation call.</span>
              </li>
              <li className="flex">
                <span className="mr-3 font-bold text-neon-purple">3.</span>
                <span>We'll create a project timeline and begin the design phase.</span>
              </li>
              <li className="flex">
                <span className="mr-3 font-bold text-neon-purple">4.</span>
                <span>You'll receive regular updates as your project progresses.</span>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-neon-purple hover:bg-neon-purple2">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-neon-purple text-white hover:bg-neon-purple/20">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
