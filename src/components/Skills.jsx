import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, BrainCircuit, Rocket, Users } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      skills: ["C++", "Java", "JavaScript", "PHP", "Python"]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: ["HTML5", "CSS3", "Bootstrap", "React.js", "Next.js"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "JWT Authentication"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Postman", "Linux", "VS Code", "MongoDB Atlas", "Vercel", "Render"]
    },
    {
      title: "Core CS Fundamentals",
      icon: <BrainCircuit size={24} />,
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
    },
    {
      title: "Core Skills",
      icon: <Rocket size={24} />,
      skills: ["Full Stack Development", "API Integration", "Problem-Solving", "Responsive Web Design"]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} />,
      skills: ["Communication", "Team Collaboration", "Analytical Thinking", "Adaptability", "Leadership"]
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill} 
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
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
