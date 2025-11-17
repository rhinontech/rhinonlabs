'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollBeam: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Scroll → gradient reveal
  const gradientPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const background = useTransform(gradientPos, (pos) =>
  `linear-gradient(
    to bottom,


    /* Moving nebula streak */
    #f5e3cc calc(${pos}),         /* soft cream */
    #f2a265 calc(${pos} ),    /* orange */
    #4cd7ff calc(${pos}),   /* bright teal */
    rgba(0,0,0,0.4) calc(${pos} ),  /* fade back to black */

    /* Bottom is black again */
    rgba(0,0,0,0.4) 100%
  )`
);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "3px",
        height: "100%",
        borderRadius: "12px",
        background,
        
      }}
    />
  );
};

export default ScrollBeam;
