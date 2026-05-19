import React from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            My journey into the world of tech and building products.
          </p>
          
          <div className="about-content glass-panel">
            <div className="about-text">
              <p>
                I’m <strong>Ayush Raj</strong>, an MCA student and passionate software developer focused on building impactful digital products.
              </p>
              <p>
                With a strong academic foundation in computer applications and hands-on experience in full stack development, I specialize in creating scalable web applications using the MERN stack while continuously exploring AI, machine learning, and modern software engineering practices.
              </p>
              <p>
                I believe great software is built at the intersection of logic, user experience, and problem solving. Whether developing products like CampusBite or experimenting with intelligent applications, I enjoy turning ideas into polished, real-world solutions.
              </p>
              <p>
                Currently, I’m focused on sharpening my DSA, full stack engineering, and product-building skills to contribute to innovative startups and product-based companies.
              </p>
            </div>
            
            <div className="stats-container">
              <div className="stat-card">
                <h3 className="stat-number text-gradient">3+</h3>
                <p className="stat-label">Years of Coding</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number text-gradient">10+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number text-gradient">200+</h3>
                <p className="stat-label">DSA Problems</p>
              </div>
            </div>
          </div>

          {/* Interactive Dev Terminal */}
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
