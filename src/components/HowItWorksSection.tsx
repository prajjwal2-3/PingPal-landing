
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HowItWorksSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const steps = [
    {
      number: 1,
      title: "Add Your URL",
      description: "Paste the URL of your API, website, or service that you want to monitor.",
      color: "from-sentinel-purple to-sentinel-purple-light"
    },
    {
      number: 2,
      title: "Set Ping Interval",
      description: "Choose how frequently you want us to check your service: every 5, 10, or 15 minutes.",
      color: "from-sentinel-blue to-sentinel-blue-light"
    },
    {
      number: 3,
      title: "Get Notified Instantly",
      description: "If your service goes down, we'll send you an immediate email alert so you can take action.",
      color: "from-sentinel-purple to-sentinel-blue"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.5,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.3
      }
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sentinel-purple/5" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start monitoring your services in three simple steps
          </p>
        </motion.div>
        
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="w-full md:w-1/3">
                <div className="step-card">
                  <div className={`step-number bg-gradient-to-r ${step.color}`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 pt-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full z-0" style={{ height: "2px" }}>
            <svg width="100%" height="100%" className="absolute top-0 left-0">
              <motion.path
                d="M0,1 L100%,1"
                stroke="url(#linearGradient)"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
                variants={lineVariants}
              />
              <defs>
                <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7E69AB" />
                  <stop offset="100%" stopColor="#1EAEDB" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
