// components/ScrollInView.tsx
"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ScrollInViewProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
}

export default function ScrollInView({
  children,
  direction = "up",
  delay = 0,
  duration = 0,
}: ScrollInViewProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // define initial position based on direction
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { x: -50, opacity: 0 };
      case "right":
        return { x: 50, opacity: 0 };
      case "up":
        return { y: 50, opacity: 0 };
      case "down":
        return { y: -50, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
