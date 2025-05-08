
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Download, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4",
        scrolled 
          ? "glass-panel bg-neon-darker/80 backdrop-blur-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-pacifico text-2xl gradient-text"
          >
            Dev<span className="text-white">Port</span>
          </motion.span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex items-center gap-2 border-neon-purple hover:bg-neon-purple/20">
            <Github size={18} />
            <span>GitHub</span>
          </Button>
          <Button className="bg-gradient-to-r from-neon-purple to-neon-purple3 hover:opacity-90 flex items-center gap-2">
            <Download size={18} />
            <span>Resume</span>
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-neon-purple" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neon-darker/95 backdrop-blur-lg border-t border-white/10 mt-4"
          >
            <div className="container mx-auto py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex justify-center space-x-4">
                <Button variant="outline" size="sm" className="border-neon-purple hover:bg-neon-purple/20 flex items-center gap-2">
                  <Github size={16} />
                  <span>GitHub</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
