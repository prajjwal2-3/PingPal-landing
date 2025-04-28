
import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-sentinel-purple focus:ring-offset-2",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-sentinel-purple via-sentinel-blue to-sentinel-purple-light" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-sentinel-purple to-sentinel-blue px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl hover:bg-gradient-to-r hover:from-sentinel-purple-light hover:to-sentinel-blue-light transition-all">
          {children}
        </span>
      </motion.button>
    );
  }
);

GradientButton.displayName = "GradientButton";
