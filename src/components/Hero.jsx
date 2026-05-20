import React, { useState, useEffect } from 'react';
import { Mail, Code2, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const titles = [
    "Full Stack Developer",
    "MCA Student @ LPU",
    "MERN Stack Developer",
    "Problem Solver",
    "Software Engineer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Particle/Gradient Background Effect */}
      <div className="hero-bg-glow"></div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge glass-panel">
            <span className="pulse-dot"></span> Available for Hire
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="text-gradient">Ayush Raj</span>
          </h1>
          
          <div className="title-rotator">
            <AnimatePresence mode="wait">
              <motion.h2 
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="animated-title"
              >
                {titles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="hero-statement">
            "I build scalable digital products and solve real-world problems through code."
          </p>

          <div className="cta-group">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/Ayush_Raj_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn-secondary outline-only">
              Hire Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/AyushVishwakarma-CodeHub" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={22} />
            </a>
            <a href="http://linkedin.com/in/ayushraj2908" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={22} />
            </a>
            <a href="https://leetcode.com/u/AYUSH_VISHWAKARMA_/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Code2 size={22} />
            </a>
            <a href="mailto:ayushvishwakarmadto29@gmail.com" className="social-icon">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glow-frame floating">
            <div className="image-card glass-panel">
              {/* Real profile photo */}
              <img 
                src="/Profile.jpeg" 
                alt="Ayush Raj" 
                className="profile-img"
              />
              <div className="card-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
