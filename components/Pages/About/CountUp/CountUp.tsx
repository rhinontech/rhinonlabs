"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export function CountUp({
  target = 100,
  duration = 1,
  className = "",
}) {
  const count = useMotionValue(1);

  // Round motion value for display
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    animate(count, target, {
      duration: duration,
      ease: "easeOut",
    });
  }, [target]);

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  );
}
