
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return;
      
      const rect = avatarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Subtle movement effect
      const moveX = x * 0.01;
      const moveY = y * 0.01;
      
      avatarRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-neon-purple2/20 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Avatar */}
        <div ref={avatarRef} className="w-full md:w-2/5 flex justify-center animate-float">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple via-neon-purple2 to-neon-purple3 animate-pulse-glow"></div>
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=transparent&backgroundType=solid&face=variant01" 
              alt="Developer Avatar" 
              className="w-full h-full object-cover rounded-full p-1" 
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <p className="text-sm sm:text-base inline-block py-1 px-3 rounded-full glass-panel mb-4">
            <span className="text-neon-purple">✨</span> 
            <span className="ml-2">Welcome to my portfolio</span>
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text glow">DevName</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-pacifico text-gray-300 mb-6">Full Stack Developer</h2>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            I'm a developer passionate about AI, ML, and futuristic tech. I build experiences that live at the intersection of design and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-gradient-to-r from-neon-purple to-neon-purple3 hover:opacity-90 text-lg py-6 px-8">
              View Projects
            </Button>
            
            <Button variant="outline" className="border-neon-purple hover:bg-neon-purple/20 text-lg py-6 px-8 flex items-center gap-2">
              <span>Contact Me</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
          <div className="w-1.5 h-3 bg-neon-purple rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
