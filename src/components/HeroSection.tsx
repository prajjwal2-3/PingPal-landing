import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "./ui/gradient-button";
import AnimatedGradientBackground from "./ui/animated-gradient-background";
import server from "../../public/Server.svg";
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const serverPingAnimation = {
    initial: { scale: 1, opacity: 0.2 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.8, 0.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <AnimatedGradientBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div custom={0} variants={heroVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                Never Let Your <span className="text-gradient">Servers</span> Go
                Down Unnoticed 🚀
              </h1>
            </motion.div>

            <motion.div custom={1} variants={heroVariants}>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Monitor your websites and APIs with ease. Get instant alerts
                when your services go down.
              </p>
            </motion.div>

            <motion.div custom={2} variants={heroVariants}>
              <GradientButton>Start Monitoring Now</GradientButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Server illustration */}
              <motion.div
                className=""
                style={{
                  top: "50%",
                  left: "50%",
                }}
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src="./Server.svg" alt="server" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
