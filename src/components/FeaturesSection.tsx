
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import FeatureCard from './ui/feature-card';
import { Link2, Clock, Mail, ShieldCheck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Link2 className="w-6 h-6 text-sentinel-blue" />,
      title: "Easy URL Setup",
      description: "Simply paste your health check URL and we'll start monitoring it immediately. No complicated configuration needed."
    },
    {
      icon: <Clock className="w-6 h-6 text-sentinel-purple" />,
      title: "Flexible Ping Intervals",
      description: "Choose your preferred monitoring frequency: every 5, 10, or 15 minutes based on your needs."
    },
    {
      icon: <Mail className="w-6 h-6 text-sentinel-blue" />,
      title: "Instant Email Notifications",
      description: "Get alerted immediately when your service goes down. No delays, so you can respond quickly."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sentinel-purple" />,
      title: "Reliable Monitoring",
      description: "Our distributed monitoring system ensures accurate uptime tracking with minimal false positives."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features, <span className="text-gradient">Simple Interface</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to keep your services running smoothly, with none of the complexity.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
