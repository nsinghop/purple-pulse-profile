
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Download, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { href: "/", label: "Home" },
    { href: "/freelancing", label: "Services" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#certificates", label: "Certificates" },
    { href: "/#education", label: "Education" },
    { href: "/#contact", label: "Contact" }
  ];

  // Filter links based on current page
  const filteredLinks = navLinks.filter(link => {
    // If on homepage, show all hash links, but not the home link itself
    if (location.pathname === '/') {
      return link.href !== '/';
    }
    // If on freelancing page or other pages, don't show hash links
    return !link.href.includes('#');
  });

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
          <Link to="/">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-pacifico text-2xl gradient-text"
            >
              Dev<span className="text-white">Port</span>
            </motion.span>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {location.pathname === '/' ? (
            // On homepage, show hash links
            navLinks.filter(link => link.href.startsWith('#') || link.href === '/freelancing').map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.href.startsWith('#') ? (
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))
          ) : (
            // On other pages, show regular links
            <>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              {filteredLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </>
          )}
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
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/freelancing" 
                className="text-gray-300 hover:text-white transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              {location.pathname === '/' && navLinks.filter(link => link.href.startsWith('#')).map((link) => (
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
