// src/components/ui/ParallaxScroll.tsx
"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ParallaxScroll = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};