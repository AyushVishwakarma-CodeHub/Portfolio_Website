import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full Stack", "AI & ML", "Mobile"];

  const projects = [
    {
      title: "CampusBite",
      description: "A comprehensive MERN stack food ordering platform tailored for university campuses. It solves the problem of long cafeteria queues by allowing students to pre-order food, track live order status, and make seamless payments.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TensorFlow", "Scikit-learn"],
      github: "https://github.com/AyushVishwakarma-CodeHub/CampusBite",
      live: "https://campusbitelive.vercel.app/",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
      category: "Full Stack"
    },
    {
      title: "NeuroLearn AI",
      description: "An advanced ML-integrated learning assistant leveraging Vision AI and Random Forest algorithms to optimize study memory retention and predict optimal review times.",
      tech: ["React", "Python", "FastAPI", "TensorFlow", "Tailwind"],
      github: "https://github.com/AyushVishwakarma-CodeHub/NeuroLearn-AI",
      live: "https://neurolearnai-portal.vercel.app/",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      category: "AI & ML"
    },
    {
      title: "Bhasha-Verify",
      description: "An AI-powered scam and fraud detection platform analyzing text, URLs, and audio call recordings. Built DPDP-Act compliant, it features a multi-vector heuristic engine combined with a custom RAG-pipeline using Google Gemini to compute real-time safety Trust Scores, backed by a secure compliance-oriented admin portal.",
      tech: ["React", "PHP", "MySQL", "Gemini AI", "RAG", "Twilio API", "OAuth 2.0"],
      github: "https://github.com/AyushVishwakarma-CodeHub/Bhasha-Verify",
      live: "https://bhasha-verify.vercel.app",
      image: "/bhasha-verify-preview.png",
      category: "AI & ML"
    },
    {
      title: "Gymora Mobile App",
      description: "A full-stack fitness tracking mobile application with real-time workout logging, trainer matching, and progress analytics.",
      tech: ["Flutter", "Spring Boot", "Supabase", "PostgreSQL"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      category: "Mobile"
    },
    {
      title: "MarketMind AI",
      description: "A smart marketing decision engine and revenue predictor built for SMBs. The platform processes raw customer CSV data, intelligently segments users based on purchasing behavior, and automatically generates targeted marketing campaigns. It features a custom forecasting algorithm that predicts exact financial returns and conversion rates before campaign execution.",
      tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Recharts"],
      github: "https://github.com/AyushVishwakarma-CodeHub/MarketMind-Ai",
      live: "https://market-mind-ai-black.vercel.app",
      image: "/marketmind_ai_preview.png",
      category: "Full Stack"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world problems solved through engineering and design.
        </p>

        {/* Filter Navigation */}
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.title}
                className="project-card glass-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link-btn" title="View Source">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.live} className="project-link-btn" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
