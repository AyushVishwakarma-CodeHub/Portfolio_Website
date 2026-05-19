import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, X } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Microsoft Foundations of AI & Machine Learning",
      issuer: "Coursera",
      image: "/coursera_cert.png?v=3",
      link: "https://www.coursera.org/account/accomplishments/verify/87G5EI8UUDKN"
    },
    {
      title: "5-Day AI Agents Intensive Course with Google",
      issuer: "Kaggle",
      image: "/kaggle_cert.png?v=4",
      link: "https://www.kaggle.com/certification/badges/ayushraj2908/105"
    },
    {
      title: "Tech Blitz 2025 Hackathon",
      issuer: "Coding Ninjas LPU",
      image: "/hackathon_poster.jpg",
      certificateImage: "/hackathon_cert.png"
    }
  ];

  return (
    <section id="certifications" className="cert-section">
      <div className="container">
        <h2 className="section-title">
          Professional <span className="text-gradient">Certifications</span>
        </h2>
        <p className="section-subtitle">
          Validated expertise from industry leaders.
        </p>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-overlay">
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="verify-btn"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {cert.certificateImage && (
                    <button 
                      className="verify-btn"
                      onClick={() => setSelectedCert(cert.certificateImage)}
                    >
                      <span>View Certificate</span>
                      <Eye size={16} />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="cert-content">
                <div className="cert-issuer">
                  <Award size={16} />
                  <span>{cert.issuer}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              <img src={selectedCert} alt="Certificate" className="cert-modal-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
