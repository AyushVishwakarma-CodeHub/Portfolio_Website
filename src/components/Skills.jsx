import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, BrainCircuit, Rocket, Users } from 'lucide-react';
import { 
  SiCplusplus, SiJavascript, SiPhp, SiNextdotjs, SiExpress, 
  SiPostman, SiMysql, SiPostgresql, SiMongodb, SiFirebase, 
  SiVercel, SiRender, SiJsonwebtokens, SiLeetcode
} from 'react-icons/si';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaServer, 
  FaNetworkWired, FaLaptopCode, FaUserCheck, FaTerminal
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { MdSchema } from 'react-icons/md';
import { TbRoute } from 'react-icons/tb';
import './Skills.css';

const Skills = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // 1. Mouse coordinates relative to card top-left (for spotlight)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // 2. Normalized mouse coordinates from center (-1 to 1) for 3D tilt
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    // Calculate tilt angles (max tilt of 8 degrees)
    const maxTilt = 8;
    const tiltX = -((e.clientY - centerY) / (height / 2)) * maxTilt;
    const tiltY = ((e.clientX - centerX) / (width / 2)) * maxTilt;
    
    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      color: "#3B82F6",
      colorLight: "rgba(59, 130, 246, 0.1)",
      skills: [
        { name: "C++", icon: <SiCplusplus size={16} />, color: "#00599C" },
        { name: "Java", icon: <FaJava size={16} />, color: "#F89820" },
        { name: "JavaScript", icon: <SiJavascript size={16} />, color: "#F7DF1E" },
        { name: "PHP", icon: <SiPhp size={16} />, color: "#777BB4" },
        { name: "Python", icon: <FaPython size={16} />, color: "#3776AB" }
      ]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      color: "#06B6D4",
      colorLight: "rgba(6, 182, 212, 0.1)",
      skills: [
        { name: "HTML5", icon: <FaHtml5 size={16} />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt size={16} />, color: "#1572B6" },
        { name: "Bootstrap", icon: <FaBootstrap size={16} />, color: "#7952B3" },
        { name: "React.js", icon: <FaReact size={16} />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs size={16} />, color: "#ffffff" }
      ]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      color: "#10B981",
      colorLight: "rgba(16, 185, 129, 0.1)",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={16} />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress size={16} />, color: "#a1a1aa" },
        { name: "REST APIs", icon: <TbRoute size={16} />, color: "#00BFA5" },
        { name: "MVC Architecture", icon: <MdSchema size={16} />, color: "#3B82F6" },
        { name: "JWT Authentication", icon: <SiJsonwebtokens size={16} />, color: "#D63AFF" }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      color: "#6366F1",
      colorLight: "rgba(99, 102, 241, 0.1)",
      skills: [
        { name: "MySQL", icon: <SiMysql size={16} />, color: "#4479A1" },
        { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "#4169E1" },
        { name: "MongoDB", icon: <SiMongodb size={16} />, color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase size={16} />, color: "#FFCA28" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      color: "#F97316",
      colorLight: "rgba(249, 115, 22, 0.1)",
      skills: [
        { name: "Git", icon: <FaGitAlt size={16} />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub size={16} />, color: "#ffffff" },
        { name: "Postman", icon: <SiPostman size={16} />, color: "#FF6C37" },
        { name: "Linux", icon: <FaLinux size={16} />, color: "#FCC624" },
        { name: "VS Code", icon: <VscVscode size={16} />, color: "#007ACC" },
        { name: "MongoDB Atlas", icon: <SiMongodb size={16} />, color: "#47A248" },
        { name: "Vercel", icon: <SiVercel size={16} />, color: "#ffffff" },
        { name: "Render", icon: <SiRender size={16} />, color: "#46E3B7" }
      ]
    },
    {
      title: "Core CS Fundamentals",
      icon: <BrainCircuit size={24} />,
      color: "#EC4899",
      colorLight: "rgba(236, 72, 153, 0.1)",
      skills: [
        { name: "Data Structures & Algorithms", icon: <SiLeetcode size={16} />, color: "#FFA116" },
        { name: "OOP", icon: <Code2 size={16} />, color: "#EC4899" },
        { name: "DBMS", icon: <Database size={16} />, color: "#3B82F6" },
        { name: "Operating Systems", icon: <FaTerminal size={16} />, color: "#10B981" },
        { name: "Computer Networks", icon: <FaNetworkWired size={16} />, color: "#A855F7" }
      ]
    },
    {
      title: "Core Skills",
      icon: <Rocket size={24} />,
      color: "#F43F5E",
      colorLight: "rgba(244, 63, 94, 0.1)",
      skills: [
        { name: "Full Stack Development", icon: <FaLaptopCode size={16} />, color: "#3B82F6" },
        { name: "API Integration", icon: <Server size={16} />, color: "#10B981" },
        { name: "Problem-Solving", icon: <BrainCircuit size={16} />, color: "#F43F5E" },
        { name: "Responsive Web Design", icon: <Layout size={16} />, color: "#A855F7" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} />,
      color: "#84CC16",
      colorLight: "rgba(132, 204, 22, 0.1)",
      skills: [
        { name: "Communication", icon: <Users size={16} />, color: "#10B981" },
        { name: "Team Collaboration", icon: <Users size={16} />, color: "#3B82F6" },
        { name: "Analytical Thinking", icon: <BrainCircuit size={16} />, color: "#F59E0B" },
        { name: "Adaptability", icon: <Rocket size={16} />, color: "#EC4899" },
        { name: "Leadership", icon: <FaUserCheck size={16} />, color: "#A855F7" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="section-subtitle">
          A comprehensive toolkit and skill set for building scalable, high-performance applications.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="skill-category-card glass-panel"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                '--category-color': category.color,
                '--category-color-light': category.colorLight
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <svg className="border-beam-svg">
                <rect className="border-beam-rect" pathLength="1" />
              </svg>

              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill.name} 
                    className="skill-badge"
                    style={{ '--skill-color': skill.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.02 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="skill-badge-icon" style={{ color: skill.color }}>{skill.icon}</span>
                    <span className="skill-badge-name">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
