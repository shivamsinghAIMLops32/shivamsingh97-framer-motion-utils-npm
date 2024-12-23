// src/animations/fade.ts
var fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
var fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// src/animations/scale.ts
var scaleUp = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};
var scaleInHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

// src/hooks/useScrollAnimation.ts
import { useInView } from "framer-motion";
import { useRef } from "react";
var useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
};

// src/components/AnimatedContainer.tsx
import React from "react";
import { motion } from "framer-motion";
var animations = {
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
var AnimatedContainer = ({
  children,
  animation = "fadeIn",
  ...props
}) => {
  return /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: "hidden",
      animate: "visible",
      variants: animations[animation],
      ...props
    },
    children
  );
};
export {
  AnimatedContainer,
  fadeIn,
  fadeInUp,
  scaleInHover,
  scaleUp,
  useScrollAnimation
};
