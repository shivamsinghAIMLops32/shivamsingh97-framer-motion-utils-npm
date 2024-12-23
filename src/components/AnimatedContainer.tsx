import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'scaleUp';
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  scaleUp: {
    hidden: { scale: 0 },
    visible: { scale: 1 }
  }
};

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  animation = 'fadeIn',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animations[animation]}
      {...props}
    >
      {children}
    </motion.div>
  );
};