
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="gradient-card rounded-xl p-6 h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        isEven ? 'bg-sentinel-blue/10' : 'bg-sentinel-purple/10'
      }`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
      
      {/* Decorative element */}
      <div className="absolute -z-10 bottom-0 right-0 w-32 h-32 rounded-br-xl opacity-20 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
          <circle cx="96" cy="96" r="64" fill={isEven ? '#1EAEDB' : '#7E69AB'} fillOpacity="0.2" />
        </svg>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
