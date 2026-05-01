"use client";

import { CSSProperties, forwardRef, ReactNode } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  amount?: number;
  once?: boolean;
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  amount?: number;
  once?: boolean;
}

const offsetByDirection = (direction: Direction, distance: number) => {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "none":
      return { x: 0, y: 0 };
    case "up":
    default:
      return { x: 0, y: distance };
  }
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 42,
  amount = 0.24,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion
    ? { x: 0, y: 0 }
    : offsetByDirection(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(12px)", ...offset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 38, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export const StaggerReveal = forwardRef<HTMLDivElement, StaggerRevealProps>(
  function StaggerReveal(
    {
      children,
      className,
      style,
      delay = 0,
      stagger = 0.12,
      amount = 0.18,
      once = true,
    },
    ref
  ) {
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
  }
);
