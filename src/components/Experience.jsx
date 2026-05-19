import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Eye, X } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const experiences = [
    {
      role: "Web Development Intern",
      company: "SESA (National Government Organization)",
      location: "Jharkhand, India",
      period: "Apr 2024 - Jul 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      certificateImage: "/sesa_cert.jpg",
      responsibilities: [
        "Created 10+ responsive web pages using HTML, CSS, JavaScript, and React.js to improve accessibility and usability.",
        "Enhanced frontend layouts and implemented modern UI components across 10+ web pages, improving navigation consistency and user experience.",
        "Optimized React component rendering and reduced redundant API calls, improving frontend responsiveness and performance.",
        "Collaborated with cross-functional teams throughout the software development lifecycle to deliver features on time and maintain code quality."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="section-subtitle">
          Building impactful digital solutions in real-world environments.
        </p>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card glass-panel"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="exp-image-container">
                <img src={exp.image} alt={exp.company} className="exp-image" />
                <div className="exp-overlay">
                  {exp.certificateImage && (
                    <button 
                      className="view-cert-btn"
                      onClick={() => setSelectedCert(exp.certificateImage)}
                    >
                      <span>View Certificate</span>
                      <Eye size={16} />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="exp-content">
                <div className="exp-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                  
                  <div className="exp-meta">
                    <span className="exp-meta-item">
                      <Calendar size={16} /> {exp.period}
                    </span>
                    <span className="exp-meta-item">
                      <MapPin size={16} /> {exp.location}
                    </span>
                  </div>
                </div>
                
                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <span className="bullet">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="exp-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="exp-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="exp-modal-close"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              <img src={selectedCert} alt="Certificate of Internship" className="exp-modal-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
