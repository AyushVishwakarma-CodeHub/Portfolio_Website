import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if mouse is hovering over interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.project-card') ||
        target.closest('.stat-card') ||
        target.closest('.leetcode-card') ||
        target.closest('.timeline-card') ||
        target.closest('.faq-card') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkDevice);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <motion.div
        className="custom-cursor-glow"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.05)',
          borderColor: isHovered ? 'var(--accent-color)' : 'rgba(59, 130, 246, 0.3)'
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 28, mass: 0.6 }}
      />
      {/* Inner tiny dot */}
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
