import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What roles are you currently looking for?",
      answer: "I am actively looking for Software Development Engineer (SDE) roles, Frontend/Full-Stack Developer positions, and Graduate Internships. I am open to both remote work and on-site opportunities!"
    },
    {
      question: "Tell me more about your two Patents! What are they?",
      answer: "I love exploring the intersection of hardware and software! My first patent is a 'Fabric-Integrated Micro-Capillary Haptic Interface for Wearable Tech', which makes smart garments more interactive. My second is an 'Intelligent Smart Automation Bag', integrating IoT sensors for advanced user convenience."
    },
    {
      question: "What is your primary tech stack?",
      answer: "I specialize in the MERN Stack (React, Node.js, Express, MongoDB) with Vite for fast, high-performance web apps. Additionally, I build cross-platform mobile apps using Flutter/Supabase and design AI/ML features using Python (FastAPI, TensorFlow)."
    },
    {
      question: "How do you approach building a new project?",
      answer: "I focus on solving real-world, high-impact problems (like Cafe queue times or RAG scam-detection). I start by planning the user experience, architecture, and database schemas. Then, I write clean, modular, and responsive code, keeping scalability and security in mind."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="section-subtitle">
          Got questions? I've got answers. Here are some quick facts about me.
        </p>

        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div 
                key={index}
                className={`faq-card glass-panel ${isOpen ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <ChevronDown className={`faq-arrow ${isOpen ? 'open' : ''}`} size={20} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-container"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
