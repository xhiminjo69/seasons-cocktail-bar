"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

function getInitial(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: 50, opacity: 0 };
    case "down":
      return { y: -50, opacity: 0 };
    case "left":
      return { x: -50, opacity: 0 };
    case "right":
      return { x: 50, opacity: 0 };
    default:
      return { opacity: 0 };
  }
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.9,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        ease: [0.25, 0.1, 0, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
