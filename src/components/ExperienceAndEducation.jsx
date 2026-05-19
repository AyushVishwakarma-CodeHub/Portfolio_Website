import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import './ExperienceAndEducation.css';

const ExperienceAndEducation = () => {
  const experienceAndEducation = [
    {
      type: "education",
      degree: "Master of Computer Applications",
      institution: "Lovely Professional University, Jalandhar, Punjab",
      period: "2025 - Present",
      desc: "Specializing in advanced software engineering, system design, and full-stack development."
    },
    {
      type: "education",
      degree: "Bachelor of Science in Computer Applications",
      institution: "G.L.A College, Medininagar, Daltonganj, Jharkhand",
      period: "2021 - 2025",
      desc: "Built a strong foundation in programming, database management, and computer networks."
    },
    {
      type: "education",
      degree: "12th with Science",
      institution: "Elite Public School, Daltonganj, Jharkhand",
      period: "2018 - 2019",
      desc: "Focused on core sciences including physics, chemistry, and advanced mathematics."
    },
    {
      type: "education",
      degree: "10th",
      institution: "Bright Land School, Daltonganj, Jharkhand",
      period: "2017 - 2018",
      desc: "Completed secondary education with a strong foundational academic record."
    }
  ];

  const achievements = [
    {
      title: "2 Patents Filed (Under Gov. Review)",
      desc: [
        "Patent 1: A Fabric-Integrated Micro-Capillary Haptic Interface for Wearable Technology.",
        "Patent 2: An Intelligent and Smart Automation Bag."
      ],
      icon: <Award size={24} />
    },
    {
      title: "Hackathon Winner - Gear Up Season 4",
      desc: "Won a 36-hour innovation hackathon at LPU, developing a prototype for a decentralized academic credential verification system.",
      icon: <Award size={24} />
    },
    {
      title: "LeetCode Milestone",
      desc: "Consistently solved 150+ algorithmic problems, mastering Data Structures and Algorithms.",
      icon: <CheckCircle size={24} />
    }
  ];

  return (
    <section id="education" className="timeline-section">
      <div className="container">
        <div className="timeline-grid">
          {/* Education & Experience Column */}
          <div className="timeline-column">
            <h2 className="section-title text-left">
              My <span className="text-gradient">Education</span>
            </h2>
            <div className="timeline">
              {experienceAndEducation.map((item, index) => (
                <motion.div 
                   key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="timeline-icon">
                    {item.type === 'experience' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                  </div>
                  <div className="timeline-content glass-panel">
                    <span className="timeline-period">{item.period}</span>
                    <h3 className="timeline-title">{item.degree}</h3>
                    <h4 className="timeline-institution">{item.institution}</h4>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div className="timeline-column">
            <h2 className="section-title text-left">
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <div className="timeline">
              {achievements.map((item, index) => (
                <motion.div 
                   key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="timeline-icon achievement-icon">
                    {item.icon}
                  </div>
                  <div className="timeline-content glass-panel">
                    <h3 className="timeline-title">{item.title}</h3>
                    {Array.isArray(item.desc) ? (
                      <ul className="timeline-desc-list">
                        {item.desc.map((bullet, idx) => (
                          <li key={idx} className="timeline-desc-item">{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="timeline-desc">{item.desc}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
