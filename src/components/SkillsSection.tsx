
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  icon: string;
  category: string;
  level: number;
};

const skills: Skill[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend", level: 90 },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend", level: 85 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend", level: 90 },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend", level: 80 },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "Frontend", level: 85 },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend", level: 80 },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend", level: 75 },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Backend", level: 70 },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Backend", level: 75 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools", level: 85 },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Tools", level: 70 },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Tools", level: 65 },
];

const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const filteredSkills = activeCategory === "All" 
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple2/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text glow">Skills</span></h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            I specialize in these technologies to create modern, efficient, and scalable applications.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                activeCategory === category 
                  ? "bg-gradient-to-r from-neon-purple to-neon-purple3 text-white" 
                  : "glass-panel text-gray-300 hover:bg-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div 
                className={cn(
                  "glass-panel h-24 flex flex-col items-center justify-center p-4 transition-all duration-300 overflow-hidden",
                  hoveredSkill === skill.name 
                    ? "glow-box bg-neon-purple/20" 
                    : "hover:bg-white/10"
                )}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={cn(
                    "w-12 h-12 mb-2 transition-all duration-500",
                    hoveredSkill === skill.name ? "scale-0" : "scale-100"
                  )} 
                />
                <div 
                  className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-500",
                    hoveredSkill === skill.name ? "opacity-100" : ""
                  )}
                >
                  <span className="text-white font-medium">{skill.name}</span>
                  <div className="w-16 h-1.5 bg-gray-700 rounded-full mt-2">
                    <div 
                      className="h-full bg-gradient-to-r from-neon-purple to-neon-purple3 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
