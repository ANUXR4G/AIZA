'use client'; 

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Only show cursor when mouse moves
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none bg-MainColor rounded-full z-50 mix-blend-difference"
      style={{
        width: 20,
        height: 20,
        opacity: isVisible ? 1 : 0
      }}
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        scale: isVisible ? 1 : 0.5
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        opacity: { duration: 0.2 }
      }}
    />
  );
};

export default CustomCursor;