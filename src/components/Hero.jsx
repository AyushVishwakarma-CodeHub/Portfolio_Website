import React, { useState, useEffect } from 'react';
import { Mail, Code2, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact, FaJs, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiCplusplus, SiFirebase } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const techIcons = [
  { name: 'React', icon: <FaReact />, color: '#61dafb', angle: -75 },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'var(--next-color)', angle: -45, bg: 'var(--next-bg)', isCircle: true },
  { name: 'JavaScript', icon: <FaJs />, color: '#000000', angle: -15, bg: '#f7df1e', isSquare: true },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', angle: 15 },
  { name: 'Express.js', icon: <SiExpress />, color: 'var(--express-color)', angle: 45, bg: 'var(--express-bg)', isCircle: true },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', angle: 75 },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758f', angle: 105 },
  { name: 'Python', icon: <FaPython />, color: '#3776ab', angle: 135 },
  { name: 'Java', icon: <FaJava />, color: '#f89820', angle: 165 },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599c', angle: 195 },
  { name: 'GitHub', icon: <FaGithub />, color: 'var(--text-primary)', angle: 225 },
  { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', angle: 255 },
];

const TechEcosystem = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    let animationFrameId;
    const startTime = Date.now();
    const duration = 40000; // Elegant rotation: 40 seconds per full cycle

    const updateRotation = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      setRotation(progress * 360);
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const hoveredColor = hoveredIcon ? (hoveredIcon.bg || hoveredIcon.color) : 'transparent';
  const hoveredActive = hoveredIcon ? 1 : 0;

  return (
    <div className="tech-ecosystem-container">
      {/* Orbit Line SVG */}
      <svg className="orbit-line-svg" aria-hidden="true">
        <defs>
          <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Default Dashed Orbit Line */}
        <ellipse 
          cx="50%" 
          cy="50%" 
          rx="var(--orbit-rx)" 
          ry="var(--orbit-ry)" 
        />
        {/* Glowing Laser Light Trail Orbit */}
        <ellipse 
          className="orbit-laser-pulse"
          cx="50%" 
          cy="50%" 
          rx="var(--orbit-rx)" 
          ry="var(--orbit-ry)"
          pathLength="100"
        />
      </svg>

      {/* Orbital Tech Icons */}
      {techIcons.map((item, index) => {
        const currentAngle = item.angle + rotation;
        const alpha = (currentAngle * Math.PI) / 180;
        const xFactor = Math.cos(alpha);
        const yFactor = Math.sin(alpha);
        
        // Determine if icon is behind the photo card (yFactor < 0 represents upper half)
        const isBehind = yFactor < 0;
        
        // Calculate depth parameters based on mathematical projection
        const scale = isBehind
          ? 0.72 + 0.12 * (1 + yFactor) // scale 0.72 to 0.84
          : 0.96 + 0.14 * yFactor;     // scale 0.96 to 1.10
          
        const opacity = isBehind
          ? 0.45 + 0.2 * (1 + yFactor) // opacity 0.45 to 0.65
          : 0.85 + 0.15 * yFactor;     // opacity 0.85 to 1.0
          
        const blurVal = isBehind
          ? `blur(${1.5 * Math.abs(yFactor)}px)`
          : 'none';

        return (
          <div
            key={item.name}
            className="ecosystem-icon-wrapper"
            onMouseEnter={() => setHoveredIcon(item)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              transform: `translate(-50%, -50%) translate3d(calc(${xFactor} * var(--orbit-rx) + var(--mx, 0) * var(--parallax-offset)), calc(${yFactor} * var(--orbit-ry) + var(--my, 0) * var(--parallax-offset)), 0) scale(${scale})`,
              zIndex: isBehind ? 0 : 2,
              opacity: opacity,
              filter: blurVal,
              '--glow-color': item.bg || item.color,
              '--float-duration': `${6 + (index % 4) * 1.5}s`,
              '--float-delay': `${index * -0.8}s`,
              '--parallax-offset': isBehind ? '-15px' : '20px',
            }}
          >
            <div className="icon-glass-card-bobber">
              <div 
                className={`icon-glass-card ${item.bg ? 'has-bg' : 'no-bg'} ${item.isCircle ? 'is-circle' : ''} ${item.isSquare ? 'is-square' : ''}`}
                style={{
                  '--badge-bg': item.bg,
                  '--badge-color': item.color,
                  color: item.bg ? 'var(--badge-color)' : 'var(--glow-color)',
                }}
              >
                {item.icon}
                <span className="icon-tooltip">{item.name}</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Profile Photo Frame */}
      <div 
        className="glow-frame floating"
        style={{
          '--hover-glow-color': hoveredColor,
          '--hover-glow-active': hoveredActive,
        }}
      >
        <div className="image-card glass-panel">
          <img 
            src="/Profile.jpeg" 
            alt="Ayush Raj" 
            className="profile-img"
          />
          <div className="card-overlay"></div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const heroRef = React.useRef(null);
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

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frameId;
    const handleMouseMove = (e) => {
      if (frameId) cancelAnimationFrame(frameId);
      
      frameId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mx = (e.clientX - centerX) / (rect.width / 2);
        const my = (e.clientY - centerY) / (rect.height / 2);

        hero.style.setProperty('--mx', mx.toFixed(3));
        hero.style.setProperty('--my', my.toFixed(3));
      });
    };

    const handleMouseLeave = () => {
      if (frameId) cancelAnimationFrame(frameId);
      
      let currentMx = parseFloat(hero.style.getPropertyValue('--mx') || '0');
      let currentMy = parseFloat(hero.style.getPropertyValue('--my') || '0');
      
      const resetLoop = () => {
        currentMx *= 0.85;
        currentMy *= 0.85;
        
        if (Math.abs(currentMx) < 0.001 && Math.abs(currentMy) < 0.001) {
          hero.style.setProperty('--mx', '0');
          hero.style.setProperty('--my', '0');
        } else {
          hero.style.setProperty('--mx', currentMx.toFixed(3));
          hero.style.setProperty('--my', currentMy.toFixed(3));
          frameId = requestAnimationFrame(resetLoop);
        }
      };
      
      frameId = requestAnimationFrame(resetLoop);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
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
            <a href="https://github.com/AyushVishwakarma-CodeHub" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <FaGithub size={22} />
            </a>
            <a href="http://linkedin.com/in/ayushraj2908" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <FaLinkedin size={22} />
            </a>
            <a href="https://leetcode.com/u/AYUSH_VISHWAKARMA_/" target="_blank" rel="noopener noreferrer" className="social-icon leetcode">
              <Code2 size={22} />
            </a>
            <a href="https://wa.me/918340489386?text=Hi%20Ayush,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <FaWhatsapp size={22} />
            </a>
            <a href="mailto:ayushvishwakarmadto29@gmail.com" className="social-icon mail">
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
          <TechEcosystem />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
