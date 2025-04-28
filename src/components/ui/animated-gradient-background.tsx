
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sentinel-purple-light/20 via-transparent to-sentinel-blue-light/20" />
      
      {/* Animated blobs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-sentinel-purple/10 blur-[100px] -z-10"
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full bg-sentinel-blue/10 blur-[100px] -z-10"
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYwNSIgZD0iTTM2IDM0aDR2MWgtNHoiLz48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvc3ZnPg==')] opacity-30"
        style={{ backgroundSize: '30px 30px' }}
      />
    </div>
  );
};

export default AnimatedGradientBackground;
